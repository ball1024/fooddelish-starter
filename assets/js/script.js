// JS here

document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('show')
    
})

let topBtn = document.getElementById("btt");

function scollFunc() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topBtn.style.display = "block";
    } else{
        topBtn.style.display = "none";
    }
}

window.onscroll = function() {
    scollFunc();
}

function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}