


function fillBackground(c)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
    context.fillStyle = "#74c043";	
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
}


// The drawPump function has a minimum width
function drawPump(c, x, y, w, h, d)
{

    if (w < 350)
    {
        alert("drawPump width too small.  Min width 350.");
    }

    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");




    var imagePump = new Image();
    var imageFiller = new Image();

    imagePump.src = "pump.png";
    imageFiller.src = "nozzle.png";


    // Draw an image of an old style gasoline pump
    context.drawImage(imagePump, x, y);


    // Find largest value in dataset to determine scale
    var i = 0;
    var l = 0;

    for (i = 0; i < d.length; i = i + 1)
    {
        if (l < parseInt(d[i][1]))
        {
            l = parseInt(d[i][1]);
        }
    }


    // Draw each dealership along with numbers, text, and gas pump graph
    for (i = 0; i < d.length; i = i + 1)
    {
    

        // Write text with the dealership's name
        var startTextX = x + 20;
        var startTextY = y + 90 + (50 * i);

        context.beginPath();

        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;

        context.font = "13pt Helvetica";
        context.fillStyle = "#ffffff";	
        context.fillText(d[i][0], startTextX, startTextY+37);


        // Place numbers in mock rolling drum displays
        var j = 0;
        var rddX = 0;
        var rddY = 0;

        for (j = 0; j < d[i][1].length; j = j+1)
        {

            rddX = startTextX + (j*19);
            rddY = startTextY;

            context.beginPath();
            context.rect(rddX+1, rddY+1, 15, 20);
            context.strokeStyle = "white";
            context.lineWidth = 2;
            context.stroke();
 
            context.font = "13pt Helvetica";
            context.fillStyle = "#ffffff";	
            context.fillText(d[i][1].charAt(j), rddX+4, rddY+17);
        }

        // Draw gas pump bar graph
        var barGraphX = startTextX + 180;
        var barGraphY = startTextY;
        var barGraphW = (w - barGraphX - 111 + x) * (parseInt(d[i][1])/l);
        var barGraphH = 10;

        context.beginPath();
        context.rect(barGraphX, barGraphY, barGraphW, barGraphH);
        context.fillStyle = "#ffffff";
        context.shadowColor = "#000000";
        context.shadowBlur = 10;
        context.shadowOffsetX = 3;
        context.shadowOffsetY = 3;
        context.fill();
        context.drawImage(imageFiller, barGraphX + barGraphW - 10, barGraphY - 25);

    }





}

