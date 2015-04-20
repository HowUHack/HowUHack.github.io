/*global console, $*/

$(document).ready(function () {
	'use strict';
	$(':button').on('click', function () {
		var link = $(this).attr("id");
		console.log(link);
		window.location.href = link + '/index.html';
	});
});