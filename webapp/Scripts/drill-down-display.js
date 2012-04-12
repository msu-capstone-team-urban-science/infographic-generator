// Name:        popup
// Author:      Lok Cheung
// Purpose:     Uses quadratic curves to draw a colorful figure with labeled sections.  Each section's height is relative to its weighted value.
// Arguments:   popup(html_message);
function popup(message) {
	// get the screen height and width  
	var maskHeight = $(document).height();  
	var maskWidth = $(window).width();
	
	// calculate the values for center alignment
	var dialogTop =  (maskHeight/3) - ($('#dialog-box').height());  
	var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
	
	// assign values to the overlay and dialog box
	$('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
	$('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
	
	// display the message
	$('#dialog-message').html(message);	
}

// Name:        drawTrend
// Author:      Lok Cheung
// Purpose:     To draw the drill down display trend graph
// Arguments:   drawTrend(data, heightFactor);
// Data format: [[month, value], ... ]
// Example:     drawTrend(data, heightFactor);
function drawTrend(data,heightFactor) {
	var canvas = document.getElementById("trendGraph");
	var context = canvas.getContext("2d");
	var radius=4;
	context.fillStyle ='#00F';
	var sum=0;
	for(var j=0;j<data.length;j++){
		sum+=data[j][1];
	}
	context.font = "14pt Calibri";
	for(var i=0;i<data.length;i++)
	{
		context.save();
		context.beginPath();
		context.moveTo(150,220-data[0][1]*heightFactor+30);
		context.arc(150, 220-data[0][1]*heightFactor+30, radius, 0, 2 * Math.PI, false);
		context.fillText(data[0][1],142,220-data[0][1]*heightFactor-20+30);
		context.fillText(monthname[0],140,250);
		for(var k=1;k<data.length;k++){
			context.arc(k*70+150, 220-data[k][1]*heightFactor+30, radius, 0, 2 * Math.PI, false);
			context.fillText(monthname[k],k*70+142,250);		//draw month
			context.fillText(data[k][1],k*70+140,220-data[k][1]*heightFactor-20+30); //draw number
			context.lineTo(k*70+150,220-data[k][1]*heightFactor+30);
		}
		context.lineWidth=4;
		context.strokeStyle = "blue";
		context.lineWidth=1;
		context.stroke();
		context.restore();
	}		
}

// Name:        drawTrendMul
// Author:      Lok Cheung
// Purpose:     To draw the drill down display trend graph for elements with multiple data
// Arguments:   drawTrendMul(canvas_id, KPI_name, data, color, index, heightFactor, withNum);
// Data format: [[month, value], ... ]
function drawTrendMul(c, name, d, color, index, heightFactor, withNum){
	var canvas = document.getElementById(c);
	var context = canvas.getContext("2d");
	context.save();
	context.font = "14pt Calibri";
	context.beginPath();
	context.arc(150, (220-d[0][1]/4*heightFactor), 2, 0, 2 * Math.PI, false);
	context.fillText(monthname[0],145,250);		//draw month
	//draw the chart with a number on top of each data if withNum is true
	if(withNum==true){
		context.fillText(d[0][1],130,220-d[0][1]/4*heightFactor-20); //draw number
	}
	context.lineTo(150,(220-d[0][1]/4*heightFactor));
	for(var i=1;i<d.length;i++){
		context.arc(i*70+150, (220-d[i][1]/4*heightFactor), 2, 0, 2 * Math.PI, false);
		context.fillText(monthname[i],i*70+145,250);		//draw month
		if(withNum==true)
			context.fillText(d[i][1],i*70+130,220-d[i][1]/4*heightFactor-20); //draw number
		context.lineTo(i*70+150,(220-d[i][1]/4*heightFactor));
	}
	context.fillStyle = color; // text color
	context.font = "10pt Calibri";
	context.fillText(name, 0, index*20+10);
	context.strokeStyle = color;
	context.stroke();
	context.restore();
}