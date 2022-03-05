//Langing Bar skip content animation

function arrowanimate(){
	$("#down-arrow").addClass("arrow-rotate-animation");
$("#down-arrow").on(
	"animationend webkitAnimationEnd onAnimationEnd MSAnimationEnd",
	function () {
		$(this).removeClass("arrow-rotate-animation");
	}
)};

//--------------------------
//Dropdown code

$("#drop-btn").click(function () {
	$("#dropdown").show();
	document.addEventListener(
		"mouseup",
		function (event) {
			if (!event.target.classList.contains("dropdown-content")) {
				$("#dropdown").hide();
			}
		},
		true
	);
	document.removeEventListener("mouseup", function (event) {}, true);
});

function darkmode() {
	if ($("#circle").hasClass("light")) {
		$("*:not(.keeplight)").removeClass("darkmode");
		$("#cover").addClass("sundown");
		$("#cover").removeClass("sunup");
		$("#circle").removeClass("light");
	} else {
		$("*:not(.keeplight)").addClass("darkmode");
		$("#cover").toggleClass("sunup sundown");
		$("#circle").addClass("light");
	}
}

$(window).on('load', function(){
	alert("cheese");
	$("#cover").addClass("sundown");
});
$("#cover").addClass("sundown");
$("#darkmode-btn").click(function () {
	darkmode();
});
