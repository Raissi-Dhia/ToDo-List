$('#button').click(function () {
	var value = $('#text').val() ; 
	if (value === '') {
		return alert('Please enter a task !')
	} else {
	 $('#text').val('');	
	// return	$('#list').append('<div id="DIV"><li>' + value + '</li></div>');
return	$('#list').append('<br>'+'<li id="LISTA">' + value + '</li>');
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
	// return	$('#list').append('<div id="DIV"><li>' + value + '</li></div>');
		return	$('#list').append('<li id="LISTA">' + value + '</li>');
		}
	}
 event.stopPropagation();
});