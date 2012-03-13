var monthname = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
var fullMonthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var showing_date_now;

function initDate() {
	if(!window.showing_date_now) {
		window.showing_date_now = new Date;
		changeMonth(showing_date_now);
	}
}

function changeMonth(d) {
	init(d);
	GetFullMonth(d);
}

function getCurrDate() { 
	return window.showing_date_now;
}

function GetFullMonth(todate) {
	document.getElementById('month').innerHTML = fullMonthName[todate.getMonth()];
}