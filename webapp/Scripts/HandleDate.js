var monthname = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
var fullMonthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var showing_date_now;

function initDate() {
	if(!window.showing_date_now) {
		window.showing_date_now = new Date;
		alert(window.showing_date_now);
		initSales(window.showing_date_now);
		GetFullMonth(window.showing_date_now);
	}
}

function getCurrDate() { 
	return window.showing_date_now;
}

function setCurrDate(d) {
	window.showing_date_now = d;
}

function GetFullMonth(todate) {
	document.getElementById('month').innerHTML = fullMonthName[todate.getMonth()];
}