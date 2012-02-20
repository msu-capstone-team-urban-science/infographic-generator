// var myCanvas;
// var ctx;
// var offset=0;
// var data = new Array(["sale1",89],["sale2",60],["sale3",75],["sale4",20],["sale5",100]);
var offset=0;
var stopPoint;
var stopPos=0;
var Comp_Seg_Sale_data = new Array(["Anytown Automotive",98],["Jeff Williams Toyota",167],["Uptown Honda",105],["Fred Rodges Mazda",103],["Garrett Ford",68],["Peter Lake Ford", 50]);
var customer_data = {'Single Visit Customer':567,'Recent Sales Customer':184,};
function init(){
	drawGraph01();	//Retail_Sale
	drawGraph02();	//Used_Vehicle_Sale
	drawGraph03();	//Cost_Per_Sale
	drawGraph04();	//Pump_In_Sale
	drawGraph05();	//Dealer_Retention01
	drawGraph06();	//Dealer_Retention02
	drawGraph07();	//Visit_Per_Customer01
	drawGraph08();	//Visit_Per_Customer02
	drawGraph09();	//Competitive_Segment_Sale
	drawGraph10();	//Lost_Profit
	drawGraph11();	//Lost_Sale
	drawGraph12();	//Customer
}

function drawGraph01() {
  canvas = document.getElementById("Retail_Sale");
  ctx = canvas.getContext("2d");
  Retail_Sale();
   //call Retail_Sale every 20 millisecond
  //return setInterval(Retail_Sale, 20);
}

function drawGraph02() {
  canvas = document.getElementById("Used_Vehicle_Sale");
  ctx2 = canvas.getContext("2d");
  Used_Vehicle_Sale(ctx2);
   //call Retail_Sale every 20 millisecond
  //return setInterval(Vehicle_Sale, 20);
}

function drawGraph03() {
  canvas = document.getElementById("Cost_Per_Sale");
  ctx3 = canvas.getContext("2d");
  Cost_Per_Sale(ctx3);
   //call Retail_Sale every 20 millisecond
  //return setInterval(Vehicle_Sale, 20);
}

function drawGraph04() {
	var superdata = new Array();
	superdata.push(["Nestor Auto Center", "38", "#69039d"]);
	superdata.push(["Diamond Automotive", "30", "#283577"]);
	superdata.push(["Anthony Motors", "23", "#66a5c7"]);
	superdata.push(["Anytown Automotive", "632", "#ff9b00"]);
	superdata.push(["Alan Autosmart", "398", "#f54c08"]);
	superdata.push(["Jefferson Automotive", "334", "#b4213f"]);
	Pump_In_Sale("Pump_In_Sale", 0, 0, 633, 400, superdata);
   //call Retail_Sale every 20 millisecond
  //return setInterval(Vehicle_Sale, 20);
}

function drawGraph05() {
	canvas = document.getElementById("Dealer_Retention01");
	ctx4 = canvas.getContext("2d");
	DrawBox(ctx4, "Dealer", "Retention");
}

function drawGraph06() {
	var percent = .299;
	DrawPie("Dealer_Retention02", 0, 0, 100, 100, percent);
}

function drawGraph07() {
	canvas = document.getElementById("Visit_Per_Customer01");
	ctx5 = canvas.getContext("2d");
	DrawBox(ctx5, "Visit Per", "Customer");
}

function drawGraph08() {
	var percent = .521;
	DrawPie("Visit_Per_Customer02", 0, 0, 100, 100, percent);
}

function drawGraph09() {
	canvasT = document.getElementById("Competitive_Segment_Sale");
	ctxText = canvasT.getContext("2d");
	ctxText.fillStyle="white";
	//data = new Array(["sale1",89],["sale2",60],["sale3",75],["sale4",20],["sale5",100]);
	//draw text
	k=0;
	for(k=0;k<Comp_Seg_Sale_data.length;k++)
	{
		ctxText.font = "bold 12pt Calibri";
		 ctxText.fillText(Comp_Seg_Sale_data[k][0], 0, 15+k*30);
		 ctxText.fillText(Comp_Seg_Sale_data[k][1], 210+Math.floor(Comp_Seg_Sale_data[k][1]/15)*30, 15+k*30);
	}
	//Competitive_Segment_Sale(ctx6, data);
   //call Competitive_Segment_Sale every 20 millisecond
  return setInterval(Competitive_Segment_Sale, 20);
}

