# 2-2 GOOD BEHAVIOR:THE CONCEPT OF RATIONALITY

> A rational agent is one that does the right thing—conceptually speaking, every entry in table for the agent function is ﬁlled out correctly.

> What Does it mean to do the right thing?
> by considering the consequences of the agent’s behavior. 

> When an agent is plunked down in an environment, it generates a sequence of actions according to the percepts it receives. This sequence of actions causes the environment to go through a sequence of states. If the sequence is desirable, then the agent has performed well.

> This notion of desirability is captured by a performance measure that evaluates any given sequence of environment states.

> Notice that we said environment states, not agent states. If we deﬁne success in terms of agent’s opinion of its own performance, an agent could achieve perfect rationality simply by deluding itself that its performance was perfect

> Human agents in particular are notorious for “sour grapes”—believing they did not really want something (e.g., a Nobel Prize) after not getting it. 

> Obviously,thereisnotoneﬁxedperformancemeasureforall tasksandagents; typically, a designer will devise one appropriate to the circumstances. This is not as easy as it sounds. Consider, for example, the vacuum-cleaner agent from the preceding section. We might propose to measure performance by the amount of dirt cleaned up in a single eight-hour shift. With a rational agent, of course, what you ask for is what you get. A rational agent can maximize this performance measure by cleaning up the dirt, then dumping it all on the ﬂoor, then cleaning it up again, and so on. 

> A more suitable performance measure would reward the agent for having a clean ﬂoor. For example, one point could be awarded for each clean square at each time step

> As a general rule, it is better to design performance measures according to what one actually wants in the environment, rather than according to how one thinks the agent should behave. 

> Even when the obvious pitfalls are avoided, there remain some knotty issues to untangle. For example, the notion of “clean ﬂoor” in the preceding paragraph is based on average cleanliness over time. Yet the same average cleanliness can be achieved by two different agents, one of which does a mediocre job all the time while the other cleans energetically but takes long breaks. 

> Which is preferable might seem to be a ﬁne point of janitorial science, but in fact it is a deep philosophical question with far-reaching implications. Which is better— a reckless life of highs and lows, or a safe but humdrum existence? Which is better—an economy where everyone lives in moderate poverty, or one in which some live in plenty while others are very poor?

## 2-2-1 Rationality

> What is rational at any given time depends on four things: 
    • The performance measure that deﬁnes the criterion of success. 
    • The agent’s prior knowledge of the environment. 
    • The actions that the agent can perform. 
    • The agent’s percept sequence to date. 

>  Rational Agent: For each possible percept sequence, a rational agent should select an action that is expected to maximize its performance measure, given the evidence provided by the percept sequence and whatever built-in knowledge the agent has.

> Consider the simple vacuum-cleaner agent that cleans a square if it is dirty and moves to the other square if not; this is the agent function tabulated in Figure 2.3. Is this a rational agent? That depends! First, we need to say what the performance measure is, what is known about the environment, and what sensors and actuators the agent has. 

>  Let us assume the following:
    • The performance measure awards one point for each clean square at each time step, over a “lifetime” of 1000 time steps. 
    • The “geography” of the environment is known a priori but the dirt distribution and the initial location of the agent are not. Clean squares stay clean and sucking cleans the current square. The Left and Right actions move the agent left and right except when this would take the agent outside the environment, in which case the agent remains where it is. 
    • The only available actions are Left, Right, andSuck. 
    • The agent correctly perceives its location and whether that location contains dirt.

> We claim that under these circumstances the agent is indeed rational; its expected performance is at least as high as any other agent’s. 

> One can see easily that the same agent would be irrational under different circumstances. For example, once all the dirt is cleaned up, the agent will oscillate needlessly back and forth; if the performance measure includes a penalty of one point for each movement left or right, the agent will fare poorly. A better agent for this case would do nothing once it is sure that all the squares are clean. If clean squares can become dirty again, the agent should occasionally check and re-clean them if needed. If the geography of the environment is unknown, the agent will need to explore it rather than stick to squares A and B. 


