
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
console.log(span)
btn.onclick = function () {
	modal.style.display = "flex";
	modal.style.flexDirection = "row";
	modal.style.flexWrap = "wrap";
	modal.style.justifyContent = "center";
	modal.style.minWidth = "80vw";
	modal.style.minHeight = "90vh";

}
span.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}



let slideIndex = 1;
let dots = document.getElementsByClassName("demo");
let img_bottom = document.getElementsByClassName("img_bottom");

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let captionText = document.getElementById("caption");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < img_bottom.length; i++) {
		img_bottom[i].className = img_bottom[i].className.replace(" active", "");
	}
	// slides[slideIndex - 1].style.display = "block";
	slides[slideIndex - 1].setAttribute('style', 'display: flex; flex-direction: row; justify-content:space-evenly; align-items: stretch; background-color: #8EA257; color: #E4E1C7 ');
	img_bottom[slideIndex - 1].className += " active";
	img_bottom[0].onclick = function () { currentSlide(1) };
	img_bottom[1].onclick = function () { currentSlide(2) };
	img_bottom[2].onclick = function () { currentSlide(3) };
	img_bottom[3].onclick = function () { currentSlide(4) };
	img_bottom[4].onclick = function () { currentSlide(5) };
	img_bottom[5].onclick = function () { currentSlide(6) };

	captionText.innerHTML = img_bottom[slideIndex - 1].alt;
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

// za default btn da se smene
let btnDes = document.getElementsByClassName("myBtn");
function btn_design() {
	// btnDes.className = btnDes.className.replace(" active_img", "");
	btnDes.setAttribute('style', 'background-color: #8EA257; color: #E4E1C7');
	btnDes.className += " active_img";
}

btnDes.onclick = function () { btn_design() };
