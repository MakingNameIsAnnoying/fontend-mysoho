function agree_click(a) {
	if (a == 2) {
		console.log($(".inner"));
		$(".inner").css("display", "none");
		$(".table").css("display", "block");
	}
	if (a == 1) {
		$(".inner").css("display", "block");
		$(".table").css("display", "none");
	}
	if (a == 3) {
		console.log(1);
		window.close();
	}
}
