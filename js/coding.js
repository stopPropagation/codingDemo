var tempH = 0;
$(function() {
	updateSize();
	$(window).resize(function() {
		updateSize();
	});
	$(".left-circle").hover(function() {
		if($(this).attr("isC") == 1)
			return;
		$(this).addClass("left-circle-select");
		$(this).children().show();
	}, function() {
		if($(this).attr("isC") == 1)
			return;
		$(this).removeClass("left-circle-select");
		$(this).children().hide();
	}).click(function() {
		$(".left-circle").removeClass("left-circle-select");
		$(".left-circle").children().hide();
		$(".left-circle").attr("isC", 0);
		$(this).addClass("left-circle-select");
		$(this).children().show();
		$(this).attr("isC", 1);
		var num = $(this).attr("num");
		if(num == 2) {
			$("#bottomcir").hide();
		} else {
			$("#bottomcir").show();
		};
		var topS = tempH * num + "px";
		$("#mainCon").css("margin-top", "-" + topS);
	});
	$(".left-circle").eq(0).click();

	//滚动监听
	$("#main-con")[0].onmousewheel = function(e) {
		e = e || window.event;
		//var t = $("#main-con").scrollTop();
		if(e.wheelDelta) { //IE/Opera/Chrome
			if((-e.wheelDelta) > 0) { //down
				changeMain(true);
			} else { //up
				changeMain(false);
			}
		} else if(e.detail) { //Firefox
			if(e.detail > 0) { // down
				changeMain(true);
			} else { //up
				changeMain(false);
			}
		}
	};

	//图片切换
	$(".intro").hover(function() {
		var imgWay = $(this).attr("imageWay");
		if(imgWay != "img/screen_git.png") {
			$(".leftpic").eq(1).children().attr("src", imgWay);
			$(".leftpic").eq(0).addClass("leftpic-select");
			$(".leftpic").eq(1).removeClass("leftpic-select");
		};
	},function() {
		var imgWay = $(this).attr("imageWay");
		if(imgWay != "img/screen_git.png") {
			$(".leftpic").eq(1).addClass("leftpic-select");
			$(".leftpic").eq(0).removeClass("leftpic-select");
		};
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

function changeMain(bl) {
	var temp;
	$(".left-circle").each(function() {
		if($(this).attr("isC") == 1) {
			temp = $(this);
		};
	});
	if(bl) {
		temp = temp.next();
	} else {
		temp = temp.prev();
	}
	if(temp.length > 0)
		temp.click();
};

function nextMain() {
	var temp;
	$(".left-circle").each(function() {
		if($(this).attr("isC") == 1) {
			temp = $(this);
		};
	});
	temp.next().click();
};