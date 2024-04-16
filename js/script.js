
// MAKE GREEN SQUARE ROUND AND THEN SMALL

document.getElementById("square1").addEventListener("mouseover", mouseOver);
document.getElementById("square1").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("square1").style.borderRadius = "50%";
}

function mouseOut() {
  document.getElementById("square1").style.width = "30px";
  document.getElementById("square1").style.height = "30px";
  document.getElementById("square1").style.marginRight = "135px";
  document.getElementById("square1").style.marginTop = "475px";
}


// EXTEND 3 BEIGE SQUARES

document.getElementById("square2-1").addEventListener("mouseover", mouseOver2);
document.getElementById("square2-2").addEventListener("mouseover", mouseOver2);
document.getElementById("square2-3").addEventListener("mouseover", mouseOver2);
document.getElementById("square2-1").addEventListener("mouseout", mouseOut2);
document.getElementById("square2-2").addEventListener("mouseout", mouseOut2);
document.getElementById("square2-3").addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  document.getElementById("square2-1").style.width = "100px";
  document.getElementById("square2-2").style.width = "70px";
  document.getElementById("square2-3").style.width = "40px";
}

function mouseOut2() {
  document.getElementById("square2-1").style.width = "25px";
  document.getElementById("square2-2").style.width = "25px";
  document.getElementById("square2-3").style.width = "25px";
}


// HOVER BLUE BAR MAKES MULTI-COLORED BARS APPEAR 

document.getElementById("square3-1").addEventListener("mouseover", mouseOver3);
document.getElementById("square3-1").addEventListener("mouseout", mouseOut3);

function mouseOver3() {
  document.getElementById("square3-2").style.display = "inline";
  document.getElementById("square3-3").style.display = "inline";
  document.getElementById("square3-4").style.display = "inline";
  
}

function mouseOut3() {
  document.getElementById("square3-2").style.display = "none";
  document.getElementById("square3-3").style.display = "none";
  document.getElementById("square3-4").style.display = "none";
}

// SEQUENCE: HOVER ON FIRST RED BAR APPEARS SECOND RED BAR, HOVER ON SECOND RED BAR TURNS BEIGE AND MAKES THIRD RED BAR APPEAR, HOVER ON THIRD RED BAR TURNS IT GREEN

document.getElementById("square4-1").addEventListener("mouseover", mouseOver4);

function mouseOver4() {
  document.getElementById("square4-2").style.display = "inline";
}


document.getElementById("square4-2").addEventListener("mouseover", mouseOver41);

function mouseOver41() {
  document.getElementById("square4-2").style.backgroundColor = "#f7cd97";
  document.getElementById('square4-3').style.backgroundColor = "#d83d3d";
  document.getElementById('square4-3').style.display = "inline";
}

document.getElementById("square4-3").addEventListener("mouseover", mouseOver42);
document.getElementById("square4-3").addEventListener("mouseout", mouseOut42);

function mouseOver42() {
  document.getElementById("square4-3").style.backgroundColor = "#a69809";
}

function mouseOut42() {
  document.getElementById("square4-3").style.display = "none";
  document.getElementById("square4-2").style.display = "none";

}

// PINKMODE: 4TH OBJECT BARS: HOVER OVER FIRST WHITE BAR MAKES OTHER 2 APPEAR (INSTEAD OF THE SEQUENCE ABOVE)

document.getElementById("square4-1-1").addEventListener("mouseover", mouseOver43);
document.getElementById("square4-1-1").addEventListener("mouseout", mouseOut43);

function mouseOver43() {
  document.getElementById("square4-2").style.display = "inline";
  document.getElementById("square4-2").style.backgroundColor = "white";
  document.getElementById("square4-3").style.display = "inline";
  document.getElementById("square4-3").style.backgroundColor = "white";
}

function mouseOut43() {
  document.getElementById("square4-2").style.display = "none";
  document.getElementById("square4-3").style.display = "none";
}


// ABOUT SLIDER MENU BAR -- AWARD STAR ICON
// when slider menu is out: darkmode button should be hidden, BODY page should lower opacity, button moves to be aligned

const toggleMenu = document.getElementById("toggleMenu");

toggleMenu.addEventListener("click", mobileMenu);

let menuBar = document.getElementsByClassName('menu');

let menu = document.querySelector('menu');

function mobileMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("visible");
  console.log('this is working');

  if(menu.classList.contains("visible")){
    toggleMenu.style.color ='white';
    toggleMenu.style.marginTop ='-5px';
    toggleMenu.style.marginRight ='30px';
    document.getElementById("changeMode").style.visibility = "hidden";

    
    document.querySelector('.main-body-content').style.opacity="50%";

    
  } else {
    toggleMenu.style.color ='#d83d3d';
    toggleMenu.style.marginTop ='0px';
    toggleMenu.style.marginRight ='0px';
    document.getElementById("changeMode").style.visibility = "visible";

    document.querySelector('.main-body-content').style.opacity="100%";

    
  }
}






// DARK MODE
// image caption boxes should turn pink w background when pressed


let defaultModeBtn = document.querySelector('.default-mode');

let pinkModeBtn = document.querySelector('.pink-mode');


let page = document.querySelector('body');


defaultModeBtn.addEventListener('click', changeMode);

pinkModeBtn.addEventListener('click', changeMode);



function changeMode() {
  console.log('this is working');
  page.classList.toggle('state-pink-mode');
  

  if(defaultModeBtn.style.visibility==='visible'){
    defaultModeBtn.style.visibility="hidden";
    pinkModeBtn.style.visibility="visible";
    
    document.getElementById("capBox").style.backgroundColor = "white";

    document.getElementById("toggleMenu").style.color = "#d83d3d";

}else{
    defaultModeBtn.style.visibility="visible";
    pinkModeBtn.style.visibility="hidden";
    
    document.getElementById("capBox").style.backgroundColor = "pink";

    document.getElementById("toggleMenu").style.color = "white";

    // document.getElementById("toggleMenu").style.pointerEvents = "auto";

}

}


