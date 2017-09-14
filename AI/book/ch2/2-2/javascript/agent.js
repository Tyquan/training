const Thing = require('./thing');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
    An Agent is a subclass of Thing with one required slot,
    .program, which should hold a function that takes one argument, the
    percept, and returns an action. (What counts as a percept or action
    will depend on the specific environment in which the agent exists.)
    Note that 'program' is a slot, not a method. If it were a method,
    then the program could 'cheat' and look at aspects of the agent.
    It's not supposed to do that: the program can only look at the
    percepts. An agent program that needs a model of the world (and of
    the agent itself) will have to build and maintain its own model.
    There is an optional slot, .performance, which is a number giving
    the performance measure of the agent in its environment.
*/

class Agent extends Thing {
    constructor(program = null){
        super();
        // an agent is alive
        this.alive = true;
        this.bump = false;
        this.holding = [];
        // performance measure
        this.performance = 0;
        // create a progam if the agent doesnt already have one
        if (program == null || program.instanceOf(this)) {
            console.log("Can't find a valid program, falling back to default.\n");
            function program(percept){
                rl.question('Percept={}; action? \n', (percept) => {
                    console.log('action = ' + percept + '\n');
                    rl.close();
                    return percept;
                    
                });
                
            }
            program();
        }
        this.program = program;
    }
    // Give the agent the ability to grab another Thing
    // Returns true if this agent can grab this thing
    canGrab(thing){
        console.log('Agent is attempting to grab:', thing);
        return false;
    }

    // Wrap the agent's program to print its input and output. This will let
    // you see what the agent is doing in the environment.
    traceAgent(agent) {
        var oldProgram = agent.program();
        function newProgram(percept){
            var action = oldProgram(percept);
            console.log(`${agent} perceives ${percept} and does ${action}`);
            return action;
        }
        agent.program = newProgram();
        return agent;
    }
}

// Tests

var agent1 = new Agent();
var agent2 = new Thing();
console.log(agent1.program);

agent1.canGrab(agent2);
//agent1.traceAgent(agent1);

console.log('Is agent1 alive?', agent1.isAlive());