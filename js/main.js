function select() {
	if ($(".select").css("display") === "block") {
		$(".select").css("display", "none");
	} else {
		$(".select").css("display", "block");
	}
}
//
function fourChange(obj) {
	let url = $(obj).css("background-image");
	if (url.includes("type2")) {
		$(".four_change_type2").css("display", "none");
		$(".type3").css("display", "block");
		$(obj).css(
			"background-image",
			"url" +
				"(https://image.makeshop.co.kr/mysoho/assets/shop/img/common/ico_list_type3.png)"
		);
	}
	if (url.includes("type3")) {
		$(".type3").css("display", "none");
		$(".type4").css("display", "block");
		$(obj).css(
			"background-image",
			"url" +
				"(https://image.makeshop.co.kr/mysoho/assets/shop/img/common/ico_list_type4.png)"
		);
	}
	if (url.includes("type4")) {
		$(".type4").css("display", "none");
		$(".type1").css("display", "block");
		$(obj).css(
			"background-image",
			"url" +
				"(https://image.makeshop.co.kr/mysoho/assets/shop/img/common/ico_list1.png)"
		);
	}
	if (url.includes("ico_list1")) {
		$(".type1").css("display", "block");
		$(".four_change_type2").css("display", "block");
		$(obj).css(
			"background-image",
			"url" +
				"(https://image.makeshop.co.kr/mysoho/assets/shop/img/common/ico_list_type2.png)"
		);
	}
}

$(document).on("click", ".bottom_cart", function () {
	$(".cartNum").text(Number($(".cartNum").text()) + 1);
	if (
		confirm(
			"장바구니에 담긴 상품이 있어 수량이 추가되었습니다. 지금 확인하시겠습니까?"
		) == true
	) {
		location.href = "/cart.html";
	}
});

// for (let i = 0; i < $(".best_one").length; i++) {
// 	$(".best_one")[i].onclick = function () {
// 		detail();
// 	};
// }

// for (let i = 0; i < $(".for_click").length; i++) {
// 	$(".for_click")[i].onclick = function () {
// 		detail();
// 	};
// }
// for (let i = 0; i < $(".bottom_pd").length; i++) {
// 	$(".bottom_pd")[i].onclick = function () {
// 		detail();
// 	};
// }

// function detail() {
// 	location.href = "/product/detail.html";
// }
