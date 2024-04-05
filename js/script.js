











// ABOUT SLIDER MENU BAR -- AWARD STAR ICON

const toggleMenu = document.getElementById("toggleMenu");
toggleMenu.addEventListener("click", mobileMenu);

let page3 = document.querySelector('body');
let menuBar = document.getElementsByClassName('menu');

function mobileMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("visible");
  if (menuBar.style.visibility === 'visible') {
    page3.style.opacity= "30%"; 
    menuBar.style.opacity='100%';
  } else {
    menu.style.visibility = "visible";
    page3.style.opacity= "100%";

  }
}









// DARK MODE

let defaultModeBtn = document.querySelector('.default-mode');

let nightModeBtn = document.querySelector('.night-mode');

let page = document.querySelector('body');

defaultModeBtn.addEventListener('click', changeMode);

nightModeBtn.addEventListener('click', changeMode);

function changeMode() {
  console.log('this is working');
  page.classList.toggle('state-night-mode');

  if (defaultModeBtn.style.visibility === 'visible') {
    defaultModeBtn.style.visibility = "hidden";
    nightModeBtn.style.visibility = "visible";
  } else {
    defaultModeBtn.style.visibility = "visible";
    nightModeBtn.style.visibility = "hidden";

  }

}


// // DAY MODE

let defaultModeBtn2 = document.querySelector('.default-mode2');

let dayModeBtn = document.querySelector('.day-mode');

let page2 = document.querySelector('body');

defaultModeBtn2.addEventListener('click', changeMode2);

dayModeBtn.addEventListener('click', changeMode2);

function changeMode2() {
  console.log('this is working');
  page2.classList.toggle('state-night-mode');

  if (defaultModeBtn2.style.visibility === 'visible') {
    defaultModeBtn2.style.visibility = "hidden";
    dayModeBtn.style.visibility = "visible";
  } else {
    defaultModeBtn2.style.visibility = "visible";
    dayModeBtn.style.visibility = "hidden";

  }

}
