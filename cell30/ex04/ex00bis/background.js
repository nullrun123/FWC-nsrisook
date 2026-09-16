
const randomColor = ()=>{
    $("body").css("background-color",generateCodeColor());
}


const generateCodeColor = ()=>{
    let gencode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return gencode;
}