
let size = 200;

const color = ["red", "green", "blue"];

let index = 0;

const updateBalloon = () => {
  $("#balloon").css("backgroundColor",`${color[index]}`);
  $("#balloon").css("width",`${size}px`);
  $("#balloon").css("height",`${size}px`);
};

$("#balloon").click(function (e) { 
  e.preventDefault();
  index++;
  if (index > 2) index = 0;
  size += 10;
  if(size >= 420){
    size = 200;
    index = 0;
  }
  updateBalloon();
});


$("#balloon").mouseleave(function () { 
  if(size > 200){
        index--;
        if (index < 0) index = 2;
        size-=5;
        updateBalloon();
    }
});