function drawGraph10() {
	canvas = document.getElementById("Lost_Profit");
	ctx7 = canvas.getContext("2d");
	Lost_Profit(ctx7);	
}

function drawGraph11() {
	canvas = document.getElementById("Lost_Sale");
	ctx8 = canvas.getContext("2d");
	Lost_Sale(ctx8);	
}

function drawGraph12() {

	//Customer("Customer",w,h,c1,c2,title)	
	Customer("Customer",700,200,"#36648B","#FAF0E6");
}

function Retail_Sale(){
	img01 = new Image();
	img01.src = 'images/retail_car.png';
	
	//draw rectangle in the back of the image
	//x,y, width, height
	fillHeight= -20*((153)/80);
	if(fillHeight < -70)
	{
		fillHeight = -70;
	}
	img01.onload=function(){
		ctx.fillStyle="white";
		ctx.fillRect(25, 110, 110, -70);
		ctx.fillStyle="#EEEE00";
		ctx.fillRect(25, 110, 110, fillHeight);	
		ctx.fillStyle="#EEEE00";	
		ctx.drawImage(img01, 0, 0, img01.width*2, img01.height*2);
		ctx.fillStyle="white";
		//draw text
		ctx.font = "bold 28pt Calibri";
		ctx.fillText("Jan", 51, 135);
		ctx.fillText(153, 47, 37);
	}

}

function Used_Vehicle_Sale(ctx){
	//outer rectangle
	ctx.roundRect(10, 20, 150, 130, 5).stroke();
	//inner rectangle
	ctx.roundRect(15, 25, 140, 120, 5).stroke();
	//fill the inner rectangle
	ctx.fill();
	ctx.font = "bold 20pt Calibri";
	//color of the "FOR SALE" text
	ctx.fillStyle="#EEEE00";
	ctx.fillText("FOR SALE", 20, 50);
	ctx.fillStyle="white";
	//rectangle for date display
	ctx.fillRect(20,60,130, 35);
	//rectangle for data display
	ctx.fillRect(20,100,130, 35);
	ctx.fillStyle="black";
	//date
	ctx.fillText("Jan 12", 45, 90);
	//data
	ctx.fillText(64, 70, 130);
}
/*
	This function draw the rectangle with round corner
	parameter: x, y: position of the left top corner
				w, h: width, height
				r: radius of the corners
*/
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x+r, y);
  this.arcTo(x+w, y,   x+w, y+h, r);
  this.arcTo(x+w, y+h, x,   y+h, r);
  this.arcTo(x,   y+h, x,   y,   r);
  this.arcTo(x,   y,   x+w, y,   r);
  this.closePath();
  return this;
}

function Cost_Per_Sale(ctx){
	img02 = new Image();
	img02.src = 'images/cost_per_sale.png';

	ctx.fillStyle="#green";
	//draw rectangle in the back of the image
	//x,y, width, height
	img02.onload= function() {
		ctx.drawImage(img02, 0, 0, img02.width*1.5, img02.height*1.5);
		ctx.fillStyle="green";
		//draw textChalkboard
		//ctx.font = "bold 18pt Quartz MS"; ///	windows only
		ctx.font = "bold 28pt MarkerFelt-Thin";
		ctx.fillText("Jan", 65, 117);
		ctx.font = "bold 38pt MarkerFelt-Thin";
		ctx.fillText(189, 65, 75);
	}


}

