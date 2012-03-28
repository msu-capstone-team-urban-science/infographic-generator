function Retail_Sale(c, x, y, w, h, d) {
    // d = [date, display value]
    var date = d[0];
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.scale(w/77,h/76);
    x = x/(w/77);
    y = y/(h/76);
    var img01 = new Image();
    img01.src = 'images/retail_car.png';

    //draw rectangle in the back of the image
    //x,y, width, height
    var fillHeight = (d[1]) / -4;
    if (fillHeight < -70) {
        fillHeight = -70;
    }
    ctx.fillStyle = "white";
    ctx.fillRect(x+25, y+110, 110, -70);
    ctx.fillStyle = "#EEEE00";
    ctx.fillRect(x+25, y+110, 110, fillHeight);
    img01.onload = function () {
        ctx.drawImage(img01, x, y, img01.width * 2, img01.height * 2);
        ctx.fillStyle = "white";
        //draw text
        ctx.font = "bold 28pt Calibri";
        ctx.fillText(monthname[date.getMonth()], x+51, y+135);
        ctx.fillText(d[1], x+47, y+37);
    }
    ctx.restore();
}


function Used_Vehicle_Sale(c, x, y, w, h, d) {
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.scale(w/150,h/130);
    x = x/(w/150);
    y = y/(h/130);

    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    //outer rectangle
    ctx.roundRect(x+0, y, 150, 130, 5);
    ctx.stroke();
    //inner rectangle
    ctx.roundRect(x+5, y+5, 140, 120, 5).stroke();
    //fill the inner rectangle
    ctx.fill();
    ctx.beginPath();
    //color of the "FOR SALE" text
    ctx.font = "bold 20pt Calibri";
    ctx.fillStyle = "#EEEE00";
    ctx.fillText("FOR SALE", x+10, y+30);

    ctx.beginPath();
    ctx.fillStyle = "white";
    //rectangle for date display
    ctx.fillRect(x+10, y+40, 130, 35);
    //rectangle for data display
    ctx.fillRect(x+10, y+80, 130, 35);


    ctx.fillStyle = "black";

    //date
    ctx.fillText(monthname[d[0].getMonth()] +" "+d[0].getFullYear().toString().substr(2, 3), x+35, y+70);
    //data
    ctx.fillText(d[1], x+60, y+110);
    ctx.restore();
}



CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    /*
    This function draw the rectangle with round corner
    parameter: x, y: position of the left top corner
    w, h: width, height
    r: radius of the corners
    */
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
}

function Cost_Per_Sale(c, x, y, w, h, d) {
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.scale(w/122,h/80);
    x = x/(w/122);
    y = y/(h/80);

    var img02 = new Image();
    img02.src = 'images/cost_per_sale.png';

    ctx.fillStyle = "green";
    //draw rectangle in the back of the image
    //x,y, width, height
    img02.onload = function () {
        ctx.drawImage(img02, x, y, img02.width * 1.5, img02.height * 1.5);
        ctx.fillStyle = "green";
        //draw textChalkboard
        //ctx.font = "bold 18pt Quartz MS"; ///	windows only
        ctx.font = "bold 28pt MarkerFelt-Thin";
        ctx.fillText(monthname[d[0].getMonth()], x+65, y+117);
        ctx.font = "bold 38pt MarkerFelt-Thin";
        ctx.fillText(d[1], x+65, y+75);
    }
    ctx.restore();
}


// Name: Pump_In_Sale
// Author: Louis Bodnar
function Pump_In_Sale(c, x, y, w, h, d) {
	//clearCanvas(c);
    // BUG: bottom most text may extend over max defined width. if last
    // piece of data is small, allow some extra room on the canvas for
    // slightly overextended text.

    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
    context.save()
    var blX = x; // bottom left
    var blY = y + h;
    var trX = x + w; // top right
    var trY = y;
    var midX = x + (w / 2);
    var midY = y + (h / 2);
    var controlX = x;
    var controlY = y;

    d.sort(); // puts the smallest data on top

    // find sum of all data for spacing
    var i = 0;
    var sum = 0;
    for (i = 0; i < d.length; i = i + 1) {
        sum = sum + parseInt(d[i][0]);
    }

    // draw first line of figure
    context.beginPath();
    context.moveTo(blX, blY);
    midY = y;
    context.quadraticCurveTo(controlX, midY, midX, midY);
    context.quadraticCurveTo(trX, midY, trX, trY);
    context.quadraticCurveTo(trX, blY, midX, blY);
    context.quadraticCurveTo(controlX, blY, blX, blY);
    context.fillStyle = d[0][2];
    context.fill();


    // draw lines to finish figure
    for (i = 0; i < d.length; i = i + 1) {
        context.beginPath();
        context.moveTo(blX, blY);
        var temp = ((d[i][0] / sum) * h)
        midY = midY + temp;
        context.quadraticCurveTo(controlX, midY, midX, midY);
        context.quadraticCurveTo(trX, midY, trX, trY);
        context.quadraticCurveTo(trX, blY, midX, blY);
        context.quadraticCurveTo(controlX, blY, blX, blY);

        if (i + 1 == d.length) {
            context.fillStyle = d[i][2];
        } else {
            context.fillStyle = d[i + 1][2];
        }
        context.fill();

        // Draw text
        var text_size = 14;
        if (temp < text_size) {
            text_size = temp;
        }
        if (text_size < 8) {
            text_size = 8;
        }
        context.font = "bold " + text_size + "pt Calibri";
        context.fillStyle = "#ffffff";
        context.fillText(d[i][1], x + (w*11/24), midY - temp / 2 + text_size / 2);
    }
    context.restore();
}



