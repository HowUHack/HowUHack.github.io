/*global $, alert, console*/

$('#submit').click(function (e) {
	'use strict';
	e.preventDefault();
	var return_name = $('#email-name').val || "No Name Given",
		return_address = $('#email-return').val || null,
		subject = "HUHacks! " + $('#email-subject').val || "HUHacks!",
		email_body = $('#email-body').val || null;
	
	if (return_address === null) {
		alert('Must include a return address!');
	} else {
		if (email_body === null) {
			alert("Please don't send an empty email!");
		} else {
			$.ajax({
				type: 'POST',
				url: 'https://mandrillapp.com/api/1.0/messages/send.json',
				data: {
					'key': "******************",
					'message': {
						'from_email': return_address,
						'to': [
							{
								'email': 'rachel.lomax@bison.howard.edu',
								'name': return_name,
								'type': 'to'
							}
						],
						'autotext': 'true',
						'subject': subject,
						'html': email_body
					}
				}
			}).done(function (response) {
				console.log(response); // if you're into that sorta thing
			});
		
		}
	}
});