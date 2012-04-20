//Notice from Lok
//array that stores the name of element, x, y, width, height and data through the year
//for every element we draw, make sure you pass the above information into the array
//format: trendArray.push(['name-of-element', x, y, width, height,[JanData, FebData,...]]);
//if there is a radius with no width and height, just pass the radius twice
var trendArray=new Array();

function DrawService (c, date)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");


// BACKGROUND SECTION

    // fill background
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#2A2A2A";
    context.fill();

    // draw sections
    DrawSection("myCanvas", 0, 311, canvas.width / 2, canvas.height, [canvas.width / 6, "#0067A5"]); // top left
    DrawSection("myCanvas", canvas.width / 2, 311, canvas.width / 2, canvas.height, [canvas.width / 6, "#0073CF"]); // top right
    DrawSection("myCanvas", 0, 730, canvas.width, canvas.height, [canvas.width / 2, "#8ED6FF"]); // light blue in middle
    DrawSection("myCanvas", 0, 1100, canvas.width, canvas.height, [canvas.width / 2, "#002366"]);
	DrawSection("myCanvas", canvas.width / 2, 1000, canvas.width, canvas.height, [canvas.width / 2, "#0047AB"]);
    DrawSection("myCanvas", 0, 1400, canvas.width, canvas.height, [canvas.width / 2, "#002366"]);

    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 690, 560);
        var img1 = new Image();
        img1.onload = function () {
            context.drawImage(img1, 50, 1144);
			var img2 = new Image();
			img2.onload= function () { 
				context.drawImage(img2,750,1115);
				DrawService2(c, date);
			}
			img2.src='images/Avg$.png';
        }
        img1.src = 'images/handoff.png';
    }
	img.src = 'images/dollar.png';
}

function DrawService2 (c, date)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

    // kpi
    var kpiActive = GetKPI(date, "Active_Customers");
    var kpiInactive = GetKPI(date, "Inactive_Customers");
    var kpiServiceLaborOpportunity = addCommas(GetKPI(date, "Service_Labor_Opportunity"));
    var kpiServicePartsOpportunity = addCommas(GetKPI(date, "Service_Parts_Opportunity"));
    var kpiSingleVisitCustomer = GetKPI(date, "Single_Visit_Customers");
	var kpiDealer = GetKPI(date, "Dealer_Effectiveness");
	var kpiBrand =  GetKPI(date,"Brand_Effectiveness");
	var kpiRecentSalesCustomers = GetKPI(date,"Recent_Sales_Customers");
	var kpiROCount = addCommas(GetKPI(date,"RO_Count"));
	var kpiLaborOps = GetKPI(date,"Labor_Ops_Per_RO");
	var kpiAvg$ = GetKPI(date,"Average_Money_Per_RO");

    var month = fullMonthName[date.getMonth()];
    var year = date.getFullYear();

// GRAPHICS SECTION

    // draw sun
    DrawSun("myCanvas", canvas.width/6, 200, 90);

    // draw cloud
    DrawCloud("myCanvas", canvas.width*4/6-115, 100, 340, 180);

    // draw houses
    DrawHouse("myCanvas", canvas.width/6-100, 150, 200);
    DrawHouse("myCanvas", canvas.width*4/6-100, 150, 200);


    //DrawX("myCanvas", 444, 444);
    DrawPerson("myCanvas", 40, 590, 50);
    DrawPerson("myCanvas", 40, 650, 50);
    DrawPerson("myCanvas", 75, 590, 50);
    DrawPerson("myCanvas", 75, 650, 50);
    DrawPerson("myCanvas", 40, 400, 110);
	DrawPerson("myCanvas", 540, 400, 110);
	
	DrawEffectiveness("myCanvas", 90, 890, date,kpiDealer,kpiBrand);


