window.onload = function () {
  const receive = JSON.parse(localStorage.getItem("pay_info"));
  $("#name").text(receive.name);
  $("#phone").text(receive.phone);
  $("#address").text(receive.address);
  $("#pay_method").text(receive.pay_method);
  $(".last_price_num").text(
    receive.price.substring(0, receive.price.length - 1)
  );
  $(".last_price_num").text(receive.price.pop());
};
