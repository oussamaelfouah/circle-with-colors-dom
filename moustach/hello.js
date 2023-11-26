let face = document.getElementById('face')
let onpersonclick= (e) =>{
    let two = document.getElementById('two')
    let  top = e.clientY;
    let left = e.clientX;
    two.style.top = `${top- 54}px`;
    two.style.left = `${left- 100}px`;
};
face.addEventListener('click',onpersonclick)