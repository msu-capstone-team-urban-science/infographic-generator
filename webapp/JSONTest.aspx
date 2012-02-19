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
                alert(rat[0][0] + " " + rat[0][1]);
            }
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Kevin's test bed
        </div>
        <button onclick="Kevin()">Date buttons</button>
    </form>

</body>
</html>
       
       
       