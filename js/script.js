











// ABOUT SLIDER MENU BAR -- AWARD STAR ICON
// when slider menu is out: darkmode button should be hidden, page should lower opacity, button moves, button changes color

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
    toggleMenu.style.marginTop ='25px';
    toggleMenu.style.marginRight ='30px';
    document.getElementById("changeMode").style.visibility = "hidden";

    // document.body.style.backgroundColor= "rgb(0,0,0,.2)";

    // document.body.style.opacity= "50%";


    // page.style.opacity = '50%';
    // document.getElementById('body').style.opacity = '50%';
    
  } else {
    toggleMenu.style.color ='#d83d3d';
    toggleMenu.style.marginTop ='0px';
    toggleMenu.style.marginRight ='0px';
    document.getElementById("changeMode").style.visibility = "visible";

    document.body.style.backgroundColor='white';
    // page.style.opacity = '100%';
  }
}






// DARK MODE
// image caption boxes should turn pink w background when pressed


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

    document.getElementById("toggleMenu").style.color = "#d83d3d";
}else{
    defaultModeBtn.style.visibility="visible";
    nightModeBtn.style.visibility="hidden";
    
    document.getElementById("capBox").style.backgroundColor = "pink";

    document.getElementById("toggleMenu").style.color = "white";

}

}


