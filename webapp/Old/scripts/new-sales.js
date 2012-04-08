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

