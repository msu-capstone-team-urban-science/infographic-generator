/*************************
*Created by: Kevin Shreve*
*Date : 2/19/12          *
*************************/

$(document).ready(function () {
    var store = new Storage();
    $.getJSON("KPI_Handler.ashx", function (item) {
        $.each(item, function (i, kpi) {
            //TODO: check if the create date is newer than the stored create 
            store.set(kpi.record_number, kpi);
        });
    });
});