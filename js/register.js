$(function() {
	$(".big-button").click(function() {
		if($(this).hasClass("clickme")) {
			location.href = "resuccess.html";
		}else{
			return false;
		}
	});
});