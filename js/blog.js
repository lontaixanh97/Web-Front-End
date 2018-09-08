
$(function(){
	$('.icon1').click(function(){
	var z=0;
	for(var i=1;i<=3;i++){
		if($('.image'+i).hasClass('show')){
			$('.image'+i).removeClass('show');
			if (i===1)
			{
				$('.image3').addClass('show');
				break;
			}
			else
			{
				var z=i-1;
				$('.image'+z).addClass('show');
			}
		}	
	}
	});

	$('.icon2').click(function(){
	for(var i=1;i<=3;i++){
		if($('.image'+i).hasClass('show')){
			$('.image'+i).removeClass('show');
			if(i==3){
				$('.image1').addClass('show');
			}else{
				var z=i+1;
				$('.image'+z).addClass('show');
				break;
			}
		}
	}
	})
})
$(document).on('click','.read button',function(){
	$('.read').removeClass('show');
	$('.read-infor').addClass('show');
})
$(document).ready(function(event) {
    $('form[name=comment]').submit(function(event){
        event.preventDefault();
    });
});
var a=1;
$(document).on('click','#button-cmt',function(){
	var x1=$('#yourName').val();
	var x2=$('#yourMail').val();
	var x3=$('#yourMessege').val();
	if(x1!='' && x2!='' && x3!=''){
		$('#box-comment').append("<div class='row' style='margin: 30px'><div class='col-xs-2' style='text-align: right;'><img src='../images/ms.jpg' class='img-circle' width='75px' height='75px'></div><div class='col-xs-10'><span>"+x1+"</span><span style='float: right;'>Vừa xong <span style='color: #f03c0b'>Reply</span></span><hr>"+x3+"</div></div>");
		$('#number-comment').html("("+a+")");
		$('#numbers-comment').html(""+a+"");
		a++;
	}
	
})