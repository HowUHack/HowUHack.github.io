/*global $, console, alert*/

var SPONSOR_PERKS = [];

function getText(inner) {
	'use strict';
	switch (inner) {
	case 'Hardware':
		return "Bring your own hardware if you have something you'd want to " +
				"see people hacking on!";
	case 'Send Mentors':
		return "Send your employees straight there for a chance to mentor " +
				"students interested in what you have to offer!";
	case 'Sponsor Table':
		return "We'll give you a table to sit at and interract with students" +
				" during the sponsor fair!";
	case 'Demo':
		return "This is your time to let your presence be known during our " +
				"opening ceremony!";
	case 'Side Event':
		return "Want to set up a panel during the event? Host a round or " +
				"four of your favorite game to take a break from a long " +
				"night of hacking? Well here's your chance!";
	case 'Lounge':
		return "Want a nice, quiet place to sit back and relax? Or even just " +
				"chill with your fellow mentors? We've got just the place for you!";
	case 'Present Prize':
		return "Want to be the one who sees first-hand the gleam of " +
				"excitement in the eyes of the winning team members as you " +
				"present them with an award for all of the hard work they put in?";
	case 'Key Note':
		return "Say something during our key note!";
	case 'Distribute Swag':
		return "Bring some goodies to give out to all the hackers! They'll " +
				"love you forever, and think of you every time they see it!";
	case 'Resumes':
		return "Get access to our database of resumes for both the people who" +
				" attend, and even those who don't!";
	case 'Recruiters':
		return "Since you'll be getting resumes for all who attend long " +
				"before the event, why not use this to your advantage, and " +
				"conduct some onsite interviews? Quiet spaces will be available!";
	case 'Logos':
		return "Your name...EVERYWHERE! On the shirts! The banners! " +
				"The website! All over the place!";
	case 'Branded Prize':
		return "Do you want to bring your own prize to give away at the end? " +
				"Insentivize the participants to integrate your products into" +
				" their projects! Or even reward them for the best hack that " +
				"aligns with your company's values!";
	case 'Swag Bags':
		return "Swag of your choosing will be placed in the giveaway bags " +
				"everyone will receive at registration!";
	case 'API Directory':
		return "Have all of your hackable APIs put in one easily accessible " +
				"place!";
	case 'Program Mention':
		return "Personalized shout out to you and your team in the event " +
				"programs!";
	default:
		return null;
	}
}

$(document).ready(function () {
	'use strict';
	var id, text, i,
		side_cols = $('.side-col'),
		new_div;
	
	for (i in side_cols) {
		if (side_cols.hasOwnProperty(i)) {
			id = ($('.side-col')[i]).innerHTML;
			text = getText(id);
			
			if (text !== null) {
				$(this).attr('title', text);
				console.log(id);
				new_div = "<div id='" + id.trim() + "'>" +
					"<h3 id='perk-name'>" + id + "</h3><p id='perk-text'>" +
					"&nbsp;&nbsp;&nbsp;&nbsp;" + text + "</p></div>";
				$('#tier-info').append(new_div);
				console.log($('#tier-info'));
			}
		}
	}
});