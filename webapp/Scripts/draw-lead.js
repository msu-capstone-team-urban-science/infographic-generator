//Notice from Lok
//array that stores the name of element, x, y, width, height and data through the year
//for every element we draw, make sure you pass the above information into the array
//format: trendArray.push(['name-of-element', x, y, width, height,[JanData, FebData,...]]);
//if there is a radius with no width and height, just pass the radius twice
var trendArray=new Array();

function DrawLead(c,date) 
{
//Draw the main background
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	context.save();
	var background = new Image();
	
	background.onload = function () { 
		context.drawImage(background,0,0);
		DrawLead2(c,date);
	}
	background.src = 'images/lead_back.png';
	context.restore();
}

function DrawLead2(c,date) {

//draw the first section background
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	context.save();
	var stone = new Image();
	
	stone.onload = function () { 
		context.drawImage(stone,29,500,745,500);
		DrawLead3(c,date);
	}
	stone.src = 'images/lead_stone.jpg';
	context.restore();
}

function DrawLead3(c,date) { 

//draw the separator 
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	context.save();
	var sep = new Image();
	
	sep.onload = function () { 
		context.drawImage(sep,0,150);
		DrawLead4(c,date);
	}
	sep.src = 'images/lead_sep.png';
	context.restore();
}

function DrawLead4(c,date) { 
//Draw another separator 
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	context.save();
	var sep2 = new Image();
	
	sep2.onload = function () { 
		context.drawImage(sep2,0,620);
		DrawLead5(c,date);
	}
	sep2.src = 'images/lead_sep.png';
	context.restore();
}

function DrawLead5(c,date) { 
//Draw the second and third section background
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	context.save();
	var back2 = new Image();
	var back3 = new Image();
	
	back2.onload = function () { 
		context.drawImage(back2,29,1007,745,439);
	}
	back3.onload = function(){
		context.drawImage(back3,29,1475,745,281)		
		DrawLead6(c,date);
	}
	back2.src = 'images/lead_background2.jpg';
	back3.src = 'images/lead_background3.jpg';
	context.restore();
}


