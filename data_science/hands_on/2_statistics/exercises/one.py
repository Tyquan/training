import numpy as np
# Getting data for amount of tweets from each user

tweets = np.random.randint(1, high=150000, size=1000)
# print(tweets)

# mean calculator
tweet_mean = np.mean(tweets)
print('Tweets Mean:', tweet_mean)

# median calculator
tweet_median = np.median(tweets)
print('Tweets Median:', tweet_median)

# mode calculator
from scipy import stats
tweet_mode = stats.mode(tweets)
print('Tweets Mode:', tweet_mode)

# Standard Deviation of tweets
tweet_std = tweets.std()
print('Tweets Standard Deviation:', tweet_std)

# Variance of tweets
tweet_variance = tweets.var()
print('Tweets Variance:', tweet_variance)


# plot the tweets
import matplotlib.pyplot as plt
plt.hist(tweets, 50)
plt.xlabel('Amount of Tweets')
plt.ylabel('Amount of users')
plt.show()