function Pump_In_Sale(c, x, y, w, h, d){
	// BUG: bottom most text may extend over max defined width. if last
	// piece of data is small, allow some extra room on the canvas for
	// slightly overextended text.
	var canvas = document.getElementById(c);
	var context = canvas.getContext("2d");
	var blX = x;
	var blY = y + h;
	var trX = x + w;
	var trY = y;
	var midX = x + (w / 2);
	var midY = y + (h / 2);
	var controlX = x;
	var controlY = y;


	// find sum of all data for spacing
	var i = 0;
	var sum = 0;
	for (i = 0; i < d.length; i = i + 1)
	{
		sum = sum + parseInt(d[i][1]);
	}



	// draw first line of figure
	context.beginPath();
	context.moveTo(blX, blY);
	midY = y;
	context.quadraticCurveTo(controlX, midY, midX, midY);
	context.quadraticCurveTo(trX, midY, trX, trY);
	context.quadraticCurveTo(trX, blY, midX, h);
	context.quadraticCurveTo(controlX, h, blX, blY);
	context.strokeStyle = "#000000";
	context.fillStyle = d[0][2];
	context.fill();


	// draw lines to finish figure
	for (i = 0; i < d.length; i = i + 1)
	{
		context.beginPath();
		context.moveTo(blX, blY);
		var temp = ((d[i][1] / sum) * h)
		midY = midY + temp;
		context.quadraticCurveTo(controlX, midY, midX, midY);
		context.quadraticCurveTo(trX, midY, trX, trY);
		context.quadraticCurveTo(trX, blY, midX, h);
		context.quadraticCurveTo(controlX, h, blX, blY);

		if (i+1 == d.length)
		{
			context.fillStyle = d[i][2];
		}else
		{
			context.fillStyle = d[i+1][2];
		}
		context.strokeStyle = "black";
		context.fill();

		// Draw text
		var text_size = 10;
		context.font = "bold "+text_size + "pt Calibri";
		context.fillStyle = "#ffffff";
		context.fillText(d[i][0], (midX/3)*2.5, midY - temp/2 + text_size/2);
	}
}

function DrawPie(c, x, y, w, h, d) {
	var ringColor = "#000000";
	var highlightColor = "#ff0000";
	var textColor = "#ffffff";


	var canvas = document.getElementById(c);
	var context = canvas.getContext("2d");
	var counterclockwise = false;
	var centerX = (w / 2) + x;
	var centerY = (h / 2) + y;
	var i = 0;
	var thickWidth = w/10;
	var thinWidth = thickWidth/4;
	var radius = (w / 2) - thickWidth;


	// Draw thin ring
	context.beginPath();
	context.moveTo(centerX, centerY-radius);
	context.arc(centerX, centerY, radius, (Math.PI/2)*3, (Math.PI/2)*7, counterclockwise);
	context.lineWidth = thinWidth;
	context.strokeStyle = ringColor;
	context.shadowColor = ringColor;
	context.shadowBlur = 2;
	context.stroke();


	// Draw thick ring
	context.beginPath();
	context.arc(centerX, centerY, radius, (Math.PI/2)*3, (d*2*Math.PI) + ((Math.PI/2)*3), counterclockwise);
	context.lineWidth = thickWidth;
	context.shadowColor = highlightColor;
	context.shadowBlur = 2;
	context.strokeStyle = highlightColor;
	context.stroke();


	// Draw text
	var text_offset = centerX - radius + thickWidth;
	var text_size = w/5;
	context.font = text_size + "pt Calibri";
	context.shadowColor = textColor;
	context.shadowBlur = 2;
	context.fillStyle = textColor;
	context.fillText((d*100) + "%", text_offset, centerY + (text_size / 2));
}

function DrawBox(ctx, text1, text2){
	// Create fill gradient


	// Fill the path
	//ctx.fllStyle = gradient;
	//ntext.fill();
	
	ctx.strokeRect(20, 20, 100, 100);
	var grd=ctx.createLinearGradient(20,20, 59.9, 100);

	grd.addColorStop(0,"purple");

	grd.addColorStop(1,"red");

	ctx.fillStyle=grd;
	ctx.fillRect(20,20, 29.9, 100);
	ctx.strokeRect(10,10,120,120);
	ctx.font = "16pt Arial";

	ctx.shadowColor = "white";
	ctx.shadowBlur = 2;
	ctx.fillStyle = "white";
	ctx.fillText(text1, 25, 60);
	ctx.fillText(text2, 25, 90);
}

