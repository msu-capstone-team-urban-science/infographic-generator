<%--
/*************************
*Created by: Kevin Shreve*
*Date : 2/18/12          *
*************************/
--%>

<%@ Page Language="C#" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>KPI Json test</title>
    <script src="scripts/jquery-1.7.1.min.js"  type="text/javascript"></script>
    <script type="text/javascript" src="Scripts/KPILocalStorage.js"></script>
    <script type="text/javascript">       

        function Kevin() {
            var raa = new Storage();
            var rat = SearchKPIByDate(raa.get("1").KPI_Date);

            if (rat[0][0] == "Retail_Sales") {
                alert(rat[0][0]);
            }
        }

        //            $(".record_number").text(ret.get("kpi1").record_number);
        //            $(".KPI_Name").text(ret.get("kpi1").KPI_Name);
        //            $(".KPI_Date").text( parseInt((ret.get("kpi1").KPI_Date).substr(6)));
        //            $(".KPI_Value").text(ret.get("kpi1").KPI_Value);
        //            $(".create_dt").text(parseInt(ret.get("kpi1").create_dt.substr(6)));

        //         function SearchKPI() {
        //            var ret = new Storage();

        //            var i = document.getElementById('<%=kpiTextBox.ClientID%>').value;

        //            alert("Record Number : " + ret.get("kpi" + i).record_number.toString() + "\n" +
        //                  "KPI_Name : " + ret.get("kpi" + i).KPI_Name + "\n" +
        //                  "KPI_Date : " + new Date(parseInt(ret.get("kpi" + i).KPI_Date.substr(6))) + "\n" +
        //                  "KPI_Value : " + ret.get("kpi" + i).KPI_Value + "\n" +
        //                  "create_dt : " + new Date(parseInt(ret.get("kpi" + i).create_dt.substr(6)))
        //              );
        //        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        Kevin's test bed
      <%--  Record Number: <span class="record_number"></span><br />
        KPI_Name: <span class="KPI_Name"></span><br />
        KPI_Date: <span class="KPI_Date"></span><br />
        KPI_Value: <span class="KPI_Value"></span><br />
        create_dt: <span class="create_dt"></span><br />--%>
    </div>

    <asp:TextBox ID="kpiTextBox" runat="server" MaxLength="3"></asp:TextBox>
    <button onclick="SearchKPIByName('Unopened_Leads',0)">Unopened_Leads</button>
    <button onclick="SearchKPIByName('Pump_In_Sales',1)">Pump_In_Sales</button>
    <button onclick="Kevin()">Date buttons</button>
    </form>

</body>
</html>
       
       
       