
// view
zog("hi from maneko.js");

var app = function(app) {
	
	app.makeHorizontalPages = function(queue, fruits, layoutManager) {
		
		zog("pages");
		
		p = {};
		
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		

		var fade = new createjs.Shape();
		fade.setBounds(0,0,360,640);
 		fade.graphics.beginLinearGradientFill(["#DAE2F8", "#D6A4A4"], [0, 1], 0, 0, stageW, stageH)
 		fade.graphics.drawRect(0, 0, stageW, stageH);
 		p.main.addChild(fade);

 		/*
 		strawberry = new createjs.Bitmap("fruits/strawberry.png");
 		banana = new createjs.Bitmap("fruits/banana.png");
 		orange = new createjs.Bitmap("fruits/orange.png");
 		watermelon = new createjs.Bitmap("fruits/watermelon.png");

 		var fruits = new Array();

 		var fruits = ["strawberry", "banana", "orange", "watermelon"];

 		p.main.addChild(fruits);
		*/
		var fruitsBasket = new createjs.Container();
		fruitsBasket.setBounds(0,0,360,640);
		p.main.addChild(fruitsBasket);

		var fruit;
		zog(fruits);
		for (var i=0; i<fruits.length; i++) {
			fruit = new createjs.Bitmap(queue.getResult(fruits[i].id));
			console.log(fruits[i].id);
			fruit.scaleX = 0.75;
			fruit.scaleY = 0.75;
			fruit.x = Math.random() * 360 - 20;
			fruit.y = Math.random() * 640 - 20;
			fruitsBasket.addChild(fruit);

			stage.update();
		}

		fruitsBasket.addEventListener("click", takeFruit);
			function takeFruit(e) {
				for (var i=0; i<fruits.length; i++){
				fruitsBasket.removeChild(e.target);
				p.info.addChild(e.target);
				stage.update();
				}
			}
				
		kitty = new createjs.Bitmap("chakrakitty.png");
		kitty.x = -35;
 		kitty.y = 10;
 		kitty.scaleX = 0.7;
 		kitty.scaleY = 0.7;
 		p.main.addChild(kitty);

		meditating = new createjs.Bitmap("kittymeditating.png");
 		meditating.x = -35;
 		meditating.y = 5;
 		meditating.scaleX = 0.7;
 		meditating.scaleY = 0.7;

 		kitty.addEventListener("click", click1); 
 			function click1(event){
 			p.main.removeChild(kitty);
 			p.main.addChild(meditating);
 			stage.update();		
 		}

 		meditating.addEventListener("click", click2);
 			function click2(event){
 			p.main.removeChild(meditating);
 			p.main.addChild(kitty);
 			stage.update();
 		}

 		/*
		
		zog(layoutManager);
		
		layoutManager.add(
			new zim.Layout(p.main, [
				{object:fade, marginLeft:5, maxHeight:90, align:"middle"}, 
				{object:related, marginLeft:5, maxHeight:80, minWidth:20, align:"left", valign:"top"}
			], 10, "black", false, new createjs.Shape(), stage)								
		);	
		*/

		p.info = new createjs.Container();		
		p.info.name = "info";		
		var table = new createjs.Bitmap("wood.png");	
		table.setBounds(0,0,360,640);
		p.info.addChild(table);
				
		return p;



		/*
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", onTick);

		function onTick() {

			
			fruits = [
			{ id: "strawberry", src: "fruits/strawberry.png"},
			{ id: "banana", src: "fruits/banana.png"},
			{ id: "orange", src: "fruits/orange.png"},
			{ id: "watermelon", src: "fruits/watermelon.png"}
			];

				function addFruit() {
					for (var i=0; i<fruits.length; i++) {
						console.log(fruits[i]);
						fruits.scaleX = 0.5;
						fruits.scaleY = 0.5;
						fruits.x = Math.random() * 360;
						fruits.y = Math.random() * 640;
    					p.main.addChild(fruits);
    					stage.update();
					}
				}
		
				fruits.addEventListener("click", takeFruit);
					function takeFruit(event) {
					p.main.removeChild(fruits);
					p.info.addChild(fruits);
				}

			stage.update();
		}
		*/	
	}
	
	
	return app;
	
}(app || {});