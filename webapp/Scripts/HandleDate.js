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
    //currDate.setFullYear(currDate.getFullYear, currDate.getMonth() + x, currDate.getDay());
    initSales(currDate);
    GetFullMonth(currDate);
}