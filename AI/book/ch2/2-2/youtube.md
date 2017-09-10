# 1-2 THE CONCEPT OF RATIONALITY

Slide0
> In the last video we defined what an agent is and its relation to artificial Intelligence

> In This video will discuss the concept of Rational Agents

> Lets define what a Rational Agent is


Slide 1:
> A Rational Agent is an agent is one that does the right thing, But that doesnt really define anything. So if we dig a little deeper we will find that a Rational Agent has every entry in the table for its function ﬁlled out correctly.

> These Two definitions alone opens up a world of possibilities

> The first question I asked my self was What Does it mean to do the right thing? and how does having the agent function filled out correctly relate. How can I tell its doing the right thing.

> The answer is by considering the consequences of the particular agent’s behavior.

> When We put an agent in an environment it generates a sequence of actions according to the percepts or inputs it receives


> This sequence causes the environment to go through a sequence of States. If the sequence is desirable, then the agent has performed well.

> This desirability is captured by a performance measure.
> In the last video we briefly spoke about a performance measure. This measure evaluates any given sequence of environment states.

> For Example: [a, clean], [b,clean].[a, dirty], [b, clean]

> An important thing to note is that these are environment states, not agent states.

> The agent perceives these and uses its actuatuaters after deciding if it should do so based on the contents of these environment states.

> If we were to judge success based on agent states and not environment states, then an agent can achieve perfect rationality easily by telling itself that it has performed well even if the environment is still messey. 

> An agent cannot judge its own success. Instead the environment state will let a agent know when it has performed well.

> There is no fixed performance measure for all agents and A developer must develop one for his or hers own circumstances.

> Lets look at the Vacuum cleaner example again from the last video.

> We might measure its performance by the amount of dirt cleaned up in a single eight-hour shift.

> and With a rational agent, what you ask for is exactly what you get. Nothing more, nothing less.

> This may cause a problem if you have not considered thoroughly brainstorming the performance measure

> Looking at the example. A rational agent can maximize the performance measure we created by cleaning up the dirt, then dumping it all on the ﬂoor, then cleaning it up again, and so on.

> The vacuum is hitting all of the goals right?? I mean we havent created a condition for it telling what to do after successfully cleaning a tile

> Let alone setting up a end condition for the vacuum, So it would know what to do after all of the tiles are clean.


## Introducing Rationality

> What is rational at any given time depends on four things: 
    • The performance measure that deﬁnes the criterion of success. 
    • The agent’s prior knowledge of the environment. 
    • The actions that the agent can perform. 
    • The agent’s percept sequence to date.

> For each possible percept sequence, a rational agent should select an action that is expected to maximize its performance measure, given the evidence provided by the percept sequence and whatever built-in knowledge the agent has.

> Consider the simple vacuum-cleaner agent that cleans a square if it is dirty and moves to the other square if not
> Is this agent rational?

> That depends! First, we need to say what the performance measure is, what is known about the environment, and what sensors and actuators the agent has. 

> So Let us assume the following:
    • The performance measure awards one point for each clean square at each time step, over a “lifetime” of 1000 time steps. 
    • The “geography” of the environment is known prior but the dirt distribution and the initial location of the agent are not. Clean squares stay clean and sucking cleans the current square. The Left and Right actions move the agent left and right except when this would take the agent outside the environment, in which case the agent remains where it is. 
    • The only available actions are Left, Right, andSuck. 
    • The agent correctly perceives its location and whether that location contains dirt.

> > We claim that under these circumstances the agent is indeed rational; its expected performance is at least as high as any other agent’s. 

> > One can see easily that the same agent would be irrational under different circumstances.

