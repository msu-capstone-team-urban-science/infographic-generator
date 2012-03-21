/*************************
*Created by: Kevin Shreve*
*Date : 2/18/12          *
*************************/
function LoadJSON() {
    var store = new Storage();
    $.getJSON("KPI_Handler.ashx", function (item) {
        $.each(item, function (i, kpi) {
            //TODO: check if the create date is newer than the stored create 
            store.set(kpi.record_number, kpi);
        });
    });
}

//Helper function so that we can get/set easily on the local storage
function Storage() {
    this.get = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
    };
    this.set = function (key, value) {
        window.localStorage.removeItem(key);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    this.clear = function () {
        window.localStorage.clear();
    };
    this.size = function() { 
        return window.localStorage.length;
    };
}

//Creates a properly formatted date out of the default ASP.NET date which looks like /DATE(0000000)/ and turns into Jan. 01, 2012 looking date
function FormatDate(date) {
    return new Date(  parseInt(   date.substr(6)   )  );
}

//Send in a date from the sql database so that we can do the comparison to see if any KPI's date matches your search.
function SearchKPIByDate(date) {
    var returnArr = new Array();
    var locStorage = new Storage();
	
    var counter = 0;
    for(var i=0, l=locStorage.size(); i<l; i++) {
        var value = locStorage.get(i);        
        if (FormatDate(value.KPI_Date).getMonth() == date.getMonth()) {
            if (FormatDate(value.KPI_Date).getFullYear() == date.getFullYear()) {
                var dataPoint = new Array(2);
                dataPoint[0] = value.KPI_Name;
                dataPoint[1] = value.KPI_Value;
                returnArr.push(dataPoint);
            }
        }
    }
    return returnArr;
}

// Allows KPI data to be more easily retrieved
function GetKPI(date, kpiName) {
    var kpiArray = SearchKPIByDate(date);
    var kpiData = "";

    for (var i = 0; i < kpiArray.length; i++) {
        if (kpiArray[i][0] == kpiName) {
            kpiData = kpiArray[i][1];
            break;
        }
    }
    return kpiData;
}
