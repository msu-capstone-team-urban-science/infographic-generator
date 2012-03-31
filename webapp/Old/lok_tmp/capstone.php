<!DOCTYPE html>
<html>
	<head>
		<title>Prototype01</title>
        <script type="text/javascript">
			// * Prototype Infographic
			// *         by
			// *     Lok Cheung
			var myCanvas;
			var ctx;
			var offset=0;
			var data = new Array(["sale1",89],["sale2",60],["sale3",75],["sale4",20],["sale5",100]);
			function drawGraph() {
				ctx.fillStyle ='#00F';
				var i=0;
				for(i=0;i<data.length;i++)
				{
					if(offset < data[i][1])
					{
						offset++;
						drawBar(ctx, i,offset);
					}
					drawText(ctx, i, data[i][0]);
				}
			}
			function drawBar(ctx,index, value1){
				ctx.fillRect(15+index*30, 30+(100-value1), 20, value1);
			}
			function drawText(ctx, index, value2){
				ctx.fillText(value2, 10+index*30, 150);
			}
			function init() {
			  canvas = document.getElementById("myCanvas");
			  ctx = canvas.getContext("2d");
			  //call drawGraph every 20 millisecond
			  return setInterval(drawGraph, 20);
			}

		</script>
	</head>

	<body onload="init()">
		<h1>Sale</h1>
		<canvas id="myCanvas" width="500" height="500">
			<!-- Insert fallback content here -->
            Sorry, your browser doesn't support canvas technology
		</canvas>
	</body>
</html>
