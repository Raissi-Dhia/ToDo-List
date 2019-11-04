$('#button').click(function () {
	var value = $('#text').val() ; 
	console.log(value)
	if (value === '') {
		return alert('Please enter a task !')
	} else {
	 $('#text').val('');	
	return	$('#list').append('<div id="DIV"><li>' + value + '</li></div>');
}
});
