/*
	Abstract class representing an Environment. 'Real' Environment classes
    inherit from this. Your Environment will typically need to implement:
        percept:           Define the percept that an agent sees.
        execute_action:    Define the effects of executing an action.
                           Also update the agent.performance slot.
    The environment keeps a list of .things and .agents (which is a subset
    of .things). Each agent has a .performance slot, initialized to 0.
    Each thing has a .location slot, even though some environments may not
    need this.
*/

class Environment {
	constructor(){
		// get a list of thing objects and agent objects
		this.things = [];
		this.agents = [];
	}

	// list of classes that can go into an environment
	thingClasses() {
		return [];
	}

	//Return the percept that the agent sees at this point. (Implement this.)
	percept(agent){
		return new Error('no percept', agent);
	}
        
	//Change the world to reflect this action. (Implement this.)
    executeAction(agent, action){
        return new Error('no execute action', agent);
    }

    //Default location to place a new thing with unspecified location.
    defaultLocation(thing){
    	return null;
    }

    // If there is spontaneous change in the world, override this.
    exogenousChange(){
        return 'pass';
    }

    // By default, we're done when we can't find a live agent.
    isDone(){
    	for (agent in this.agents) {
    		if (agent.is_alive()) {
    			var dead = false;
    			return false;
    		}
    	}
    	return true;
    }

}

module.exports = Environment;