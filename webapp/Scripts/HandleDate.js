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
	document.getElementById('month').innerHTML = fullMonthName[todate.getMonth()] +" " + todate.getFullYear();
}

function changeMonth(x) {
    var newMonth = currDate.getMonth() + x;
    if (insideDateRange(newMonth)) {
        currDate.setMonth(newMonth);
        initSales(currDate);
        GetFullMonth(currDate);
    }
}


//check if it is within our range, and then return true or false based on those values.
function insideDateRange(month) {
    var bool = 0;
    var tempDate = new Date()
    tempDate.setFullYear(currDate.getFullYear(), currDate.getMonth(), currDate.getDay());
    var dR = dateRange();

    ////The date function handles wrapping into new years, so we first create a temp date to see what the new month,year we will get
    tempDate.setMonth(month);

    if ((tempDate.getFullYear() <= dR[3]) && (tempDate.getFullYear() >= dR[1])) {
        if ((tempDate.getMonth() <= dR[2]) && (tempDate.getMonth() >= dR[0])) {
            bool = 1;
        }
    } else {
        bool = 0;
    }

    return bool;
}

////Finding the total range that our data spans.
function dateRange() {
    var locStorage = new Storage();
    var FirstMonth = 13, FirstYear = 3099, LastMonth = 0, LastYear = 0;

    for (var i = 0, l = locStorage.size(); i < l; i++) {
        var value = locStorage.get(i);
        //find the newest year
        var tempYear = FormatDate(value.KPI_Date).getFullYear();
        var tempMonth = FormatDate(value.KPI_Date).getMonth();
        if (tempYear > LastYear) {
            LastYear = tempYear;
        } else if (tempYear < FirstYear) { // finding the oldest year
            FirstYear = tempYear;
        }

        //if it is apart of the newest year, then find the newest month
        if ((tempYear == LastYear) && (tempMonth > LastMonth)) {
            LastMonth = tempMonth;
        } else if ((tempYear < FirstYear) && (tempMonth < FirstMonth)) {
            FirstMonth = tempMonth;
        }
    }
    return [FirstMonth, FirstYear, LastMonth, LastYear];
}

function wipeStatus(dir, result) {
    if (dir == "Right") {
        changeMonth(-1);
    }
    if (dir == "Left") {
        changeMonth(1);
    }
}