// Name: DrawSection
// Author: Louis Bodnar
function DrawSection (c, x, y, w, h, d)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
    context.save();

    var sectionColor = d[1]; // this is the color of the section bubble blurb thingy
    var pointerHeight = 44; // this is the height of the little top thingy
    var pointerDistance = d[0]; // this is the distance from x where the pointer will be placed
    var cornerCurveSize = 33; // this is the radius of the corner curve


    // draw section
    context.beginPath();
    context.moveTo(x, y + pointerHeight + cornerCurveSize);
    
    // left side
    context.lineTo(x, y+h);

    // bottom
    context.lineTo(x + w, y + h);

    // right side
    context.lineTo(x + w, y + pointerHeight + cornerCurveSize);

    // check if pointer is too far right
    if (pointerDistance + pointerHeight > w - cornerCurveSize)
    {

        // top right corner
        context.quadraticCurveTo(x + w, y + pointerHeight, x + w - ((x + w - pointerDistance) / 2), y + pointerHeight);

        // pointer right side
        context.quadraticCurveTo(x + pointerDistance, y + pointerHeight, x + pointerDistance, y);
    }
    else
    {
        // top right corner
        context.quadraticCurveTo(x + w, y + pointerHeight, x + w - cornerCurveSize, y + pointerHeight);

        // top line right side
        context.lineTo(x + pointerDistance + pointerHeight, y + pointerHeight);

        // pointer right side
        context.quadraticCurveTo(x + pointerDistance, y + pointerHeight, x + pointerDistance, y);
    }

    // check if pointer is too far left
    if (pointerDistance - pointerHeight < cornerCurveSize)
    {
        // pointer left side
        context.quadraticCurveTo(x + pointerDistance, y + pointerHeight, x + (pointerDistance / 2), y + pointerHeight);

        // top left corner
        context.quadraticCurveTo(x, y + pointerHeight, x, y + pointerHeight + cornerCurveSize);

    }
    else
    {
        // pointer left side
        context.quadraticCurveTo(x + pointerDistance, y + pointerHeight, x + pointerDistance - pointerHeight, y + pointerHeight);

        // top line left side
        context.lineTo(x + cornerCurveSize, y + pointerHeight);

        // top left corner
        context.quadraticCurveTo(x, y + pointerHeight, x, y + pointerHeight + cornerCurveSize);
    }


    // end draw stuff
    context.closePath();
    context.fillStyle = sectionColor;
    context.fill();
    context.restore();

}




// Name: DrawCloud
// Author: Louis Bodnar
function DrawCloud (c, x, y, w, h)
{
    // BUG: Need to add raindrops
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

    context.save();

    // draw cloud
    context.beginPath();
    context.moveTo(40*(w/430)+x, 75*(h/180)+y);
    context.bezierCurveTo(x,             95*(h/180)+y,  x,             145*(h/180)+y, 100*(w/430)+x, 145*(h/180)+y);
    context.bezierCurveTo(120*(w/430)+x, 175*(h/180)+y, 190*(w/430)+x, 175*(h/180)+y, 210*(w/430)+x, 145*(h/180)+y);
    context.bezierCurveTo(290*(w/430)+x, 145*(h/180)+y, 290*(w/430)+x, 115*(h/180)+y, 260*(w/430)+x, 95*(h/180)+y);
    context.bezierCurveTo(300*(w/430)+x, 35*(h/180)+y,  240*(w/430)+x, 25*(h/180)+y,  210*(w/430)+x, 45*(h/180)+y);
    context.bezierCurveTo(190*(w/430)+x, y,             120*(w/430)+x, 15*(h/180)+y,  120*(w/430)+x, 45*(h/180)+y);
    context.bezierCurveTo(70*(w/430)+x,  y,             20*(w/430)+x,  15*(h/180)+y,  40*(w/430)+x,  75*(h/180)+y);
    context.closePath();

    // make gradient
    var grd = context.createRadialGradient(238*(w/430)+x, 50*(h/180)+y, 10*(w/430), 238*(w/430)+x, 50*(h/180)+y, 200*(w/430));
    grd.addColorStop(0, "#dddddd"); // light grey
    grd.addColorStop(1, "#555555"); // dark grey
    context.fillStyle = grd;
    context.fill();
    context.restore();

}



// Name: DrawSun
// Author: Louis Bodnar
function DrawSun (c, x, y, r)
{
    // BUG: Need to add sunbeams
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
    context.save();

    var centerX = x;
    var centerY = y;
    var radius = r; 

    context.beginPath();
    context.arc(centerX, centerY, r, 0, 2 * Math.PI, false);
    context.fillStyle = "#FFEF00";
    context.fill();
    context.restore();
}


// Name: DrawX
// Author: Louis Bodnar
function DrawX (c, x, y)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
    context.save();

    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.lineWidth = 1;
    context.strokeStyle = "#ff0000";
    context.stroke();

    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.lineWidth = 1;
    context.strokeStyle = "#ff0000";
    context.stroke();
    context.restore();

}



// Name: DrawHouse
// Author: Louis Bodnar
function DrawHouse (c, x, y, h)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
    context.save();

    var houseColor = "#C04000";
    var windowColor = "#F0F8FF";
    var doorColor = "#808080";

    // draw house
    context.beginPath();
    context.moveTo(2*(h/10)+x,8*(h/10)+y);
    context.lineTo(2*(h/10)+x,3*(h/10)+y);
    context.lineTo(0*(h/10)+x,3*(h/10)+y);
    context.lineTo(2*(h/10)+x,1*(h/10)+y);
    context.lineTo(6*(h/10)+x,1*(h/10)+y);
    context.lineTo(6*(h/10)+x,0*(h/10)+y);
    context.lineTo(7*(h/10)+x,0*(h/10)+y);
    context.lineTo(7*(h/10)+x,1*(h/10)+y);
    context.lineTo(8*(h/10)+x,1*(h/10)+y);
    context.lineTo(10*(h/10)+x,3*(h/10)+y);
    context.lineTo(8*(h/10)+x,3*(h/10)+y);
    context.lineTo(8*(h/10)+x,8*(h/10)+y);
    context.fillStyle = houseColor;
    context.fill();

    // draw left window
    context.beginPath();
    context.moveTo(3*(h/10)+x,3*(h/10)+y);
    context.lineTo(4*(h/10)+x,3*(h/10)+y);
    context.lineTo(4*(h/10)+x,4*(h/10)+y);
    context.lineTo(3*(h/10)+x,4*(h/10)+y);
    context.fillStyle = windowColor;
    context.fill();

    // draw right window
    context.beginPath();
    context.moveTo(6*(h/10)+x,3*(h/10)+y);
    context.lineTo(7*(h/10)+x,3*(h/10)+y);
    context.lineTo(7*(h/10)+x,4*(h/10)+y);
    context.lineTo(6*(h/10)+x,4*(h/10)+y);
    context.fillStyle = windowColor;
    context.fill();

    // draw door
    context.beginPath();
    context.moveTo(5*(h/10)+x,6*(h/10)+y);
    context.lineTo(6*(h/10)+x,6*(h/10)+y);
    context.lineTo(6*(h/10)+x,8*(h/10)+y);
    context.lineTo(5*(h/10)+x,8*(h/10)+y);
    context.fillStyle = doorColor;
    context.fill();
    context.restore();
}


