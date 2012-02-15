function info1() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
   //call aniBardrawGraph every 20 millisecond
  return setInterval(aniBardrawGraph, 20);
}

function info2(){
	canvas2 = document.getElementById("info2");
	ctx2 = canvas2.getContext("2d");
	drawShape(ctx2);
}

function init(){
	info2();
	info1();
}

// info 1
var myCanvas;
var ctx;
var offset=0;
var data = new Array(["sale1",89],["sale2",60],["sale3",75],["sale4",20],["sale5",100]);
function aniBardrawGraph() {
	ctx.fillStyle ='#00F';
	i=0;
	for(i=0;i<data.length;i++)
	{
		if(offset < data[i][1])
		{
			offset++;
			ctx.fillRect(15+i*30, 30+(100-offset), 20, offset);
		}
	}		
	
	//drawText
	j=0;
	for(j=0;j<data.length;j++)
	{
		 ctx.fillText(data[j][0], 10+j*30, 150);
	}
}

//info 2
function drawShape(ctx2) {
	// Create fill gradient


	// Fill the path
	//ctx.fllStyle = gradient;
	//ntext.fill();
	
	ctx2.strokeRect(20, 20, 100, 100);
	ctx2.fillRect(20,20, 29.9, 100);
	ctx2.strokeRect(10,10,120,120);
	ctx2.font = "25pt Arial";
	ctx2.strokeStyle = "Green";  					
	ctx2.strokeText("29.9%", 25, 85);  



}