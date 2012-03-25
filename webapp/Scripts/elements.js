function Retail_Sale(c, x, y, w, h, d) {
    // d = [date, display value]
    var date = d[0];
	//clearCanvas(c);
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
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
}


function Used_Vehicle_Sale(c, x, y, w, h, d) {
	//clearCanvas(c);
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
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
	//clearCanvas(c);
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
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
}
// Name: DrawSection
// Author: Louis Bodnar
function DrawSection (c, x, y, w, h, d)
{

    var sectionColor = d[1]; // this is the color of the section bubble blurb thingy
    var pointerHeight = 44; // this is the height of the little top thingy
    var pointerDistance = d[0]; // this is the distance from x where the pointer will be placed
    var cornerCurveSize = 33; // this is the radius of the corner curve

    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

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

}




// Name: DrawCloud
// Author: Louis Bodnar
function DrawCloud (c, x, y, w, h)
{
    // BUG: Need to add raindrops
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

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

}



// Name: DrawSun
// Author: Louis Bodnar
function DrawSun (c, x, y, r)
{
    // BUG: Need to add sunbeams
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

    var centerX = x;
    var centerY = y;
    var radius = r; 

    context.beginPath();
    context.arc(centerX, centerY, r, 0, 2 * Math.PI, false);
    context.fillStyle = "#FFEF00";
    context.fill();
}


// Name: DrawX
// Author: Louis Bodnar
function DrawX (c, x, y)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

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

}



// Name: DrawHouse
// Author: Louis Bodnar
function DrawHouse (c, x, y, h)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

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

}


// Name: DrawSpirograph
// Author: Louis Bodnar
function DrawSpirograph (c, x, y)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

    // values needed to generate spirograph
    var fixedCircleRadius = 200;
    var movingCircleRadius = -101;
    var height = 201;

    // other vars
    var pX = 0;
    var pY = 0;
    var t = 0;

    // move to starting point
    pX = (fixedCircleRadius - movingCircleRadius)*Math.cos(t) + height*Math.cos(((fixedCircleRadius-movingCircleRadius)/movingCircleRadius)*t);
    pY = (fixedCircleRadius - movingCircleRadius)*Math.sin(t) - height*Math.sin(((fixedCircleRadius-movingCircleRadius)/movingCircleRadius)*t);
    context.moveTo(pX + x,pY + y);
    context.beginPath();

    // then draw the line
    for (t = 0; t < 5300; t = t + .01)
    {
        pX = (fixedCircleRadius - movingCircleRadius)*Math.cos(t) + height*Math.cos(((fixedCircleRadius-movingCircleRadius)/movingCircleRadius)*t);
        pY = (fixedCircleRadius - movingCircleRadius)*Math.sin(t) - height*Math.sin(((fixedCircleRadius-movingCircleRadius)/movingCircleRadius)*t);
        context.lineTo(x + pX,y + pY);

    }
    context.lineWidth = .5;
    context.strokeStyle = "#ff0000";
    context.stroke();
}



// Name: DrawPerson
// Author: Louis Bodnar
function DrawPerson (c, x, y, h)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

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

}

// Name: DrawStripes
// Author: Louis Bodnar
function DrawStripes(c, x, y, w, h, d) 
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

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
}


// Name: DrawBox
// Author: Peter Chen
function DrawBox(c, x, y, w, h, d) {
	//clearCanvas(c);
    // Create fill gradient
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
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
}

// Name: DrawCompetitiveSegmentSale
// Author: Lok Cheung
function DrawCompetitiveSegmentSale(c,x,y,w,h,Comp_Seg_Sale_data) {
	//clearCanvas(c); // TODO: CHANGE THIS TO have the canvas name as a arg
    var canvas = document.getElementById(c);
    var ctx6 = canvas.getContext("2d");
	
	ctx6.scale(w/700,h/200);
	x = x/(w/700);
	y = y/(h/200);
	
    var img03 = new Image();
    img03.src = 'images/car2.png';
    img03.onload = function () {
        var maxPos = Math.floor(Competitive_Segment_Sale_findMax(Comp_Seg_Sale_data) / 12);
	    ctx6.fillStyle = "white";
        ctx6.fillText(maxPos, x+650, y+15 + i * 30);

        var final_pos = iniStopPos(Comp_Seg_Sale_data);
        var offset = 0;
        var i = 0;
        for (i = 0; i < Comp_Seg_Sale_data.length; i++) {
            var position = Math.floor(Comp_Seg_Sale_data[i][1] / 12);
            if (offset < position) {
                offset += 0.02;
                //ctx6.fillText(i, 200, i * 20);
                //                ctx6.drawImage(img03, 180 + offset * 25, i * 30, img03.width, img03.height);
                ctx6.drawImage(img03, x+180 + position*25, y+i * 30, img03.width, img03.height);

                ctx6.clearRect(x+180 + (offset - 0.9) * 25, y+i * 30, img03.width, img03.height);
                ctx6.font = "bold 12pt Calibri";
                //draw KPI_Name
                ctx6.fillText(Comp_Seg_Sale_data[i][0], x+0, y+15 + i * 30);
                //draw KPI_Data
                ctx6.fillText(Comp_Seg_Sale_data[i][1], x+215 + position * 25, y+15 + i * 30);

                if (offset + 0.02 > maxPos) {
                    var j = 0, offx = offset;
                    for (j = 0; j < final_pos.length; j++) {
                        //TODO: draw number after the car reach destination
                        //ctx6.fillText(Comp_Seg_Sale_data[j][1], 215+Math.floor(Comp_Seg_Sale_data[j][1]/12)*30, 15+j*30);
                        ctx6.clearRect(x+180 + (final_pos[j]) * 30, y+j * 30, img03.width, img03.height);

                        //ctx6.fillText(final_pos[j], 215+position*35, 15+j*30);

                    }
                    offset = 0;
                }
            }
        }
    }
    //var s = setTimeout(Competitive_Segment_Sale(Comp_Seg_Sale_data),20);
}


// Name: Competitive_Segment_Sale_findMax
// Author: Lok Cheung
// Purpose: Support function for Competitive_Segment_Sale
function Competitive_Segment_Sale_findMax(array) {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i][1] > max) {
            max = array[i][1];
        }
    }
    return max;
}


// Name: iniStopPos
// Author: Lok Cheung
// Purpose: Support function for Competitive_Segment_Sale
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
	clearCanvas(c);
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
    var img04 = new Image();
    img04.src = 'images/puzzle.png';
	
	ctx.scale(w/img04.width,h/img04.height);
	x = x/(w/img04.width);
	y = y/(h/img04.height);
	
    img04.onload = function () {
        ctx.drawImage(img04, x+0, y+0, img04.width, img04.height);
        ctx.font = "bold 34pt Calibri";
        ctx.fillText("LOST", x+110, y+30);
        ctx.fillText("SALES", x+97, y+70);
        ctx.fillStyle = "white";
        ctx.fillText("LOST", x+111, y+28);
        ctx.fillText("SALES", x+97, y+68);
        ctx.fillStyle = "black";
        ctx.font = "bold 40pt Calibri";
        ctx.fillText(d, x+155, y+120);
    }
}

// Name: DrawLostProfit
// Author: Peter Chen
function DrawLostProfit(c,x,y,w,h,d) {
	clearCanvas(c);
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

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
    context.shadowColor = "transparent";

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

}

