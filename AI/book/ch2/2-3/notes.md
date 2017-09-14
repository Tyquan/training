# Speciying the task environment

> In our discussion of the rationality of the simple vacuum-cleaner agent, we had to specify the performance measure, the environment, and the agent’s actuators and sensors. We group all these under the heading of the task environment

>  For the acronymically minded, we call this the PEAS (Performance, Environment, Actuators, Sensors) description

>  In designing an agent, the ﬁrst step must always be to specify the task environment as fully as possible

> The vacuum world was a simple example; let us consider a more complex problem: an automated taxi driver

> Lets break it down:
> Agent Type: Taxi Driver
> Performance Measure: Safe, fast, legal, comfortable trip, maximize proﬁts
> Environment: Roads, other trafﬁc, pedestrians, customers
> Actuators: Steering, accelerator, brake, signal, horn, display
> Sensors: Cameras, sonar, speedometer, GPS, odometer, accelerometer, engine sensors, keyboard

## Properties of task environments
> The range of task environments that might arise in AI is obviously vast. We can, however, identify a fairly small number of dimensions along which task environments can be categorized. These dimensions determine, to a large extent, the appropriate agent design and the applicability of each of the principal families of techniques for agent implementation

### Agent 1
> Agent Type: Medical diagnosis system
> Performance Measure: Healthy patient, reduced costs
> Environment: Patient, hospital, staff
> Actuators: Display of questions, tests, diagnoses, treatments, referrals
> Sensors: Keyboard entry of symptoms, findings, patients answers

### Agent 2
> Agent Type: Satellite image analysis system
> Performance Measure: Correct image categorization
> Environment: Downlink from orbiting satellite
> Actuators: Display of scene categorization
> Sensors: Color pixel arrays

### Agent 3
> Agent Type: Part-picking robot
> Performance Measure: Percentage of parts in correct bins
> Environment: Conveyor belt with parts; bins
> Actuators: Jointed arm and hand
> Sensors: Camera, joint angle sensors

### Agent 4
> Agent Type: Reﬁnery controller
> Performance Measure: Purity, yield, safety
> Environment: Reﬁnery, operators
> Actuators: Valves, pumps, heaters, displays
> Sensors: Temperature, pressure, chemical Sensors

### Agent 5
> Agent Type: Interactive English tutor
> Performance Measure: Student’s score on test
> Environment: Set of students, testing agency
> Actuators: Display of exercises, suggestions, corrections
> Sensors: Keyboard Entry

## Environment Types

### Fully observable vs. partially observable:
> If an agent’s sensors give it access to theFULLYOBSERVABLE PARTIALLY OBSERVABLE complete state of the environment at each point in time, then we say that the task environment is fully observable.
> A task environment is effectively fully observable if the sensors detect all aspects that are relevant to the choice of action; relevance, in turn, depends on the performance measure
> Fully observable environments are convenient because the agent need not maintain any internal state to keep track of the world.
>  An environment might be partially observable because of noisy and inaccurate sensors or because parts of the state are simply missing from the sensor data—for example, a vacuum agent with only a local dirt sensor cannot tell whether there is dirt in other squares, and an automated taxi cannot see what other drivers are thinking.
> If the agent has no sensors at all then the environment is unobservable.

### Single agent vs. multiagent
> The distinction between single-agent and multiagent environments may seem simple enough.
>  For example, an agent solving a crossword puzzle by itself is clearly in a single-agent environment, whereas an agent playing chess is in a twoagent environment.
> There are, however, some subtle issues. First, we have described how an entity may be viewed as an agent, but we have not explained which entities must be viewed as agents. Does an agent A (the taxi driver for example) have to treat an object B (another vehicle) as an agent, orcan itbe treated merely as an object behaving according to the lawsof physics, analogous to waves at the beach or leaves blowing in the wind? The key distinction is whether B’sbehavior is best described as maximizing a performance measure whose value depends on agent A’s behavior. For example, in chess, the opponent entity B is trying to maximize its performance measure, which, by the rules of chess, minimizes agent A’s performance measure.
>  Thus, chess is a competitive multiagent environment. In the taxi-drivingCOMPETITIVE environment, on the other hand, avoiding collisions maximizes the performance measure of all agents, so it is a partially cooperative multiagent environment. It is also partially com-COOPERATIVE petitive because, for example, only one car can occupy a parking space. 
> The agent-design problems in multiagent environments are often quite different from those in single-agent environments; for example, communication often emerges as a rational behavior in multiagent environments; in some competitive environments, randomized behavior is rational because it avoids the pitfalls of predictability.

