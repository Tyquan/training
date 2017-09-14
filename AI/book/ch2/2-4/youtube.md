# 2-4 The Structure of Agents

> The job of AI is to design an agent program that implements the agent function which is the mapping from percepts to actions.

> In most case our program will run on some sort of computing device with physical sensors and actuators

> This is refered to as the architecture

	agent = architecture + program

> The program wechoose has to be one that is appropriate for its architecture. 

> If the program is going to recommend actions like Walk, the architecture better have legs. 

> The architecture could be just an ordinary PC, or it could be a robotic car with several onboard computers, cameras, and other sensors.

> Overall, the architecture makes the percepts from the sensors available toits program, then runs the program, and feeds the program’s action choices to the actuators as they are generated.





## 2.4.1 Agent programs

> The agent programs that we will design all have the same skeleton: they take the current percept as input from the sensors and return an action to the actuators

> Theres a major difference between the agent program and the agent function.

> The agent program takes the current percept as input.

> the agent function takes the entire percept history

> The agent program takes just the current percept as input because nothing more is available from the environment; if the agent’s actions need to depend on the entire percept sequence, the agent will have to remember the percepts.