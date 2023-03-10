$(document).ready(function () {

  $(".gnb").hover(function(){ //주메뉴영역전체에 오버시 
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  //주메뉴 오버시 서브박스 배경색과 왼쪽에 이미지 나오게 함
  $(".main").hover(function () {

    let oldimg = 0; //기존에 보이는 이미지
    let newimg = $(this).index(); //새로 바뀌는 이미지

/*     $(this).find(".sub_all").css({ "background": "rgba(48, 90, 187, 0.22)"}); */

    $(".subBoxImg ul li").eq(oldimg).stop().hide("slow"); //기존이미지는 숨기기
    $(".subBoxImg ul li").eq(newimg).stop().show("slow"); //새로 선택된 이미지는 보이기
    oldimg = newimg; //위에서 새로 바뀐 이미지는 다시 기존이미지에 저장

  },function(){
    $(".subBoxImg ul li").stop().hide();
  });

});


$(document).ready(function () {

  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx=0; //기존이미지
  let idx=0; //새로 바뀌는 이미지
  let img_n = $img.length;  // length메서드 -> 1,2,3...이미지의 개수를 세어서 변수를 저장


  //이미지와 버튼이 바뀌는 함수
  function changeImg(idx){ //매개변수가 있는 함수 --> idx는 선택되는 이미지

    if(oldidx != idx){ //기존의 이미지와 선택된 이미지가 다를때...

      $btn.eq(oldidx).removeClass("active");//기존 하단버튼 비활성화 -> active 클래스를 삭제
      $btn.eq(idx).addClass("active"); //선택된 하단버튼 활성화- > active 클래스를 추가
      $img.eq(oldidx).stop().fadeOut("300");//기존 이미지 사라짐
      $img.eq(idx).stop().fadeIn("300");//기존 이미지 나타남
    
    }

    oldidx = idx;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

  };

  //자동함수 생성
  function changeAuto(){

    idx++;
    //선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
    if(idx>img_n-1){ //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
      idx=0;
    };

    changeImg(idx);

  };

  timer=setInterval(changeAuto,4000); //4초 간격으로 함수를 자동재생


  //좌우버튼 클릭시.....
  $rbtn.click(function(){

    clearInterval(timer);
    idx++;
    if(idx>img_n-1){ //선택한 이미지가 0,1,2...4 마지막일때 맨처음부터 다시 시작
      idx=0;
    }
    changeImg(idx);
    timer=setInterval(changeAuto,4000);

  });

  $lbtn.click(function(){

    clearInterval(timer);
    idx--;
    if(idx<0){ //선택한 이미지가 4,3,2...0 첫번째일때 맨 마지막부터 다시 시작
      idx=img_n-1; //총개수 5-1=4(index 0,1,2,3,4)
    }
    changeImg(idx);
    timer=setInterval(changeAuto,4000);

  });

});