### Deterministic vs. stochastic
> If the next state of the environment is completely deter-DETERMINISTIC STOCHASTIC mined by the current state and the action executed by the agent, then we say the environment is deterministic; otherwise, it is stochastic
> In principle, an agent need not worry about uncertainty in a fully observable, deterministic environment
>  If the environment is partially observable, however, then it could appear to be stochastic. Most real situations are so complex that it is impossible to keep track of all the unobserved aspects; for practical purposes, they must be treated as stochastic. 
>  Taxi driving is clearly stochastic in this sense, because one can never predict the behavior of trafﬁc exactly; moreover, one’s tires blow out and one’s engine seizes up without warning
> The vacuum world as we described it is deterministic, but variations can include stochastic elements such as randomly appearing dirt and an unreliable suction mechanism
>  We say an environment is uncertain if it is not fully observable or not deterministic.

### Episodic vs. sequential
> In an episodic task environment, the agent’s experience isEPISODIC SEQUENTIAL divided into atomic episodes. In each episode the agent receives a percept and then performs a single action. Crucially, the next episode does not depend on the actions taken in previous episodes. Many classiﬁcation tasks are episodic
> For example, an agent that has to spot defective parts on an assembly line bases each decision on the current part, regardless of previous decisions; moreover, the current decision doesn’t affect whether the next part is defective
> In sequential environments, on the other hand, the current decision could affect all future decisions.3 Chess and taxi driving are sequential: in both cases, short-term actions can have long-term consequences.
> Episodic environments are much simpler than sequential environments because the agent does not need to think ahead. 

# Static vs. dynamic: If the environment can change while an agent is deliberating, thenSTATIC DYNAMIC we say the environment is dynamic for that agent; otherwise, it is static. Static environments are easy to deal with because the agent need not keep looking atthe world while it is deciding on an action, nor need it worry about the passage of time. Dynamic environments, on the other hand, are continuously asking the agent what it wants to do; if it hasn’t decided yet, that counts as deciding to do nothing. If the environment itself does not change with the passage of time but the agent’s performance score does, then we say the environment is semidynamic. Taxi driving is clearly dynamic: the other cars and the taxi itself keep movingSEMIDYNAMIC while the driving algorithm dithers about what to do next. Chess, when played with a clock, is semidynamic. Crossword puzzles are static. 

### Discrete vs. continuous: 

> The discrete/continuous distinction applies to the state of the environment, to the way time is handled, and to the percepts and actions of the agent. For example, the chess environment has a ﬁnite number of distinct states (excluding the clock). Chess also has a discrete set of percepts and actions. Taxi driving is a continuous-state and continuous-time problem: the speed and location of the taxi and of the other vehicles sweep through a range of continuous values and do so smoothly over time. Taxi-driving actions are also continuous (steering angles, etc.). Input from digital cameras is discrete, strictly speaking, but is typically treated as representing continuously varying intensities and locations. 


### Known vs. unknown: Strictly speaking, this distinction refers not to the environmentKNOWN UNKNOWN itself but to the agent’s (or designer’s) state of knowledge about the “laws of physics” of the environment. In a known environment, the outcomes (or outcome probabilities if the environment isstochastic) forallactionsaregiven. Obviously, iftheenvironment isunknown, the agent will have to learn how it works in order to make good decisions. Note that the distinction between known and unknown environments is not the same as the one between fully and partially observable environments. It is quite possible for a known environment to be partially observable—for example, in solitaire card games, I know the rules but am still unable to see the cards that have not yet been turned over. Conversely, an unknown environment can be fully observable—in a new video game, the screen may show the entire game state but I still don’t know what the buttons do until I try them.

> As one might expect, the hardest case is partially observable, multiagent, stochastic, sequential, dynamic, continuous, andunknown. Taxidriving ishardinallthese senses, except thatforthemostpart thedriver’s environment isknown. Driving arented carinanewcountry with unfamiliar geography and trafﬁc laws is a lot more exciting.