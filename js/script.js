











// ABOUT SLIDER MENU BAR -- AWARD STAR ICON

const toggleMenus = document.getElementById("toggleMenu");
toggleMenus.addEventListener("click", mobileMenu);

let menuBar = document.getElementsByClassName('menu');

function mobileMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("visible");

  if (menuBar.style.visibility === 'visible') {
  } else {
    menu.style.visibility = "visible";

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
  

  if(defaultModeBtn.style.visibility==='visible'){
    defaultModeBtn.style.visibility="hidden";
    nightModeBtn.style.visibility="visible";
    
    document.getElementById("capBox").style.backgroundColor = "white";
}else{
    defaultModeBtn.style.visibility="visible";
    nightModeBtn.style.visibility="hidden";
    
    document.getElementById("capBox").style.backgroundColor = "pink";

}

}


// // DAY MODE

// let defaultModeBtn2 = document.querySelector('.default-mode2');

// let dayModeBtn = document.querySelector('.day-mode');

// let page2 = document.querySelector('body');

// defaultModeBtn2.addEventListener('click', changeMode2);

// dayModeBtn.addEventListener('click', changeMode2);

// function changeMode2() {
//   console.log('this is working');
//   page2.classList.toggle('state-night-mode');

//   if (defaultModeBtn2.style.visibility === 'visible') {
//     defaultModeBtn2.style.visibility = "hidden";
//     dayModeBtn.style.visibility = "visible";
//   } else {
//     defaultModeBtn2.style.visibility = "visible";
//     dayModeBtn.style.visibility = "hidden";

//   }

// }
