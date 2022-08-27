
//activar antes de subir a github

window.oncontextmenu = function(){
    return false;
} 

let sound = new Audio('../media/audio/Feliz Cumpleaños.mp3.webm');
playBtn.addEventListener('click', ()=>{
    sound.play();
});
pauseBtn.addEventListener('click', ()=>{
    sound.pause();
});


//modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


//confetti
const jsConfetti = new JSConfetti();
document.querySelector("#playBtn").addEventListener("click", (e) =>{
  jsConfetti.addConfetti(
    {  confettiRadius: 8,
      confettiNumber: 1000,
    }
  );
});
const jsConfettii = new JSConfetti();
document.querySelector("#hurra").addEventListener("click", (e) =>{
  jsConfetti.addConfetti(
    {  confettiRadius: 8,
      confettiNumber: 1000,
    }
  );
});


//fecha actual
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML =  day + "/" + month+ "/" + year;


var today = new Date();

document.getElementById("currentTime").innerHTML = today.getHours() + ":" + today.getMinutes();
  

// boton-up profesional
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    
    window.scrollTo (0, 10);
  }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){
  var scroll = document.documentElement.scrollTop;

  if (scroll > 500){
    buttonUp.style.transform = "scale(1)";
  }else if (scroll < 500){
    buttonUp.style.transform = "scale(0)";
  }
}
