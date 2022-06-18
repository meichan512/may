let slideIndex = 0;
let slideImg = 0;
let n;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const imgs = ["images/adidadieu.jpg", 
                "images/caikeo.jpg",
                "images/caiquan.jpg",
                "images/conmeo.jpg",
                "images/hinhconmay.jpg",
                "images/meme.jpg"];

  if (n > imgs.length - 1) {slideIndex = 0}
  if (n < 0) {slideIndex = imgs.length - 1}
  document.getElementById("current-img").src = imgs[slideIndex];
  slideImg = slideIndex;
}

function on() {
  const imgs = ["images/adidadieu.jpg", 
                "images/caikeo.jpg",
                "images/caiquan.jpg",
                "images/conmeo.jpg",
                "images/hinhconmay.jpg",
                "images/meme.jpg"];

  document.getElementById("enlarge").src = imgs[slideImg];
  document.getElementById("overlay").style.display = "block";
  
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function showBigImgs(n) {
  on();
  const imgs = ["images/adidadieu.jpg", 
                "images/caikeo.jpg",
                "images/caiquan.jpg",
                "images/conmeo.jpg",
                "images/hinhconmay.jpg",
                "images/meme.jpg"];
                
  if (n > imgs.length - 1) {slideImg = 0}
  if (n < 0) {slideImg = imgs.length - 1}
  document.getElementById("enlarge").src = imgs[slideImg];
}

function plusImgs(n) {
  showBigImgs(slideImg += n);
}

function expand1() {
  var x = document.getElementById("myDIV");
  var s = document.getElementById("showmore1");
  if (x.style.display === "block") {
    x.style.display = "none";
    s.innerHTML = "Show more";
  } else {
    x.style.display = "block";
    s.innerHTML = "Show less";
  }
}

function expand2() {
  var x = document.getElementById("myDIV_2");
  var s = document.getElementById("showmore2");
  if (x.style.display === "block") {
    x.style.display = "none";
    s.innerHTML = "Show more";
  } else {
    x.style.display = "block";
    s.innerHTML = "Show less";
  }
}

function expand3() {
  var x = document.getElementById("myDIV_3");
  var s = document.getElementById("showmore3");
  if (x.style.display === "block") {
    x.style.display = "none";
    s.innerHTML = "Show more";
  } else {
    x.style.display = "block";
    s.innerHTML = "Show less";
  }
}
