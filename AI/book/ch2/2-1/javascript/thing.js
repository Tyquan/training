/*
	This represents any physical object that can appear in an Environment.
    You subclass Thing to get the things you want. Each thing can have a
    name variable (used for output only).
*/

class Thing {
	constructor () {
		this.state = 0;
	}

	isAlive(){
       return this.hasOwnProperty('alive') && this.alive == true;
	}

    showState(){
    	// Display the agent's internal state. Subclasses should override."""
        return this.state;
    }
        

    display(canvas, x, y, width, height){
    	// Display an image of this Thing on the canvas.
        // Do we need this?
        //pass;
    }
        
}

// Tests

var thing1 = new Thing();
console.log(thing1);
console.log(thing1.isAlive());

thing1.alive = true;
console.log('Made thing1 alive');
console.log(thing1.isAlive());
console.log(thing1);