//////////////////////////////////////////////////////////
//														//
//		This chart is provided free of charge by		//
//		  LEKE OJIKUTU (www.lekeojikutu.com)			//
//		It is realeased under the LGPL(v3.0) license	//
//		Feel free to use in commercial or 				//
//		non commercial projects as long as you 			//
//			abide by the LGPL(v3.0) license				//
//														//
//////////////////////////////////////////////////////////

function makeXChart(div,w,h,myArray,c1,c2,title){
	//create the canvas element inside the div
	var canvas = '<canvas id="myCanvas" width="'+(w)+'" height="'+(h)+'"><p>Your browser does not support HTML5 canvas.</p></canvas>';
	document.getElementById(div).innerHTML = canvas;
	//Adjust chart width and height
	w=w-20; h=h-50;
	var c=document.getElementById("myCanvas");
	// Check the element is in the DOM and the browser supports canvas
	if(c.getContext) {
		var cxt=c.getContext("2d");
		var max = 0; //Innitialise maximum bar height to zero
		var len=0; //Innitialise no of bars to zero
		sum = 0;
		for(key in myArray)
		{
			if(myArray[key] > max) max = myArray[key];
			sum += myArray[key];
			len++;
		}
		var border = 4;  //Changing the border mar distort the graph
		var bar_h = (h-border)/len;
		var gradient = cxt.createLinearGradient(w/2, 50, w/2, h);
		gradient.addColorStop(0, '#000');
		gradient.addColorStop(0.1, '#eee'); 
		gradient.addColorStop(0.5, '#fff'); 
		gradient.addColorStop(1, '#000'); 
		
		max = max - border;
		txtArea = w*0.2;
		full = w -(border*2)-txtArea;
		cxt.strokeStyle='#fff';
		cxt.save();
		
		cxt.shadowOffsetX = border/2;
		cxt.shadowOffsetY = border/2;
		cxt.shadowBlur = border/2;
		cxt.shadowColor = "black";
		cxt.fillStyle=c1;
		n=0;
		for(key in myArray)
		{
			cxt.fillRect(border+txtArea,(border*2)+(bar_h*n),(myArray[key]/max)*full,bar_h-border);
			n++;
		}
		
		cxt.shadowColor = "#fff";
		n=0;
		for(key in myArray)
		{
			cxt.strokeRect(border+txtArea,(border*2)+(bar_h*n),(myArray[key]/max)*full,bar_h-border);
			n++;
		}
		
		cxt.shadowOffsetX = border/-2;
		n=0;
		for(key in myArray)
		{
			cxt.strokeRect(border+txtArea,(border*2)+(bar_h*n),((myArray[key]/max)*full),bar_h-border);
			n++;
		}
		cxt.shadowOffsetY = border/-2;
		n=0;
		for(key in myArray)
		{
			cxt.strokeRect(border+txtArea,(border*2)+(bar_h*n),((myArray[key]/max)*full),bar_h-border);
			n++;
		}
		cxt.restore();
		
		cxt.save();
		cxt.font = 'bold 14px sans-serif';
		cxt.shadowOffsetX = 1;
		cxt.shadowOffsetY = 1;
		cxt.shadowBlur = 1;
		cxt.shadowColor = "white";
		n=0;
		for(key in myArray)
		{
			cxt.fillStyle=c2;
			cxt.fillText(key, (border+10), (border*2)+(bar_h*n)+(bar_h/1.8),txtArea-15);
			cxt.fillText(Math.round((myArray[key]/sum)*100*100)/100+'% ('+myArray[key]+')',  (border+10+txtArea), (border*2)+(bar_h*n)+(bar_h/1.8),full);
			n++;
		}
		cxt.restore();
		//uncomment the lines below to enable borders
		//cxt.fillStyle = gradient;
		//cxt.fillRect(0,h+(border*2),w+(border*2),-border);
		//cxt.fillRect(0,0,border,h+(border*2));
		//cxt.fillRect(w+border,0,border,h+(border*2));
		//cxt.fillRect(0,0,w+(border*2),border);
		cxt.fillStyle = c2;
		cxt.font = 'bold 20px sans-serif';
		if(title != undefined)cxt.fillText(title, (border*1.5),(border*2)+h+25, w);
	}
}

