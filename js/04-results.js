 var checkMail=0;
 function RegexEmail(emailInputBox) {
		 	console.log('1');
			var array2 = document.getElementById('emailA');
			var array1 = document.getElementById('email');
		    var emailStr = emailInputBox; 
		    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		    var isvalid = emailRegexStr.test(emailStr); 		    
		    if (!isvalid) {
		        array2.innerHTML = "Email không đúng!";
		        emailInputBox.focus;
		        console.log('test');
		        checkMail=1;
		        // array1.className += ' has-error';
		    } else {
		        array2.innerHTML = "";
		        emailInputBox.focus;
		        checkMail=0;    
		    }
    
}
$(function(){
	$('#buy-tickets3').click(function(){
		var em = $('#email').val();
		console.log(em);
		if(em != ""){
			RegexEmail(em);
		}
	})
})
$(function(){
	$('.box-list-tickets').mouseenter(function(){
		$(this).find('button').show();
	})
	$('.box-list-tickets').mouseleave(function(){
		$(this).find('button').hide();
	})
	$('.box-list-tickets').find('button').click(function(){
			$('.step2').addClass('show');
			$('.step1').removeClass('show');
			$('.panel-menu2').addClass('show');
			$('.panel-menu1').removeClass('show');
		});

	var i=2;var numberBox=1;
	$(".add").click(function(){
    $(".append").append("<div class='box-passenger col-xs-12'><div class='title-box-passenger '><div class='col-xs-6 left'><i class='fa fa-minus-square-o minus show' aria-hidden='true' data-toggle='collapse' data-target='#form"+i+"'></i><i class='fa fa-plus-square-o plus' aria-hidden='true' data-toggle='collapse' data-target='#form"+i+"'></i>Passenger "+i+"</div><div class='col-xs-6 right'>Remove<i class='fa fa-times remove' aria-hidden='true' ></i></div></div><div id='form"+i+"' class='collapse in' data-number='"+i+"'><form action='' ><div class='form-passenger'><div class='col-xs-12 col-sm-4 form-group'><label  class='control-label' for='firstName"+i+"'>First name</label><input type='text' name='' class='form-control' id='firstName"+i+"'></div><div class='col-xs-12 col-sm-4 form-group'><label class='control-label' for='lastName"+i+"'>Last name</label><input type='text' name='' class='form-control' id='lastName"+i+"'></div><div class='col-xs-12 col-sm-4 form-group'><label  class='control-label' for='age"+i+"'>Age</label><select class='form-control' id='age"+i+"'><option></option><option>Kid</option><option>Adult</option></select></div><div class='col-xs-12'><div class='checkbox'><label style='font-size: 1.3em;padding-left: 0;margin-top: 20px;'><input type='checkbox' value='' checked><span class='cr'><i class='cr-icon fa fa-check'></i></span><span >Reduced mobility</span></label></div></div></div><div class='form-passenger'><div class='col-xs-12 col-sm-4 form-group'><label class='control-label' for='documentType"+i+"'>Document Type</label><select class='form-control' id='documentType"+i+"'><option></option><option>Passport</option><option>ID Card</option></select></div><div class='col-xs-12 col-sm-4 form-group'><label class='control-label' for='documentNumber"+i+"'>Document number</label><input type='text' name='' class='form-control' id='documentNumber"+i+"'></div><div class='col-xs-12 col-sm-4 form-group'><label class='control-label' for='citizentship"+i+"'>Citizentship</label><select class='form-control' id='citizentship"+i+"'><option></option><option>United Kingdom</option><option>Vietnam</option><option>USA</option></select></div></div><div class='form-passenger'><div class='col-xs-12 col-sm-4 form-group'><label  class='control-label' for='addBaggage'>Additional Baggage</label><select class='form-control' id='addBaggage"+i+"'><option></option><option>1 Excess</option><option>2 Excess</option><option>3 Excess</option></select></div><div class='col-xs-12 col-sm-4 form-group'><label class='control-label' for='animals"+i+"'>Animals</label><select class='form-control' id='animals"+i+"'><option></option><option>0 Animal</option><option>1 Animal</option><option>2 Animals</option><option>3 Animals</option></select></div><div class='col-xs-12 col-sm-4 form-group'><label class='control-label' for='equipment"+i+"'>Equipment</label><select class='form-control' id='equipment"+i+"'><option></option><option>0 Equipment</option><option>1 Equipment</option><option>2 Equipments</option><option>3 Equipments</option></select></div></div><div class='next-passenger row'><div class='col-xs-6 left"+i+"'></div><div class='col-xs-6 right'><button type='button' class='btn btn-lg btn-default' data-id='"+i+"'>Next passenger</button></div></div></form></div></div>");
	i++;numberBox++;
	})
	

	$(document).on("click",".minus",function(){
		$(this).next().addClass('show');
		$(this).removeClass('show');
	})
		$(document).on("click",".plus",function(){
		$(this).prev().addClass('show');
		$(this).removeClass('show');
	})
	$('.next-passenger .right button').click(function(){
		
	})
	var check=[];
	var checkNextPassenger = 0;
	$(document).on('click','.next-passenger .right button',function(){
		checkNextPassenger=1;
		var x = $(this).data('id');
		var lastName=0,firstName=0,documentNumber=0,age=0,documentType=0,citizentship=0,
		addBaggage=0,animals=0,equipment=0;
		if($('#lastName'+x).val()==""){
			$('#lastName'+x).parent().addClass('has-error');
			lastName=1;
		}
		else{
			$('#lastName'+x).parent().removeClass('has-error');
			$('#lastName'+x).parent().addClass('has-success');
		}
		if($('#firstName'+x).val()==""){
			$('#firstName'+x).parent().addClass('has-error');
			firstName=1;
		}
		else{
			$('#firstName'+x).parent().removeClass('has-error');
			$('#firstName'+x).parent().addClass('has-success');
		}
		if($('#documentNumber'+x).val()==""){
			$('#documentNumber'+x).parent().addClass('has-error');
			documentNumber=1;
		}
		else{
			$('#documentNumber'+x).parent().removeClass('has-error');
			$('#documentNumber'+x).parent().addClass('has-success');
		}
		

		if($('#age'+x).val()==""){
			$('#age'+x).parent().addClass('has-error');
			age=1;
		}
		else{
			$('#age'+x).parent().removeClass('has-error');
			$('#age'+x).parent().addClass('has-success');
		}

		if($('#documentType'+x).val()==""){
			$('#documentType'+x).parent().addClass('has-error');
			documentType=1;
		}
		else{
			$('#documentType'+x).parent().removeClass('has-error');
			$('#documentType'+x).parent().addClass('has-success');
		}

		if($('#citizentship'+x).val()==""){
			$('#citizentship'+x).parent().addClass('has-error');
			citizentship=1;
		}
		else{
			$('#citizentship'+x).parent().removeClass('has-error');
			$('#citizentship'+x).parent().addClass('has-success');
		}

		if($('#addBaggage'+x).val()==""){
			$('#addBaggage'+x).parent().addClass('has-error');
			addBaggage=1;
		}
		else{
			$('#addBaggage'+x).parent().removeClass('has-error');
			$('#addBaggage'+x).parent().addClass('has-success');
		}

		if($('#animals'+x).val()==""){
			$('#animals'+x).parent().addClass('has-error');
			animals=1;
		}
		else{
			$('#animals'+x).parent().removeClass('has-error');
			$('#animals'+x).parent().addClass('has-success');
		}

		if($('#equipment'+x).val()==""){
			$('#equipment'+x).parent().addClass('has-error');
			equipment=1;
		}
		else{
			$('#equipment'+x).parent().removeClass('has-error');
			$('#equipment'+x).parent().addClass('has-success');
		}

		if(firstName==0 && lastName==0 && documentNumber==0 && age==0 && animals==0 && equipment==0 && documentType==0 && addBaggage==0 && citizentship==0){
			$('.next-passenger .left'+x).html("<img src='../images/done.png' height='40px' width='40px'><span style='color: #3c763d'>Done</span>");
			check[x]="done";
			$('#form'+x).css("background","white");
		}
		else{
			$('.next-passenger .left'+x).html("<img src='../images/error.png' height='40px' width='40px'><span style='color: red'>Some field are filled in incorrectly</span>");
			check[x]="error";
		}
	})
	$(document).on("click",".remove",function(){
		$(this).parents('.box-passenger').remove();
		numberBox--;
		var d=$(this).parents('.box-passenger').children('.collapse').data('number');
		check[d]="done";
	})
	var checkStep2=0;var checkNumberBox=1;
	$(document).on('click','#buy-tickets',function(){
		for(var j=0;j<=check.length;j++){
			if(check[j]=='error'){
				$('#form'+j).css("background","#ffe5e5");
				checkStep2=1;
				console.log(' i='+j);
			}
		}
		if (checkStep2==0 && checkNextPassenger==1) {
			$('.step3').addClass('show');
			$('.step2').removeClass('show');
			$('.panel-menu3').addClass('show');
			$('.panel-menu2').removeClass('show');
		}
		checkStep2=0;
	})
	$(document).on('click','#checkStep3',function(){
		$('#checkStep3').prop('checked', true);
		console.log('test');
	})
	$(document).on('click','#buy-tickets3',function(){
		var z=[];
		if($('#lastName').val()==""){
			$('#lastName').parent().addClass('has-error');
			// lastName=1;
			z[0]=0;
		}
		else{
			$('#lastName').parent().removeClass('has-error');
			$('#lastName').parent().addClass('has-success');
			z[0]=1;
		}
		if($('#firstName').val()==""){
			$('#firstName').parent().addClass('has-error');
			// firstName=1;
			z[1]=0;
		}
		else{
			$('#firstName').parent().removeClass('has-error');
			$('#firstName').parent().addClass('has-success');
			z[1]=1;
		}
		if($('#documentNumber').val()==""){
			$('#documentNumber').parent().addClass('has-error');
			// documentNumber=1;
			z[2]=0;
		}
		else{
			$('#documentNumber').parent().removeClass('has-error');
			$('#documentNumber').parent().addClass('has-success');
			z[2]=1;
		}
		if($('#documentType').val()==""){
			$('#documentType').parent().addClass('has-error');
			// documentType=1;
			z[3]=0;
		}
		else{
			$('#documentType').parent().removeClass('has-error');
			$('#documentType').parent().addClass('has-success');
			z[3]=1;
		}

		if($('#citizentship').val()==""){
			$('#citizentship').parent().addClass('has-error');
			// citizentship=1;
			z[4]=0;
		}
		else{
			$('#citizentship').parent().removeClass('has-error');
			$('#citizentship').parent().addClass('has-success');
			z[4]=1;
		}
		if($('#birthDatebirthDate').val()==""){
			$('#birthDatebirthDate').parent().addClass('has-error');
			z[5]=0;
		}
		else{
			$('#birthDatebirthDate').parent().removeClass('has-error');
			$('#birthDatebirthDate').parent().addClass('has-success');
			z[5]=1;
		}
		if($('#email').val()=="" || checkMail==1){
			$('#email').parent().addClass('has-error');
			z[6]=0;
		}
		else{
			$('#email').parent().removeClass('has-error');
			$('#email').parent().addClass('has-success');
			z[6]=1;
		}
		if($('#cardNumber').val()==""){
			$('#cardNumber').parent().addClass('has-error');
			z[7]=0;
		}
		else{
			$('#cardNumber').parent().removeClass('has-error');
			$('#cardNumber').parent().addClass('has-success');
			z[7]=1;
		}
		if($('#month').val()==""){
			$('#month').parent().addClass('has-error');
			z[8]=0;
		}
		else{
			$('#month').parent().removeClass('has-error');
			$('#month').parent().addClass('has-success');
			z[8]=1;
		}
		if($('#year').val()==""){
			$('#year').parent().addClass('has-error');
			z[9]=0;
		}
		else{
			$('#year').parent().removeClass('has-error');
			$('#year').parent().addClass('has-success');
			z[9]=1;
		}
		if($('#cvv').val()==""){
			$('#cvv').parent().addClass('has-error');
			z[10]=0;
		}
		else{
			$('#cvv').parent().removeClass('has-error');
			$('#cvv').parent().addClass('has-success');
			z[10]=1;
		}
		if($('#cardHolded').val()==""){
			$('#cardHolded').parent().addClass('has-error');
			z[11]=0;
		}
		else{
			$('#cardHolded').parent().removeClass('has-error');
			$('#cardHolded').parent().addClass('has-success');
			z[11]=1;
		}
		var a=0;
		for(var j=0;j<11;j++){
			if(z[j]==0){
				a=1
			}
		}
		if(a==0 && checkMail==0 && $('#checkStep3').prop('checked')){
			$('.step4').addClass('show');
			$('.step3').removeClass('show');
			$('.panel-menu4').addClass('show');
			$('.panel-menu3').removeClass('show');
		}
	})
})


