"""
Consider, for example, a textile manufacturer who designs an experiment where cloth specimen that contain various percentages of cotton are produced
"""

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

tensile_strength = {
	'15': [7,7,9,8,10],
	'20': [19,20,21,20,22],
	'25': [21,21,17,19,20],
	'30': [8,7,8,9,10]
}

df = pd.DataFrame.from_dict(tensile_strength, orient='columns', dtype=None)

plt.scatter(df['20'], df['15'])
plt.show()
"""
Five cloth specimens are manufactured for each of the four cotton percentages. In this case, both the model for the experiment and the type of analysis used should take into account the goal of the experiment and important input from the textile scientist.
"""

"""
Some simple graphics can shed important light on the clear distinction between the samples
"""

colors = list("rgbcmyk")