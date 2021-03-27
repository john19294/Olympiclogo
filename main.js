



var canvas=document.getElementById("canvas1");


 ctx=canvas.getContext("2d");
color=["blue","yellow","brown","green","red"];

function canvasclick(e){
    var x=e.clientX-canvas.offsetLeft
    var y=e.clientY-canvas.offsetTop
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.strokeStyle="blue"
    ctx.arc(150,400,40,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.strokeStyle="yellow"
    ctx.arc(110,330,40,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.strokeStyle="black"
    ctx.arc(200,330,40,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.strokeStyle="green"
    ctx.arc(250,400,40,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.strokeStyle="red"
    ctx.arc(290,330,40,0,2*Math.PI);
    ctx.stroke();
   console.log("X:"+x+"Y:"+y)
}
    canvas.addEventListener("mousedown",canvasclick);



  
    
    
