$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
$(function(){
	$("#refresh").click(function(){
		var div1=$('#div1');
		var div2=$('#div2');
		var tdiv1=div1.clone();
		var tdiv2=div2.clone();
		div1.replaceWith(tdiv2);
	    div2.replaceWith(tdiv1);
	    console.log('test');
	})
})
