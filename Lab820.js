window.onload = init;
function init(){
  cnv = document.getElementById('cnv');
  cnv.width = window.innerWidth;
  cnv.height = window.innerHeight;
  cnv.style.border = "solid black 2px";
  cnv.style.backgroundColor = "rgba(0, 44, 55, .5)";
  ctx = cnv.getContext('2d');
  animate();
}

var x = []
var y = []
var dx = []
var dy = []
var radius = 30
for(var a = 0; a < 10; a++){
  x[a] = Math.random()*window.innerWidth;
  y[a] = Math.random()*window.innerHeight;
  dx[a] = Math.random()*10 - 5;
  dy[a] = Math.random()*10 - 5;
}
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'blue';
  for(var a = 0; a < 10; a++){
    ctx.beginPath();

    ctx.arc(x[a], y[a], radius, Math.PI*2, 0, false);
    ctx.fill();
    ctx.stroke();

    x += dx;
    y += dy;
      if(x[a] > window.innerWidth || x[a] < 0) dx[a] = -(dx[a] - Math.random()*3);
      if(y[a] > window.innerHeight || y[a] < 0) dy[a] = -(dy[a] - Math.random()*3);
  }
}
