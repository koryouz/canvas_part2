$(function(){
  var c = document.getElementById('formcanvas');
  var ctx = c.getContext('2d');

  // Corps

  ctx.beginPath();
  ctx.fillStyle='#976f0f';
  ctx.fillRect(400,250,200,450);
  ctx.closePath();

  // BOUTONS

  ctx.beginPath();
  ctx.arc(500,375,25,0,Math.PI*2,true);
  ctx.arc(500,475,25,0,Math.PI*2,true);
  ctx.fillStyle = 'purple';
  ctx.fill();
  ctx.closePath();

  // BRAS

  ctx.beginPath();
  ctx.strokeStyle='#976f0f';
  ctx.lineWidth = 80;
  ctx.moveTo(450, 250);
  ctx.lineTo(200, 250);
  ctx.moveTo(550, 250);
  ctx.lineTo(800, 250);
  ctx.stroke();
  ctx.closePath();

  // PIEDS


  ctx.beginPath();
  ctx.strokeStyle='white';
  ctx.lineWidth = 60;
  ctx.moveTo(500, 1000);
  ctx.lineTo(500, 700);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  ctx.moveTo(470,700);
  ctx.quadraticCurveTo(500,600,530,700);
  ctx.lineTo(470, 700);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle='#976f0f';
  ctx.lineWidth = 70;
  ctx.moveTo(435,700);
  ctx.lineTo(435, 800);
  ctx.moveTo(565,700);
  ctx.lineTo(565, 800);
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.closePath();

  //MAINS

  ctx.beginPath();
  ctx.lineWidth='3';
  ctx.strokeStyle = '#976f0f';
  ctx.fillStyle = '#976f0f';
  ctx.moveTo(200,288);
  ctx.quadraticCurveTo(50,250,200,212);
  ctx.moveTo(800,288);
  ctx.quadraticCurveTo(950,250,800,212);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Visage

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.arc(500,140,120,0,Math.PI*2,true);
  ctx.strokeStyle = '#976f0f';
  ctx.fillStyle = '#976f0f';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();


  // Yeux

  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.fillStyle='white';
  ctx.arc(460,110,18,0,Math.PI*2,false);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.fillStyle='white';
  ctx.arc(540,110,18,0,Math.PI*2,false);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  //Sourcils

  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.moveTo(445,75);
  ctx.quadraticCurveTo(460,60,475,75);
  ctx.moveTo(525,75);
  ctx.quadraticCurveTo(540,60,555,75);
  ctx.stroke();
  ctx.closePath();

  // BOUCHE

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(445,175);
  ctx.quadraticCurveTo(500,220,555,175);
  ctx.moveTo(445,175);
  ctx.quadraticCurveTo(500,190,555,175);
  ctx.stroke();
  ctx.closePath();

});
