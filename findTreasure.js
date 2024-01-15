<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Найди клад!</title>
</head>

<body>
	<h1 id="Heading"; style="text-align: center">Найди клад!</h1>
	<h2 id="clickCount"; style="text-align: center"></h2>
	<img id="map" width=400 height=400 src="http://nostarch.com/images/treasuremap.png">

	<p id="distance"></p>

	<style>
		* {
			background: #9DBC98;
			color: #597E52;
		}
	    p { 
	    font-size: 150%; 
	    text-align: center;
	    }
	    img {
	    display: block;
	    margin-left: auto;
	    margin-right: auto 
		}
    </style>

	<script src="https://code.jquery.com/jquery-2.1.0.js"></script>

	<script>
		var getRandomNum=function(size){
			return Math.floor(Math.random()*size);
		};

		var getDistance=function(event, target){
			var diffx=event.offsetX-target.x;
			var diffy=event.offsetY-target.y;
			return Math.sqrt((diffx*diffx)+(diffy*diffy));
		};

		var getDistanceHint=function(distance){
			if (distance<10){
				return "Обожжёшься!";
			} else if(distance<20){
				return "Очень горячо";
			} else if(distance<40){
				return "Горячо";
			} else if(distance<80){
				return "Тепло";
			} else if(distance<160){
				return "Холодно";
			} else if(distance<320){
				return "Очень холодно";
			} else{
				return "Замёрзнешь!"
			}
		};

		var width=400;
		var height=400;
		var clicks=0;

		var target={
			x: getRandomNum(width),
			y: getRandomNum(height)
		};

		$("#map").click(function(event){
			clicks++;
			var distance=getDistance(event, target);
			var distanceHint=getDistanceHint(distance);
			$("#distance").text(distanceHint);
			$("#clickCount").text(clicks);
			if(distance<10){
				alert("Клад Найден! Сделано кликов "+clicks);
				location.reload();
				clicks = 0;
			}
		});
	</script>
</body>
</html>