function DrawLead6(c,date) { 
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	context.save();
	
	//Kpi
	var kpiUnique = addCommas(GetKPI(date,"Unique_Customers"));
	var kpiMail = GetKPI(date,"Response_Method_Email");
	var kpiPhone = GetKPI(date,"Response_Method_Phone");
	var kpiLost = GetKPI(date,"Lost_Sales_From_Leads");
	var kpiNew = GetKPI(date,"New_Sales_From_Leads");
	var kpiOld = GetKPI(date,"Used_Sales_From_Leads");
	var kpiAve = GetKPI(date,"Average_Response_Time");
	var kpiClose = GetKPI(date,"Close_Rate");
	var kpiProspect = addCommas(GetKPI(date,"Prospect_Count"));
	var kpiUnopened = addCommas(GetKPI(date,"Unopened_Leads"));
	var kpiNewBrand = addCommas(GetKPI(date,"New_Brand_Leads"));
	var kpiNew3PL_Kelly_Blue_Book = GetKPI(date,"New_3PL_Leads_Kelly_Blue_Book");
	var kpiNew3PL_Edmunds = GetKPI(date,"New_3PL_Leads_Edmunds");
	var kpiNew3PL_Dealix = GetKPI(date,"New_3PL_Leads_Dealix");
	var kpiNew3PL_Automotive = GetKPI(date,"New_3PL_Leads_Automotive.com");
	var kpiNew3PL_Jumpstart = GetKPI(date,"New_3PL_Leads_Jumpstart");
	kpiNew3PL_Kelly_Blue_Book = parseFloat(kpiNew3PL_Kelly_Blue_Book);
	kpiNew3PL_Edmunds = parseFloat(kpiNew3PL_Edmunds);
	kpiNew3PL_Dealix = parseFloat(kpiNew3PL_Dealix);
	kpiNew3PL_Automotive = parseFloat(kpiNew3PL_Automotive);
	kpiNew3PL_Jumpstart = parseFloat(kpiNew3PL_Jumpstart);
	var kpiNew3PL = {
						'Kelly Blue Book':kpiNew3PL_Kelly_Blue_Book,
						'Edmunds':kpiNew3PL_Edmunds,
						'Dealix':kpiNew3PL_Dealix,
						'Automotive':kpiNew3PL_Automotive,
						'Jumpstart':kpiNew3PL_Jumpstart};
						
	//Draw Lead elements
	DrawUniqueCustomers("myCanvas", 200, 190);
	DrawResponse("myCanvas", 28, 425, kpiMail, kpiPhone);
	DrawAvgRespTime ("myCanvas", 130, 685, kpiAve);
	DrawSales("myCanvas", 690, 860, kpiLost, kpiNew, kpiOld);		
	DrawUnopenedLead("myCanvas",30,1100,kpiUnopened, kpiNewBrand);
	Draw3PL("myCanvas",385,1170,380,300,kpiNew3PL);
	DrawCloseRate("myCanvas", 214, 1755, kpiClose);		
	DrawProspectCount("myCanvas", 590, 1750, kpiProspect);
	
	context.restore();
	//push elements into array
	var offset=100;
	trendArray.push(['Unique Customers', 130, 90+offset, 270, 190,GetTrendKPI(date, 'Unique_Customers'),'<p>The number of unique customers who have submitted leads</p>']);
	trendArray.push(['Response by Mail', 25, 300+offset, 375, 287,GetTrendKPI(date, 'Response_Method_Email'),'<p>The number of times a dealership has contacted new leads via an email message</p>']);
	trendArray.push(['Response by Phone', 405, 300+offset, 368, 287,GetTrendKPI(date, 'Response_Method_Phone'),'<p>The number of times a dealership has contacted new leads via a phone call</p>']);
	trendArray.push(['Average Response Time', 25, 590+offset, 225, 198,GetTrendKPI(date, 'Average_Response_Time'),'<p>The average number of minutes from the time a dealership receives a lead to the time the customer is contacted</p>']);
	trendArray.push(['New Sales From Leads', 40, 830+offset, 260, 150,GetTrendKPI(date, 'New_Sales_From_Leads'),'<p>The number of new vehicles puchased that can be linked to an online lead</p>']);
	trendArray.push(['Used Sales From Leads', 310, 830+offset, 270, 150,GetTrendKPI(date, 'Used_Sales_From_Leads'),'<p>The number of used vehicles purchased that can be linked to an online lead</p>']);
	trendArray.push(['Lost Sales From Leads', 590, 830+offset, 185, 150,GetTrendKPI(date, 'Lost_Sales_From_Leads'),'<p>The number of customer who submitted a lead to your dealership but purchased from another same brand dealership</p>']);
	trendArray.push(['Number of Leads', 420, 1020+offset, 355, 120,[[GetTrendKPI(date, 'Unopened_Leads'),"#ff9b00","Unopened Leads"],[GetTrendKPI(date, 'New_Brand_Leads'),"#f54c08","New Brand Leads"]],'<p>Unopened Leads: The number of leads that have not been contacted by a dealership</p><p>New Brand Leads: The number of new leads received from a brand-owned internet site (e.g. - VW.com)</p>']);
	trendArray.push(['New 3PL Leads', 350, 1145+offset, 424, 295,[[GetTrendKPI(date, 'New_3PL_Leads_Kelly_Blue_Book'),"#ff9b00","Kelly Blue Book"],[GetTrendKPI(date, 'New_3PL_Leads_Edmunds'),"#f54c08","Edmunds"],[GetTrendKPI(date, 'New_3PL_Leads_Dealix'),"#b4213f","Dealix"],[GetTrendKPI(date, 'New_3PL_Leads_Automotive.com'),"#69039d","Automotive.com"],[GetTrendKPI(date, 'New_3PL_Leads_Jumpstart'),"#283577","Jumpstart"]],'<p>Unopened Leads: The number of leads that have not been contacted by a dealership</p><p>The number of new leads received from a 3rd party internet site (e.g. - kbb.com)</p>']);
	trendArray.push(['Close Rate', 30, 1480+offset, 410, 275,GetTrendKPI(date, 'Close_Rate'),'<p>The percentage of customers who have bought a vehicle from online leads</p>']);
	trendArray.push(['Prospect Count', 470, 1480+offset, 300, 275,GetTrendKPI(date, 'Prospect_Count'),'<p>Prospects are potential sales customers provided by your manufacturer and Urban Science</p>']);
			
	//Text

	//kpiUnique
	var x = 0;
	var y = 0;
	context.save();
	context.font = "32pt Calibri";
	context.fillStyle = "#000000";
	context.fillText("Unique Customers", x + 430,y + 192);
	context.font = "48pt Calibri";
	context.fillText(kpiUnique,x + 520, y+ 272);
	context.restore();
	

	//Response Method
	var kpiMail = addCommas(GetKPI(date,"Response_Method_Email"));
	var kpiPhone = addCommas(GetKPI(date,"Response_Method_Phone"));
	
	var x = 7;
	var y = -240;
	context.save();
	context.font = "40pt Calibri";
	context.fillStyle = "#000000";
	context.font = "30pt Calibri";
	context.fillText("Response by", x + 30,y + 580);
	context.fillText("Mail",x + 30, y + 620);
	context.font = "60pt Calibri";
	context.fillText(kpiMail,x + 110, y+ 650);
	context.restore();

	context.save();
	context.font = "40pt Calibri";
	context.fillStyle = "#000000";
	context.font = "30pt Calibri";
	context.fillText("Response by", x + 550, y + 580);
	context.fillText("Phone", x + 650, y + 620);
	context.font = "60pt Calibri";
	context.fillText(kpiPhone,x + 480, y + 650);
	context.restore();

	//sales from lead
	var x = 110;
	var y = 960;

	context.save();
	context.fillStyle = "#ffffff";
	context.font = "45pt Calibri";
	context.fillText(kpiNew, x + 30,y );
	context.fillText(kpiOld, x + 300,y );
	context.fillText(kpiLost, x + 590,y );
	context.restore();
	
	context.save();
	context.fillStyle = "#000000";
	context.font = "28pt Calibri";
	context.fillText("Sales from Lead", x + 190,y -180);
	context.fillText("New", x + 30,y -100);
	context.fillText("Used", x + 295,y -100);
	context.fillStyle = "#ffffff";
	context.fillText("Lost", x + 590,y -100);
	context.restore();
}

