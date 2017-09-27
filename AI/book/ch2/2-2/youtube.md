# 1-2 THE CONCEPT OF RATIONALITY

Slide0
> In the last video we defined what a simple agent is and its relation to artificial Intelligence

> In This video will discuss the concept of Rational Agents also known as Smart Agents Better known as Intelligent Agents

> Lets start off by defining what a Rational Agent is


Slide 1:
> A Rational Agent is an agent is one that does the right thing. A rational agent does exactly what you programmed. if we dig a little deeper we will find that a Rational Agent has every entry in the table for its function ﬁlled out correctly.

> We mesure a rational agent by considering the consequences of the particular agent’s behavior.

> When We put an agent in an environment it generates a sequence of actions according to the percepts or inputs it receives


> This sequence causes the environment to go through a sequence of States. If the sequence is desirable, then the agent has performed well.

> This desirability is captured by a performance measure.
> In the last video we briefly spoke about a performance measure. This measure evaluates any given sequence of environment states.

> For Example: [a, clean], [b,clean].[a, dirty], [b, clean]

> An important thing to note is that these are environment states, not agent states.

> The agent perceives and uses its actuatuaters after deciding if it should do so based on the contents of these environment states.

> If we were to judge success based on agent states and not environment states, then an agent can achieve perfect rationality easily by telling itself that it has performed well even if the environment is still messey. 

> An agent cannot judge its own success. Instead the environment state will let a agent know when it has performed well.

> There is no fixed performance measure for all agents and you the developer must develop one for your own circumstances.

> Lets look at the Vacuum cleaner example again from the last video.

> We might measure its performance by the amount of dirt cleaned up in a single eight-hour shift.

> and With a rational agent, what you ask for is exactly what you get. Nothing more, nothing less.

> This may cause a problem if you have not thoroughly brainstormed the performance measure

> Looking at the example. A rational agent can maximize the performance measure we created by cleaning up the dirt, then dumping it all on the ﬂoor, then cleaning it up again, and so on.

> The vacuum is hitting all of the goals right?? I mean we havent created a condition for it telling what to do after successfully cleaning a tile

> Let alone setting up a end condition for the vacuum, So it would know what to do after all of the tiles are clean.


## Introducing Rationality

> What is rational for an agent at any given time depends on four things: 
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

> We claim that under these circumstances the agent is indeed rational; its expected performance is at least as high as any other agent’s. 

> We can see that the same agent would be irrational under different circumstances.

> For example, once all the dirt is cleaned up, the agent will oscillate needlessly back and forth; 

> if the performance measure includes a penalty of one point for each movement left or right, the agent will fare poorly. 

> A Better agent would do nothing once it is sure that all the squares are clean. If clean squares become dirty again, the agent should occasionally check and re-clean them if needed.

> If the geography of the environment is unknown, the agent will need to explore it rather than stick to squares A and B. 

> We need to be careful not to mistake rationality with omniscience

> An omniscient agent knows the actual outcome of its actions and can act accordingly

> But omniscience is impossible in reality

> For Example: An agent (We will call Agent A) is walking along Times Square one day and sees an old friend (Another Agent We will call Agent B) across the street. There is no trafﬁc nearby and Agent A is not otherwise engaged in any other activity, so, being rational, Agent A starts to cross the street. Meanwhile, at 33,000 feet, a cargo door falls off a passing Airliner Agent, and before Agent A makes it to the other side of the street to greet Agent B, it is destroyed. Is Agent A irrational to cross the street?... No. How was Agent A supposed to know that an Airliner agent would malfunction, have its door connectors destroyed and fall on the exact location Agent A is momentarily standing while going through its walk_accros_strret function” 

> Remember...rationality is not the same as perfection

> The point is that if we expect an agent to do what turns out to be the best action after the fact, it will be impossible to design an agent to fulﬁll this speciﬁcation (We dont know the future .... yet)

> Our deﬁnition of rationality does not require omniscience, because the rational choice depends only on the percept sequence to date. 

> We must also ensure that we haven’t allowed the agent to engage in decidedly underintelligent activities. 

> For example, if an Agent A does not look both ways before crossing a busy road, then its percept sequence will not tell it that there is a large truck approaching at high speed. 

> Does our deﬁnition of rationality say that it’s now OK to cross the street? no First, it would not be rational to cross the road given this uninformative percept sequence: the risk of accident from crossing without looking is too great. Second, a rational agent should choose the “looking” action before stepping into the street, because looking helps maximize the expected performance. Doing actions in order to modify future percepts

> A second example of information gathering is provided by the exploration that must be undertaken by a vacuum-cleaning agent in an initially unknown environment. 

> Our deﬁnition requires a rational agent not only to gather information but also to learn as much as possible from what it perceives

> The agent’s initial conﬁguration could reﬂect some prior knowledge of the environment, but as the agent gains experience this may be modiﬁed and augmented. 

> There are extreme cases in which the environment is completely known. In such cases, the agent need not perceive or learn; it simply acts correctly. Of course, such agents are fragile.

> To the extent that an agent relies on the prior knowledge of its designer rather than on its own percepts, we say that the agent lacks autonomy. 

> A rational agent should be autonomous—it should learn what it can to compensate for partial or incorrect prior knowledge

>  For example, a vacuum-cleaning agent that learns toforesee whereandwhenadditional dirt will appear will do better than one that does not. As a practical matter, one seldom requires complete autonomy from the start

>  when the agent has had little or no experience, it would have to act randomly unless the designer gave some assistance.

> So, just as evolution provides animals withenough built-in reﬂexestosurvive long enough tolearnforthemselves, it would be reasonable to provide an artiﬁcial intelligent agent with some initial knowledge as well as an ability to learn.

> After sufﬁcient experience of its environment, the behavior of a rational agent can become effectively independent of its prior knowledge. Hence, the incorporation of learning allows one to design a single rational agent that will succeed in a vast variety of environments.



winmo.com

yrevzin@tonicdesign.com

Success2017