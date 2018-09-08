$(document).ready(function(event) {
    $('form[name=form1]').submit(function(event){
        event.preventDefault();
        console.log('test');
    })
})
$(function(){
	 $('#s').click(function(){
    	var x = $('#password').val();
    	// alert(x)
    	var y = $('#confirmPassword').val();
		if( x != y  ){
			$('#f').append('Password valid!');
			console.log('test1');
		}
		else{
			$('#f').html('');
		}
	})
})

	