## 2-2-2 Omniscience, learning, and autonomy
> We need to be careful to distinguish between rationality and omniscience

> An omniscient agent knows the actual outcome of its actions and can act accordingly; but omniscience is impossible in reality

> Example: I am walking along the Champs Elys´ees one day and I see an old friend across the street. There is no trafﬁc nearby and I’m not otherwise engaged, so, being rational, I start to cross the street. Meanwhile, at 33,000 feet, a cargo door falls off a passing airliner,2 and before I make it to the other side of the street I am ﬂattened. Was I irrational to cross the street? It is unlikely that my obituary would read “Idiot attempts to cross street.” 

> rationality is not the same as perfection

> Rationality maximizes expected performance, while perfection maximizes actual performance. 

> The point is that if we expect an agent to do what turns out to be the best action after the fact, it will be impossible todesign anagent tofulﬁllthisspeciﬁcation (We dont know the future .... yet)

> Our deﬁnition of rationality does not require omniscience, then, because the rational choice depends only on the percept sequence to date. We must also ensure that we haven’t inadvertently allowed the agent to engage in decidedly underintelligent activities. 

> For example, ifanagent does notlook both waysbefore crossing abusy road, then itspercept sequence will not tell it that there is a large truck approaching at high speed. Does our deﬁnition of rationality say that it’s now OK to cross the road? Far from it! First, it would not be rational to cross the road given this uninformative percept sequence: the risk of accident from crossing without looking is too great. Second, a rational agent should choose the “looking” action before stepping into the street, because looking helps maximize the expected performance. Doing actions in order to modify future percepts

> A second example of information gathering is provided by the exploration that must be undertaken by a vacuum-cleaning agent in an initially unknown environment. 

> Our deﬁnition requires a rational agent not only to gather information but also to learn as much as possible from what it perceives

> The agent’s initial conﬁguration could reﬂect some prior knowledge of the environment, but as the agent gains experience this may be modiﬁed and augmented. There are extreme cases in which the environment is completely known. In such cases, the agent need not perceive or learn; it simply acts correctly. Of course, such agents are fragile. Consider the lowly dung beetle. After digging its nest and laying its eggs, it fetches a ball of dung from a nearby heap to plug the entrance. If the ball of dung is removed from its grasp en route, the beetle continues its task and pantomimes plugging the nest with the nonexistent dung ball, never noticing that it is missing. Evolution has built an assumption into the beetle’s behavior, and when it is violated, unsuccessful behavior results. Slightly more intelligent is the sphex wasp. The female sphex will dig a burrow, go out and sting a caterpillar and drag it to the burrow, enter the burrow again to check all is well, drag the caterpillar inside, and lay its eggs. The caterpillar serves as a food source when the eggs hatch. So far so good, but if an entomologist moves the caterpillar a few inches away while the sphex is doing the check, it will revert to the “drag” step of its plan and will continue the planwithout modiﬁcation, evenafterdozens of caterpillar-moving interventions. The sphex is unable to learn that its innate plan is failing, and thus will not change it. 

> To the extent that an agent relies on the prior knowledge of its designer rather than on its own percepts, we say that the agent lacks autonomy. 

> A rational agent should be autonomous—it should learn what it can to compensate for partial or incorrect prior knowledge

>  For example, a vacuum-cleaning agent that learns toforesee whereandwhenadditional dirt will appear will do better than one that does not. As a practical matter, one seldom requires complete autonomy from the start: when the agent has had little or no experience, it would have to act randomly unless the designer gave some assistance. So, just as evolution provides animals withenough built-in reﬂexestosurvive long enough tolearnforthemselves, it would be reasonable to provide an artiﬁcial intelligent agent with some initial knowledge as well as an ability to learn. After sufﬁcient experience of its environment, the behavior of a rational agent can become effectively independent of its prior knowledge. Hence, the incorporation of learning allows one to design a single rational agent that will succeed in a vast variety of environments.

> 