// TEXT SECTION

    // draw active / inactive text
    context.fillStyle = "#ffffff";
    context.font = "20pt Calibri";
    context.fillText("Active", canvas.width/6+123, 250);
    context.fillText("Customers", canvas.width/6+80, 270);
    context.font = "40pt Calibri";
    context.fillText(addCommas(kpiActive), canvas.width/6+189, 270);

    context.font = "20pt Calibri";
    context.fillText("Inactive", canvas.width*4/6+108, 250);
    context.fillText("Customers", canvas.width*4/6+80, 270);
    context.font = "40pt Calibri";
    context.fillText(addCommas(kpiInactive), canvas.width*4/6+189, 270);

    context.font = "55pt Calibri";

    context.fillText(((Math.round((kpiSingleVisitCustomer/kpiActive) * 1000)) / 10) + "%", 90, 510);
    context.fillStyle = "#dddddd";
    context.font = "30pt Calibri";
    context.fillText("are single visit", 40, 540);
    context.font = "44pt Calibri";
    context.fillText("customers", 40, 580);

    context.font = "55pt Calibri";
    context.fillText("while", 110, 655);
    context.font = "47pt Calibri";
    context.fillStyle = "#ffffff";
    context.fillText(((Math.round((1-(kpiSingleVisitCustomer/kpiActive)) * 1000)) / 10) + "%", 110, 702);
    context.font = "41pt Calibri";
    context.fillStyle = "#dddddd";
    context.fillText("came back", 40, 743);


    //context.fillStyle = "#8ED600";




    context.fillStyle = "#ffffff";
	context.font = "55pt Calibri";
	context.fillText(((Math.round((kpiRecentSalesCustomers/kpiInactive) * 1000)) / 10) + "%", 590, 510);
    context.fillStyle = "#dddddd";
    context.font = "30pt Calibri";
    context.fillText("are Recent Sales", 540, 540);
    context.font = "44pt Calibri";
    context.fillText("customers", 540, 580);




	var y = 140;
    context.font = "36pt Calibri";
    context.fillText("Missing Money", canvas.width/2+40, 486+y);
    context.font = "24pt Calibri";
    context.fillText("Labor", canvas.width/2+40, 540+y);
    context.font = "12pt Calibri";
    context.fillStyle = "#ffffff";
    context.fillText("Opportunity", canvas.width/2+40, 552+y);
    context.font = "36pt Calibri";

    context.fillText("$" + kpiServiceLaborOpportunity, canvas.width/2+120, 552+y);

    context.font = "24pt Calibri";
    context.fillStyle = "#dddddd";
    context.fillText("Parts", canvas.width/2+40, 610+y);
    context.font = "12pt Calibri";
    context.fillStyle = "#ffffff";
    context.fillText("Opportunity", canvas.width/2+40, 622+y);
    context.font = "36pt Calibri";

    context.fillText("$" + kpiServicePartsOpportunity, canvas.width/2+120, 622+y);

	
//Eric and dunn section
	//draw talk bubble over erics head
	talkBub(c,175,1250,"#0073CF");
	context.font = "24pt Calibri";
    context.fillText("RO Count", 225, 1175);
	context.font = "22pt Calibri";
    context.fillText(kpiROCount,255, 1215);
	
	context.font = "20pt Calibri";
    context.fillText("Labor Ops per ", 225, 1500);
    context.fillText("Repair Order ", 280, 1525);
	context.fillText("= " +kpiLaborOps, 400,1550);
	
