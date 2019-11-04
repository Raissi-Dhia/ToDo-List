$('#button').click(function () {
	var value = $('#text').val() ; 
	console.log(value)
	if (value === '') {
		return alert('Please enter a task !')
	} else {
	return 	$('#list').append('<div id="DIV"><li>' + value + '</li></div>');
}
});
	// .animate({
 //    opacity: 0.25,
 //    left: "+=50",
 //    height: "toggle"
 //  }, 5000, function() {
 //    // Animation complete.
 //  });