// Author:      Peter Chen
// Purpose:		Positioning the elevator image
var checkEle = function () {
	var p = $('#ele');
	var header = $('#header');
	var offset = p.offset();
	var headoff = header.offset();
	
	//elevator shaft begins at 78px
	//size of elevator shaft is 1624px
	//78px - 1702 px
	
	//alert(offset.top);
	
	if (offset.top < 1515 ) {
		$('#ele').offset({top:header.offset().top+78});
	}
	if (offset.top > 1560) { 
		//do nothing so the elevator stops at the bottom
	} else if (offset.top >764) {
		$('#ele').offset({top:offset.top+15});
	}
	
	/*if (offset.top > 1070){
		$('#ele').offset({top:1070});
	} else if (p.offset().top < 1000) {
		$('#ele').offset({top:header.offset().top+78});
	} else if (p.offset().top < 1070) {
		$('#ele').offset({top:p.offset().top});
	} */
};
//setInterval(checkEle, 400);

// Author:      Lok Cheung
// Purpose:		Listen for the user to click or touch the drill down display, then close it
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

$("#myCanvas").swiperight(function(event, result) {
			event.stopImmediatePropagation();
			wipeStatus("Right",result,3);
});
		
$("#myCanvas").swipeleft(function(event, result) {
			event.stopImmediatePropagation();
			wipeStatus("Left",result,3);
});

// Author:      Lok Cheung
// Purpose:		Listen for the user to click or touch the elements on the canvas, then call the popup function
$('#myCanvas').bind("touchstart click", function(event){
	var heightFactor=1;
	for(var i=0;i <trendArray.length;i++ )
	{
		//check if user is touching the area within the element
		if(event.pageX>trendArray[i][1] && event.pageX<(trendArray[i][1]+trendArray[i][3]) && event.pageY>trendArray[i][2] && event.pageY <(trendArray[i][2]+trendArray[i][4])) {
			event.preventDefault();
			document.getElementById('dialog-box').style.cssText = "margin-top: 100px";
			popup('<table border="0" width="100%">'+
						'<tr>'+
						'<td><canvas id="trendGraph" height="270" width="600"></canvas></td>'+
						'</tr>'+
						'<tr>'+
						'<td>'+trendArray[i][6]+'</td>'+
						'</tr>'+
						'</table>');
			//changing the height factor of each element
			if(trendArray[i][0]=="Number of Leads"){
				heightFactor=0.3;
				for(var j=0;j<trendArray[i][5].length;j++)  {
					drawTrendMul("trendGraph",trendArray[i][5][j][2],trendArray[i][5][j][0],trendArray[i][5][j][1], j,heightFactor,true);
				}
			}else if(trendArray[i][0]=="New 3PL Leads"){
				heightFactor=2.5;
				for(var j=0;j<trendArray[i][5].length;j++)  {
					drawTrendMul("trendGraph",trendArray[i][5][j][2],trendArray[i][5][j][0],trendArray[i][5][j][1], j,heightFactor,false);
				}
			}else{
				if(trendArray[i][0]=="Response by Mail" || trendArray[i][0]=="Unique Customers" || trendArray[i][0]=="Prospect Count"){
					heightFactor=0.1;
				}
				if(trendArray[i][0]=="Response by Phone"){
					heightFactor=0.2;
				}
				if(trendArray[i][0]=="New Sales From Leads" || trendArray[i][0]=="Used Sales From Leads" || trendArray[i][0]=="Lost Sales From Leads"){
					heightFactor=5;
				}
				if(trendArray[i][0]=="Close Rate"){
					heightFactor=2200;
				}
				drawTrend(trendArray[i][5],heightFactor);
			}
			
			//draw x, y axis of the chart
			var canvas = document.getElementById("trendGraph");
			var context = canvas.getContext("2d");
			context.save();
			context.beginPath();
			context.moveTo(120,0);
			context.lineTo(120,220);
			context.lineTo(600,220);
			context.strokeStyle = "black";	
			context.stroke();
			context.restore();
		}	
	}
});