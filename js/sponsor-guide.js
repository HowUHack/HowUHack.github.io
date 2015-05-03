/*global $, console, alert*/

var SPONSOR_PERKS = [];

function getText(innerText) {
	'use strict';
	switch (innerText) {
	case 'Hardware':
		return "Bring your own hardware if you have something you'd want to " +
				"see people hacking on!";
	case 'Send Mentors':
		return "Send your employees straight to us for a chance to mentor " +
				"students interested in what you have to offer!";
	case 'Sponsor Table':
		return "We'll give you a table to sit at and interract with students" +
				" during the sponsor fair!";
	case 'Demo':
		return "This is your time to let your presence be known during our " +
				"opening ceremony!";
	case 'Side Event':
		return "Want to set up a panel during the event? How about hosting a round or " +
				"four of your favorite game to take a break from a long " +
				"night of hacking? This is your chance!";
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

function makeID(innerText) {
	'use strict';
	var i, newID = '';
	for (i = 0; i < innerText.length; i += 1) {
		if (innerText[i] === ' ') {
			newID += '-';
		} else {
			newID += innerText[i];
		}
	}
	return newID;
}

function makeExplantion(id, title, text) {
	'use strict';
	return "<div class='exp' id='" + id + "'>"
		+ "<h3 id='perk-name'>" + title + "</h3>"
		+ "<p id='perk-text'>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + text + "</p>"
		+ "</div>";
}

function addScrollButt(that) {
	'use strict';
	var scrollButt = "<div id='scroll-butt'> + </div>";
	that.append(scrollButt);
}

$(document).ready(function () {
	'use strict';
	var id, title, text, i,
		side_cols = $('.side-col'),
		explanation;
	
	for (i in side_cols) {
		if (side_cols.hasOwnProperty(i)) {
			title = ($('.side-col')[i]).innerHTML;
			text = getText(title);
			
			if (text !== null) {
				id = makeID(title);
				$(this).attr('id', id);
				
				explanation = makeExplantion(id, title, text);
				$('#tier-info').append(explanation);
			}
		}
	}
	
	$('.side-col').click(function () {
		var id = makeID($(this).context.innerHTML),
			$target = $('.exp #' + id);
		console.log($target.position());
	});
});