function Competitive_Segment_Sale(){
	canvas = document.getElementById("Competitive_Segment_Sale");
	ctx6 = canvas.getContext("2d");
	img03 = new Image();
	img03.src = 'images/car2.png';
	//var data = new Array(["sale1",89],["sale2",60],["sale3",75],["sale4",20],["sale5",100]);
	ctx6.fillStyle ='#00F';
	
	i=0;
	for(i=0;i<Comp_Seg_Sale_data.length;i++)
	{
		position = Math.floor(Comp_Seg_Sale_data[i][1]/15);
		if(offset < position){
			offset+=0.05;
			ctx6.drawImage(img03, 180+offset*30, i*30, img03.width, img03.height);
			ctx6.clearRect(180+(offset-1)*30, i*30, img03.width, img03.height);
			if(offset >= position)
			{
				stopPoint[stopPos]=offset;
				stopPos++;
				
				//TODO animation
				// ctx6.clearRect(70+(offset)*30, i*30, img03.width, img03.height);
				
				
				
				// n=offset;
				//for(j=0;j<data.length;j++)
				//{
				// n+=0.05;
					// ctx6.clearRect(70+(n)*30, i*30, img03.width, img03.height);
					
				//}
				// offset=0;
			}
			
		}
		// if(stopPos-1 >= data.length)
		// {
			// alert(offset);
			// offset=0;
			// j=0;
			// for(j=0;j<data.length;j++)
			// {
				// ctx6.clearRect(70+(stopPoint[j])*30, j*30, img03.width, img03.height);
			// }
		// }
		// else
		// {
			// j=0;
			// n=offset-10;
			// for(j=0;j<data.length;j++)
			// {
				// n+=0.01;
				//ctx6.clearRect(70+(n)*30, j*30, img03.width, img03.height);
				
			// }
			// offset=0;
		//}
		
	}
	
	// j=0;
	// for(j=0;j<data.length;j++)
	// {
		// ctx6.clearRect(70+(stopPoint[j])*30, j*30, img03.width, img03.height);
	// }
}

function Lost_Profit(context){
	var lineWidth = 8;
	var innerBorder = 5;
	var primaryColor = "#ffc821";
	var secondaryColor = "#faf100";
	var tertiaryColor = "#dcaa09";
	// Load the context of the canvas

	var width = 200;
	var height = 200;
	var padding = 20;

	// Create a triangluar path
	context.beginPath();
	context.moveTo(padding + width/2, padding);
	context.lineTo(padding + width, height + padding);
	context.lineTo(padding, height + padding);
	context.closePath();

	// Create fill gradient
	var gradient = context.createLinearGradient(0,0,0,height);
	gradient.addColorStop(0, primaryColor);
	gradient.addColorStop(1, secondaryColor);

	// Add a shadow around the object
	context.shadowBlur = 10;
	context.shadowColor = "black";

	// Stroke the outer outline
	context.lineWidth = lineWidth * 2;
	context.lineJoin = "round";
	context.strokeStyle = gradient;
	context.stroke();

	// Turn off the shadow, or all future fills will have shadows
	context.shadowColor = "transparent";

	// Fill the path
	context.fillStyle = gradient;
	context.fill();

	// Add a horizon reflection with a gradient to transparent
	gradient=context.createLinearGradient(0,padding,0,padding+height);
	gradient.addColorStop(0, "transparent");
	gradient.addColorStop(0.5, "transparent");
	gradient.addColorStop(0.5, tertiaryColor);
	gradient.addColorStop(1, secondaryColor);

	context.fillStyle = gradient;
	context.fill();

	// Stroke the inner outline
	context.lineWidth = lineWidth;
	context.lineJoin = "round";
	context.strokeStyle = "#333";
	context.stroke();

	// Draw the text exclamation point
	context.font = "40px Arial";
	context.fillStyle = "red";
	context.fillText("$"+886388, 190, 100);
	
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.font = "bold 80px 'Times New Roman', Times, serif";
	context.fillStyle = "#333";
	try{
	context.fillText("!", padding + width/2, padding + height/1.5);
	}catch(ex){}
	
}

