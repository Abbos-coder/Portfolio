// dark mode thame scripts
const body = document.querySelector("body");
const theme = document.querySelector("#theme");
const header = document.querySelector(".header");

theme.addEventListener("click", function () {
	body.classList.toggle("dark");
	if (theme.classList.contains("uil-moon")) {
		theme.classList.remove("uil-moon");
		theme.classList.add("uil-sun");
	} else if (theme.classList.contains("uil-sun")) {
		theme.classList.remove("uil-sun");
		theme.classList.add("uil-moon");
	}
});
// scroll script
window.addEventListener("scroll", () => {
	if (scrollY > 50) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});
// tabs edu and works
const tabs = document.querySelectorAll(".qualification__item");
const edu = document.querySelector(".edu"),
	work = document.querySelector(".work");

let cardsLeft = document.querySelector(".cards__left");
let cardsRight = document.querySelector(".cards__right");

tabs.forEach(function (item) {
	item.addEventListener("click", () => {
		tabs.forEach(function (item) {
			item.classList.remove("active");
		});

		item.classList.add("active");

		if (!edu.classList.contains("active")) {
			cardsLeft.classList.add("active");
		} else {
			cardsLeft.classList.remove("active");
		}

		if (!work.classList.contains("active")) {
			cardsRight.classList.add("active");
		} else {
			cardsRight.classList.remove("active");
		}
	});
});

// skills
const skillsBtn = document.querySelectorAll(".skills__dropdown-top");
const front = document.querySelector(".front");
const design = document.querySelector(".design");
const frame = document.querySelector(".frame");
const frontInfo = document.querySelector(".front-info");
const designInfo = document.querySelector(".design-info");
const frameInfo = document.querySelector(".frame-info");

skillsBtn.forEach(function (item) {
	item.addEventListener("click", () => {
		skillsBtn.forEach(function (item) {
			item.classList.remove("active");
		});
		item.classList.add("active");
		checkdropdown();
	});
});
function checkdropdown() {
	if (front.classList.contains("active")) {
		frontInfo.classList.add("active");
	} else {
		frontInfo.classList.remove("active");
	}
	if (design.classList.contains("active")) {
		designInfo.classList.add("active");
	} else {
		designInfo.classList.remove("active");
	}
	if (frame.classList.contains("active")) {
		frameInfo.classList.add("active");
	} else {
		frameInfo.classList.remove("active");
	}
}

// services modal script

const viewMore = document.querySelectorAll(".services__card-btn");
const serCard = document.querySelectorAll(".services__card");
const serClose = document.querySelectorAll(".services__close");

viewMore.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		serCard[idx].classList.add("active");
		document.body.style.overflow = "hidden";
	});
});
serClose.forEach((close, i) => {
	close.addEventListener("click", () => {
		serCard[i].classList.remove("active");
		document.body.style.overflow = "auto";
	});
});

//? portfolio Carousel
var swiper = new Swiper(".portfolio-carousel", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
