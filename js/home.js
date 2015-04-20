/*global console, $*/

$(document).ready(function () {
	'use strict';
	$(':button').on('click', function () {
		var link = $(this).attr("id") + '/index.html';
		console.log(link);
		window.location.href = link;
	});
});