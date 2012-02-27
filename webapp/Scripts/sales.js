var offset = 0;

//TODO : Put this in some common place for all the infographics to see
var monthname = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
var fullMonthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

function init(date) {
    drawGraph01(date); //Retail_Sale
    drawGraph02(date); //Used_Vehicle_Sale
    drawGraph03(date); //Cost_Per_Sale
    drawGraph04(date); //Pump_In_Sale
    drawGraph05(date); //Dealer_Retention01
    drawGraph06(date); //Dealer_Retention02
    drawGraph07(date); //Visit_Per_Customer01
    drawGraph08(date); //Visit_Per_Customer02
    drawGraph09(date); //Competitive_Segment_Sale
    drawGraph10(date); //Lost_Profit
    drawGraph11(date); //Lost_Sale
    drawGraph12(date); //Customer
}

function clearCanvas(c) {
    var canvas = document.getElementById(c);
	var context = canvas.getContext("2d");
	// Store the current transformation matrix
	ctx.save();

	// Use the identity matrix while clearing the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Restore the transform
	ctx.restore();
}

function drawGraph01(date) {
    Retail_Sale("Retail_Sale", date);
    //call Retail_Sale every 20 millisecond
    //return setInterval(Retail_Sale, 20);
}

function drawGraph02(date) {
    var kpiArray = SearchKPIByDate(date);
    var kpiData = "";

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == "Used_Vehicle_Sales") {
            kpiData = kpiArray[i][1];
            break;
        }
    }
    var data = [date, kpiData];
    Used_Vehicle_Sale("Used_Vehicle_Sale", data);
}

function drawGraph03(date) {
    var kpiArray = SearchKPIByDate(date);
    var kpiData = "";

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == "Cost_Per_Sale") {
            kpiData = kpiArray[i][1];
            break;
        }
    }
    Cost_Per_Sale("Cost_Per_Sale", [date, kpiData]);
}

function drawGraph04(date) // Need kpi names
{
    var kpiArray = SearchKPIByDate(date);
    var kpiData = new Array();

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == "Pump_In_Sales_Anytown_Automotive") {
            kpiData.push([kpiArray[i][1], "Anytown Automotive", "#ff9b00"]);
        }
        else if (kpiArray[i][0] == "Pump_In_Sale_Allan_Automart") {
            kpiData.push([kpiArray[i][1], "Allan Automart", "#f54c08"]);
        }
        else if (kpiArray[i][0] == "Pump_In_Sale_Jefferson_Automotive") {
            kpiData.push([kpiArray[i][1], "Jefferson Automotive", "#b4213f"]);
        }
        else if (kpiArray[i][0] == "Pump_In_Sale_Nestor_Auto_Center") {
            kpiData.push([kpiArray[i][1], "Nestor Auto Center", "#69039d"]);
        }
        else if (kpiArray[i][0] == "Pump_In_Sale_Diamond_Automotive") {
            kpiData.push([kpiArray[i][1], "Diamond Automotive", "#283577"]);
        }
        else if (kpiArray[i][0] == "Pump_In_Sale_Anthony_Motors") {
            kpiData.push([kpiArray[i][1], "Anthony Motors", "#66a5c7"]);
        }
    }
   
    Pump_In_Sale("Pump_In_Sale", 0, 0, 633, 400, kpiData);
}

function drawGraph05(date) {
    DrawBox("Dealer_Retention01", "Dealer", "Retention");
}

function drawGraph06(date) // Need KPI name
{
    var kpiArray = SearchKPIByDate(date);
    var kpiData = "";

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == "Dealer_Retention") {
            kpiData = kpiArray[i][1];
            break;
        }
    }
    DrawPie("Dealer_Retention02", 0, 0, 100, 100, kpiData);
}

function drawGraph07(date) {
    DrawBox("Visit_Per_Customer01", "Visits Per", "Customer");
}

function drawGraph08(date) // Need KPI name
{
    var kpiArray = SearchKPIByDate(date);
    var kpiData = "";

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == "Visits_Per_Customer") {
            kpiData = kpiArray[i][1];
            break;
        }
    }
    DrawPie("Visit_Per_Customer02", 0, 0, 100, 100, kpiData);
}

