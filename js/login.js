$(function() {
	$(".big-button").click(function() {
		if($(this).hasClass("clickme")) {
			location.href = "success.html";
		}else{
			return false;
		}
	});
});