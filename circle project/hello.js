document.getElementById("note").textContent = "this pure dom manupilation";

let circle = document.getElementById('circle')
circle.addEventListener('click', changeColor);

function changeColor(){
    let randomcolor = Math.floor(Math.random() * 16777216).toString(16);
   circle.style.backgroundColor = `#${randomcolor}`;
}