function drawGraph09(date) {
   // var Comp_Seg_Sale_data = new Array(["Anytown Automotive", 98], ["Jeff Williams Toyota", 167], ["Uptown Honda", 105], 
   //["Fred Rodges Mazda", 103], ["Garrett Ford", 68], ["Peter Lake Ford", 50]);
    //pull from database
    var kpiArray = SearchKPIByDate(date);
    var kpiData = new Array();

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == "Competitive_Segment_Sale_Anytown_Automotive") {
            kpiData.push(["Anytown Automotive",kpiArray[i][1]]);
        }
        else if (kpiArray[i][0] == "Competitive_Segment_Sale_Jeff_Williams_Toyotas") {
            kpiData.push(["Jeff Williams Toyota", kpiArray[i][1]]);
        }
        else if (kpiArray[i][0] == "Competitive_Segment_Sale_Uptown_Honda") {
            kpiData.push(["Uptown Honda",kpiArray[i][1]]);
        }
        else if (kpiArray[i][0] == "Competitive_Segment_Sale_Fred_Rodgers_Mazda") {
            kpiData.push(["Fred Rodgers Mazda",kpiArray[i][1]]);
        }
        else if (kpiArray[i][0] == "Competitive_Segment_Sale_Garrett_Ford") {
            kpiData.push(["Garrett Ford", kpiArray[i][1]]);
        }
        else if (kpiArray[i][0] == "Competitive_Segment_Sale_Peter_Lake_Ford") {
            kpiData.push(["Peter Lake Ford", kpiArray[i][1]]);
        }
    }

    //draw text
//    for (var k = 0; k < kpiData.length; k++) {
//        ctxText.fillText(kpiData[k][0], 0, 20 + k * 30);
//        ctxText.fillText(kpiData[k][1], 100 + Math.floor(kpiData[k][1] / 10) * 30, 20 + k * 30);
//    }
    //Competitive_Segment_Sale(ctx6, data);
    //call Competitive_Segment_Sale every 20 millisecond
    //Competitive_Segment_Sale(kpiData);
    var s = setTimeout(function () {Competitive_Segment_Sale(kpiData);}, 20);
    //Competitive_Segment_Sale.Comp_Seg_Sale_data = kpiData;
    //return setInterval(Competitive_Segment_Sale, 20);
}

function drawGraph10(date) {
    var kpiArray = SearchKPIByDate(date);
    var kpiData = "";

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == "Lost_Profit") {
            kpiData = kpiArray[i][1];
            break;
        }
    }
    Lost_Profit("Lost_Profit", kpiData);
}

function drawGraph11(date) {

    var kpiArray = SearchKPIByDate(date);
    var kpiData = "";

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == "Lost_Sale") {
            kpiData = kpiArray[i][1];
            break;
        }
    }
    Lost_Sale("Lost_Sale", kpiData);
}

function drawGraph12(date) {

   // var customer_data = { 'Single Visit Customer': 567, 'Recent Sales Customer': 184 };
    var kpiArray = SearchKPIByDate(date);
    var kpiData = new Array();

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == "Single_Visit_Customers") {
            kpiData.push(["Single Visit Customer", kpiArray[i][1]]);
        }
        else if (kpiArray[i][0] == "Recent_Sales_Customers") {
            kpiData.push(["Recent Sales Customers", kpiArray[i][1]]);
        }
    }
    //Customer("Customer",w,h,c1,c2,title)	
    Customer("Customer", 700, 200, "#36648B", "#FAF0E6", kpiData);
}


