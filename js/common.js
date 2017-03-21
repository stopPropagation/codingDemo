$(function() {
	updateSize();
	
	$(window).resize(function() {
		updateSize();
	});

	$(".innerbox").focus(function() {
		$(this).parent().css("border", "1px solid #499DD6");
	}).blur(function() {
		$(this).parent().css("border", "1px solid #E5E5E5");
	});
	$(".innerbox").keyup(function() {
		checkBtn();
	});
	$(".innerbox").mouseover(function() {
		checkBtn();
	});
});

function updateSize() {
	var w = $(window).width();
	var h = $(window).height();
	if(w < 860) {
		$(".code-mart").hide();
	} else {
		$(".code-mart").show();
	};
	if(w < 730) {
		$(".nav").hide();
	} else {
		$(".nav").show();
	};
	//更改容器高度
	var top = $("#head-menu").height();
	tempH = h - top - 1;
	$("#main-con,#main-one,#main-two,#main-three").height(tempH);
};

function checkBtn() {
	var bl = true;
	$(".innerbox").each(function() {
		if($(this).val() == "") {
			bl = false;
		}
	});
	if(bl) {
		$(".big-button").css("opacity", "1");
		$(".big-button").addClass("clickme");
	} else {
		$(".big-button").css("opacity", ".5");
		$(".big-button").removeClass("clickme");
	}
}