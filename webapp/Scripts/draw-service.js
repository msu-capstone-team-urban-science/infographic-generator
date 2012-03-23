function DrawService (c, date)
{
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");


    // data
    var month = fullMonthName[date.getMonth()];
    var year = date.getFullYear();

    // fake kpi
    var kpiActive = GetKPI(date, "Active_Customers");
    var kpiInactive = GetKPI(date, "Inactive_Customers");
    var kpiServiceLaborOpportunity = GetKPI(date, "Service_Labor_Opportunity");
    var kpiServicePartsOpportunity = GetKPI(date, "Service_Parts_Opportunity");
    var kpiSingleVisitCustomer = GetKPI(date, "Single_Visit_Customers");


// BACKGROUND SECTION

    // fill background
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#2A2A2A";
    context.fill();

    // draw sections
    DrawSection("myCanvas", 0, 311, canvas.width / 2, canvas.height, [canvas.width / 6, "#0067A5"]);
    DrawSection("myCanvas", canvas.width / 2, 311, canvas.width / 2, canvas.height, [canvas.width / 6, "0073CF"]);
    DrawSection("myCanvas", 0, 730, canvas.width, canvas.height, [canvas.width / 2, "#8ED6FF"]);
    DrawSection("myCanvas", canvas.width / 2, 830, canvas.width, canvas.height, [canvas.width / 2, "#0047AB"]);
    DrawSection("myCanvas", 0, 930, canvas.width, canvas.height, [canvas.width / 2, "#002366"]);


// GRAPHICS SECTION

    // draw sun
    DrawSun("myCanvas", canvas.width/6, 200, 90);

    // draw cloud
    DrawCloud("myCanvas", canvas.width*4/6-115, 100, 340, 180);

    // draw houses
    DrawHouse("myCanvas", canvas.width/6-100, 150, 200);
    DrawHouse("myCanvas", canvas.width*4/6-100, 150, 200);

    //DrawSpirograph("myCanvas", 555, 555);


    //DrawX("myCanvas", 444, 444);
    DrawPerson("myCanvas", 40, 590, 50);
    DrawPerson("myCanvas", 40, 650, 50);
    DrawPerson("myCanvas", 75, 590, 50);
    DrawPerson("myCanvas", 75, 650, 50);


    DrawPerson("myCanvas", 40, 400, 110);


// TEXT SECTION

    // draw top text
    context.font = "40pt Calibri";
    context.fillStyle = "#ffffff";
    context.fillText("In " + month + " Of " + year, canvas.width/3, 50);

    // draw active / inactive text

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
    context.font = "47pt Calibri";
    context.fillText(((Math.round((1-(kpiSingleVisitCustomer/kpiActive)) * 1000)) / 10) + "%", 110, 702);
    context.font = "28pt Calibri";
    context.fillText("conversely", 110, 655);
    context.font = "38pt Calibri";
    context.fillText("are regulars", 40, 740);

    //context.fillStyle = "#8ED600";

    context.font = "36pt Calibri";
    context.fillText("Missing Money", canvas.width/2+40, 520);
    context.font = "24pt Calibri";
    context.fillText("Labor", canvas.width/2+40, 574);
    context.font = "12pt Calibri";
    context.fillText("Opportunity", canvas.width/2+40, 586);
    context.font = "36pt Calibri";
    context.fillText("$" + kpiServiceLaborOpportunity, canvas.width/2+120, 586);

    context.font = "24pt Calibri";
    context.fillText("Parts", canvas.width/2+40, 644);
    context.font = "12pt Calibri";
    context.fillText("Opportunity", canvas.width/2+40, 656);
    context.font = "36pt Calibri";
    context.fillText("$" + kpiServicePartsOpportunity, canvas.width/2+120, 656);
}
