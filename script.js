//모바일메뉴

$(".search_box").click(function(){
    $(".search_area").stop().slideDown();
})
$(".search_area>img").click(function(){
    $(".search_area").stop().slideUp();
})

$(".nav_box").click(function(){
    $("nav").css("display","block")
})
$(".M_menu_top>li").eq(0).click(function(){
    $("nav").css("display","none");
    window.location.reload();
})
if($(".nav_box").is(":visible")){
    var nav_contr=false;

    $(".mainmenu>li").click(function(){
        if(nav_contr==false){
        $(this).children(".submenu").slideDown();
        nav_contr=true;
        }else{
            $(this).children(".submenu").slideUp();
            nav_contr=false;
        }
    })
}
//데스크탑 메뉴
else{
$(".mainmenu>li").mouseover(function(){
    $(this).children(".submenu").css("display","block")
})
$(".mainmenu>li").mouseleave(function(){
    $(this).children(".submenu").css("display","none")
})
}
//탭!(가정통신문, 문답, 공지사항)
$(".tap_list>li").click(function(){
    var idx=$(".tap_list>li").index(this);
    $(".tap_list>li").eq(idx).css("background-color","#0b65b8");
    $(".tap_list>li").eq(idx).css("color","white");
    $(".tap_content>li").eq(idx).css("display","block");
    $(".tap_list>li").eq(idx).siblings().css("background-color","#ececec");
    $(".tap_list>li").eq(idx).siblings().css("color","#333");
    $(".tap_content>li").eq(idx).siblings().css("display","none");
    $(".tap_list>li").eq(3).css("background-color","#ececec");
    $(".tap_list>li").eq(3).css("color","gray");
})
// 탭(급식 보건 상담)
$(".tap_list2>li").click(function(){
    var idx=$(".tap_list2>li").index(this);
    $(".tap_list2>li").eq(idx).css("background-color","#0b65b8");
    $(".tap_list2>li").eq(idx).css("color","white");
    $(".tap_content2>li").eq(idx).css("display","block");
    $(".tap_list2>li").eq(idx).siblings().css("background-color","#ececec");
    $(".tap_list2>li").eq(idx).siblings().css("color","#333");
    $(".tap_content2>li").eq(idx).siblings().css("display","none");
    $(".tap_list2>li").eq(3).css("background-color","#ececec");
    $(".tap_list2>li").eq(3).css("color","gray");
})
//알림판 팝업
$(".board_notice").click(function(){
    $(".board_notice_box").css("display","block")
})
$(".board_notice_close").click(function(){
    $(".board_notice_box").css("display","none")
})
//알림판 슬라이드
start();
var now=0;
var img=2;
var board;
var board_mode=true;
//뒤로
$(".prev").click(function(){
    if(now==0){
        now=2;
    }else{
        now--
    }
    clearInterval(board);
    board_slide(now);
    if(board_mode==true){
        board=setInterval(function(){slide2()},3000);
    }
})
//다음
$(".next").click(function(){
    if(img==now){
        now=0;
    }else{
        now++
    }
    clearInterval(board);
    board_slide(now);
    if(board_mode==true){
        board=setInterval(function(){slide2()},3000);
    }
})
//멈춤
$(".play").css("display","none")
$(".stop").click(function(){
    $(this).css("display","none")
    $(".play").css("display","block")
    clearInterval(board);
    board_mode=false;
})
//시작
$(".play").click(function(){
    $(this).css("display","none")
    $(".stop").css("display","block")
    board=setInterval(function(){slide()},3000);
    board_mode=true;
})
//슬라이드
function start(){
    $(".board_img>li img").eq(0).css("display","block")
    $(".board_img>li img").eq(1).css("display","none")
    $(".board_img>li img").eq(2).css("display","none")
    $(".board_img_list>li").eq(0).css("display","block")
    $(".board_img_list>li").eq(1).css("display","none")
    $(".board_img_list>li").eq(2).css("display","none")
    board=setInterval(function(){slide()},3000);
}
function slide(){
    if(img==now){
        now=0;
    }else{
        now++
    }
    board_slide(now)
}
function board_slide(){
    if(now==1){
        $(".board_img>li img").eq(1).css("display","block")
        $(".board_img>li img").eq(2).css("display","none")
        $(".board_img>li img").eq(0).css("display","none")
        $(".board_img_list>li").eq(1).css("display","block")
        $(".board_img_list>li").eq(2).css("display","none")
        $(".board_img_list>li").eq(0).css("display","none")
    }
    if(now==2){
        $(".board_img>li img").eq(2).css("display","block")
        $(".board_img>li img").eq(0).css("display","none")
        $(".board_img>li img").eq(1).css("display","none")
        $(".board_img_list>li").eq(2).css("display","block")
        $(".board_img_list>li").eq(0).css("display","none")
        $(".board_img_list>li").eq(1).css("display","none")
    }
    if(now==0){
        $(".board_img>li img").eq(0).css("display","block")
        $(".board_img>li img").eq(1).css("display","none")
        $(".board_img>li img").eq(2).css("display","none")
        $(".board_img_list>li").eq(0).css("display","block")
        $(".board_img_list>li").eq(1).css("display","none")
        $(".board_img_list>li").eq(2).css("display","none")
    }
}


//배너 슬라이드
var banner_now=0;
var banner_img=5;
var play;
var mode=true;

