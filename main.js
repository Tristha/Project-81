ccanvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(100 , 200 , 90 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(200 , 300 , 90 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(300 , 200 , 90 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(400 , 300 , 90 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="crimson";
ctx.lineWidth=5;
ctx.arc(500 , 200 , 90 , 0 , 2*Math.PI);
ctx.stroke();
