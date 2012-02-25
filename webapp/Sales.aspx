<%@ Page Language="C#" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<meta name="apple-mobile-web-app-capable" content="yes">
<head id="Head1" runat="server">

    <link href="Styles/sales_style.css" rel="stylesheet" type="text/css" />
    <title>Infographics Generator</title>
    <script type="text/javascript" src="Scripts/sales.js"></script>
    <script type="text/javascript" src="Scripts/jquery-1.7.1.min.js"  ></script>
    <script type="text/javascript" src="Scripts/KPILocalStorage.js"></script>
	<script type="text/javascript" src="Scripts/jquery.wipetouch.js"></script>
    <script type="text/javascript">
        function StartupSales() {
            LoadJSON();
            //var TodayDate = new Date;
			HandleMonthChange(new Date)
            //init(TodayDate);
			//GetFullMonth(TodayDate);
        }

		function HandleMonthChange(d) {
			init(d);
            GetFullMonth(d);
		}

        function GetFullMonth(todate) {
            var fullMonthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            document.getElementById('month').innerHTML = fullMonthName[todate.getMonth()];
        }
    </script>
</head>
<body onload="StartupSales()">
    <div id="swipeArea">
        <div id="main">
			<div id="part01">
				<div id="header">
						<img src="images/header.jpg"></img>
						<p id="category">Sales</p>
						<p id="month"></p>
				</div>
				<div id="infographic">
					<div id="info01">
						<h2>Retail Sales</h2>
						<canvas id="Retail_Sale" width="155" height="150">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
					</div>
					<div id="info02">
						<h2>Used Vehicle Sales</h2>
						<canvas id="Used_Vehicle_Sale" width="165" height="150">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
					</div>
					<div id="info03">
						<h2>Cost Per Sale</h2>
						<canvas id="Cost_Per_Sale" width="185" height="130">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
					</div>
					<div id="info04">
						<h2>Pump In Sales</h2>
						<canvas id="Pump_In_Sale" width="630" height="400">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
					</div>
					<div id="dot01"></div>
					<div id="dot02"></div>
					<div id="dot03"></div>
					<div id="splitter01"> <img src="images/splitter.png"></img>
                    </div>
				</div>
			</div>
			<div id="part02">
				<p id="part02Title"></p>
				<div id="info05">
						<canvas id="Dealer_Retention01" width="135" height="135">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
						<canvas id="Dealer_Retention02" width="100" height="100">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
				</div>
				<div id="info06">
						<canvas id="Visit_Per_Customer01" width="135" height="135">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
						<canvas id="Visit_Per_Customer02" width="100" height="100">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
				</div>
                <img src="images/PointingDude.png" id="Kevpointer">
				<div id="info07">
						<h2>Competitive Segment Sales</h2>
						<canvas id="Competitive_Segment_Sale" width="630" height="400">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
			    </div>
                <div id="splitter02"><img src="images/splitter.png"></div>
				<div id="dot04"></div>
				<div id="dot05"></div>
			</div>
			<div id="part03">
				<div id="info08">
					<h2>Lost Profit</h2>
					<canvas id="Lost_Profit" width="360" height="280">
						<!-- Insert fallback content here -->
						Sorry, your browser doesn't support canvas technology
					</canvas>
				</div>
				<div id="info09">
					<h2>Lost Sales</h2>
					<canvas id="Lost_Sale" width="350" height="235">
						<!-- Insert fallback content here -->
						Sorry, your browser doesn't support canvas technology
					</canvas>
				</div>
				<div id="info10">
					<h2>Customers</h2>
					<canvas id="Customer" width="700" height="180">
						<!-- Insert fallback content here -->
						Sorry, your browser doesn't support canvas technology
					</canvas>
				</div>
				<div id="dot06"></div>
				<div id="dot07"></div>
            </div>
		</div>
		
		<script type="text/javascript">
			function wipeStatus(dir, result)
			{
				var de = new Date();
                if(dir == "Right") {
				    de.setMonth() = 9;
                } else {
                    de.setMonth() = 9;
                }
				HandleMonthChange(de);
			}
			
			$("#swipeArea").wipetouch(
			{
				allowDiagonal:false,
				tapToClick: false,
				wipeLeft: function(result) { wipeStatus("Left",result);},
				wipeRight: function(result) { wipeStatus("Right",result);},
			});	
		</script>
	</div>
</body>
</html>
