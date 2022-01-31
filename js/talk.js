$(function () {
	$("#yes").click(function (event) {
		modal("Oke, tự tin là tốt nha :))", function () {
			$(".page_one").addClass("hide");
			$(".page_two").removeClass("hide");
			fireworks();
		});
	});
	$("#no").click(function (event) {
		modal("Ơ, chưa sẵn sàng ư :(", A);
	});
});

function A() {
	modal("Sao thế, có anh qua năm cùng mà &#128522", B);
}

function B() {
	modal("Sao phải xoắn nhể &#128526;", C);
}

function C() {
	modal("Năm mới rồi", D);
}

function D() {
	modal("Anh chúc em và gia đình thật nhiều sức khoẻ &#128170", E);
}

function E() {
	modal("Thật nhiều hạnh phúc và may mắn &#128158", F);
}

function F() {
	modal("Chúc Hoa 2022 phát tài phát lộc &#128181", G);
}

function G() {
	modal("Tiền vô xồng xộc, tiền ra từ từ", H);
}

function H() {
	modal("Sức khoẻ có dư, công danh tấn tới", I);
}

function I() {
	modal("Tình duyên phơi phới, hạnh phúc thăng hoa", J);
}

function J() {
	modal("Làm điều mình thích và thích điều mình làm nha", function () {
		fireworks();
	});
}

function fireworks() {
	$(".page_one").addClass("hide");
	initAnimate();
}

function modal(content, callback) {
	var tpl = '<div class="container">' + '<div class="mask"></div>' + '<div class="modal">' + "<p>" + content + "</p>" + '<button type="button" id="confirm" class="confirm">Tiếp</button>' + "</div>" + "</div>";
	$("body").append(tpl);
	$(document).on("click", ".confirm", function () {
		$(".container").remove();
		callback();
	});
}
