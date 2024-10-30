const image = document.getElementById("image");
const likeNo = document.getElementById("likes-no");

function likeFn(){
    image.setAttribute("src", "images/unlike.jpeg");
    image.setAttribute("onclick", "unlikeFn()");
    likeNo.innerHTML = 1;
}

function unlikeFn(){
    image.setAttribute("src", "images/like.png");
    image.setAttribute("onclick", "likeFn()");
    likeNo.innerHTML = "";
}