// Name: DrawPerson
// Author: Louis Bodnar
function DrawPerson (c, x, y, h)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
    context.save();

    var lineWidth = h/10;
    var headRadius = h/10;

    // draw head
    context.beginPath();
    context.arc(x+lineWidth*2.4, y+headRadius, headRadius * .95, 0, 2 * Math.PI, false);
    context.fillStyle = "#000000";
    context.fill();

    // draw left leg
    context.beginPath();
    context.moveTo(x + lineWidth*1.65, y+h*3/5);
    context.lineTo(x + lineWidth*1.65, y+h);
    context.lineWidth = lineWidth;
    context.lineCap = "round";
    context.strokeStyle = "#000000";
    context.stroke();

    // draw right leg
    context.beginPath();
    context.moveTo(x+lineWidth*3.15, y+h*3/5);
    context.lineTo(x+lineWidth*3.15, y+h);
    context.lineWidth = lineWidth;
    context.lineCap = "round";
    context.strokeStyle = "#000000";
    context.stroke();

    // draw body
    context.beginPath();
    context.moveTo(x+lineWidth*2.4, y+headRadius*2);
    context.lineTo(x+lineWidth*2.4, y+h*3/5);
    context.lineWidth = lineWidth*5/2;
    context.lineCap = "butt";
    context.strokeStyle = "#000000";
    context.stroke();

    // draw left arm
    context.beginPath();
    context.moveTo(x+lineWidth*.5, y+headRadius*2+lineWidth/2);
    context.lineTo(x+lineWidth*.5, y+h*3/5);
    context.lineWidth = lineWidth*4/5;
    context.lineCap = "round";
    context.strokeStyle = "#000000";
    context.stroke();

    // draw right arm
    context.beginPath();
    context.moveTo(x+lineWidth*4.3, y+headRadius*2+lineWidth/2);
    context.lineTo(x+lineWidth*4.3, y+h*3/5);
    context.lineWidth = lineWidth*4/5;
    context.lineCap = "round";
    context.strokeStyle = "#000000";
    context.stroke();

    context.restore();
}

// Name: DrawStripes
// Author: Louis Bodnar
function DrawStripes(c, x, y, w, h, d) 
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

    context.save();
    //context.fillStyle = "#dddddd";
    //context.fillRect(x, y, w, h);
    var stripeWidth = 9;
    context.lineWidth = 1;
    //context.fillStyle = "#74c043";
    context.fillStyle = d;
    var i = 0;
    for (i = 0-h; i < w; i = (i + (stripeWidth*2)))
    {
        context.beginPath();
        if (i < 0)
        {
            context.moveTo(x, y - i);
            context.lineTo(x, y-i - stripeWidth);
            context.lineTo(x + i + stripeWidth + h, y + h);
            context.lineTo(x + i + h, y + h);
            context.lineTo(x, y-i);
        }else if(i+h < w)
        {
            context.moveTo(x + i, y);
            context.lineTo(x + i + stripeWidth, y);
            context.lineTo(x + i + stripeWidth + h, y + h);
            context.lineTo(x + i + h, y + h);
            context.lineTo(x + i, y);
        }else
        {
            context.moveTo(x + i, y);
            context.lineTo(x + i + stripeWidth, y);
            context.lineTo(x + w, y + h - (i + h - w)- stripeWidth);
            context.lineTo(x + w, y + h - (i + h - w));
            context.lineTo(x + i, y);
        }
        context.closePath();
        context.fill();
    }

    context.restore();
}

// Name: DrawPie
// Author: Louis Bodnar
function DrawPie(c, x, y, w, h, d) {
	//clearCanvas(c);
    // data format
    // 
    // accepts a percentage expressed as a decimal
    // example: DrawPie("myCanvas",0,0,100,100,.66); would display 66%

    var ringColor = "#000000";
    var highlightColor = "#ff0000";
    var textColor = "#ffffff";


    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
    context.save();
    var counterclockwise = false;
    var centerX = (w / 2) + x;
    var centerY = (h / 2) + y;
    var i = 0;
    var thickWidth = w / 10;
    var thinWidth = thickWidth / 4;
    var radius = (w / 2) - thickWidth;


    // Draw thin ring
    context.beginPath();
    context.moveTo(centerX, centerY - radius);
    context.arc(centerX, centerY, radius, (Math.PI / 2) * 3, (Math.PI / 2) * 7, counterclockwise);
    context.lineWidth = thinWidth;
    context.strokeStyle = ringColor;
    context.shadowColor = ringColor;
    context.shadowBlur = 2;
    context.stroke();


    // Draw thick ring
    context.beginPath();
    context.arc(centerX, centerY, radius, (Math.PI / 2) * 3, (d * 2 * Math.PI) + ((Math.PI / 2) * 3), counterclockwise);
    context.lineWidth = thickWidth;
    context.shadowColor = highlightColor;
    context.shadowBlur = 2;
    context.strokeStyle = highlightColor;
    context.stroke();


    // Draw text
    var text_offset = centerX - radius + thickWidth;
    var text_size = w / 5;
    context.font = text_size + "pt Calibri";
    context.shadowColor = textColor;
    context.shadowBlur = 2;
    context.fillStyle = textColor;
    context.fillText(((Math.round(d * 1000)) / 10) + "%", text_offset, centerY + (text_size / 2));

    context.restore();
}


