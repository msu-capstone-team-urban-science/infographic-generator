// var myCanvas;
// var ctx;
// var offset=0;
// var data = new Array(["sale1",89],["sale2",60],["sale3",75],["sale4",20],["sale5",100]);
var offset = 0;
//TODO : Put this in some common place for all the infographics to see
var monthname = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

function init(date)
{
    drawGraph01(date);	//Retail_Sale
    drawGraph02(date);	//Used_Vehicle_Sale
    drawGraph03(date);	//Cost_Per_Sale
    drawGraph04(date);	//Pump_In_Sale
    drawGraph05(date);	//Dealer_Retention01
    drawGraph06(date);	//Dealer_Retention02
    drawGraph07(date);	//Visit_Per_Customer01
    drawGraph08(date);	//Visit_Per_Customer02
    drawGraph09(date);	//Competitive_Segment_Sale
}

function drawGraph01(date)
{
    canvas = document.getElementById("Retail_Sale");
    ctx = canvas.getContext("2d");
    Retail_Sale(date);
    //call Retail_Sale every 20 millisecond
    //return setInterval(Retail_Sale, 20);
}

function drawGraph02(date)
{
	var kpiArray = SearchKPIByDate(date);
	var kpiData = "";

	for (var i = 0; i < kpiArray.length; i++)
	{
		if (kpiArray[i][0] == "Used_Vehicle_Sales")
		{
			kpiData = kpiArray[i][1];
			break;
		}
	}
	var data = [date, kpiData];
  Used_Vehicle_Sale("Used_Vehicle_Sale", data);
}

function drawGraph03(date)
{
    canvas = document.getElementById("Cost_Per_Sale");
    ctx3 = canvas.getContext("2d");
    var kpiArray = SearchKPIByDate(date);
    var kpiData = "";

    for (var i = 0; i < kpiArray.length; i++)
    {
        if (kpiArray[i][0] == "Cost_Per_Sale")
        {
            kpiData = kpiArray[i][1];
            break;
        }
    }
    Cost_Per_Sale(ctx3,[date, kpiData]);
}

function drawGraph04(date) // Need kpi names
{
    var kpiArray = SearchKPIByDate(date);
    var kpiData = new Array();

    for (var i = 0; i < kpiArray.length; i++)
    {
        if (kpiArray[i][0] == "Pump_In_Sales_Anytown_Automotive")
	    {
		    kpiData.push(["Anytown Automotive", kpiArray[i][1], "#ff9b00"]);
	    }
	    else if (kpiArray[i][0] == "Pump_In_Sale_Allan_Automart")
	    {
		    kpiData.push(["Allan Automart", kpiArray[i][1], "#f54c08"]);
	    }
	    else if (kpiArray[i][0] == "Pump_In_Sale_Jefferson_Automotive")
	    {
		    kpiData.push(["Jefferson Automotive", kpiArray[i][1], "#b4213f"]);
	    }
	    else if (kpiArray[i][0] == "Pump_In_Sale_Nestor_Auto_Center")
	    {
		    kpiData.push(["Nestor Auto Center", kpiArray[i][1], "#69039d"]);
	    }
	    else if (kpiArray[i][0] == "Pump_In_Sale_Diamond_Automotive")
	    {
		    kpiData.push(["Diamond Automotive", kpiArray[i][1], "#283577"]);
	    }
	    else if (kpiArray[i][0] == "Pump_In_Sale_Anthony_Motors")
	    {
		    kpiData.push(["Anthony Motors", kpiArray[i][1], "#66a5c7"]);
	    } 
    }

    Pump_In_Sale("Pump_In_Sale", 0, 0, 633, 400, kpiData);
}

function drawGraph05(date)
{
	var canvas = document.getElementById("Dealer_Retention01");
	var ctx4 = canvas.getContext("2d");
	DrawBox(ctx4, "Dealer", "Retention");
}

function drawGraph06(date) // Need KPI name
{
	var kpiArray = SearchKPIByDate(date);
	var kpiData = "";

	for (var i = 0; i < kpiArray.length; i++)
	{
		if (kpiArray[i][0] == "Dealer_Retention")
		{
			kpiData = kpiArray[i][1];
			break;
		}
	}
	DrawPie("Dealer_Retention02", 0, 0, 100, 100, kpiData);
}

function drawGraph07(date)
{
	canvas = document.getElementById("Visit_Per_Customer01");
	ctx5 = canvas.getContext("2d");
	DrawBox(ctx5, "Visit Per", "Customer");
}

function drawGraph08(date) // Need KPI name
{
	var kpiArray = SearchKPIByDate(date);
	var kpiData = "";

	for (var i = 0; i < kpiArray.length; i++)
	{
		if (kpiArray[i][0] == "Visits_Per_Customer")
		{
			kpiData = kpiArray[i][1];
			break;
		}
	}
	DrawPie("Visit_Per_Customer02", 0, 0, 100, 100, kpiData);
}

