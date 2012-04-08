var offset = 0;

function initSales(date) {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	
    //drawGraph09(canvas, 0, 0, date); //Competitive_Segment_Sale
	var kpiData = new Array();
            kpiData.push(["Anytown Automotive",GetKPI(date,"Competitive_Segment_Sale_Anytown_Automotive"]);
            kpiData.push(["Jeff Williams Toyota", GetKPI(date,"Competitive_Segment_Sale_Jeff_Williams_Toyotas"]);
            kpiData.push(["Uptown Honda",GetKPI(date,"Competitive_Segment_Sale_Uptown_Honda"]);
            kpiData.push(["Fred Rodgers Mazda",GetKPI(date,"Competitive_Segment_Sale_Fred_Rodgers_Mazda"]);
            kpiData.push(["Garrett Ford", GetKPI(date,"Competitive_Segment_Sale_Garrett_Ford"]);
            kpiData.push(["Peter Lake Ford", GetKPI(date,"Competitive_Segment_Sale_Peter_Lake_Ford"]);

			
	//var s = setTimeout(function () {Competitive_Segment_Sale(canvas, 100, 0, 100,100,kpiData);}, 20);
		
    //drawGraph10(canvas, 0, 100, date); //Lost_Profit
	var kpiData= GetKPI(date,"Lost_Profit"):
    Lost_Profit(canvas, 100, 100, 100,100,kpiData);
		
    //drawGraph11(canvas, 0, 200, date); //Lost_Sale
	var kpiData = GetKPI(date,"Lost_Sales");
    Lost_Sale(canvas, 200, 500, 100,100,kpiData);
	
    //drawGraph12(canvas, 0, 300, 700, 200, date); //Customer
	var kpiData = new Array();
	kpiData.push(["Single Visit Customer", GetKPI(date,"Single_Visit_Customers")])
	kpiData.push(["Recent Sales Customers", GetKPI(date,"Recent_Sales_Customers")]);
    Customer(canvas, 100, 300, 700, 200, "#36648B", "#FAF0E6", kpiData);
}


function clearCanvas(c) {
    var canvas = document.getElementById(c);
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	var w = canvas.width;
	canvas.width = 1;
	canvas.width = w
}


function Competitive_Segment_Sale(c,x,y,w,h,Comp_Seg_Sale_data) {
	clearCanvas(c); // TODO: CHANGE THIS TO have the canvas name as a arg
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

function Lost_Profit(c,x,y,w,h,d) {
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


function Lost_Sale(c, x, y, w, h, d) {
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

function Customer(canvas, x,y,w, h, c1, c2, data) {
	clearCanvas(canvas);
    //Adjust chart width and height
    w = w - 20; h = h - 50;
    var c = document.getElementById(canvas);
	
    // Check the element is in the DOM and the browser supports canvas
    if (c.getContext) {
        var ctx7 = c.getContext("2d");
		
		ctx7.scale(w/width,h/heigh);
		x = x/(w/width);
		y = y/(h/heigh);
		
        var max = 0; //Initialise maximum bar height to zero
        var len = 0; //Initialise no of bars to zero
        var sum = 0;
        for (key in data) {
            if (data[key][1] > max) {
                max = data[key][1];
            }
            sum += data[key][1];
            len++;
        }
        var border = 4; //Changing the border mar distort the graph
        var bar_h = (h - border) / len;
        var gradient = ctx7.createLinearGradient(x+w / 2, y+50, x+w / 2, y+h);
        gradient.addColorStop(0, '#000');
        gradient.addColorStop(0.1, '#eee');
        gradient.addColorStop(0.5, '#fff');
        gradient.addColorStop(1, '#000');

        max = max - border;
        var txtArea = w * 0.2 * 1.7;
        var full = w - (border * 2) - txtArea;
        ctx7.strokeStyle = '#fff';
        ctx7.save();

        ctx7.shadowOffsetX = border / 2;
        ctx7.shadowOffsetY = border / 2;
        ctx7.shadowBlur = border / 2;
        ctx7.shadowColor = "black";
        ctx7.fillStyle = c1;
        var n = 0;

        for (key in data) {
            ctx7.fillRect(x + border + txtArea, y+(border * 2) + (bar_h * n), (data[key][1] / max) * full, bar_h - border);
            n++;
        }

        ctx7.shadowColor = "white";
        n = 0;
        for (key in data) {
            ctx7.strokeRect(x + border + txtArea, y+(border * 2) + (bar_h * n), (data[key][1] / max) * full, bar_h - border);
            n++;
        }

        ctx7.shadowOffsetX = border / -2;
        n = 0;
        for (key in data) {
            ctx7.strokeRect(x + border + txtArea, y+(border * 2) + (bar_h * n), ((data[key][1] / max) * full), bar_h - border);
            n++;
        }
        ctx7.shadowOffsetY = border / -2;
        n = 0;
        for (key in data) {
            ctx7.strokeRect(x + border + txtArea, y+(border * 2) + (bar_h * n), ((data[key][1] / max) * full), bar_h - border);
            n++;
        }
        ctx7.restore();

        ctx7.save();
        ctx7.font = 'bold 18px sans-serif';
        ctx7.shadowOffsetX = 1;
        ctx7.shadowOffsetY = 1;
        ctx7.shadowBlur = 1;
        ctx7.shadowColor = "black";
        n = 0;
        for (key in data) {
            ctx7.fillStyle = c2;
            ctx7.fillText(data[key][0], x + (border + 10), (border * 2) + (bar_h * n) + (bar_h / 1.8), y+txtArea - 15);
            ctx7.font = 'bold 18px sans-serif';
            ctx7.fillText(data[key][1], x + (border + 10 + txtArea), (border * 2) + (bar_h * n) + (bar_h / 1.8), y+full);
            n++;
        }
        ctx7.restore();
    }
}


// function drawGraph09(c, x, y, date) {
    // //pull from database
    // var kpiArray = SearchKPIByDate(date);
    // var kpiData = new Array();

    // for (var i = 0; i < kpiArray.length; i++) {
        // if (kpiArray[i][0] == "Competitive_Segment_Sale_Anytown_Automotive") {
            // kpiData.push(["Anytown Automotive",kpiArray[i][1]]);
        // }
        // else if (kpiArray[i][0] == "Competitive_Segment_Sale_Jeff_Williams_Toyotas") {
            // kpiData.push(["Jeff Williams Toyota", kpiArray[i][1]]);
        // }
        // else if (kpiArray[i][0] == "Competitive_Segment_Sale_Uptown_Honda") {
            // kpiData.push(["Uptown Honda",kpiArray[i][1]]);
        // }
        // else if (kpiArray[i][0] == "Competitive_Segment_Sale_Fred_Rodgers_Mazda") {
            // kpiData.push(["Fred Rodgers Mazda",kpiArray[i][1]]);
        // }
        // else if (kpiArray[i][0] == "Competitive_Segment_Sale_Garrett_Ford") {
            // kpiData.push(["Garrett Ford", kpiArray[i][1]]);
        // }
        // else if (kpiArray[i][0] == "Competitive_Segment_Sale_Peter_Lake_Ford") {
            // kpiData.push(["Peter Lake Ford", kpiArray[i][1]]);
        // }
    // }

 
    // var s = setTimeout(function () {Competitive_Segment_Sale(c, x, y, kpiData);}, 20);

// }

// function drawGraph10(c, x, y, date) {
    // var kpiArray = SearchKPIByDate(date);
    // var kpiData = "";

    // for (var i = 0; i < kpiArray.length; i++) {
        // if (kpiArray[i][0] == "Lost_Profit") {
            // kpiData = kpiArray[i][1];
            // break;
        // }
    // }
    // Lost_Profit(c, x, y, kpiData);
// }

// function drawGraph11(c, x, y, date) {

    // var kpiArray = SearchKPIByDate(date);
    // var kpiData = "";

    // for (var i = 0; i < kpiArray.length; i++) {
        // if (kpiArray[i][0] == "Lost_Sales") {
            // kpiData = kpiArray[i][1];
            // break;
        // }
    // }
    // Lost_Sale(c, x, y, kpiData);
// }


// function drawGraph12(c, x, y, w, h, date) {

   // // var customer_data = { 'Single Visit Customer': 567, 'Recent Sales Customer': 184 };
    // var kpiArray = SearchKPIByDate(date);
    // var kpiData = new Array();

    // for (var i = 0; i < kpiArray.length; i++) {
        // if (kpiArray[i][0] == "Single_Visit_Customers") {
            // kpiData.push(["Single Visit Customer", kpiArray[i][1]]);
        // }
        // else if (kpiArray[i][0] == "Recent_Sales_Customers") {
            // kpiData.push(["Recent Sales Customers", kpiArray[i][1]]);
        // }
    // }
    // //Customer("Customer",w,h,c1,c2,title)	
    // Customer(c, x, y, w, h, "#36648B", "#FAF0E6", kpiData);
// }

//from louis
function Retail_Sale(c, x, y, w, h, d) {
    // d = [date, display value]
    var date = d[0];
	clearCanvas(c);
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
	clearCanvas(c);
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");
    ctx.scale(w/150,h/130);
    x = x/(w/150);
    y = y/(h/130);

    //outer rectangle
    ctx.roundRect(x+0, y, 150, 130, 5).stroke();
    //inner rectangle
    ctx.roundRect(x+5, y+5, 140, 120, 5).stroke();
    //fill the inner rectangle
    ctx.fill();
    ctx.font = "bold 20pt Calibri";
    //color of the "FOR SALE" text
    ctx.fillStyle = "#EEEE00";
    ctx.fillText("FOR SALE", x+10, y+30);
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


function Cost_Per_Sale(c, x, y, w, h, d) {
	clearCanvas(c);
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



function DrawBox(c, x, y, w, h, d) {
	clearCanvas(c);
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

//old

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


function Pump_In_Sale(c, x, y, w, h, d) {
	clearCanvas(c);
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
    context.quadraticCurveTo(trX, blY, midX, h);
    context.quadraticCurveTo(controlX, h, blX, blY);
    context.strokeStyle = "#000000";
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
        context.quadraticCurveTo(trX, blY, midX, h);
        context.quadraticCurveTo(controlX, h, blX, blY);

        if (i + 1 == d.length) {
            context.fillStyle = d[i][2];
        } else {
            context.fillStyle = d[i + 1][2];
        }
        context.strokeStyle = "black";
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
        context.fillText(d[i][1], (midX / 3) * 2.5, midY - temp / 2 + text_size / 2);
    }
}


function DrawPie(c, x, y, w, h, d) {
	clearCanvas(c);
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

function iniStopPos(array) {
    var final_pos = new Array();
    for (var i = 0; i < array.length; i++) {
        final_pos[i] = Math.floor(array[i][1] / 12);
    }
    return final_pos;
}

function Competitive_Segment_Sale_findMax(array) {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i][1] > max) {
            max = array[i][1];
        }
    }
    return max;
}