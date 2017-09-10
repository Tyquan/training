
In this section I will be discuss Intelligent Agents but before I speak further on the subject we should define what an Agent is. After a quick break down  and some examples of the term Agent We will discuss The Term Intelligent Agents and how it relates to Artificial Intellegence.



Slide 1:
So What is an Agent
By an artificial Intelligence definition An AGENT is anything that can be viewed as perceiving its environment through sensors and acting upon that environment through actuators
What does that mean
Simply... an agent is anything that views or perceives anything around it and makes a decision based on what it views or perceives

An agent uses various sensors to view an envoroinment, and uses acuators to act upon an environment.
An actuator are motors plain and simple. Whatever the agent motor function is thats what an agent uses to act upon its environment.

Heres two examples of that:





Slide2:
Humans are Agents ( A human agent has eyes, ears, and other organs for sensors and hands, legs actuators)

A robotic agent may have cameras and infrareds for sensors and various motors that you create for actuators

Software is also considered an agent ....A software agent receives keystrokes, ﬁle contents, and network packets as sensory inputs and acts on the environment by displaying contents on the screen, writing ﬁles, and sending network packets. 


Slide3:
An Agent Runs in Cycles: 
    First it Perceives Environment 
    Second it Thinks 
    Third and Last it Acts on that Environment

An agent’s behavior is described by an agent function that maps any given percept sequence to an action.

PERCEPTs refer to the Agents perceptual Inputs at any given instant. and An agent’s "percept sequence" is the complete history of everything the agent has ever perceived. In terms of an human the percept sequence is stored in memory somewhere in the brain. On a software system we ma set up an database to save the percept sequence to refer to whenever we get a new perceptual input

so An agent’s behavior is described by an agent function that maps any given percept sequence to an action. 

The map would be stored in a tabular way.

Lets take a look at a small example of a robot vacuum:






Slide 4:

We can make up a simple ficticious world or environment that are only made up of 2 spaces A and B. You can think of these as tiles. One tile is A and the other is B and they are Spread out in this world radomly

Our vacuum agent perceives which tile it is in and whether there is dirt in the tile. It can choose to move left, move right, suck up the dirt, or do nothing.

A very simple agent function could be: if the current square is dirty, then suck up the dirt; otherwise, move to the other tile

So if Tile A is dirty the vacuum will suck up the dirt then move on, If tile B is clean the vacuum cleaner will simply move on and so On.

The vacuum cleaner is perceiving its environemnt through its sensors, thinking or determining if a tile is clean or not, making a decision and using its suction as an actuator to act upon that environment by sucking up the dirt.

