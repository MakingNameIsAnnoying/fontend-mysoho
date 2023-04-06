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
			for (let i = 1; i < 4; i++) {
				$(".1-" + i).attr("checked", false);
			}
		}
	}
	if (a === "1") {
		console.log(ckb);
		ckb.attr("checked", !ckb.is(":checked"));
	}
	if (a === "2") {
		console.log(ckb);

		ckb.attr("checked", !ckb.is(":checked"));
	}
	if (a === "3") {
		console.log(ckb);

		ckb.attr("checked", !ckb.is(":checked"));
	}
}
