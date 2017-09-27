# Getting Started with Python and Machine Learning

> Machine learning is a term coined around 1960 composed of two words— machine corresponding to a computer, robot, or other device, and learning an activity, or event patterns, which humans are good at. 

> A machine learning system is fed with input data—this can be numerical, textual, visual, or audiovisual. The system usually has outputs—this can be a floating-point number, for instance, the acceleration of a self-driving car, can be an integer representing a category (also called a class), for example, a cat or tiger from image recognition. 

> The main task of machine learning is to explore and construct algorithms that can learn from historical data and make predictions on new input data. 

> loss or cost function, measures how well the models are learning

> In this setup, we create an optimization problem with the goal of learning in the most efficient and effective way.

> Depending on the nature of the learning data, machine learning tasks can be broadly classified into three categories as follows: 

    1. Unsupervised learning: when learning data contains only indicative signals without any description attached, it is up to us to find structure of the data underneath, to discover hidden information, or to determine how to describe the data. This kind of learning data is called unlabeled data. Unsupervised learning can be used to detect anomalies, such as fraud or defective equipment, or to group customers with similar online behaviors for a marketing campaign. 
    2. Supervised learning: when learning data comes with description, targets or desired outputs besides indicative signals, the learning goal becomes to find a general rule that maps inputs to outputs. This kind of learning data is called labeled data. The learned rule is then used to label new data with unknown outputs. The labels are usually provided by event logging systems and human experts. Besides, if it is feasible, they may also be produced by members of the public through crowdsourcing for instance. Supervised learning is commonly used in daily applications, such as face and speech recognition, products or movie recommendations, and sales forecasting. 
    3. We can further subdivide supervised learning into regression and classification. Regression trains on and predicts a continuous-valued response, for example predicting house prices, while classification attempts to find the appropriate class label, such as analyzing positive/negative sentiment and prediction loan defaults. 
    
    * If not all learning samples are labeled, but some are, we will have semisupervised learning. It makes use of unlabeled data (typically a large amount) for training, besides a small amount of labeled. Semi-supervised learning is applied in cases where it is expensive to acquire a fully labeled dataset while more practical to label a small subset. For example, it often requires skilled experts to label hyperspectral remote sensing images, and lots of field experiments to locate oil at a particular location, while acquiring unlabeled data is relatively easy. 
    * Reinforcement learning: learning data provides feedback so that the system adapts to dynamic conditions in order to achieve a certain goal. The system evaluates its performance based on the feedback responses and reacts accordingly. The best known instances include self-driving cars and chess master AlphaGo.


> in the context of supervised learning we have a scenario similar to studying for an exam. We have a set of practice questions and the actual exams. We should be able to answer exam questions without knowing the answers for them. This is called generalization—we learn something from our practice questions and hopefully are able to apply this knowledge to other similar questions.

> In machine learning, these practice questions are called training sets or training samples. They are where the models derive patterns from. And the actual exams are testing sets or testing samples

> They are where the models are eventually applied and how compatible they are is what it's all about.

> Sometimes between practice questions and actual exams, we have mock exams to assess how well we will do in actual ones and to aid revision. These mock exams are called validation sets or validation samples in machine learning. They help us verify how well the models will perform in a simulated setting then we fine-tune the models accordingly in order to achieve greater hits. 

> In a machine learning setting we give the computer example input values and example output values
    