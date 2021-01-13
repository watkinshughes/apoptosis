


//Random Range Function
function randRange(min:Number, max:Number):Number {
	var randomNum:Number = Math.floor(Math.random()*(max-min+1))+min;
	return randomNum;
}
//Arrays to hold color choices and list of movies to attach
var colourChoices:Array = ["0x84372D", "0x70766F", "0x868980", "0xABAEA3", "0xA5706D", "0x67382D", "0x8E7D70", "0x8C6057", "0x9C9388", "0xBCBEB4", "0x9F5145", "0xA07265", "0x9C9388", "0xB36E5B", "0xCFAB99", "0xA46C5D" ];
var movieList:Array = ["redShape", "yellowShape", "blueShape", "orangeShape" ];
function attachRandom() {
	for (var i = 0; i<100; i++) {
		xloc = randRange(15, Stage.width-5);
		yloc = randRange(15, Stage.height-5);
		scale = randRange(25, 200);
		alpha = randRange(100, 100);
		rotation = randRange(0, 360);
		chooseColour = colourChoices[Math.floor(Math.random()*colourChoices.length)];
		whichMovie = movieList[Math.floor(Math.random()*movieList.length)];
		var attachedMc = this.attachMovie(whichMovie, whichMovie+i, this.getNextHighestDepth(), 			{_x:xloc, _y:yloc, _xscale:scale, _yscale:scale, _alpha:alpha, _rotation:rotation});
		var my_color:Color = new Color(attachedMc);
		my_color.setRGB(chooseColour);

//note, the depth changing, and deletion functions need to run when a movieclip has focus, ie it has been clicked on!!
		attachedMc.onPress = function() {
			if (Key.isDown(Key.getCode())) {
				switch (Key.getCode()) {
					case Key.SPACE :
						removeMovieClip(this);//delete the focused movieClip
						break;
					case Key.UP :
						this.swapDepths(this.getDepth()+1);//shuffle the mc up a layer
						break;
					case Key.DOWN :
						this.swapDepths(this.getDepth()-1);//shuffle the mc down a layer
						break;
					case Key.LEFT :
						this.swapDepths(0);//send an mc to the back
						break;
					case Key.RIGHT :
						this.swapDepths(this._parent.getNextHighestDepth()-1);//send an mc to the top
						break;
				}
			} else {
				startDrag(this);
			}
		};

		attachedMc.onRelease = function() {
			stopDrag();
		};
	}
}

//call the random scatter function
attachRandom();

//remove our attached movieClips
function removeAllMcs():Void {
	for (var i in this) {
		if (typeof (this[i]) == "movieclip") {
			removeMovieClip(this.getInstanceAtDepth(this[i].getDepth()));
		}
	}
	attachRandom();
}

//listen for key presses
var keyListener:Object = new Object();
keyListener.onKeyDown = function() {
	if (Key.isDown(Key.DELETEKEY) || Key.isDown(Key.BACKSPACE)) {
		removeAllMcs();
	}
};
Key.addListener(keyListener);
