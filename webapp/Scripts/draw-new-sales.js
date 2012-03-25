//Notice from Lok
//array that stores the name of element, x, y, width, height and data through the year
//for every element we draw, make sure you pass the above information into the array
//format: trendArray.push(['name-of-element', x, y, width, height,[JanData, FebData,...]]);
//if there is a radius with no width and height, just pass the radius twice
var trendArray=new Array();
function DrawSalesInfographic (c,date)
{
	var canvas = document.getElementById(c);
	var context = canvas.getContext("2d");

	//    |\   | \   __   . . .
	//    | |  | /  /  \  | | |
	//    | |  |<   |--|  | | |
	//    |/   | \  |  |   v v    some stuff


	// fill the top section of the background with a gradient
	context.beginPath();
	var grd = context.createLinearGradient(canvas.width/2, 0, canvas.width/2, 747);
	grd.addColorStop(1, "#93c572");
	grd.addColorStop(0, "#cccccc");
	context.fillStyle = grd;
	context.rect(0, 0, canvas.width, 747);
	context.fill();

	// draw stripes over the gradient
	DrawStripes(c, 0, 0, canvas.width, 747, "#eeeeee");

	// draw the splitter image
	var imgSplitter = new Image();
	imgSplitter.onload = function(){
		context.drawImage(imgSplitter, 0, 747, canvas.width, 200); // below the stripes
		context.drawImage(imgSplitter, 0, 1647, canvas.width, 200); // below the grey area
		DrawCanvasPart2(c,date);  // drawing the entire canvas must be broken up in to multiple functions when loading an image to avoid race condition of background drawing over foreground
	}
	imgSplitter.src = "images/splitter.png";
};

function DrawCanvasPart2 (c,date)
{
	var canvas = document.getElementById(c);
	var context = canvas.getContext("2d");
	// draw circles
	var circleColor = "#ededed"
	context.fillStyle = circleColor;
	context.strokeStyle = circleColor;

	context.beginPath(); // top left
	context.arc(canvas.width/4, 200, 120, 0, 2 * Math.PI, false);
	context.fill();

	context.beginPath(); // top right
	context.arc((canvas.width/2) + 290, 200, 120, 0, 2 * Math.PI, false);
	context.fill();

	context.beginPath(); // middle left
	context.arc(canvas.width/4, 490, 120, 0, 2 * Math.PI, false);
	context.fill();

	context.beginPath(); // bottom left
	context.arc(canvas.width/4, 780, 120, 0, 2 * Math.PI, false);
	context.fill();

	context.lineWidth = 77; // define line properties
	context.lineCap = "butt";

	context.beginPath(); // vertical line
	context.moveTo(canvas.width/4, 200);
	context.lineTo(canvas.width/4, 780);
	context.stroke();

	context.beginPath(); // horizontal line
	context.moveTo(canvas.width/4, 200);
	context.lineTo(canvas.width/2 + 290, 200);
	context.stroke();

	// draw some elements on top of the circles
	Used_Vehicle_Sale(c, canvas.width/4-75, 135, 150, 130, [date, GetKPI(date, "Used_Vehicle_Sales")]);
	Retail_Sale(c, canvas.width/4-75, 415, 77, 76, [date, GetKPI(date, "Retail_Sales")]);
	Cost_Per_Sale(c, canvas.width/2 + 290 - 88, 130, 122, 80, [date, GetKPI(date, "Cost_Per_Sale")]);
	Pump_In_Sale(c, canvas.width/4+212, 330, canvas.width - (canvas.width/4+212), 370, [[GetKPI(date, "Pump_In_Sales_Anytown_Automotive"), "Anytown Automotive", "#ff9b00"], [GetKPI(date, "Pump_In_Sale_Allan_Automart"), "Allan Automart", "#f54c08"], [GetKPI(date, "Pump_In_Sale_Jefferson_Automotive"), "Jefferson Automotive", "#b4213f"], [GetKPI(date, "Pump_In_Sale_Nestor_Auto_Center"), "Nestor Auto Center", "#69039d"], [GetKPI(date, "Pump_In_Sale_Diamond_Automotive"), "Diamond Automotive", "#283577"], [GetKPI(date, "Pump_In_Sale_Anthony_Motors"), "Anthony Motors", "#66a5c7"]]);
	
	
	//Array of elements infomation
	/*!!! you have to add 207px(height of header picture) to y !!!*/
	//var dataArray = GetTrendKPI(date, 'Retail_Sales');
	trendArray.push(['Retail Sale', canvas.width/4-71, 415+207, 152, 152,GetTrendKPI(date, 'Retail_Sales'),'Description']);
	/////trendArray.push(['Retail Sale', canvas.width/4-71, 123+207, 152, 152,dataArray,'Description']);
	
	trendArray.push(['Used Vehicle Sale', canvas.width/4-75, 135+207, 150, 130,GetTrendKPI(date, 'Used_Vehicle_Sales'),'Description']);
	trendArray.push(['Cost Per Sale', canvas.width/2 + 202, 130+207, 240, 192,GetTrendKPI(date, 'Cost_Per_Sale'),'Description']);
	trendArray.push(['Pump In Sale', canvas.width/4+212, 330+207, canvas.width - (canvas.width/4+212), 370,GetTrendKPI(date, 'Pump_In_Sales_Anytown_Automotive'),'Description']);


	// get some text on the screen
	context.font = "bold 19pt Calibri";
	context.fillStyle = "#ffffff";
	context.shadowColor = "#000000";
	context.shadowBlur = 6;
	context.fillText("Used Vehicle Sales", 157, 125);
	context.fillText("Retail Sales", 189, 405);
	context.fillText("Cost Per Sale", 723, 125);
	context.fillText("Pump In Sale", 180, 690);
	context.shadowBlur = 0;

	// draw the pointing dude
	var imageObj = new Image();
 
	imageObj.onload = function(){
		context.drawImage(imageObj, canvas.width/4-111, 648);
		DrawCanvasPart3(c,date);
	};
	imageObj.src = "images/PointingDude.png";

}

