$(function(){
  var c = document.getElementById('formcanvas');
  var ctx = c.getContext('2d');


  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(150,300);
  ctx.lineTo(200,100);
  ctx.closePath();
  ctx.fillStyle = 'lightblue';
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth='3';
  ctx.fillStyle = 'red';
  ctx.strokeStyle='black';
  ctx.moveTo(100,100);
  ctx.quadraticCurveTo(150,-50,200,100);
  ctx.stroke();
  ctx.fill();
});
