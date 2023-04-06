function order_click(obj) {
  let clName = $(obj).attr("class");
  if (clName === "order_top first1") {
    if ($(".for_half").css("display") === "none") {
      $(".for_half").css("display", "block");
      $(".first1").children("span").eq(1).css("display", "none");
    } else {
      $(".for_half").css("display", "none");
      $(".first").children("span").eq(1).css("display", "block");
    }
  }
  if (clName === "order_top second") {
    if ($(".for_half_2").css("display") === "none") {
      $(".for_half_2").css("display", "block");
      $(".second").children("span").eq(1).css("display", "none");
    } else {
      $(".for_half_2").css("display", "none");
      $(".second").children("span").eq(1).css("display", "block");
    }
  }
  if (clName === "order_top third") {
    if ($(".for_half_3").css("display") === "none") {
      $(".for_half_3").css("display", "block");
      $(".third").children("span").eq(1).css("display", "none");
    } else {
      $(".for_half_3").css("display", "none");
      $(".third").children("span").eq(1).css("display", "block");
    }
  }
}

function agree(a) {
  let all = $(".ck_agree_all");
  let ckb = $(".1-" + a);
  if (a == "first") {
    all.attr("checked", !all.is(":checked"));
    if (all.is(":checked")) {
      for (let i = 1; i < 4; i++) {
        $(".1-" + i).attr("checked", true);
      }
    } else {
      for (let i = 1; i < 5; i++) {
        $(".1-" + i).attr("checked", false);
      }
    }
  }

  if (a === "1") {
    ckb.attr("checked", !ckb.is(":checked"));
  }
  if (a === "2") {
    ckb.attr("checked", !ckb.is(":checked"));
  }
  if (a === "3") {
    ckb.attr("checked", !ckb.is(":checked"));
  }
  if (a === "4") {
    ckb.attr("checked", !ckb.is(":checked"));
  }
}

function address_popup() {
  new daum.Postcode({
    oncomplete: function (data) {
      console.log(data);
      document.getElementById("address1").value = data.zonecode;
      document.getElementById("address2").value = data.address;
    },
  }).open();
}

function payLast() {
  location.href = "/product/pay_last.html";
  if ($("title").text() === "상세페이지" || $("title").text() === "장바구니") {
    let price = $(".final_price_num").text();
    let name = $("#name").val();
    let phone =
      $("#phone_first option:selected").text().trim() + $("#phone").val();
    let address =
      $("#address1").val() +
      "," +
      $("#address2").val() +
      "," +
      $("#address3").val();
    let pay_value = $(".pay_box").children("input").val();
    if (pay_value == 0) {
      payment = "삼성페이";
    }
    if (pay_value == 1) {
      payment = "휴대폰 결제";
    }
    if (pay_value == 2) {
      payment = "무통장 입금";
    }

    pay_info = {
      price: price,
      name: name,
      phone: phone,
      address: address,
      pay_method: payment,
    };
  }
  localStorage.setItem("pay_info", JSON.stringify(pay_info));
}

$(window).scroll(function (event) {
  st = $(this).scrollTop();
  elementTop = $(".pay_btn").offset().top;
  windowHeight = $(window).height();

  if (Number(windowHeight) + Number(st) < 2485 + 46) {
    $(".pay_btn").css("position", "fixed");
  } else {
    $(".pay_btn").css("position", "relative");
  }
});