function DrawCanvasPart3(c,date)
{
	var canvas = document.getElementById(c);
	var context = canvas.getContext("2d");
	
	// draw grey background below splitter image
	//context.fillStyle = "#333333";
	//context.rect(0,947, canvas.width, 300);
	DrawSection(c, 0, 903, canvas.width, 300, [0, "#333333"]);

	context.save();
	context.translate(canvas.width, 1291);
	context.rotate(Math.PI);
	DrawSection(c, 0, 0, canvas.width, 300, [0, "#333333"]);
	context.restore();

	DrawSection(c, 0, 1203, canvas.width, 400, [0, "#444444"]);

	context.save();
	context.translate(canvas.width, 1691);
	context.rotate(Math.PI);
	DrawSection(c, 0, 0, canvas.width, 400, [0, "#444444"]);
	context.restore();
	//context.fill();

	// draw some elements over the grey midsection

	context.font = "30pt Calibri";
	context.fillStyle = "#ffffff";

	// Dealer
	context.save();
	context.translate(200, 1150);
	context.rotate(-0.42);
	context.fillText("D", -15, -105);
	context.rotate(0.22);
	context.fillText("e", -10, -105);
	context.rotate(0.15);
	context.fillText("a", -9, -105);
	context.rotate(0.15);
	context.fillText("l", -6, -105);
	context.rotate(0.14);
	context.fillText("e", -10, -105);
	context.rotate(0.16);
	context.fillText("r", -9, -105);
	context.restore();

	// Retention
	context.save();
	context.translate(200, 1100);
	context.rotate(.95);
	context.fillText("R", -13, 80);
	context.rotate(-0.31);
	context.fillText("e", -10, 80);
	context.rotate(-0.22);
	context.fillText("t", -6, 80);
	context.rotate(-0.22);
	context.fillText("e", -10, 80);
	context.rotate(-0.26);
	context.fillText("n", -9, 80);
	context.rotate(-0.26);
	context.fillText("t", -6, 80);
	context.rotate(-0.2);
	context.fillText("i", -6, 80);
	context.rotate(-0.21);
	context.fillText("o", -10, 80);
	context.rotate(-0.29);
	context.fillText("n", -9, 80);
	context.restore();


	// Visits Per
	context.save();
	context.translate(800, 1150);
	context.rotate(-0.49);
	context.fillText("V", -15, -105);
	context.rotate(0.16);
	context.fillText("i", -6, -105);
	context.rotate(0.14);
	context.fillText("s", -9, -105);
	context.rotate(0.11);
	context.fillText("i", -6, -105);
	context.rotate(0.1);
	context.fillText("t", -6, -105);
	context.rotate(0.13);
	context.fillText("s", -9, -105);
	context.rotate(0.20);
	context.fillText("P", -9, -105);
	context.rotate(0.18);
	context.fillText("e", -10, -105);
	context.rotate(0.16);
	context.fillText("r", -9, -105);
	context.restore();

	// Customer
	context.save();
	context.translate(800, 1100);
	context.rotate(1);
	context.fillText("C", -13, 80);
	context.rotate(-0.4);
	context.fillText("u", -10, 80);
	context.rotate(-0.29);
	context.fillText("s", -9, 80);
	context.rotate(-0.21);
	context.fillText("t", -6, 80);
	context.rotate(-0.23);
	context.fillText("o", -10, 80);
	context.rotate(-0.3);
	context.fillText("m", -10, 80);
	context.rotate(-0.45);
	context.fillText("e", -10, 80);
	context.rotate(-0.24);
	context.fillText("r", -6, 80);
	context.restore();


	DrawPie(c, 150, 1050, 100, 100, GetKPI(date, "Dealer_Retention"));
	DrawPie(c, 750, 1050, 100, 100, GetKPI(date, "Visits_Per_Customer"));

    var kpiData = new Array();
    kpiData.push(["Anytown Automotive",GetKPI(date,"Competitive_Segment_Sale_Anytown_Automotive")]);
    kpiData.push(["Jeff Williams Toyota", GetKPI(date,"Competitive_Segment_Sale_Jeff_Williams_Toyotas")]);
    kpiData.push(["Uptown Honda",GetKPI(date,"Competitive_Segment_Sale_Uptown_Honda")]);
    kpiData.push(["Fred Rodgers Mazda",GetKPI(date,"Competitive_Segment_Sale_Fred_Rodgers_Mazda")]);
    kpiData.push(["Garrett Ford", GetKPI(date,"Competitive_Segment_Sale_Garrett_Ford")]);
    kpiData.push(["Peter Lake Ford", GetKPI(date,"Competitive_Segment_Sale_Peter_Lake_Ford")]);
    DrawCompetitiveSegmentSale(c,100,1600,800,400,kpiData);


    DrawLostProfit(c, 600, 1900, 200, 200,GetKPI(date, "Lost_Profit"));
    DrawLostSale(c, 100, 1900, 200, 200, GetKPI(date, "Lost_Sales"));

}

//DIALOG BOX HANG


$(document).ready(function () {
	// if user clicked on button, the overlay layer or the dialogbox, close the dialog	
	$('#dialog-overlay, #dialog-box').bind("touchstart click", function () {		
		$('#dialog-overlay, #dialog-box').hide();		
		return false;
	});
	
	// if user resize the window, call the same function again
	// to make sure the overlay fills the screen and dialogbox aligned to center	
	$(window).resize(function () {
		
		//only do it if the dialog box is not hidden
		if (!$('#dialog-box').is(':hidden')) popup();		
	});		
});

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
