<%@ Page Language="C#" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<meta name="apple-mobile-web-app-capable" content="yes">
<head id="Head1" runat="server">

    <link href="Styles/sales_style.css" rel="stylesheet" type="text/css" />
    <title>Infographics Generator</title>
    <script type="text/javascript" src="Scripts/sales.js"></script>
	<script type="text/javascript" src="Scripts/jquery.js"></script>
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
	<style type="text/css">

#dialog-overlay {

	/* set it to fill the whil screen */
	width:100%; 
	height:100%;
	
	/* transparency for different browsers */
	filter:alpha(opacity=50); 
	-moz-opacity:0.5; 
	-khtml-opacity: 0.5; 
	opacity: 0.5; 
	background:#000; 

	/* make sure it appear behind the dialog box but above everything else */
	position:absolute; 
	top:0; left:0; 
	z-index:3000; 

	/* hide it by default */
	display:none;
}


#dialog-box {
	
	/* css3 drop shadow */
	-webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	
	/* css3 border radius */
	-moz-border-radius: 5px;
    -webkit-border-radius: 5px;
	
	background:#eee;
	/* styling of the dialog box, i have a fixed dimension for this demo */ 
	width:328px; 
	
	/* make sure it has the highest z-index */
	position:absolute; 
	z-index:5000; 

	/* hide it by default */
	display:none;
}

#dialog-box .dialog-content {
	/* style the content */
	text-align:left; 
	padding:10px; 
	margin:13px;
	color:#666; 
	font-family:arial;
	font-size:11px; 
}

a.button {
	/* styles for button */
	margin:10px auto 0 auto;
	text-align:center;
	background-color: #e33100;
	display: block;
	width:50px;
	padding: 5px 10px 6px;
	color: #fff;
	text-decoration: none;
	font-weight: bold;
	line-height: 1;
	
	/* css3 implementation :) */
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
	border-bottom: 1px solid rgba(0,0,0,0.25);
	position: relative;
	cursor: pointer;
	
}

a.button:hover {
	background-color: #c33100;	
}

/* extra styling */
#dialog-box .dialog-content p {
	font-weight:700; margin:0;
}

#dialog-box .dialog-content ul {
	margin:10px 0 10px 20px; 
	padding:0; 
	height:50px;
}



</style>

<script type="text/javascript">

$(document).ready(function () {

	// if user clicked on button, the overlay layer or the dialogbox, close the dialog	
	$('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {		
		$('#dialog-overlay, #dialog-box').hide();		
		return false;
	});
	
	// if user resize the window, call the same function again
	// to make sure the overlay fills the screen and dialogbox aligned to center	
	$(window).resize(function () {
		
		//only do it if the dialog box is not hidden
		if (!$('#dialog-box').is(':hidden')) popup();		
	});	
	
	
});

//Popup dialog
function popup(message) {
		
	// get the screen height and width  
	var maskHeight = $(document).height();  
	var maskWidth = $(window).width();
	
	// calculate the values for center alignment
	var dialogTop =  (maskHeight/3) - ($('#dialog-box').height());  
	var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
	
	// assign values to the overlay and dialog box
	$('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
	$('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
	
	// display the message
	$('#dialog-message').html(message);
			
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
					<div id="info01" onclick="javascript:popup('Hello World.');">
						<h2>Retail Sales</h2>
						<%--<a href="javascript:popup('Hello World.')">
						--%><canvas id="Retail_Sale" width="155" height="150">
							<!-- Insert fallback content here -->
							Sorry, your browser doesn't support canvas technology
						</canvas>
						</a>
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
				    de.setMonth(de.getMonth()+1);
                } else {
                    de.setMonth(de.getMonth()-1);
                }
				HandleMonthChange(de);
			}
			
			$("#header").wipetouch(
			{
				allowDiagonal:false,
				tapToClick: false,
				wipeLeft: function(result) { wipeStatus("Left",result);},
				wipeRight: function(result) { wipeStatus("Right",result);},
			});	
		</script>
	</div>
	
	<div id="dialog-overlay"></div>
	<div id="dialog-box">
		<div class="dialog-content">
			<div id="dialog-message"></div>
			<a href="#" class="button">Close</a>
		</div>
	</div>

</body>
</html>