
// view
zog("hi from maneko.js");

var app = function(app) {
	
	app.makeHorizontalPages = function(queue, layoutManager) {
		
		zog("pages");
		
		p = {};
		
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		

		var fade = p.fade = new createjs.Shape();
		fade.setBounds(0,0,stageW,stageH);
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

				
		kitty = p.kitty1 = new createjs.Bitmap(queue.getResult("kitty1"));
		zim.centerReg(kitty); // scale and position in the scaling event
		//kitty.x = -35;
 		//kitty.y = 10;
 		//kitty.scaleX = 0.7;
 		//kitty.scaleY = 0.7;
 		p.main.addChild(kitty);

		meditating = p.kitty2 = new createjs.Bitmap(queue.getResult("kitty2"));
		zim.centerReg(meditating);
 		//meditating.x = -35;
 		//meditating.y = 5;
 		//meditating.scaleX = 0.7;
 		//meditating.scaleY = 0.7;

 		kitty.addEventListener("click", click1); 
 			function click1(event){
 			p.main.removeChild(kitty);
 			p.main.addChildAt(meditating,1); // under fruit
 			stage.update();		
 		}

 		meditating.addEventListener("click", click2);
 			function click2(event){
 			p.main.removeChild(meditating);
 			p.main.addChildAt(kitty,1);
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
		
		var fruitsBasket = p.fruitBasket = new createjs.Container();
		fruitsBasket.setBounds(0,0,stageW,stageH);
		zim.centerReg(fruitsBasket);
		p.main.addChild(fruitsBasket);

		var fruit;
		var fruits = ["strawberry","banana","orange","watermelon"];
		for (var i=0; i<fruits.length; i++) {
			fruit = new createjs.Bitmap(queue.getResult(fruits[i]));
			console.log(fruits[i]);
			fruit.scaleX = 0.75;
			fruit.scaleY = 0.75;
			fruit.x = zim.rand(0, stageW-80); // centered reg
			fruit.y = zim.rand(0, stageH-80);
			fruitsBasket.addChild(fruit);
		}

		fruitsBasket.addEventListener("click", takeFruit);
		function takeFruit(e) {
			//for (var i=0; i<fruits.length; i++){
			fruitsBasket.removeChild(e.target);
			fruitsBasket2.addChild(e.target);
			stage.update();
			//}
		}

		p.info = new createjs.Container();		
		p.info.name = "info";		
		var table = p.table = new createjs.Bitmap(queue.getResult("wood"));	
		table.setBounds(0,0,stageW,stageH);
		p.info.addChild(table);
		
		var fruitsBasket2 = p.fruitBasket2 = new createjs.Container();
		fruitsBasket2.setBounds(0,0,stageW,stageH);
		zim.centerReg(fruitsBasket2);
		p.info.addChild(fruitsBasket2);
				
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