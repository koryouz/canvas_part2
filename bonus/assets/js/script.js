$(function(){
  var c = document.getElementById('formcanvas');
  var ctx = c.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle='black';
  ctx.lineWidth = 6;
  ctx.moveTo(50, 100);
  ctx.lineTo(150, 100);
  ctx.moveTo(50, 250);
  ctx.lineTo(150, 250);
  ctx.moveTo(50, 400);
  ctx.lineTo(150, 400);
  ctx.moveTo(50, 100);
  ctx.lineTo(50, 400);
  ctx.moveTo(370, 100);
  ctx.lineTo(370, 400);
  ctx.moveTo(370, 100);
  ctx.lineTo(585, 400);
  ctx.moveTo(585, 100);
  ctx.lineTo(585, 400);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = '#ea4e1d';
  ctx.lineWidth = 16;
  ctx.moveTo(150,100);
  ctx.quadraticCurveTo(500,-100,300,200);
  ctx.moveTo(300, 200);
  ctx.lineTo(120, 475);
  ctx.moveTo(120,475);
  ctx.quadraticCurveTo(280,435  ,280,450);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.font = "30pt Verdana";
  ctx.fillStyle = "grey";
  ctx.fillText('École du Numérique',350,450);
  ctx.fillText('du Noyonnais',350,490);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle='#ebebeb';
  ctx.moveTo(675, 105);
  ctx.lineTo(655, 125);
  ctx.lineTo(655, 150);
  ctx.lineTo(675, 170);
  ctx.lineTo(695, 150);
  ctx.lineTo(695, 125);
  ctx.lineTo(675, 105);

  ctx.fill();
  ctx.closePath();

});
