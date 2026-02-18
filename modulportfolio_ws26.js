const button_menu = document.querySelector(".button_menu");
const menupunkt = document.querySelectorAll(".menupunkt");
const burgermenu = document.querySelector(".burgermenu");
const kacheln = document.querySelectorAll(".kachel");
const kachelraum = document.querySelector(".kachelraum");
const kachelschrift = document.querySelector(".kachelschrift");
const menupunkte = document.querySelectorAll(".menupunkt");

let isModified = false;
button_menu.addEventListener("click", function () {
  menupunkt.forEach(el => {
    if (!isModified) {
      el.style.opacity = "1";
      el.style.visibility = "visible";
      el.style.pointerEvents = "auto";
      el.style.display = "block";
      el.style.backgroundColor = "";
      el.style.padding = "";
      el.style.borderRadius = "";
      button_menu.style.backgroundImage = "url('Material/burger_icon2.svg')";
    } else {
      el.style.opacity = "0";
      el.style.visibility = "hidden";
      el.style.pointerEvents = "none";
      el.style.display = "none";
      el.style.backgroundColor = "";
      el.style.padding = "";
      el.style.borderRadius = "";
      button_menu.style.backgroundImage = "";
    }
  });
  isModified = !isModified;
});

kacheln.forEach(kachel => {
  kachel.addEventListener("mouseenter", function () {
    const kachelraum = kachel.querySelector(".kachelraum");
    const kachelschrift = kachel.querySelector(".kachelschrift");
    
    kachelraum.style.backgroundColor = "#5a339f";
    kachelschrift.style.fontWeight = "600";
  });

  kachel.addEventListener("mouseleave", function () {
    const kachelraum = kachel.querySelector(".kachelraum");
    const kachelschrift = kachel.querySelector(".kachelschrift");
    
    kachelraum.style.backgroundColor = "#3d226c";
    kachelschrift.style.fontWeight = "400";
  });
});

document.getElementById('kachel1').addEventListener('click', function() {
    window.location.href = 'modulportfolio01.html';
});

document.getElementById('kachel2').addEventListener('click', function() {
    window.location.href = 'modulportfolio02.html';
});

document.getElementById('kachel3').addEventListener('click', function() {
    window.location.href = 'modulportfolio03.html';
});

document.getElementById('kachel4').addEventListener('click', function() {
    window.location.href = 'modulportfolio04.html';
});

document.getElementById('kachel5').addEventListener('click', function() {
    window.location.href = 'modulportfolio05.html';
});

document.getElementById('kachel6').addEventListener('click', function() {
    window.location.href = 'modulportfolio06.html';
});

window.addEventListener('load', function() {
  document.getElementById('kachel1').classList.add('visible');
  document.getElementById('kachel2').classList.add('visible');
  document.getElementById('kachel3').classList.add('visible');
  document.getElementById('kachel4').classList.add('visible');
  document.getElementById('kachel5').classList.add('visible');
  document.getElementById('kachel6').classList.add('visible');
});