function makeYChart(div,w,h,myArray,c1,c2,title){
	var canvas = '<canvas id="myCanvas" width="'+(20+w)+'" height="'+(20+h)+'"><p>Your browser does not support canvas.</p></canvas>';
	document.getElementById(div).innerHTML = canvas;
	var c=document.getElementById("myCanvas");
	// Check the element is in the DOM and the browser supports canvas
	if(c.getContext) {
		var cxt=c.getContext("2d");
		var max = 0; //Innitialise maximum bar height to zero
		var len=0; //Innitialise no of bars to zero
		var sum = 0;
		if(c1 == undefined) c1 = "#000";
		if(c2 == undefined) c1 = "#e06";
		for(key in myArray)
		{
			if(myArray[key] > max) max = myArray[key];
			sum += myArray[key];
			len++;
		}
		var bar_w = w/len;
		var border = 10;  //Changing the border mar distort the graph
		var gradient = cxt.createLinearGradient(w/2, 50, w/2, h);
		gradient.addColorStop(0, '#FFF');
		gradient.addColorStop(0.5, '#eee'); 
		gradient.addColorStop(1, '#000'); 
		
		max = max *1.1;
		cxt.save();
		
		cxt.shadowOffsetX = border/2;
		cxt.shadowOffsetY = border/2;
		cxt.shadowBlur = border/2;
		cxt.shadowColor = "black";
		cxt.fillStyle=c1;
		cxt.strokeStyle='#fff';
		n=0;
		for(key in myArray)
		{
			cxt.fillRect(border+(bar_w*n),h+(border*2),bar_w-border,-(myArray[key]/max)*h);
			n++;
		}
		
		cxt.shadowColor = "#fff";
		n=0;
		for(key in myArray)
		{
			cxt.strokeRect(border+(bar_w*n),h+(border*2),bar_w-border,-(myArray[key]/max)*h);
			n++;
		}
		
		cxt.shadowOffsetX = border/-2;
		n=0;
		for(key in myArray)
		{
			cxt.strokeRect(border+(bar_w*n),h+(border*2),bar_w-border,-(myArray[key]/max)*h);
			n++;
		}
		cxt.restore();
		cxt.save();
		
		cxt.font = 'bold 14px sans-serif';
		cxt.shadowOffsetX = 1;
		cxt.shadowOffsetY = 1;
		cxt.shadowBlur = 1;
		cxt.shadowColor = "white";
		n=0;
		for(key in myArray)
		{
			cxt.fillStyle=c2;
			cxt.fillText(key, (border*1.5)+(bar_w*n), h-(60),bar_w-(border*2));
			cxt.fillText('('+myArray[key]+')', (border*1.5)+(bar_w*n), h-(40),bar_w-(border*2));
			cxt.fillText(Math.round((myArray[key]/sum)*100*100)/100+'%', (border*1.5)+(bar_w*n), h-20,bar_w-(border*2));
			
			n++;
		}
		cxt.restore();
		//uncomment the lines below to enable borders
		//cxt.fillStyle = gradient;
		//cxt.fillRect(0,h+(border*2),w+(border*2),-border);
		//cxt.fillRect(0,0,border,h+(border*2));
		//cxt.fillRect(w+border,0,border,h+(border*2));
		//cxt.fillRect(0,0,w+(border*2),border);
		cxt.fillStyle = c2;
		cxt.font = 'bold 20px sans-serif';
		if(title != undefined)cxt.fillText(title, (border*1.5),(border*1.5), w);
	}
}