function Lost_Sale(ctx){
	img04 = new Image();
	img04.src = 'images/puzzle.png';
	img04.onload=function(){
		ctx.drawImage(img04, 0, 0, img04.width, img04.height);
		ctx.font = "bold 34pt Calibri";
		ctx.fillText("LOST", 110, 30);
		ctx.fillText("SALE", 120, 70);
		ctx.fillStyle="white";
		ctx.fillText("LOST", 111, 28);
		ctx.fillText("SALE", 121, 68);
		ctx.fillStyle="black";
		ctx.font = "bold 40pt Calibri";
		ctx.fillText(449, 155, 120);
	}
}


function Customer(div,w,h,c1,c2){

	//Adjust chart width and height
	w=w-20; h=h-50;
	var c=document.getElementById(div);
	// Check the element is in the DOM and the browser supports canvas
	if(c.getContext) {
	var ctx7=c.getContext("2d");
	var max = 0; //Innitialise maximum bar height to zero
	var len=0; //Innitialise no of bars to zero
	sum = 0;
	for(key in customer_data)
	{
	if(customer_data[key] > max) max = customer_data[key];
	sum += customer_data[key];
	len++;
	}
	var border = 4; //Changing the border mar distort the graph
	var bar_h = (h-border)/len;
	var gradient = ctx7.createLinearGradient(w/2, 50, w/2, h);
	gradient.addColorStop(0, '#000');
	gradient.addColorStop(0.1, '#eee');
	gradient.addColorStop(0.5, '#fff');
	gradient.addColorStop(1, '#000');

	max = max - border;
	txtArea = w*0.2*1.7;
	full = w -(border*2)-txtArea;
	ctx7.strokeStyle='#fff';
	ctx7.save();

	ctx7.shadowOffsetX = border/2;
	ctx7.shadowOffsetY = border/2;
	ctx7.shadowBlur = border/2;
	ctx7.shadowColor = "black";
	ctx7.fillStyle=c1;
	n=0;
	for(key in customer_data)
	{
	ctx7.fillRect(border+txtArea,(border*2)+(bar_h*n),(customer_data[key]/max)*full,bar_h-border);
	n++;
	}

	ctx7.shadowColor = "white";
	n=0;
	for(key in customer_data)
	{
	ctx7.strokeRect(border+txtArea,(border*2)+(bar_h*n),(customer_data[key]/max)*full,bar_h-border);
	n++;
	}

	ctx7.shadowOffsetX = border/-2;
	n=0;
	for(key in customer_data)
	{
	ctx7.strokeRect(border+txtArea,(border*2)+(bar_h*n),((customer_data[key]/max)*full),bar_h-border);
	n++;
	}
	ctx7.shadowOffsetY = border/-2;
	n=0;
	for(key in customer_data)
	{
	ctx7.strokeRect(border+txtArea,(border*2)+(bar_h*n),((customer_data[key]/max)*full),bar_h-border);
	n++;
	}
	ctx7.restore();

	ctx7.save();
	ctx7.font = 'bold 18px sans-serif';
	ctx7.shadowOffsetX = 1;
	ctx7.shadowOffsetY = 1;
	ctx7.shadowBlur = 1;
	ctx7.shadowColor = "black";
	n=0;
	for(key in customer_data)
	{
	ctx7.fillStyle=c2;
	ctx7.fillText(key, (border+10), (border*2)+(bar_h*n)+(bar_h/1.8),txtArea-15);
	ctx7.font = 'bold 18px sans-serif';
	ctx7.fillText(customer_data[key],(border+10+txtArea), (border*2)+(bar_h*n)+(bar_h/1.8),full);
	n++;
	}
	ctx7.restore();
	}
}
























