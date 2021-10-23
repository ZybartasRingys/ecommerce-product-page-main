const togglBtn = document.getElementById("btn");
const sideBar = document.getElementById("mobile");
const cartBtn = document.getElementById("cart-button");
const basket = document.getElementById("basket");
const lightBox = document.createElement("div");
const thum = document.getElementsByClassName("thum");
const mainPhoto = document.getElementById("m-photo");
const lightContent = document.getElementById("lbox-content");
const closeBtn = document.getElementById("close-btn");
const thumImg = document.querySelectorAll(".thumbnails img");
const currentImg = document.getElementById("current-img");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTumbs = document.querySelectorAll(".lightbox-thumb");
const slide = document.getElementsByClassName("lightbox-main");
const lightboxNext = document.getElementById("lightbox-next");
const lightboxPrev = document.getElementById("lightbox-prev");
const minusbtn = document.getElementById("minus-btn");
const plusbtn = document.getElementById("plus-btn");
const countNumber = document.getElementById("count-number");
const addToCart = document.getElementById("addtocart-btn");
const cartItem = document.getElementById("cart-item");

const opacity = 0.4;
let count = 0;

// plus minus buttons

plusbtn.addEventListener("click", () => {
  count++;
  countNumber.textContent = count;
});

minusbtn.addEventListener("click", () => {
  count--;
  countNumber.textContent = count;
});

//add to chart
addToCart.addEventListener("click", (event) => {
  console.log(event.target);
});
//thumbnails buttons

thumImg.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  thumImg.forEach((img) => (img.style.opacity = 1));
  thumImg.forEach((img) => (img.style.border = 0));
  currentImg.src = e.target.src;
  e.target.style.opacity = opacity;
  e.target.style.border = "5px solid orange";
}

// light box
lightBox.id = "lightbox";
document.body.appendChild(lightBox);

mainPhoto.addEventListener("click", () => {
  lightBox.classList.toggle("active");
  lightContent.classList.toggle("active");

  //remove lightbox
  closeBtn.addEventListener("click", () => {
    lightBox.classList.remove("active");
    lightContent.classList.remove("active");
  });
});

// lightbox thumbs

lightboxTumbs.forEach((img) => img.addEventListener("click", lightboxImgClick));

function lightboxImgClick(e) {
  lightboxTumbs.forEach((img) => (img.style.opacity = 1));
  lightboxTumbs.forEach((img) => (img.style.border = 0));
  lightboxImg.src = e.target.src;
  e.target.style.border = "4px solid orange";
}

// show mobile sidebar
togglBtn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

// remove sidebar
sideBar.addEventListener("click", () => {
  sideBar.classList.remove("active");
});

//tooggle cart

cartBtn.addEventListener("click", () => {
  basket.classList.toggle("active");
});

// carousel
