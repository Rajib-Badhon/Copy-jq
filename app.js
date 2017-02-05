$(document).ready(function(){
	$(".btnName").click(function(){
		$(".btnNmae").prop('disabled', true);
		var name=$(".name").text();
		$("#name").val(name);
	});
	$(".btnAge").click(function(){
		$(".btnAge").prop('disabled', true);
		var age=$(".age").text();
		$("#age").val(age);
	});
	$(".btnGender").click(function(){
		$(".btnGender").prop('disabled', true);
		var gender=$(".gender").text();
		$("#gender").val(gender);
	});
	$(".btnEmail").click(function(){
		$(".btnEmail").prop('disabled', true);
		var email=$(".email").text();
		$("#email").val(email);
	});
	$(".btnPhone").click(function(){
		$(".btnPhone").prop('disabled', true);
		var phone=$(".phone").text();
		$("#phone").val(phone);
	});
	$(".btnAll").click(function{
		$("btnAll").prop('disabled', true);
		var name=$(".name").text();
		$("#name").val(name);

		var age=$(".age").text();
		$("#age").val(age);

		var gender=$(".gender").text();
		$("#gender").val(gender);

		var email=$(".email").text();
		$("#email").val(email);

		var phone=(".phone").text();
		$("#phone").val(phone);
	});

});