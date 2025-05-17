
// Name od icon skills
var iconName = document.getElementsByClassName("skill");
for (var i = 0; i < iconName.length; i++) {
	iconName[i].title = iconName[i].alt;
}

// Progress bar
// const progress = document.querySelector('.progress');
// progress.style.height = progress.getAttribute('data-done') + '%';
// progress.style.opacity = 1;
// const progressbar = document.querySelector(".progress-one");
// function changeProgress(progress) {
// 	progressbar.style.height = `${progress}%`;
// };
// setTimeout(() => changeProgress(35), 1000);
// setTimeout(() => changeProgress(65), 2000);

// -------------------------
const progress = document.querySelector('.progress');

const progressbar1 = document.querySelector(".progress-one");
progressbar1.style.opacity = 1;
function changeProgress1(progress) {
	progressbar1.style.height = `${progress}%`;
};
setTimeout(() => changeProgress1(24), 1000);


const progressbar2 = document.querySelector(".progress-two");
// const year1txt = document.querySelector(".year");
function changeProgress2(progress) {
	progressbar2.style.height = `${progress}%`;
};
setTimeout(() => changeProgress2(60), 2500);
progressbar2.style.opacity = 1;



// -------------------
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
console.log(span)
btn.onclick = function () {
	modal.style.display = "flex";
	modal.style.flexDirection = "row";
	modal.style.flexWrap = "wrap";
	modal.style.justifyContent = "center";
	// modal.style.minWidth = "80vw";
	// modal.style.minHeight = "90vh";

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
// const body1 = document.body;
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
	slides[slideIndex - 1].setAttribute('style', 'display: flex; flex-direction: row; justify-content:space-evenly; align-items: center; background-color: #A47155; color:rgb(232, 231, 224) ');
	img_bottom[slideIndex - 1].className += " active";
	img_bottom[0].onclick = function () { currentSlide(1) };
	img_bottom[1].onclick = function () { currentSlide(2) };
	img_bottom[2].onclick = function () { currentSlide(3) };


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
// let btnDes = document.getElementsByClassName("myBtn");
// function btn_design() {
// 	btnDes.className = btnDes.className.replace(" active_img", "");
// 	btnDes.setAttribute('style', 'background-color:rgb(255, 255, 255); color:rgb(0, 0, 0)');
// 	btnDes.className += " active_img";
// }

// btnDes.onclick = function () { btn_design() };
// ---------------------------------------------
// ------------------2

