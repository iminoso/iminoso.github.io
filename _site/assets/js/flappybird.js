
// create game on 400x490 canvas
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');
var initFlag = false;

var mainState ={
	preload: function () {
		game.stage.backgroundColor = '#71c5cf';
		game.load.image('bird', '/assets/flappybird/bird.png');
		game.load.image('pipe', '/assets/flappybird/pipe.png');
	},
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.score = 0;
		this.labelScore = game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });

		// create bird
	    this.bird = this.game.add.sprite(100, 245, 'bird');

		this.pipes = game.add.group();
		this.pipes.enableBody = true;
		this.pipes.createMultiple(20, 'pipe');

		// use gravity physics engine
		game.physics.arcade.enable(this.bird);
		this.bird.body.gravity.y = 1000;

		// jump on spacebar key
		var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.add(this.jump, this);

		// create pipes
		this.timer = game.time.events.loop(1500, this.addPipeGroup, this);
	},
	update: function(){
		if (this.bird.inWorld == false){
			this.restartGame()
		}

		game.physics.arcade.overlap(this.bird, this.pipes, this.restartGame, null, this);
	},
	jump: function(){
		this.bird.body.velocity.y = -350;
	},
	addPipeBlock: function(x,y){
		// create pipe
		var pipe = this.pipes.getFirstDead();
		pipe.reset(x,y)

		// move pipe left
		pipe.body.velocity.x = -200;

		// remove pipe when out of screen
		pipe.checkWorldBounds = true;
		pipe.outOfBoundsKill = true;
	},
	addPipeGroup: function(){
		// make opening for the bird
		var opening = Math.floor(Math.random() * 5) + 1;

		if(initFlag){
			this.score += 1;  
			this.labelScore.text = this.score; 
		}
		else
			initFlag = true;

		// add group of pipes
		for(var i = 0; i < 8; i++){
			if(i != opening && i != opening + 1)
				this.addPipeBlock(400, i * 60 + 10)
		}
	},
	restartGame: function(){
		game.state.start('main');
	}
};

game.state.add('main', mainState);
game.state.start('main');

