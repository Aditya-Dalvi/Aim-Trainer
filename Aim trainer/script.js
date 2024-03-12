const startBtn = document.querySelector("#start"),
    screens = document.querySelectorAll(".screen");
timelist = document.querySelector("time-list");

let time = 0;
    unlimited;

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    screens[0].classList.add("up");    
});

timelist.addEventListener("click", (e) => {
    if(e.tatget.classList.contains("time-btn")){
        time = parseInt(e.tatget.getAttribute("data-time"));
        unlimited = e.target.getAttribute("data-unlimited");
        screens[1].classList.add("up");
    }
});