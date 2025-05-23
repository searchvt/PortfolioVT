
// NAME OF ICON SKILLS ON TOOLTIP
var iconName = document.getElementsByClassName("skill");
for (var i = 0; i < iconName.length; i++) {
	iconName[i].title = iconName[i].alt;
}
// ---------------------------------------------------------
// PROGRESSNBAR OF GROWTH
const progress = document.querySelector('.progress');
const progressbar1 = document.querySelector(".progress-one");
progressbar1.style.opacity = 1;
function changeProgress1(progress) {
	progressbar1.style.height = `${progress}%`;
};
setTimeout(() => changeProgress1(24), 1000);

const progressbar2 = document.querySelector(".progress-two");
function changeProgress2(progress) {
	progressbar2.style.height = `${progress}%`;
};
setTimeout(() => changeProgress2(60), 2500);
progressbar2.style.opacity = 1;


// -----------------------------------------------------------
// MODAL OPENING FOR PROJECT SECTION
const btns = document.getElementsByClassName("myBtn");

for (let n = 0; n < btns.length; n++) {
	btns[n].onclick = function () {
		const modalId = btns[n].getAttribute("data-modal");
		const modaln = document.getElementById(modalId);
		if (modaln) {
			modaln.style.display = "flex";
			modaln.style.flexDirection = "row";
			modaln.style.flexWrap = "wrap";
			modaln.style.justifyContent = "center";

			const closeBtn = modaln.querySelector(".close");
			if (closeBtn) {
				closeBtn.onclick = function () {
					modaln.style.display = "none";
				};
			}

			window.onclick = function (event) {
				if (event.target == modaln) {
					modaln.style.display = "none";
				}
			}

			let slideIndex = 1;
			const slides = modaln.getElementsByClassName("mySlides");
			const img_bottom = modaln.getElementsByClassName("img_bottom");
			const captionTextId = modaln.querySelector(".caption")?.getAttribute("data-caption");
			const caption = document.getElementById(captionTextId);

			function showSlides(n) {
				if (n > slides.length) slideIndex = 1;
				if (n < 1) slideIndex = slides.length;

				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = "none";
				}
				for (let i = 0; i < img_bottom.length; i++) {
					img_bottom[i].classList.remove("active");
				}

				slides[slideIndex - 1].setAttribute('style', 'display: flex; flex-direction: row; justify-content:space-evenly; align-items: center;  color:rgb(232, 231, 224)');
				img_bottom[slideIndex - 1].classList.add("active");

				if (caption) {
					caption.innerHTML = img_bottom[slideIndex - 1].alt || '';
				}
			}

			function plusSlides(n) {
				showSlides(slideIndex += n);
			}

			function currentSlide(n) {
				showSlides(slideIndex = n);
			}

			const prevArrow = modaln.querySelector(".prev");
			const nextArrow = modaln.querySelector(".next");

			if (prevArrow) prevArrow.onclick = () => plusSlides(-1);
			if (nextArrow) nextArrow.onclick = () => plusSlides(1);

			for (let i = 0; i < img_bottom.length; i++) {
				img_bottom[i].onclick = () => currentSlide(i + 1);
			}

			showSlides(slideIndex);
		}
	};
}

// -----------------------------------------------------------------------
// MODAL OPENING FOR ABOUT SECTION - PART1-EDUCATION AND WORK AVAILABILLITY
var modal_about = document.getElementById("myModalAbout");
var btn_about = document.getElementsByClassName("myBtnAbout")[0];
var close_about = document.getElementsByClassName("closeAb")[0];
console.log(close_about)
btn_about.onclick = function () {
	modal_about.style.display = "flex";
	modal_about.style.flexDirection = "row";
	modal_about.style.flexWrap = "wrap";
	modal_about.style.justifyContent = "center";
	modal_about.style.zIndex = "50";
}
close_about.onclick = function () {
	modal_about.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal_about) {
		modal_about.style.display = "none";
	}
}

// -----------------------------------------------------------------------
// MODAL OPENING FOR ABOUT SECTION - PART2-LANGUAGES AND PERSONAL SKILLS
var modal_about1 = document.getElementById("myModalAbout1");
var btn_about1 = document.getElementsByClassName("myBtnAbout1")[0];
var close_about1 = document.getElementsByClassName("closeAb1")[0];
console.log(close_about1)
btn_about1.onclick = function () {
	modal_about1.style.display = "flex";
	modal_about1.style.flexDirection = "row";
	modal_about1.style.flexWrap = "wrap";
	modal_about1.style.justifyContent = "center";
	modal_about1.style.zIndex = "50";

}
close_about1.onclick = function () {
	modal_about1.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal_about1) {
		modal_about1.style.display = "none";
	}
}

// END OF JS FILE
// -----------------------------------------------------------------------