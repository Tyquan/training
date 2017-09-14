## Understanding The Task Environment

> As we discussed the rationality of the vacum-cleaner agent we had to specify its performance measure, its environment and the agents acuators/sensors.

> We can group all of these under the category Task Environment. Another term for the Task environment is the acronymn PEAS which beaks down to Performance, Environment, Actuators, Sensors

> When designing an agent, our first step must be to specify the task environment as fully as possible.

> Lets take a look at a few different examples of implmenting a task environment on various agents/

> Our first exameple is The Taxi Driver

> We can break the taxi drivers task environment down into each of the words associated wih the PEAS Acronymn

	Agent_Type = Taxi Driver
	Performance_Measure = [Safe, fast, legal, comfortable trip, maximize profits]
	Environment = [Roads, other traffic, pedestrians, customers]
	Actuators = [Steering, Accelerator, Brakes, Signal, Horn, Display]
	Sensors = [Cameras, sonar, speedometer, GPS, odometer, accelerometer, engine sensors, keyboard]

## Properties of Tasks Environments

> The range of task environments that might come up in Artificial Intelligence is huge

> Lets discuss a Few Examples:

	# Example 1
	Agent_Type = Medical diagnosis system
	Performance_Measure = [Healthy patient, reduced costs]
	Environment = [Patient, hospital, staff]
	Actuators: [Display of questions, tests, diagnoses, treatments, referrals]
	Sensors: [Keyboard entry of symptoms, findings, patients answers]

	#Example 2
	Agent_Type = Satellite image analysis system
	Performance Measure = Correct image categorization
	Environment = Downlink from orbiting satellite
	Actuators = Display of scene categorization
	Sensors = Color pixel arrays

	#Example 3
	Agent Type: Part-picking robot
	Performance Measure: Percentage of parts in correct bins
	Environment: Conveyor belt with parts; bins
	Actuators: Jointed arm and hand
	Sensors: Camera, joint angle sensors

	#Example 4
	Agent Type: Reﬁnery controller
	Performance Measure: Purity, yield, safety
	Environment: Reﬁnery, operators
	Actuators: Valves, pumps, heaters, displays
	Sensors: Temperature, pressure, chemical Sensors

	#Example 5
	Agent Type: Interactive English tutor
	Performance Measure: Student’s score on test
	Environment: Set of students, testing agency
	Actuators: Display of exercises, suggestions, corrections
	Sensors: Keyboard Entry



## Environment Types