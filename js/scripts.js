$(document).ready(function() {
	$('form#survey').submit(function(event) {
		var nameInput = $("input#name").val();
		var foodSelect = $("select#food").val();
		var musicSelect = $("select#music").val();
		var transportationSelect = $("select#transportation").val();

		$('.name').text(nameInput);
		$('.food').text(foodSelect);
		$('.music').text(musicSelect);
		$('.transportation').text(transportationSelect);

		$('#results').show();

		event.preventDefault();
	});
});