$(function(){
  var c = document.getElementById('formcanvas');
  var ctx = c.getContext('2d');

  ctx.beginPath();
  ctx.fillStyle = '#0000ff';
  ctx.fillRect(0,0,400,400);
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth='3';
  ctx.fillStyle = 'white';
  ctx.moveTo(150,170);
  ctx.quadraticCurveTo(200,50,250,170);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth='3';
  ctx.fillStyle = 'grey';
  ctx.moveTo(100,200);
  ctx.quadraticCurveTo(200,280,300,200);
  ctx.quadraticCurveTo(200,120,100,200);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
});
