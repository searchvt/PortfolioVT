// // var modal = document.getElementById("myModal");
// const modal1 = document.getElementsByClassName("modal");
// // var btn = document.getElementById("myBtn");
// const btn = document.getElementsByClassName("myBtn");
// // var span = document.getElementsByClassName("close")[0];
// const span = document.getElementsByClassName("close");


// -----------------------
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
		}
	};
}
// -------------------

let slideIndex = 1;
let dots = document.getElementsByClassName("demo");
let img_bottom = document.getElementsByClassName("img_bottom");
const caption = document.getElementsByClassName("caption");
const modal_slider = document.getElementsByClassName("modal");
let slides = document.getElementsByClassName("mySlides");
// const body1 = document.body;
for (let s = 0; s < btns.length; s++) {


	// const modalId = btns[s].getAttribute("data-modal");
	const modalId = modal_slider[s].getAttribute("data-slider");
	const modaln = document.getElementById(modalId);
	const captionTextId = caption[s].getAttribute("data-caption");
	const captionId = document.getElementById(captionTextId);


	// ------------
	// MySlides e 8 pati napraj go da vrte do maks 3 i site dr ko ego, img bottom itn
	// --------------
	if (modaln) {
		function showSlides(n) {
			let i;
			if (n > 3) { slideIndex = 1 }
			if (n < 1) { slideIndex = slides.length }
			for (i = 0; i < 3; i++) {
				slides[i].style.display = "none";
			}
			for (i = 0; i < 3; i++) {
				img_bottom[i].className = img_bottom[i].className.replace(" active", "");
			}
			// slides[slideIndex - 1].style.display = "block";
			slides[slideIndex - 1].setAttribute('style', 'display: flex; flex-direction: row; justify-content:space-evenly; align-items: center; background-color: #A47155; color:rgb(232, 231, 224) ');
			img_bottom[slideIndex - 1].className += " active";
			img_bottom[0].onclick = function () { currentSlide(1) };
			img_bottom[1].onclick = function () { currentSlide(2) };
			img_bottom[2].onclick = function () { currentSlide(3) };
			// img_bottom[3].onclick = function () { currentSlide(4) };
			// img_bottom[4].onclick = function () { currentSlide(5) };
			// Tuka probaj da ne pristapuvas do img button so indes tuku so for

			// captionTextId.innerHTML = img_bottom[slideIndex - 1].alt;
		}

		showSlides(slideIndex);

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		document.getElementsByClassName("prev")[0].onclick = function () { plusSlides(-1) };
		document.getElementsByClassName("next")[0].onclick = function () { plusSlides(1) };
	}
}
