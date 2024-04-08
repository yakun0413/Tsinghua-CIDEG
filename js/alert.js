/*
@ 弹出
 */
$(function(){
	
	var alertBox = $(".alert_box"),
		alertBg = $('<div class="alert_bg" id="alert_Bg"></div>').appendTo($("body")),
		inits = function(){
			var st = $(document).scrollTop(), winh = $(window).height();
			alertBg.css({'height':winh+st})
			//IE6下的定位
			if (!window.XMLHttpRequest) {
				alertBox.css("top", st + winh - 350);//计算内容区域的宽度
				alertBox.css("left", (document.body.offsetWidth-710)/2+350);//计算内容区域的宽度
			}
		};
    $(window).bind({"scroll": inits,"resize": inits});
    $(function() { inits(); });
	
	$('.alert').click(function(){
		$(".alert_box").css('display','block')
		$(".alert_bg").css('display','block')
	})
	$('.close').click(function(){
		$(".alert_box").css('display','none')
		$(".alert_bg").css('display','none')
	})
	$('.close').click(function(){
		$(".alert_box").css('display','none')
		$(".alert_bg").css('display','none')
	})

})


