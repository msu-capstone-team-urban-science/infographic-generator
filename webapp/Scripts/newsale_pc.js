var offset = 0;

//var test = GetKPI(date,"DL"):
//ctx.scale(w/width,h/heigh);
//x = x/(w/width);
//y = y/(h/heigh);
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

			
	var s = setTimeout(function () {Competitive_Segment_Sale(canvas, 100, 0, 100,100,kpiData);}, 20);
		
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


function Competitive_Segment_Sale(c,x,y,w,hComp_Seg_Sale_data) {
	clearCanvas(c); // TODO: CHANGE THIS TO have the canvas name as a arg
    var canvas = document.getElementById(c);
    var ctx6 = canvas.getContext("2d");
	
	ctx6.scale(w/width,h/heigh);
	x = x/(w/width);
	y = y/(h/heigh);
	
    var img03 = new Image();
    img03.src = 'images/car2.png';
    img03.onload = function () {
        ctx6.fillStyle = "white";

        var maxPos = Math.floor(Competitive_Segment_Sale_findMax(Comp_Seg_Sale_data) / 12);
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

function Lost_Profit(c, x,y,w,h,d) {
	clearCanvas(c);
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

	ctx.scale(w/width,h/heigh);
	x = x/(w/width);
	y = y/(h/heigh);
	
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

	ctx.scale(w/width,h/heigh);
	x = x/(w/width);
	y = y/(h/heigh);
	
    var img04 = new Image();
    img04.src = 'images/puzzle.png';
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
	
	ctx.scale(w/width,h/heigh);
	x = x/(w/width);
	y = y/(h/heigh);
	
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