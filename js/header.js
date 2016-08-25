$(document).ready(function () {
	var baseurl = '/JalanBrothers';

	$('button#contactbtn').click(function () {
		window.location = baseurl + '/contact/';
	});

	var pathname = window.location.pathname;
	if (pathname === baseurl + '/contact/') {
		$('#contactbtn').addClass('linkbtnnow');
	}
});