// Name: DrawBox
// Author: Peter Chen
function DrawBox(c, x, y, w, h, d) {
	//clearCanvas(c);
    // Create fill gradient
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
    ctx.save();

    ctx.scale(w/120,h/120);
    x = x/(w/120);
    y = y/(h/120);
    var text1 = d[0];
    var text2 = d[1];
    // Fill the path
    //ctx.fllStyle = gradient;
    //ntext.fill();

    ctx.strokeRect(x+10, y+10, 100, 100);
    var grd = ctx.createLinearGradient(x+10, y+10, 59.9, 100);

    grd.addColorStop(0, "purple");

    grd.addColorStop(1, "red");

    ctx.fillStyle = grd;
    ctx.fillRect(x+10, y+10, 29.9, 100);
    ctx.strokeRect(x, y, 120, 120);
    ctx.font = "16pt Arial";

    ctx.shadowColor = "white";
    ctx.shadowBlur = 2;
    ctx.fillStyle = "white";
    ctx.fillText(text1, x+15, y+50);
    ctx.fillText(text2, x+15, y+80);
    ctx.restore();
}

// Name: DrawCompetitiveSegmentSale
// Author: Lok Cheung
function DrawCompetitiveSegmentSale(c,x,y,w,h,Comp_Seg_Sale_data) {

    var canvas = document.getElementById(c);
    var ctx6 = canvas.getContext("2d");

    Comp_Seg_Sale_data.sort(SortCompetitiveSegmentSale);
    //Comp_Seg_Sale_data.reverse();


    var textWidth = 180;
    var lineSpacing = 4;
    var img03 = new Image();

    img03.onload = function () {
	    ctx6.save();
	    ctx6.scale(w/700,h/200);
	    x = x/(w/700);
	    y = y/(h/200);
        ctx6.fillStyle = "#ffffff";
        ctx6.font = "bold " + img03.height - lineSpacing + "pt Calibri";

        for (var i = 0; i < Comp_Seg_Sale_data.length; i++)
        {
            var barWidth = Math.floor((Comp_Seg_Sale_data[i][0]/Comp_Seg_Sale_data[0][0])*(700 - textWidth - img03.width));

            ctx6.drawImage(img03, x + textWidth + barWidth, y + i * (img03.height + lineSpacing));

            ctx6.fillRect(x + textWidth, y + i * (img03.height + lineSpacing), barWidth, img03.height);
            //draw KPI_Name
            ctx6.fillText(Comp_Seg_Sale_data[i][1], x, y + img03.height + i * (img03.height + lineSpacing));
            //draw KPI_Data
            ctx6.fillText(Comp_Seg_Sale_data[i][0], x + textWidth + barWidth + 4, y + img03.height + i * (img03.height + lineSpacing));

        }
        ctx6.restore();
    }
    img03.src = 'images/car2.png';
    //var s = setTimeout(Competitive_Segment_Sale(Comp_Seg_Sale_data),20);
}


// Name: Competitive_Segment_Sale_findMax
// Author: Lok Cheung
// Purpose: Support function for DrawCompetitiveSegmentSale
function SortCompetitiveSegmentSale(a, b)
{
return b[0] - a[0];
}


// Name: iniStopPos
// Author: Lok Cheung
// Purpose: Support function for DrawCompetitiveSegmentSale
function iniStopPos(array) {
    var final_pos = new Array();
    for (var i = 0; i < array.length; i++) {
        final_pos[i] = Math.floor(array[i][1] / 12);
    }
    return final_pos;
}

// Name: DrawLostSale
// Author: Lok Cheung
function DrawLostSale(c, x, y, w, h, d) {
	//clearCanvas(c);
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");

    var img04 = new Image();
	
    img04.onload = function () {
        ctx.save();
	    ctx.scale(w/236,h/230);
	    x = x/(w/236);
	    y = y/(h/230);
        ctx.drawImage(img04, x, y);
        ctx.font = "bold 34pt Calibri";
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#000000";
        ctx.shadowBlur = 6;
        ctx.fillText("Lost", x+120, y+38);
        ctx.fillText("Sales", x+120, y+78);

        ctx.font = "bold 40pt Calibri";
        ctx.fillText(d, x+155, y+120);
        ctx.restore();
    }
    img04.src = 'images/puzzle.png';
}

// Name: DrawLostProfit
// Author: Peter Chen
function DrawLostProfit(c,x,y,w,h,d) {
	//clearCanvas(c);
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

	context.save();
	context.scale(w/200,h/200);
	x = x/(w/200);
	y = y/(h/200);

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
    context.moveTo(x+padding + width / 2, y+padding);
    context.lineTo(x+padding + width, y+height + padding);
    context.lineTo(x+padding, y+height + padding);
    context.closePath();

    // Create fill gradient
    var gradient = context.createLinearGradient(x+0, y+0, x+0, y+height);
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
    context.shadowBlur = 0;

    // Fill the path
    context.fillStyle = gradient;
    context.fill();

    // Add a horizon reflection with a gradient to transparent
    gradient = context.createLinearGradient(x+0, y+padding, x+0, y+padding + height);
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
    context.fillText("$" + d, x+190, y+100);

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 80px 'Times New Roman', Times, serif";
    context.fillStyle = "#333";
    try {
        context.fillText("!", x+padding + width / 2, y+padding + height / 1.5);
    } catch (ex) { }
    context.restore();
}


