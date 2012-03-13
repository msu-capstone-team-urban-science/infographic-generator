var monthname = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
var fullMonthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var currDate;

function initDate() {
	if(!currDate) {
		currDate = new Date;
		initSales(currDate);
		GetFullMonth(currDate);
	}
}
function GetFullMonth(todate) {
	document.getElementById('month').innerHTML = fullMonthName[todate.getMonth()];
}

function changeMonth(x) {
    currDate.setMonth(currDate.getMonth() + x);
    initSales(currDate);
    GetFullMonth(currDate);
}

function wipeStatus(dir, result) {
   // var dr = dateRange();
   // alert(dr);
    if (dir == "Right") {
        changeMonth(-1);
    }
    if (dir == "Left") {
        changeMonth(1);
    }
}