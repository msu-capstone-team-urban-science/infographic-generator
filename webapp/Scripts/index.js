var currentWidth;
			var orient = "";
		    var updateLayout = function () {
		        if (window.innerWidth != currentWidth) {
		            currentWidth = window.innerWidth;
		            
		            if (currentWidth == 320) {
		                orient = "portrait";
						//document.getElementById('banner').src="images/branding-portrait.png";
		            }
		            else {
		                orient = "landscape";
						//document.getElementById('banner').src="images/branding-landscape.png";
		            }
		            document.body.setAttribute("orient", orient);
		            window.scrollTo(0, 1);
		        }
		    };
		    setInterval(updateLayout, 400);

		    $(document).ready(function () {
				$('ul').roundabout({
					minScale: 0.6,
					reflect: true,
					enableDrag: true,
					tilt: -3
				});
			});

            function navigator_Go(url) {
                window.location.assign(url); // This technique is almost exactly the same as a full <a> page refresh, but it prevents Mobile Safari from jumping out of full-screen mode
            }
			
			window.onload = function(){
				/*
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");

				context.fillStyle = "#FFF";
				if(orient == "landscape") { 
					context.fillRect(canvas.width/3.5,canvas.height-(canvas.height/4)-45,canvas.width/1.5,180);
					//function DrawStripes(c, x, y, w, h, d) 
					DrawStripes("myCanvas",canvas.width/3.5,canvas.height-(canvas.height/4)-45,canvas.width/1.5,180,"#dddddd");
					
					context.font = "bold 32pt Calibri";
					context.fillStyle = "#65B133";
					context.fillText("Team Urban Science - Spring 2012", canvas.width/3.5, canvas.height-(canvas.height/4));
					context.fillText("CSE498: The Capstone Experience", canvas.width/3.5, canvas.height-(canvas.height/4)+60);
					context.fillText("Michigan State University", canvas.width/3.5, canvas.height-(canvas.height/4)+120);

                    
				} else {
					context.fillRect(canvas.width/2.5,canvas.height-(canvas.height/4)-45,canvas.width/1.8,180);
					DrawStripes("myCanvas",canvas.width/2.5,canvas.height-(canvas.height/4)-45,canvas.width/1.8,180,"#dddddd");
					
					context.font = "bold 28pt Calibri";
					context.fillStyle = "#65B133";
					context.fillText("Team Urban Science - Spring 2012", canvas.width/2.5, canvas.height-(canvas.height/4));
					context.fillText("CSE498: The Capstone Experience", canvas.width/2.5, canvas.height-(canvas.height/4)+60);
					context.fillText("Michigan State University", canvas.width/2.5, canvas.height-(canvas.height/4)+120);
				}*/
			}