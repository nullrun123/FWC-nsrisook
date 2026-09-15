

const btnChangeBg = document.getElementById('btnChange');


btnChangeBg.addEventListener('click',()=>{
    document.body.style.backgroundColor = generateCodeColor();
})

const generateCodeColor = ()=>{
    let gencode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return gencode;
}