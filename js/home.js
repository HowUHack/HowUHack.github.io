/*global console, $*/

$(document).ready(function () {
	'use strict';
	$(':button').on('click', function () {
		var link = $(this).attr("id");
		window.location.href = link + '/index.html';
	});
});