function Retail_Sale(c, date) {
	clearCanvas(c);
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");

    var img01 = new Image();
    img01.src = 'images/retail_car.png';
    var infoRet = SearchKPIByDate(date);
    var retVal;

    for (var i = 0; i < infoRet.length; i++) {
        if (infoRet[i][0] == "Retail_Sales") {
            retVal = infoRet[i][1];
        }
    }

    ctx.fillStyle = "#EEEE00";
    //draw rectangle in the back of the image
    //x,y, width, height
    fillHeight = (retVal) / -4;
    if (fillHeight < -70) {
        fillHeight = -70;
    }
    ctx.fillStyle = "white";
    ctx.fillRect(25, 110, 110, -70);
    ctx.fillStyle = "#EEEE00";
    ctx.fillRect(25, 110, 110, fillHeight);
    img01.onload = function () {
        ctx.drawImage(img01, 0, 0, img01.width * 2, img01.height * 2);
        ctx.fillStyle = "white";
        //draw text
        ctx.font = "bold 28pt Calibri";
        ctx.fillText(monthname[date.getMonth()], 51, 135);
        ctx.fillText(retVal, 47, 37);
    }
}

function Used_Vehicle_Sale(c, d) {
	clearCanvas(c);
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
    ctx.fillStyle = "#EEEE00";
    ctx.fillText("FOR SALE", 20, 50);
    ctx.fillStyle = "white";
    //rectangle for date display
    ctx.fillRect(20, 60, 130, 35);
    //rectangle for data display
    ctx.fillRect(20, 100, 130, 35);
    ctx.fillStyle = "black";
    //date
    ctx.fillText(monthname[d[0].getMonth()] +" "+d[0].getFullYear().toString().substr(2, 3), 45, 90);
    //data
    ctx.fillText(d[1], 70, 130);
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

function Cost_Per_Sale(c, d) {
	clearCanvas(c);
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");

    var img02 = new Image();
    img02.src = 'images/cost_per_sale.png';

    ctx.fillStyle = "green";
    //draw rectangle in the back of the image
    //x,y, width, height
    img02.onload = function () {
        ctx.drawImage(img02, 0, 0, img02.width * 1.5, img02.height * 1.5);
        ctx.fillStyle = "green";
        //draw textChalkboard
        //ctx.font = "bold 18pt Quartz MS"; ///	windows only
        ctx.font = "bold 28pt MarkerFelt-Thin";
        ctx.fillText(monthname[d[0].getMonth()], 65, 117);
        ctx.font = "bold 38pt MarkerFelt-Thin";
        ctx.fillText(d[1], 65, 75);
    }
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

function DrawBox(c, text1, text2) {
	clearCanvas(c);
    // Create fill gradient
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");

    // Fill the path
    //ctx.fllStyle = gradient;
    //ntext.fill();

    ctx.strokeRect(20, 20, 100, 100);
    var grd = ctx.createLinearGradient(20, 20, 59.9, 100);

    grd.addColorStop(0, "purple");

    grd.addColorStop(1, "red");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 29.9, 100);
    ctx.strokeRect(10, 10, 120, 120);
    ctx.font = "16pt Arial";

    ctx.shadowColor = "white";
    ctx.shadowBlur = 2;
    ctx.fillStyle = "white";
    ctx.fillText(text1, 25, 60);
    ctx.fillText(text2, 25, 90);
}

function Competitive_Segment_Sale(Comp_Seg_Sale_data) {
    var canvas = document.getElementById("Competitive_Segment_Sale");
	clearCanvas(canvas);
    var ctx6 = canvas.getContext("2d");
    var img03 = new Image();
    img03.src = 'images/car2.png';
    img03.onload = function () {
        ctx6.fillStyle = "white";

        var maxPos = Math.floor(Competitive_Segment_Sale_findMax(Comp_Seg_Sale_data) / 12);
        ctx6.fillText(maxPos, 650, 15 + i * 30);

        var final_pos = iniStopPos(Comp_Seg_Sale_data);

        var i = 0;
        for (i = 0; i < Comp_Seg_Sale_data.length; i++) {
            var position = Math.floor(Comp_Seg_Sale_data[i][1] / 12);
            if (offset < position) {
                offset += 0.02;
                //ctx6.fillText(i, 200, i * 20);
                //                ctx6.drawImage(img03, 180 + offset * 25, i * 30, img03.width, img03.height);
                ctx6.drawImage(img03, 180 + position*25, i * 30, img03.width, img03.height);

                ctx6.clearRect(180 + (offset - 0.9) * 25, i * 30, img03.width, img03.height);
                ctx6.font = "bold 12pt Calibri";
                //draw KPI_Name
                ctx6.fillText(Comp_Seg_Sale_data[i][0], 0, 15 + i * 30);
                //draw KPI_Data
                ctx6.fillText(Comp_Seg_Sale_data[i][1], 215 + position * 25, 15 + i * 30);

                if (offset + 0.02 > maxPos) {
                    var j = 0, offx = offset;
                    for (j = 0; j < final_pos.length; j++) {
                        //TODO: draw number after the car reach destination
                        //ctx6.fillText(Comp_Seg_Sale_data[j][1], 215+Math.floor(Comp_Seg_Sale_data[j][1]/12)*30, 15+j*30);
                        ctx6.clearRect(180 + (final_pos[j]) * 30, j * 30, img03.width, img03.height);

                        //ctx6.fillText(final_pos[j], 215+position*35, 15+j*30);

                    }
                    offset = 0;
                }
            }
        }
    }
    //var s = setTimeout(Competitive_Segment_Sale(Comp_Seg_Sale_data),20);
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

function Lost_Profit(c, d) {
	clearCanvas(c);
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

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
    context.moveTo(padding + width / 2, padding);
    context.lineTo(padding + width, height + padding);
    context.lineTo(padding, height + padding);
    context.closePath();

    // Create fill gradient
    var gradient = context.createLinearGradient(0, 0, 0, height);
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
    gradient = context.createLinearGradient(0, padding, 0, padding + height);
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
    context.fillText("$" + d, 190, 100);

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 80px 'Times New Roman', Times, serif";
    context.fillStyle = "#333";
    try {
        context.fillText("!", padding + width / 2, padding + height / 1.5);
    } catch (ex) { }

}

function Lost_Sale(c, d) {
	clearCanvas(c);
    var canvas = document.getElementById(c);
    var ctx = canvas.getContext("2d");

    var img04 = new Image();
    img04.src = 'images/puzzle.png';
    img04.onload = function () {
        ctx.drawImage(img04, 0, 0, img04.width, img04.height);
        ctx.font = "bold 34pt Calibri";
        ctx.fillText("LOST", 110, 30);
        ctx.fillText("SALES", 97, 70);
        ctx.fillStyle = "white";
        ctx.fillText("LOST", 111, 28);
        ctx.fillText("SALES", 97, 68);
        ctx.fillStyle = "black";
        ctx.font = "bold 40pt Calibri";
        ctx.fillText(449, 155, 120);
    }
}


function Customer(canvas, w, h, c1, c2, data) {
	clearCanvas(canvas);
    //Adjust chart width and height
    w = w - 20; h = h - 50;
    var c = document.getElementById(canvas);
    // Check the element is in the DOM and the browser supports canvas
    if (c.getContext) {
        var ctx7 = c.getContext("2d");
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
        var gradient = ctx7.createLinearGradient(w / 2, 50, w / 2, h);
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
            ctx7.fillRect(border + txtArea, (border * 2) + (bar_h * n), (data[key][1] / max) * full, bar_h - border);
            n++;
        }

        ctx7.shadowColor = "white";
        n = 0;
        for (key in data) {
            ctx7.strokeRect(border + txtArea, (border * 2) + (bar_h * n), (data[key][1] / max) * full, bar_h - border);
            n++;
        }

        ctx7.shadowOffsetX = border / -2;
        n = 0;
        for (key in data) {
            ctx7.strokeRect(border + txtArea, (border * 2) + (bar_h * n), ((data[key][1] / max) * full), bar_h - border);
            n++;
        }
        ctx7.shadowOffsetY = border / -2;
        n = 0;
        for (key in data) {
            ctx7.strokeRect(border + txtArea, (border * 2) + (bar_h * n), ((data[key][1] / max) * full), bar_h - border);
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
            ctx7.fillText(data[key][0], (border + 10), (border * 2) + (bar_h * n) + (bar_h / 1.8), txtArea - 15);
            ctx7.font = 'bold 18px sans-serif';
            ctx7.fillText(data[key][1], (border + 10 + txtArea), (border * 2) + (bar_h * n) + (bar_h / 1.8), full);
            n++;
        }
        ctx7.restore();
    }
}
