function pl_mi_pd(obj) {
  if ($(obj).text().trim() === "+") {
    $(".direct").val(Number($(".direct").val()) + 1);
  } else {
    if ($(".direct").val() != 1) {
      $(".direct").val(Number($(".direct").val()) - 1);
    }
  }
}

function threebar_click(obj) {
  let con = $(".content");
  let detail = $("#detail_info");
  let reviewH = $(".review_half");
  let review = $(".review");
  let askH = $(".ask_half");
  let ask = $(".ask");
  if ($(obj).text().trim() === "후기") {
    detail.css("border-bottom", "0px");
    con.css("display", "none");
    ask.css("border-bottom", "0px");
    askH.css("display", "none");
    reviewH.css("display", "block");
    review.css("border-bottom", "2px solid black");
  }
  if ($(obj).text().trim() === "상세정보") {
    review.css("border-bottom", "0px");
    reviewH.css("display", "none");
    ask.css("border-bottom", "0px");
    askH.css("display", "none");
    con.css("display", "block");
    detail.css("border-bottom", "2px solid black");
  }
  if ($(obj).text().trim() === "문의") {
    detail.css("border-bottom", "0px");
    reviewH.css("display", "none");
    review.css("border-bottom", "0px");
    askH.css("display", "none");
    askH.css("display", "block");
    ask.css("border-bottom", "2px solid black");
  }
}
function payLast() {
  location.href = "pay_last.html";

  if ($("title").text() === "상세페이지") {
    let price = $(".right_price").text();
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
window.onload = function () {
  const receive = JSON.parse(localStorage.getItem("info"));
  $(".top_top").children(".img").attr("src", receive.image);
  $(".row").children("h6").text(receive.name);
  $(".img_info").children("div").eq(1).children("em").text(receive.price);
  $(".right_price").text(receive.price);
  $(".sum_money").children("span").eq(1).text(receive.price);
  $(".final_price_num").text(receive.price);
  localStorage.clear;
};
