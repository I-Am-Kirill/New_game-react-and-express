const cvs = document.getElementById('game_board');
const ctx = cvs.getContext('2d');

const bird = new Image();
const bg = new Image();
const hunter1 = new Image();
const hunter2 = new Image();
const hunter3 = new Image();
const pokBallRigth = new Image();
const pokBallCenter = new Image();
const pokBallLeft = new Image();


// Позиция 
let xPosBird = 10;
let yPosBird = 35;
let xPosHunter1 = 45
let xPosHunter2 = 135
let xPosHunter3 = 225
let yPosBall = 110
let yPosBallR = 110
let yPosBallL = 110
let flag1 = false
let flag2 = false
let flag3 = false

// 270 (0-45-90) (91-135-180) (180-225-270)

bird.src = 'img/bird.png';
bg.src = 'img/d874367282cec41be1ac5d8000899d2a.png';
hunter1.src = 'img/hunter1.png';
hunter2.src = 'img/hunter2.png';
hunter3.src = 'img/hunter3.png';
pokBallRigth.src = 'img/BallR.png';
pokBallCenter.src = 'img/ball.png';
pokBallLeft.src = 'img/BallL.png';


document.addEventListener("keydown", moveUp);

function moveUp() {
 xPosBird += 6;
}

function draw() {
  ctx.drawImage(bg, 0, 0, 500, 165);
  ctx.drawImage(hunter1, xPosHunter1, 110, 35, 35);
  ctx.drawImage(hunter2, xPosHunter2, 110, 35, 35);
  ctx.drawImage(hunter3, xPosHunter3, 110, 35, 35);
  ctx.drawImage(bird, xPosBird, yPosBird, 20, 20);

  // yPosBird -= 1
  for (let i= 0; i < 1; i ++) {
    let motion = Math.floor(Math.random() * (1 - 0 + 1) + 0)
    if (flag1 == false) {
      if (xPosHunter1 < 2) {
        flag1 = true
      } 
      xPosHunter1 -= motion
    }
    else if (flag1 == true)  {
      xPosHunter1 += motion
      if (xPosHunter1 > 80) {
        flag1 = false
      } 
    }
  }

  for (let i= 0; i < 1; i ++) {
    let motion1 = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    if (flag2 == false) {
      if (xPosHunter2 < 100) {
        flag2 = true
      } 
      xPosHunter2 -= motion1
    }
    else if (flag2 == true)  {
      xPosHunter2 += motion1
      if (xPosHunter2 > 180) {
        flag2 = false
      } 
    }
  }
  for (let i= 0; i < 1; i ++) {
    let motion2 = Math.floor(Math.random() * (1 - 0 + 1) + 0)
    if (flag3 == false) {
      if (xPosHunter3 < 185) {
        flag3 = true
      } 
      xPosHunter3 -= motion2
    }
    else if (flag3 == true)  {
      xPosHunter3 += motion2
      if (xPosHunter3 > 270) {
        flag3 = false
      } 
    }
  }
// let yPosBall = 110

  ctx.drawImage(pokBallCenter, xPosHunter2, yPosBall, 10, 10);
  if (yPosBall < 3) {
    yPosBall = 110
    
  }
  if (yPosBall > 0) {
    yPosBall -= 1
  }

  ctx.drawImage(pokBallLeft, xPosHunter1, yPosBallL, 10, 10);
  if (yPosBallL < 3) {
    yPosBallL = 110
    
  }
  if (yPosBallL > 0) {
    yPosBallL -= .5
  }

  ctx.drawImage(pokBallRigth, xPosHunter3, yPosBallR, 10, 10);
  if (yPosBallR < 3) {
    yPosBallR = 110
    
  }
  if (yPosBallR > 0) {
    yPosBallR -= .7
  }



  // if(xPosBird + bird.width >= pipe[i].x
  //   && xPosBird <= pipe[i].x + pipeUp.width
  //   && (yPosBird <= yPosBall + pipeUp.height
  //   || yPosBird + bird.height >= yPosBall + pipeUp.height + gap)) {
  //   location.reload(); // Перезагрузка страницы
  //   }

  requestAnimationFrame(draw);
}

hunter3.onload = draw;


