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
    DrawSection("myCanvas", 0, 311, canvas.width / 2, canvas.height, [canvas.width / 6, "#0067A5"]);
    DrawSection("myCanvas", canvas.width / 2, 311, canvas.width / 2, canvas.height, [canvas.width / 6, "0073CF"]);
    DrawSection("myCanvas", canvas.width / 2, 311, canvas.width / 2, canvas.height, [canvas.width / 6, "#0073CF"]);
    DrawSection("myCanvas", 0, 730, canvas.width, canvas.height, [canvas.width / 2, "#8ED6FF"]);
    DrawSection("myCanvas", canvas.width / 2, 830, canvas.width, canvas.height, [canvas.width / 2, "#0047AB"]);
    DrawSection("myCanvas", 0, 1100, canvas.width, canvas.height, [canvas.width / 2, "#002366"]);
	DrawSection("myCanvas", canvas.width / 2, 1000, canvas.width, canvas.height, [canvas.width / 2, "#0047AB"]);
    DrawSection("myCanvas", 0, 1400, canvas.width, canvas.height, [canvas.width / 2, "#002366"]);

    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 690, 560);
        var img1 = new Image();
        img1.onload = function () {
            DrawService2(c, date);
            context.drawImage(img1, 150, 1520);
			var img2 = new Image();
			img2.onload= function () { 
				context.drawImage(img2,750,1165);
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
    var kpiServiceLaborOpportunity = GetKPI(date, "Service_Labor_Opportunity");
    var kpiServicePartsOpportunity = GetKPI(date, "Service_Parts_Opportunity");
    var kpiSingleVisitCustomer = GetKPI(date, "Single_Visit_Customers");
	var kpiDealer = GetKPI(date, "Dealer_Effectiveness");
	var kpiBrand =  GetKPI(date,"Brand_Effectiveness");
	var kpiRecentSalesCustomers = GetKPI(date,"Recent_Sales_Customers");
	var kpiROCount = GetKPI(date,"RO_Count");
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
	
	DrawEffectiveness("myCanvas", 90, 920, date,kpiDealer,kpiBrand);


// TEXT SECTION

    // draw active / inactive text
    context.fillStyle = "#ffffff";
    context.font = "20pt Calibri";
    context.fillText("Active", canvas.width/6+123, 250);
    context.fillText("Customers", canvas.width/6+80, 270);
    context.font = "40pt Calibri";
    context.fillText(kpiActive, canvas.width/6+189, 270);

    context.font = "20pt Calibri";
    context.fillText("Inactive", canvas.width*4/6+108, 250);
    context.fillText("Customers", canvas.width*4/6+80, 270);
    context.font = "40pt Calibri";
    context.fillText(kpiInactive, canvas.width*4/6+189, 270);

    context.font = "55pt Calibri";
    //context.fillStyle = "#8E00FF";
    context.fillText(((Math.round((kpiSingleVisitCustomer/kpiActive) * 1000)) / 10) + "%", 90, 510);

    context.font = "30pt Calibri";
    context.fillText("are single visit", 40, 540);
    context.font = "44pt Calibri";
    context.fillText("customers", 40, 580);

    context.font = "55pt Calibri";
    context.fillText("while", 110, 655);
    context.font = "47pt Calibri";
    context.fillText(((Math.round((1-(kpiSingleVisitCustomer/kpiActive)) * 1000)) / 10) + "%", 110, 702);
    context.font = "41pt Calibri";
    context.fillText("came back", 40, 743);


    //context.fillStyle = "#8ED600";





	context.font = "55pt Calibri";
	context.fillText(((Math.round((kpiRecentSalesCustomers/kpiInactive) * 1000)) / 10) + "%", 590, 510);

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
    context.fillText("Opportunity", canvas.width/2+40, 552+y);
    context.font = "36pt Calibri";
    context.fillText("$" + kpiServiceLaborOpportunity, canvas.width/2+120, 552+y);

    context.font = "24pt Calibri";
    context.fillText("Parts", canvas.width/2+40, 610+y);
    context.font = "12pt Calibri";
    context.fillText("Opportunity", canvas.width/2+40, 622+y);
    context.font = "36pt Calibri";
    context.fillText("$" + kpiServicePartsOpportunity, canvas.width/2+120, 622+y);

	
//Eric and dunn section
	//draw talk bubble over erics head
	talkBub(c,275,1625,"#0073CF");
	context.font = "24pt Calibri";
    context.fillText("RO Count", 325, 1550);
	context.font = "22pt Calibri";
    context.fillText(kpiROCount,355, 1590);
	
	context.font = "20pt Calibri";
    context.fillText("Labor Ops per ", 325, 1875);
    context.fillText("Repair Order (RO)", 350, 1900);
	context.fillText("= " +kpiLaborOps, 500,1925);
	
//Avg $ per RO
	context.font = "24pt Calibri";
    context.fillText("Average $ per Repair Order (RO)", 525, 1150);
	context.fillText("= "+ kpiAvg$,575, 1200);	
	
	//push positions of elements into array
	var offset=100;
	trendArray.push(['Active Customers', 50, 80+offset, 424, 270,GetTrendKPI(date, 'Active_Customers'),'<p>An Active Customer is one who returned to your dealership for CP vehicle service at least once in the past 12 months.</p>']);
	trendArray.push(['Inactive Customers', 490, 80+offset, 384, 270,GetTrendKPI(date, 'Inactive_Customers'),'<p>An Inactive Customer is a person who resides in your PMA that owns a vehicle sold either by your dealership or another non-PMA (Your Brand) dealer but DID NOT return for CP vehicle service in the past 12 months.</p>']);
	trendArray.push(['Recent Sales Customers', 520, 380+offset, 334, 210,GetTrendKPI(date, 'Recent_Sales_Customers'),'<p>A Recent Customer is one who purchased a vehicle from your dealership and DID NOT return for CP vehicle service in the past 12 months.</p>']);
	trendArray.push(['Single Visit Customers', 30, 380+offset, 434, 200,GetTrendKPI(date, 'Single_Visit_Customers'),'<p>A Single Visit Customer is an Active Customer who has only returned for CP vehicle service one time in the past 12 months.</p>']);
	trendArray.push(['Service Labor Opportunity', 530, 590+offset, 534, 110,GetTrendKPI(date, 'Service_Labor_Opportunity'),'<p>Labor Opportunity is the potential revenue that your dealership may possibly generate from the cost of labor by getting your Inactive Customers to come in at least one time for CP vehicle service</p>']);
	trendArray.push(['Service Parts Opportunity', 530, 710+offset, 534, 80,GetTrendKPI(date, 'Service_Parts_Opportunity'),'<p>Labor Opportunity is the potential revenue that your dealership may possibly generate from the cost of labor by getting your Inactive Customers to come in at least one time for CP vehicle service</p>']);
	trendArray.push(['Dealer Effectiveness', 520, 940+offset, 280, 150,GetTrendKPI(date, 'Dealer_Effectiveness'),'<p>Dealer Effectiveness is defined as a dealer\'s nationwide sales compared to the Expected at the Benchmark in that dealer\'s PMA. The formula: Dealer Effectiveness = ((Dealer National Sales) / (Expected @ Benchmark in the PMA)) X 100. </p>']);
	trendArray.push(['Brand Effectiveness', 320, 800+offset, 180, 140,GetTrendKPI(date, 'Brand_Effectiveness'),'<p>Brand Effectiveness is defined as brand sales made by any dealer in the PMA compared to the Expected at the Benchmark. The formula: Brand Effectiveness = ((Brand Sales in the PMA) / (Expected @ Benchmark in the PMA)) X 100.</p>']);
	trendArray.push(['Average Money Per RO', 520, 1120+offset, 410, 330,GetTrendKPI(date, 'Average_Money_Per_RO'),'<p>Average $ per RO shows your Average CP dollar value spent on each of your ROs for a rolling 12 months, ending on the current month</p>']);
	trendArray.push(['RO Count', 280, 1480+offset, 290, 170,GetTrendKPI(date, 'RO_Count'),'<p>RO Count shows the number of Repair Orders (RO) your dealership has accumulated in the last 12 months, ending on the current month.</p>']);
	trendArray.push(['Labor Ops Per RO', 280, 1800+offset, 290, 150,GetTrendKPI(date, 'Labor_Ops_Per_RO'),'<p>The average number of Labor Operations peformed within each RO</p>']);

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
