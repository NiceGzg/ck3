function resetPage(){
	var deviceWidth=document.documentElement.clientWidth;// 设备实际显示宽度
	var scale=deviceWidth/640;
	document.body.style.zoom=scale;
}
resetPage();
window.onresize=function (){
	resetPage();
}
$('.sj21').toggle(function(){
	var i=$('.sj21').index(this);
	$('.xsyc').eq(i).slideDown(600).parent().siblings().find('.xsyc').slideUp();
},function(){
	var i=$('.sj21').index(this);
	$('.xsyc').eq(i).slideUp(600);
})
// $('.sj2').eq(0).mouseover(function(){
// 	$('.sj2').eq(0).stop().animate({
// 		height:'319'
// 	});
// })
// $('.sj2').eq(0).mouseout(function(){
// 	$('.sj2').eq(0).stop().animate({
// 		height:'45'
// 	});
// })
// $('.sj2').eq(1).mouseover(function(){
// 	$('.sj2').eq(1).stop().animate({
// 		height:'1164'
// 	});
// })
// $('.sj2').eq(1).mouseout(function(){
// 	$('.sj2').eq(1).stop().animate({
// 		height:'45'
// 	});
// })
// $('.sj2').eq(2).mouseover(function(){
// 	$('.sj2').eq(2).stop().animate({
// 		height:'271'
// 	});
// })
// $('.sj2').eq(2).mouseout(function(){
// 	$('.sj2').eq(2).stop().animate({
// 		height:'45'
// 	});
// })
$('.sjtj img').mouseover(function(){
	window.open('tj.html','_self');
})
var x=1;
var anm=true;
var imgW=$('.con2 img').width();
$('.inner2').scrollLeft(imgW);
var fir=$('.con2 img:first').clone();
var las=$('.con2 img:last').clone();
$('.con2').append(fir);
$('.con2').prepend(las);
$('.left2').click(function (){
	clearInterval(timer1);
	if (anm) {
		anm=false;
		x--;
		if (x<0) {
			x=$('.con2 img').length-3;
			$('.inner2').scrollLeft(imgW*(x+1));
		};
		move2();
	};
});
$('.right2').click(function (){
	clearInterval(timer1);
	if (anm) {
		anm=false;
		moveRight();
	};
});
var timer1=null;
function automove2(){
	timer1=setInterval(moveRight,3000)
}
function moveRight(){
	x++;
	if (x>=$('.con2 img').length) {
		x=2;
		$('.inner2').scrollLeft(imgW);
	};
	move2();
}
function move2(){
	$('.inner2').stop().animate({scrollLeft:imgW*x},function (){
		anm=true;
	});
}
var tupian=document.getElementById('tupian');
var n = 1, startX = 0, startY = 0, endX = 0, endY = 0;
tupian.addEventListener('touchstart',function (ev){
	startX=ev.touches[0].pageX;
	startY=ev.touches[0].pageY;
}, false);
tupian.addEventListener('touchmove',function (ev){
	ev.preventDefault();
	endX=ev.touches[0].pageX;
	endY=ev.touches[0].pageY;
}, false);
tupian.addEventListener('touchend',function (ev){
    if (startX-endX<-25) {//向左滑动
        clearInterval(timer1);
		if (anm) {
			anm=false;
			x--;
			if (x<0) {
				x=$('.con2 img').length-3;
				$('.inner2').scrollLeft(imgW*(x+1));
			};
			move2();
		};
    }
    if (startX-endX>25) {//向右滑动
        clearInterval(timer1);
		if (anm) {
			anm=false;
			moveRight();
		};
    }
    console.log(n);
}, false);
