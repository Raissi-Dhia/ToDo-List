$('#button').click(function () {
	var value = $('#text').val() ; 
	if (value === '') {
		return alert('Please enter a task !')
	} else {
	 $('#text').val('');	
	return	$('#list').append('<div id="DIV"><li>' + value + '</li></div>');
}
});
//This is for the enter key press
$('#text').keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                 var value = $('#text').val() ; 
	if (value === '') {
		return alert('Please enter a task !')
	} else {
	 $('#text').val('');	
	return	$('#list').append('<div id="DIV"><li>' + value + '</li></div>');
		}
	}
 event.stopPropagation();
});