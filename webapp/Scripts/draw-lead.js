function DrawLead(c,date) 
{
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	
	var background = new Image();
	
	background.onload = function () { 
		context.drawImage(background,0,0);
		DrawLead2(c,date);
	}
	background.src = 'images/lead_back.png';
}

function DrawLead2(c,date) {
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	var stone = new Image();
	
	stone.onload = function () { 
		context.drawImage(stone,29,500,745,500);
		DrawLead3(c,date);
	}
	stone.src = 'images/lead_stone.jpg';
}

function DrawLead3(c,date) { 
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	var sep = new Image();
	
	sep.onload = function () { 
		context.drawImage(sep,0,150);
		DrawLead4(c,date);
	}
	sep.src = 'images/lead_sep.png';
}

function DrawLead4(c,date) { 
	var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");
	var kpiUnique = GetKPI(date,"Unique_Customers");
	var kpiMail = GetKPI(date,"Response_Method_Email");
	var kpiPhone = GetKPI(date,"Response_Method_Phone");
	var kpiLost = GetKPI(date,"Lost_Sales_From_Leads");
	var kpiNew = GetKPI(date,"New_Sales_from_Leads");
	var kpiOld = GetKPI(date,"Used_Sales_From_Leads");
	var kpiAve = GetKPI(date,"Average_Response_Time");
	var kpiClose = GetKPI(date,"Close_Rate");
	var kpiProspect = GetKPI(date,"Prospect_Count");
	var kpiUnopened = GetKPI(date,"Unopened_Leads");
	var kpiNewBrand = GetKPI(date,"New_Brand_Leads");
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
	
	DrawUniqueCustomers("myCanvas", 200, 190);
	DrawResponse("myCanvas", 28, 425, kpiMail, kpiPhone);
	DrawAvgRespTime ("myCanvas", 130, 685, 5, 5, kpiAve);
	DrawSales("myCanvas", 690, 860, kpiLost, kpiNew, kpiOld);		
	DrawUnopenedLead("myCanvas",30,1100,kpiUnopened, kpiNewBrand);
	Draw3PL("myCanvas",375,1170,400,300,kpiNew3PL);
	DrawCloseRate("myCanvas", 214, 1755, kpiClose);		
	DrawProspectCount("myCanvas", 590, 1750, kpiProspect);
	//section
	
	context.save();
	context.beginPath();
	context.moveTo(33 , 310);
	context.lineTo(770 , 310);
	context.lineTo(770 , 1750);
	context.lineTo(33 , 1750);
	context.lineTo(33 , 310);
	context.lineWidth = 2;
	context.lineCap = "square";
	context.strokeStyle = "#000000";
	context.stroke();
	context.restore();

			
	//Text

	//Unique Customers
	context.save();
	context.font = "40pt Calibri";
	context.fillStyle = "#000000";
	context.font = "30pt Calibri";
	context.fillText("Unique Customers", 430, 180);
	context.font = "60pt Calibri";
	context.fillText(kpiUnique,510,250);
	context.restore();

	//Response Method
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

	//sales
	
	var x = 110;
	var y = 960;
	
	//
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