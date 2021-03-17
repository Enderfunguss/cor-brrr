canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 100;

car1_img = "https://i.postimg.cc/YqdnnNX1/car1.png";
car2_img = "https://i.postimg.cc/YqdnnNX1/car1.png";
backgroundImage = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground(){
    ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
          up1();
          console.log("up");
      }
    if (keyPressed == '40'){
        down1();
        console.log("down");
      }
    if(keyPressed == '37'){
        left1();
        console.log("left");
      }
    if (keyPressed == '39'){
        right1();
        console.log("right");
      }
    if(keyPressed == '87'){
      up2();
      console.log("w");
    }
    if(keyPressed == '83'){
      down2();
      console.log("s");
    }
    if(keyPressed == '65'){
      left2();
      console.log("a");
    }
    if(keyPressed == '68'){
      right2();
      console.log("d");
    }
  }