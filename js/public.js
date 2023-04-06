if (document.title != "메인") {
  let header = document.getElementsByClassName("header");
  header[0].style.borderBottom = "1px solid black";
}

function aClick(obj) {
  if (obj.innerText == "삼단바") {
    document.getElementsByClassName("aside")[0].style.left = "0";
    $("carouselExampleIndicators").css("display", "none");
    $("body").css("background", "rgba(0, 0, 0, 0.75)");
  }

  if (obj.innerText == "x") {
    if ($(obj).parent("div").attr("class") === "first") {
      document.getElementsByClassName("aside")[0].style.left = "-80%";
      $("body").css("background-color", "white");
    } else if (
      $(obj).parent("div").attr("class") === "glass_open" ||
      $(obj).parent("div").attr("class") === "glass_x"
    ) {
      $(".glass_open").css("display", "none");
    }
  } else if (obj.innerText == "돋보기") {
    $(".glass_open").css("display", "block");
  } else if (obj.innerText == "사업자 정보") {
    if ($(".seller_info").css("display") === "none") {
      $(".seller_info").css("display", "block");
    } else {
      $(".seller_info").css("display", "none");
    }
  }
}
function open_popup(name, num) {
  if (name == "join") {
    switch (num) {
      case 1:
        window.open("agree.html");
        break;
      case 2:
        window.open("약관2");
        break;
      case 3:
        window.open("약관3");
        break;
    }
    if (name == "order") {
      switch (num) {
        case 1:
          window.open("agree.html");
          break;
        case 2:
          window.open("결제2");
          break;
        case 3:
          window.open("결제3");
          break;
      }
    }
  }
}

function agree_click(a) {
  if (a == 3) {
    console.log(1);
    window.close();
  }
}

// 디테일창 띄우기
function make_detail(obj) {
  let a = $(obj).children("img").attr("src");
  let b = $(obj).parent("div").children(".best_name").text();
  let c = $(obj).parent("div").children(".best_price").text();
  let info = {
    image: a,
    name: b,
    price: c,
  };
  // 디테일 정보 보내기
  localStorage.setItem("info", JSON.stringify(info));
  location.href = "/product/detail.html";
}

window.onscroll = function () {
  if (window.scrollY != 0) {
    $(".top_arrow").css("display", "block");
  } else {
    $(".top_arrow").css("display", "none");
  }
};