// Name: DrawPlaid
// Author: Louis Bodnar
function DrawPlaid(c,x,y,w,h,d) {
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
    context.save();

    var backgroundColor = "#ffffff";
    var lineColorOne = "#d9f28a";
    var lineColorTwo = "#81f28a";
    var lineColorThree = "#ffbe93";
    var lineColorFour = "#81f28a";


    // fill background
    context.fillStyle = backgroundColor;
    context.fillRect(x, y, w, h);
    


    // draw first set of vertical lines
    context.strokeStyle = lineColorOne;
    context.lineWidth = 20;
    var double = 0;
    for (var i = 60; i < w; i = i + 120)
    {
        context.beginPath();
        if (double == 1)
        {
            double = 0;
            context.moveTo(i-10, y);
            context.lineTo(i-10, y+h);
            context.moveTo(i+10, y);
            context.lineTo(i+10, y+h);
        }else
        {
            double = 1;
            context.moveTo(i, y);
            context.lineTo(i, y+h);
        }

        context.stroke();

    }


    // draw second set of vertical lines
    context.strokeStyle = lineColorTwo;
    context.lineWidth = 15;
    double = 0;
    for (var i = 60; i < w; i = i + 120)
    {
        context.beginPath();
        if (double == 1)
        {
            double = 0;
            context.moveTo(i-10, y);
            context.lineTo(i-10, y+h);
            context.moveTo(i+10, y);
            context.lineTo(i+10, y+h);
        }else
        {
            double = 1;
            context.moveTo(i, y);
            context.lineTo(i, y+h);
        }

        context.stroke();

    }



    // draw set of horizontal lines
    context.strokeStyle = lineColorThree;
    context.lineWidth = 10;
    var double = 0;
    for (var i = 60; i < h; i = i + 120)
    {
        context.beginPath();
        if (double == 1)
        {
            double = 0;
            context.moveTo(x, y+i-20);
            context.lineTo(x+w, y+i-20);
            context.moveTo(x, y+i+20);
            context.lineTo(x+w, y+i+20);
        }else
        {
            double = 1;
            context.moveTo(x, y+i);
            context.lineTo(x+w, y+i);
        }

        context.stroke();

    }
    context.restore();
}

function navigator_Go(url) {
    window.location.assign(url); // This technique is almost exactly the same as a full <a> page refresh, but it prevents Mobile Safari from jumping out of full-screen mode
}