banner_start();
//배너 목록 전체 보기
var banner_open=false;
$(".btn_all").click(function(){
    if(banner_open==true){
        $(".bannerimg_wrap").css("height","50px")
        banner_open=false;
    }else{
        $(".bannerimg_wrap").css("height","300px")
        banner_open=true;
    }
})
//플레이 버튼
$(".btn_play").click(function(){
    play=setInterval(function(){banner_slide()},3000);
	$(this).css("display","none");
	$(".btn_stop").css("display","block");
	mode=true;
});
//스탑버튼
$(".btn_stop").click(function(){
    clearInterval(play);
	$(this).css("display","none");
	$(".btn_play").css("display","block");
	mode=false;
});
//이전버튼
$(".btn_prev").click(function(){
    if(banner_now==0){
		banner_now=5;
	}else{
		banner_now--;
	}
	clearInterval(play);
	curr_slide(banner_now);
	if(mode==true){
		play=setInterval(function(){banner_slide()},3000);
	}
})
//다음버튼
$(".btn_next").click(function(){
    if(banner_now==banner_img){
        banner_now=0;
    }else{
        banner_now++;
    }
	clearInterval(play);
	curr_slide(banner_now);
	if(mode==true){
		play=setInterval(function(){slide();},3000);
	}
})
//슬라이드
function banner_start(){
    $(".bannerimg_wrap").children(".banner").eq(0).css("top","0px");
    $(".bannerimg_wrap").children(".banner").eq(1).css("top","50px");
    $(".bannerimg_wrap").children(".banner").eq(2).css("top","100px");
    $(".bannerimg_wrap").children(".banner").eq(3).css("top","150px");
    $(".bannerimg_wrap").children(".banner").eq(4).css("top","200px");
    $(".bannerimg_wrap").children(".banner").eq(5).css("top","250px");
    play=setInterval(function(){banner_slide()},3000);
}
function banner_slide(){
    if(banner_now==banner_img){
        banner_now=0;
    }else{
        banner_now++;
    }
    curr_slide(banner_now)
}
function curr_slide(){
    if(banner_now==1){
        $(".bannerimg_wrap").children(".banner").eq(1).css("top","0px");
        $(".bannerimg_wrap").children(".banner").eq(2).css("top","50px");
        $(".bannerimg_wrap").children(".banner").eq(3).css("top","100px");
        $(".bannerimg_wrap").children(".banner").eq(4).css("top","150px");
        $(".bannerimg_wrap").children(".banner").eq(5).css("top","200px");
        $(".bannerimg_wrap").children(".banner").eq(0).css("top","250px");
    }
    if(banner_now==2){
        $(".bannerimg_wrap").children(".banner").eq(2).css("top","0px");
        $(".bannerimg_wrap").children(".banner").eq(3).css("top","50px");
        $(".bannerimg_wrap").children(".banner").eq(4).css("top","100px");
        $(".bannerimg_wrap").children(".banner").eq(5).css("top","150px");
        $(".bannerimg_wrap").children(".banner").eq(0).css("top","200px");
        $(".bannerimg_wrap").children(".banner").eq(1).css("top","250px");
    }
    if(banner_now==3){
        $(".bannerimg_wrap").children(".banner").eq(3).css("top","0px");
        $(".bannerimg_wrap").children(".banner").eq(4).css("top","50px");
        $(".bannerimg_wrap").children(".banner").eq(5).css("top","100px");
        $(".bannerimg_wrap").children(".banner").eq(0).css("top","150px");
        $(".bannerimg_wrap").children(".banner").eq(1).css("top","200px");
        $(".bannerimg_wrap").children(".banner").eq(2).css("top","250px");
    }
    if(banner_now==4){
        $(".bannerimg_wrap").children(".banner").eq(4).css("top","0px");
        $(".bannerimg_wrap").children(".banner").eq(5).css("top","50px");
        $(".bannerimg_wrap").children(".banner").eq(0).css("top","100px");
        $(".bannerimg_wrap").children(".banner").eq(1).css("top","150px");
        $(".bannerimg_wrap").children(".banner").eq(2).css("top","200px");
        $(".bannerimg_wrap").children(".banner").eq(3).css("top","250px");
    }
    if(banner_now==5){
        $(".bannerimg_wrap").children(".banner").eq(5).css("top","0px");
        $(".bannerimg_wrap").children(".banner").eq(0).css("top","50px");
        $(".bannerimg_wrap").children(".banner").eq(1).css("top","100px");
        $(".bannerimg_wrap").children(".banner").eq(2).css("top","150px");
        $(".bannerimg_wrap").children(".banner").eq(3).css("top","200px");
        $(".bannerimg_wrap").children(".banner").eq(4).css("top","250px");
    }
    if(banner_now==0){
        $(".bannerimg_wrap").children(".banner").eq(0).css("top","0px");
        $(".bannerimg_wrap").children(".banner").eq(1).css("top","50px");
        $(".bannerimg_wrap").children(".banner").eq(2).css("top","100px");
        $(".bannerimg_wrap").children(".banner").eq(3).css("top","150px");
        $(".bannerimg_wrap").children(".banner").eq(4).css("top","200px");
        $(".bannerimg_wrap").children(".banner").eq(5).css("top","250px");
    }
}

//달력