function drawGraph09(date)
{
    canvasT = document.getElementById("Competitive_Segment_Sale");
    ctxText = canvasT.getContext("2d");
    ctxText.fillStyle="white";
    data = new Array(["sale1",89],["sale2",60],["sale3",75],["sale4",20],["sale5",100]);
    //draw text
    k=0;
    for(k=0;k<data.length;k++)
    {
        ctxText.fillText(data[k][0], 0, 20+k*30);
        ctxText.fillText(data[k][1], 100+Math.floor(data[k][1]/10)*30, 20+k*30);
    }
    //Competitive_Segment_Sale(ctx6, data);
    //call Competitive_Segment_Sale every 20 millisecond
    return setInterval(Competitive_Segment_Sale, 20);
}


function Retail_Sale(date)
{
    img01 = new Image();
    img01.src = 'images/retail_car.png';
    var infoRet = SearchKPIByDate(date);
    var retVal;

    for (var i = 0; i < infoRet.length; i++)
    {
        if (infoRet[i][0] == "Retail_Sales")
        {
            retVal = infoRet[i][1];
        }
    }

    ctx.fillStyle="#EEEE00";
    //draw rectangle in the back of the image
    //x,y, width, height
    fillHeight= (retVal)/-4;
    if(fillHeight < -70)
    {
        fillHeight = -70;
    }
    ctx.fillStyle="white";
    ctx.fillRect(25, 110, 110, -70);
    ctx.fillStyle="#EEEE00";
    ctx.fillRect(25, 110, 110, fillHeight);	
    ctx.drawImage(img01, 0, 0, img01.width*2, img01.height*2);
    ctx.fillStyle="white";
    //draw text
    ctx.font = "bold 28pt Calibri";
    ctx.fillText(monthname[date.getMonth()], 51, 135);
    ctx.fillText(retVal, 47, 37);

}

function Used_Vehicle_Sale(c, d)
{
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");

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
    ctx.fillText(monthname[d[0].getMonth()], 45, 90);
    //data
    ctx.fillText(d[1], 70, 130);
}

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r)
{
    /*
    This function draw the rectangle with round corner
    parameter: x, y: position of the left top corner
			    w, h: width, height
			    r: radius of the corners
    */
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

function Cost_Per_Sale(ctx, d)
{
    var img02 = new Image();
    img02.src = 'images/cost_per_sale.png';

    ctx.fillStyle="green";
    //draw rectangle in the back of the image
    //x,y, width, height
    img02.onload= function()
    {
        ctx.drawImage(img02, 0, 0, img02.width*1.5, img02.height*1.5);
        ctx.fillStyle="green";
        //draw textChalkboard
        //ctx.font = "bold 18pt Quartz MS"; ///	windows only
        ctx.font = "bold 28pt MarkerFelt-Thin";
        ctx.fillText(monthname[d[0].getMonth()], 65, 117);
        ctx.font = "bold 38pt MarkerFelt-Thin";
        ctx.fillText(d[1], 65, 75);
    }
}

function Pump_In_Sale(c, x, y, w, h, d)
{
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

function DrawPie(c, x, y, w, h, d)
{

	// data format
	// 
	// accepts a percentage expressed as a decimal
	// example: DrawPie("myCanvas",0,0,100,100,.66); would display 66%

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
	context.fillText(((Math.round(d*1000))/10) + "%", text_offset, centerY + (text_size / 2));
}

function DrawBox(ctx, text1, text2)
{
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

function Competitive_Segment_Sale()
{
    canvas = document.getElementById("Competitive_Segment_Sale");
    ctx6 = canvas.getContext("2d");
    img03 = new Image();
    img03.src = 'images/car2.png';
    var data = new Array(["sale1",89],["sale2",60],["sale3",75],["sale4",20],["sale5",100]);
    ctx6.fillStyle ='#00F';

    i=0;
    for(i=0;i<data.length;i++)
    {
        position = Math.floor(data[i][1]/10);
        if(offset < position){
            offset+=0.05;
            ctx6.drawImage(img03, 70+offset*30, i*30, img03.width, img03.height);
            ctx6.clearRect(70+(offset-1)*30, i*30, img03.width, img03.height);
            if(offset >= position)
            {
                // ctx6.clearRect(70+(offset)*30, i*30, img03.width, img03.height);
                // offset=0;

                j=0;
                n=offset;
                //for(j=0;j<data.length;j++)
                //{
                n+=0.05;
	            ctx6.clearRect(70+(n)*30, i*30, img03.width, img03.height);
	
                //}
                offset=0;
            }
        }
    }
}
