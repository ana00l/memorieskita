// LOGIN
function login(){
    let p = document.getElementById("pass").value;

    if(p === "davina"){
        document.getElementById("login").style.display="none";
        document.getElementById("content").style.display="block";
    }else{
        alert("Password salah!");
    }
}

// MUSIC
function playSong(file){
    let audio = document.getElementById("audio");
    audio.src = file;
    audio.play();
}

// SCROLL ANIMATION
let faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    let trigger = window.innerHeight * 0.8;

    faders.forEach(el => {
        let top = el.getBoundingClientRect().top;

        if(top < trigger){
            el.classList.add("show");
        }else{
            el.classList.remove("show");
        }
    });
});