//LEAD STUFF
function DrawUniqueCustomers(c,x,y)
	{
		var canvas = document.getElementById(c);
		var context = canvas.getContext("2d");

		var lineWidth = 7;
		context.save();
		context.arc(x+170, y-50, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();

		//draw man
		context.moveTo(x + 130, y +30);
		context.lineTo(x + 170 ,y +30);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		//draw man
		context.moveTo(x + 170, y -30);
		context.lineTo(x + 170 ,y +30);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		//draw man
		context.moveTo(x + 170, y -20);
		context.lineTo(x + 100 ,y -10);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		// draw 
		context.beginPath();
		context.moveTo(x , y);
		context.lineTo(x +100 , y);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		// draw 
		context.moveTo(x -20, y+40);
		context.lineTo(x +120 , y+40);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		// draw leg
		context.moveTo(x +30, y);
		context.lineTo(x +10 , y+80);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		// draw legs
		context.moveTo(x +65, y);
		context.lineTo(x +85 , y+80);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		// draw 

		context.moveTo(x + 10, y);
		context.lineTo(x + 10 , y-70);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		// draw umbrella
		context.moveTo(x -60, y-70);
		context.lineTo(x +80 , y-70);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();


		// draw umbrella
		//context.beginPath();
		context.moveTo(x-60, y-70);
		context.quadraticCurveTo(x+10, y-120, x+80, y-70);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.fillStyle = "#000000";
		context.fill();
		context.stroke();

		//draw computer
		context.moveTo(x +50, y-10);
		context.lineTo(x +90 , y-10);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		//draw computer
		context.moveTo(x + 50, y-10);
		context.lineTo(x + 40 ,y-40);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		//draw chair
		context.moveTo(x + 140, y+80);
		context.lineTo(x + 140 ,y +40);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		//draw chair
		context.moveTo(x + 180, y+80);
		context.lineTo(x + 180 ,y -10);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		//draw chair
		context.moveTo(x + 140, y +40);
		context.lineTo(x + 180 ,y +40);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();

		//draw man
		context.moveTo(x + 130, y +30);
		context.lineTo(x + 130 ,y +80);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.restore();
				
	}
	
	function DrawResponse(c, x, y, kpiMail, kpiPhone)
	{
		var canvas = document.getElementById(c);
		var context = canvas.getContext("2d");
		img = new Image();
		img.src = 'images/response.png';
		context.fillStyle = "#8ED6FF";
		var kpiTotal = kpiMail + kpiPhone;
		var MailP = kpiMail/kpiTotal;
		var PhoneP= kpiPhone/kpiTotal;
		//document.write(MailP);
		//draw mail

		context.beginPath();
		context.rect(x+1, y, 373, -120);
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = "white";
		context.stroke();


		//draw rectangle in the back of the mail image
		if(MailP <= 0.5)
		{
			fillW= 700 * MailP; 
			fillH = 50;
			MailP = 0;
		}
		else if(MailP > 0.5)
		{
			MailP = MailP-0.5;
			fillW= 350; 
			fillH = 50;
		}
		context.fillRect(x+10, y+10, fillW, fillH);
		if(MailP > 0)
		{
			fillW= 700 * MailP;
			fillH = 50;

			context.fillRect(x+10,y+100, fillW, fillH);
		}



		context.fillStyle="#FFA54F";
		context.beginPath();
		context.rect(x+376, y, 370, -120);
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = "white";
		context.stroke();

		//draw rectangle in the back of the phone image
		if(PhoneP <= 0.5)
		{
			fillW= 760 * PhoneP; 
			//fillW = 350
			fillH = 80;
			PhoneP = 0;
		}
		else if(PhoneP > 0.5)
		{
			PhoneP = PhoneP-0.5;
			fillW= 720/2; 
			fillH = 80;
		}
		context.fillRect(x+740, y+80, x-20-fillW, fillH);			
		if(PhoneP > 0)
		{
			fillW= 720 * PhoneP;
			fillH = 80;

			context.fillRect(x+740,y+8, x-20-fillW, fillH);
			//document.write(x+740);	
		}					


		img.onload = function()
		{
			context.drawImage(img, x, y, img.width/4.29, img.height/4.29);
		}

		
	}
	
	function DrawSales(c, x, y, kpiLost, kpiNew, kpiOld)
	{
		var canvas = document.getElementById(c);
		var context = canvas.getContext("2d");
		var lineWidth = 7;
		img1 = new Image();
		img1.src = 'images/lead_usedcar.png';
		img2 = new Image();
		img2.src = 'images/lead_newcar.png';

		context.beginPath();
		context.arc(x-50, y, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();


		
		//draw man body
		context.moveTo(x-50, y);
		context.quadraticCurveTo(x - 40, y+30, x-50, y + 65);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		
		
		//draw man
		context.moveTo(x -50, y + 65);
		context.lineTo(x - 80, y + 100);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();


		//draw man
		context.moveTo(x -50, y + 65);
		context.lineTo(x -20, y + 80);
		context.lineTo(x -35, y + 100);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.moveTo(x -50, y + 40);
		context.quadraticCurveTo(x - 60, y+20, x - 100, y+15);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.moveTo(x-50, y + 45);
		context.quadraticCurveTo(x - 60, y+30, x - 100, y +30);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		//draw door
		context.save();
		context.beginPath();
		context.fillStyle="#black";
		context.beginPath();
		context.rect(x, y-60, 80, 170);
		context.fill();
		
		context.beginPath();
		context.arc(x+15, y+20, 5, 0, 2 * Math.PI, false);
		context.fillStyle = "#ffffff";
		context.fill();
		context.restore();
		
		
		//draw whiteboard
		context.beginPath();
		context.save()
		context.moveTo(x-410, y - 50);
		context.lineTo(x-130, y - 50);
		context.lineTo(x-130, y - 130);
		context.lineTo(x-410, y - 130);
		context.lineTo(x-410, y - 50);
		context.moveTo(x-410, y - 43);
		context.lineTo(x-130, y - 43);
		context.lineWidth = lineWidth;
		context.lineCap = "square";
		context.strokeStyle = "#000000";
		context.stroke();
		context.fillStyle = "#ffffff";
		context.fill();
		context.restore();
		
		
		//draw marker
		context.beginPath();
		context.moveTo(x-240, y - 45);
		context.lineTo(x-200, y - 45);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#ffffff";
		context.stroke();
		
		
		//draw tables
		context.beginPath();
		context.fillStyle="#black";
		context.beginPath();
		context.rect(x-300, y + 110, 100, -60);
		context.fill();

		context.beginPath();
		context.moveTo(x-330, y + 50);
		context.lineTo(x-170, y + 50);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		
		context.fillStyle="#black";
		context.beginPath();
		context.rect(x-570, y + 110, 100, -60);
		context.fill();

		context.beginPath();
		context.moveTo(x-600, y + 50);
		context.lineTo(x-440, y + 50);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		//draw chairs
		
		context.beginPath();
		context.moveTo(x-120, y);
		context.lineTo(x-120, y + 110);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.moveTo(x-120, y + 70);
		context.lineTo(x-160, y + 70);
		context.lineTo(x-160, y + 110);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x-390, y);
		context.lineTo(x-390, y + 110);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.moveTo(x-390, y + 70);
		context.lineTo(x-430, y + 70);
		context.lineTo(x-430, y + 110);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x-380, y);
		context.lineTo(x-380, y + 110);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.moveTo(x-380, y + 70);
		context.lineTo(x-340, y + 70);
		context.lineTo(x-340, y + 110);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x-640, y);
		context.lineTo(x-640, y + 110);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.moveTo(x-640, y + 70);
		context.lineTo(x-600, y + 70);
		context.lineTo(x-600, y + 110);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		
		//draw man (big)
		context.beginPath();
		context.arc(x - 150, y, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();
		
		context.beginPath();
		context.moveTo(x-150, y);
		context.lineTo(x-150, y + 60);
		context.lineTo(x-180, y + 60);
		context.lineTo(x-180, y + 100);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x-150, y+40);
		context.quadraticCurveTo(x - 210, y +50, x-150, y+10);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		
		context.beginPath();
		context.arc(x - 420, y, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();
		
		context.beginPath();
		context.moveTo(x-420, y);
		context.lineTo(x-420, y + 60);
		context.lineTo(x-450, y + 60);
		context.lineTo(x-450, y + 100);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x-420, y+40);
		context.quadraticCurveTo(x - 490, y +50, x-420, y+10);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		
		//draw man (small)
		context.beginPath();
		context.arc(x - 350, y, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();
		context.beginPath();
		
		context.moveTo(x-350, y);
		context.lineTo(x-350, y + 60);
		context.lineTo(x-320, y + 60);
		context.lineTo(x-320, y + 100);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x-350, y+40);
		context.quadraticCurveTo(x - 330, y +50, x-320, y+10);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
				
		context.beginPath();
		context.arc(x - 610, y, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();
		context.beginPath();
		
		context.moveTo(x-610, y);
		context.lineTo(x-610, y + 60);
		context.lineTo(x-580, y + 60);
		context.lineTo(x-580, y + 100);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x-610, y+40);
		context.quadraticCurveTo(x - 590, y +50, x-570, y+10);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		img1.onload = function()
		{
			context.drawImage(img1, x-295, y + 8, img1.width/4, img1.height/4);
		}
		
		img2.onload = function()
		{
			context.drawImage(img2, x-565, y +10, img2.width/1.75, img2.height/1.75);
		}
		
	}
	
	//DrawAvgRespTime: Infographic Element 
	//Author: Kevin Shreve	
	function DrawAvgRespTime (c, x, y, w, h, d)
	{
		var canvas = document.getElementById(c);
		var context = canvas.getContext("2d");
	
		context.font = "28pt Calibri";
		context.fillStyle = "#000";
		context.fillText("Average Response Time", x+105, y-50);
		context.fillText(" minutes",x+175,y-10);
		context.font = "bold  28pt Calibri";
		context.fillText(d,x+105,y-10);
		DrawClockFace(c,x,y,w,h,d);
	}
	
	//DrawClockDial: Draws the small nub on the side of the watch
	//Author: Kevin Shreve
	function DrawClockDial(c,x,y,w,h) {
		var canvas = document.getElementById(c);
		var ctx = canvas.getContext("2d");
		
		ctx.fillStyle = "C9C9C9";
		ctx.fillRect(x+85,y-(15/2),10,15);
		ctx.fillStyle = "#000";
		ctx.fillRect(x+87,y-5,5,10);
	}
	//DrawClockFace: Draws the circles and the tick marks
	//Author: Kevin Shreve
	function DrawClockFace(c,x,y,w,h,d) {
		var canvas = document.getElementById(c);
		var ctx = canvas.getContext("2d");
		
		//context.font = "40pt Calibri";
		//context.fillStyle = "#000";
		//context.fillText("In Kevin we Trust", canvas.width/3, 50);
		
		DrawCircle(c,x,y,90,"#C9C9C9");
		DrawCircle(c,x,y,70,"#FFF");
		DrawCircle(c,x,y,65,"#C9C9C9");
		DrawCircle(c,x,y,10,"#FFF");
	
		ctx.fillStyle = "#000";
		for(var k=1;k<13;k++) {
			ctx.save();
			ctx.translate(x,y);
			ctx.rotate(2*k*Math.PI/12);
			ctx.translate(-x,-y);
			ctx.fillRect(x-5,y-75,10,20);
			ctx.restore();
		}	
		DrawHand(c,x,y,w,h,d);
	}
	
	//DrawHand : Draws the minute and hour hands of the clock
	//Author: Kevin Shreve	
	function DrawHand(c,x,y,w,h,d) {
		var canvas = document.getElementById(c);
		var ctx = canvas.getContext("2d");
		
		var hand = new Image;
		hand.src = 'images/watcharm.png';
		hand.onload = function () {
			ctx.save();
			ctx.translate(x,y)
			ctx.rotate( d / 2 *(Math.PI/180));
			ctx.translate(-x,-y)
			//hour hand
			ctx.drawImage(hand,x-(hand.width/2),y-(hand.height/2)-30,50,60);
			ctx.restore();
			
			ctx.save();
			ctx.translate(x,y);
			ctx.rotate( d*6*(Math.PI/180));
			ctx.translate(-x,-y);
			//minute hand
			ctx.drawImage(hand,x-(hand.width/2),y-(hand.height/2)-45);	
			ctx.restore();
		}	
	}
	
	//DrawCircle: Cirlce with color option
	//Author: Kevin Shreve
	function DrawCircle(c,x,y,r,color) {
		var canvas = document.getElementById(c);
		var context = canvas.getContext("2d");
		var centerX = x;
		var centerY = y;
		var radius = r; 

		context.beginPath();
		context.arc(centerX, centerY, r, 0, 2 * Math.PI, false);
		context.fillStyle = color;
		context.fill();
	}
	
	function DrawCloseRate(c,x,y,d) {
		var canvas = document.getElementById(c);
		var context = canvas.getContext("2d");
		var lineWidth = 10;
		
		DrawMachine(c,x-35,y-5);
		DrawMachine(c,x+100,y-5);
		
		context.font = "32pt Calibri";
		context.fillStyle = "#000000";
		context.fillText("Close Rate", x-70, y-230);
		
		
		context.font = "24pt Calibri";
		context.fillStyle = "#000000";
		context.fillText(d + "%", x-17, y-150);
		
		//draw door
		context.save();
		context.beginPath();
		context.fillStyle="#000000";
		context.beginPath();
		context.rect(x-180, y-175, 80, 170);
		context.fill();
		
		context.beginPath();
		context.arc(x-115, y-80, 5, 0, 2 * Math.PI, false);
		context.fillStyle = "#ffffff";
		context.fill();
		context.restore();
		
				
		//draw walk man
		context.beginPath();
		context.arc(x-50, y-140, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();
		context.beginPath();
		
		context.moveTo(x-50, y - 140);
		context.lineTo(x-50, y - 80);
		context.lineTo(x-70, y - 40);
		context.lineTo(x-75, y - 10);
		context.moveTo(x-50, y - 80);
		context.lineTo(x-45, y - 40);
		context.lineTo(x-30, y - 10);
		context.moveTo(x-50, y - 110);
		context.lineTo(x-60, y - 90);
		context.lineTo(x-75, y - 70);
		context.moveTo(x-50, y - 110);
		context.lineTo(x-30, y - 80);
		context.lineTo(x-25, y - 70);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		//draw stand man
		context.beginPath();
		context.arc(x+150, y-150, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();
		context.beginPath();
		
		context.moveTo(x+150, y - 150);
		context.lineTo(x+150, y - 80);
		context.lineTo(x+155, y - 40);
		context.lineTo(x+160, y - 10);
		context.moveTo(x+150, y - 80);
		context.lineTo(x+145, y - 40);
		context.lineTo(x+140, y - 10);
		context.moveTo(x+150, y - 120);
		context.quadraticCurveTo(x +190, y -100, x+150, y-80);
		context.moveTo(x+150, y - 120);
		context.quadraticCurveTo(x +110, y -100, x+120, y-80);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
	}
	
	function DrawMachine(c,x,y) {
		var canvas = document.getElementById(c);
		var context = canvas.getContext("2d");
		var lineWidth = 3;
		
		context.save();
		
		//draw machine
		context.beginPath();
		context.fillStyle="#383838";
		context.beginPath();
		context.rect(x, y, 100, -200);
		context.fill();
		
		context.beginPath();
		context.fillStyle="#ffffff";
		context.beginPath();
		context.rect(x+10, y-130, 80, -60);
		context.fill();

		context.beginPath();
		context.moveTo(x+5, y -125);
		context.lineTo(x+95, y -125);
		context.lineTo(x+95, y -195);
		context.lineTo(x+5, y -195);
		context.lineTo(x+5, y -125);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#C0C0C0";
		context.stroke();
		
		context.beginPath();
		context.fillStyle="#ffffff";
		context.beginPath();
		context.rect(x+10, y-60, 60, -50);
		context.fill();
		
		context.beginPath();
		context.moveTo(x+5, y -55);
		context.lineTo(x+75, y -55);
		context.lineTo(x+75, y -115);
		context.lineTo(x+5, y -115);
		context.lineTo(x+5, y -55);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#C0C0C0";
		context.stroke();
		context.restore();
		
		context.beginPath();
		context.fillStyle="#383838";
		context.beginPath();
		context.rect(x+12, y-62, 16, -15);
		context.rect(x+31, y-62, 16, -15);
		context.rect(x+50, y-62, 16, -15);
		context.rect(x+12, y-78, 16, -15);
		context.rect(x+31, y-78, 16, -15);
		context.rect(x+50, y-78, 16, -15);
		context.rect(x+12, y-94, 16, -15);
		context.rect(x+31, y-94, 16, -15);
		context.rect(x+50, y-94, 16, -15);
		context.fill();
		
		context.font = "12pt Calibri";
		context.fillStyle = "#ffffff";
		context.fillText("1", x+15, y-97);
		context.fillText("2", x+34, y-97);
		context.fillText("3", x+53, y-97);
		context.fillText("4", x+15, y-80);
		context.fillText("5", x+34, y-80);
		context.fillText("6", x+53, y-80);
		context.fillText("7", x+15, y-65);
		context.fillText("8", x+34, y-65);
		context.fillText("9", x+53, y-65);
		
		context.beginPath();
		context.fillStyle="#ffffff";
		context.beginPath();
		context.rect(x+83, y-70, 10, -40);
		context.fill();
		
		context.beginPath();
		context.fillStyle="#C0C0C0";
		context.beginPath();
		context.rect(x+85, y-72, 6, -36);
		context.fill();
		
		context.beginPath();
		context.fillStyle="#ffffff";
		context.beginPath();
		context.rect(x+20, y-25, 50, -20);
		context.fill();
		
		context.beginPath();
		context.fillStyle="#383838";
		context.beginPath();
		context.rect(x+22, y-27, 46, -16);
		context.fill();
		
		context.restore();
	}

	function DrawProspectCount(c,x,y,d) {
		var canvas = document.getElementById(c);
		var context = canvas.getContext("2d");
		var lineWidth = 10;
		
		//draw tables
		context.beginPath();
		context.fillStyle="#000000";
		context.beginPath();
		context.rect(x+20, y , 130, -60);
		context.fill();

		context.beginPath();
		context.moveTo(x, y-65);
		context.lineTo(x+170, y-65);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		//
		context.beginPath();
		context.arc(x+130, y-80, 25, Math.PI,  2* Math.PI, false);
		context.rect(x+105, y-70 , 50, -10);
		context.fillStyle = "#000000";
		context.fill();
		
		
		context.beginPath();
		context.moveTo(x+100, y-113);
		context.lineTo(x+160, y-113);
		context.lineTo(x+150, y-140);
		context.lineTo(x+110, y-140);
		context.lineTo(x+100, y-113);
		context.lineWidth = lineWidth;
		context.lineCap = "square";
		context.strokeStyle = "#000000";
		context.stroke();
		context.fillStyle = "#000000";
		context.fill();
		
		
		//draw sit man
		context.beginPath();
		context.arc(x+50, y-120, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();
		context.beginPath();
		
		context.moveTo(x+50, y - 120);
		context.lineTo(x+40, y - 70);
		context.moveTo(x+48, y - 90);
		context.quadraticCurveTo(x +90, y -45, x+50, y-110);
		context.moveTo(x+48, y - 90);
		context.quadraticCurveTo(x +30, y -85, x+10, y-110);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		//draw stand man
		context.beginPath();
		context.arc(x-45, y-140, 20, 0, 2 * Math.PI, false);
		context.fillStyle = "#000000";
		context.fill();
		context.beginPath();
		
		context.moveTo(x-45, y - 150);
		context.lineTo(x-45, y - 5);
		context.moveTo(x-45, y - 70);
		context.quadraticCurveTo(x -60, y -25, x-70, y-10);
		context.moveTo(x-45, y - 110);
		context.quadraticCurveTo(x -30, y -45, x-10, y-110);
		context.moveTo(x-45, y - 110);
		context.lineTo(x-70, y - 70);
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.strokeStyle = "#000000";
		context.stroke();
		
		context.font = "32pt Calibri";
		context.fillStyle = "#ffffff";
		context.fillText(d, x+40, y-20);
		
		context.font = "32pt Calibri";
		context.fillStyle = "#000000";
		context.fillText("Prospect Count", x-100, y-230);
		
		
	}
	
	function DrawUnopenedLead(c,x,y,d) {
		var canvas = document.getElementById(c);
		var context = canvas.getContext("2d");
		img_unopened = new Image();
		img_unopened.src = 'images/lead_open-envelope.png';
		
		
		img_unopened.onload = function()
		{
			context.drawImage(img_unopened, x, y , img_unopened.width, img_unopened.height);
		}	
	}