//Avg $ per RO
	context.font = "24pt Calibri";
    context.fillText("Average $ per Repair Order ", 525, 1100);
	context.fillText("= "+ kpiAvg$,575, 1150);	
	
	//push positions of elements into array
	var offset=100;
	trendArray.push(['Active Customers', 50, 80+offset, 424, 270,GetTrendKPI(date, 'Active_Customers'),'<p>An Active Customer is one who returned to your dealership for CP vehicle service at least once in the past 12 months.</p>']);
	trendArray.push(['Inactive Customers', 490, 80+offset, 384, 270,GetTrendKPI(date, 'Inactive_Customers'),'<p>An Inactive Customer is a person who resides in your PMA that owns a vehicle sold either by your dealership or another non-PMA (Your Brand) dealer but DID NOT return for CP vehicle service in the past 12 months.</p>']);
	trendArray.push(['Recent Sales Customers', 520, 380+offset, 334, 210,GetTrendKPI(date, 'Recent_Sales_Customers'),'<p>A Recent Customer is one who purchased a vehicle from your dealership and DID NOT return for CP vehicle service in the past 12 months.</p>']);
	trendArray.push(['Single Visit Customers', 30, 380+offset, 434, 200,GetTrendKPI(date, 'Single_Visit_Customers'),'<p>A Single Visit Customer is an Active Customer who has only returned for CP vehicle service one time in the past 12 months.</p>']);
	trendArray.push(['Service Labor Opportunity', 530, 590+offset, 534, 110,GetTrendKPI(date, 'Service_Labor_Opportunity'),'<p>Labor Opportunity is the potential revenue that your dealership may possibly generate from the cost of labor by getting your Inactive Customers to come in at least one time for CP vehicle service.</p>']);
	trendArray.push(['Service Parts Opportunity', 530, 710+offset, 534, 80,GetTrendKPI(date, 'Service_Parts_Opportunity'),'<p>Parts Opportunity is the potential revenue that your dealership may possibly generate from the cost of parts by getting your Inactive Customers to come in at least one time for CP vehicle service.</p>']);
	trendArray.push(['Dealer Effectiveness', 520, 900+offset, 170, 120,GetTrendKPI(date, 'Dealer_Effectiveness'),'<p>Dealer Effectiveness is defined as a dealer\'s nationwide sales compared to the Expected at the Benchmark in that dealer\'s PMA. The formula: Dealer Effectiveness = ((Dealer National Sales) / (Expected @ Benchmark in the PMA)) X 100. </p>']);
	trendArray.push(['Brand Effectiveness', 320, 800+offset, 180, 140,GetTrendKPI(date, 'Brand_Effectiveness'),'<p>Brand Effectiveness is defined as brand sales made by any dealer in the PMA compared to the Expected at the Benchmark. The formula: Brand Effectiveness = ((Brand Sales in the PMA) / (Expected @ Benchmark in the PMA)) X 100.</p>']);
	trendArray.push(['Average Money Per RO', 520, 1070+offset, 440, 90,GetTrendKPI(date, 'Average_Money_Per_RO'),'<p>Average $ per RO shows your Average CP dollar value spent on each of your ROs for a rolling 12 months, ending on the current month</p>']);
	trendArray.push(['RO Count', 200, 1130+offset, 170, 120,GetTrendKPI(date, 'RO_Count'),'<p>RO Count shows the number of Repair Orders your dealership has accumulated in the last 12 months, ending on the current month.</p>']);
	trendArray.push(['Labor Ops Per RO', 200, 1480+offset, 290, 100,GetTrendKPI(date, 'Labor_Ops_Per_RO'),'<p>The average number of Labor Operations peformed within each RO</p>']);
}

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
wipeStatus("Right",result,2);
});

$("#myCanvas").swipeleft(function(event, result) {
event.stopImmediatePropagation();
wipeStatus("Left",result,2);
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
			document.getElementById('dialog-box').style.cssText = "margin-top: 50px";
			popup('<table border="0" width="100%">'+
						'<tr>'+
						'<td><canvas id="trendGraph" height="300" width="600"></canvas></td>'+
						'</tr>'+
						'<tr>'+
						'<td>'+trendArray[i][6]+'</td>'+
						'</tr>'+
						'</table>');
			//changing the height factor of each element
			if(trendArray[i][0]=="Active Customers" || trendArray[i][0]=="Inactive Customers" || trendArray[i][0]=="RO Count"){
				heightFactor=0.1;
			}
			if(trendArray[i][0]=="Recent Sales Customers"){
				heightFactor=1;
			}
			if(trendArray[i][0]=="Single Visit Customers"){
				heightFactor=0.2;
			}
			if(trendArray[i][0]=="Service Labor Opportunity" || trendArray[i][0]=="Service Parts Opportunity"){
				heightFactor=0.0007;
			}
			if(trendArray[i][0]=="Dealer Effectiveness" || trendArray[i][0]=="Brand Effectiveness"){
				heightFactor=100;
			}
			if(trendArray[i][0]=="Labor Ops Per RO"){
				heightFactor=45;
			}
			drawTrend(trendArray[i][5],heightFactor);
			
			//draw x, y axis of the chart
			var canvas = document.getElementById("trendGraph");
			var context = canvas.getContext("2d");
			
			context.save();
			context.font = "28pt Calibri";
			context.fillStyle = "#0000ff"; // text color
			context.fillText(trendArray[i][0], 170, 30);
			context.restore();
			
			context.save();
			context.beginPath();
			context.moveTo(120,40);
			context.lineTo(120,260);
			context.lineTo(600,260);
			context.strokeStyle = "black";	
			context.stroke();
			context.restore();
		}	
	}
});
