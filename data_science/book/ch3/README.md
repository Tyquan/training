# Ch3 Visualizing Data

> A fundamental part of the data scientist’s toolkit is data visualization

> There are two primary uses for data visualization: 
    • To explore data 
    • To communicate data 

## matplotlib

>  we will be using the matplotlib.pyplot module. In its simplest use, pyplot maintains an internal state in which you build up a visualization step by step. Once you’re done, you can save it (with savefig()) or display it (with show()). 

> For example, making simple plots is pretty simple (simple.py):
    from matplotlib import pyplot as plt
    years = [1950, 1960, 1970, 1980, 1990, 2000, 2010] 
    gdp = [300.2, 543.3, 1075.9, 2862.5, 5979.6, 10289.7, 14958.3]
    # create a line chart, years on x-axis, gdp on y-axis 
    plt.plot(years, gdp, color='green', marker='o', linestyle='solid')
    # add a title 
    plt.title("Nominal GDP")
    # add a label to the y-axis 
    plt.ylabel("Billions of $") 
    plt.show()

### Bar Charts 

> A bar chart is a good choice when you want to show how some quantity varies among some discrete set of items
    movies = ["Annie Hall", "Ben-Hur", "Casablanca", "Gandhi", "West Side Story"] 
    num_oscars = [5, 11, 3, 8, 10]
    # bars are by default width 0.8, so we'll add 0.1 to the left coordinates # so that each bar is centered 
    xs = [i + 0.1 for i, _ in enumerate(movies)]
    # plot bars with left x-coordinates [xs], heights [num_oscars] 
    plt.bar(xs, num_oscars)
    plt.ylabel("# of Academy Awards") 
    plt.title("My Favorite Movies")
    # label x-axis with movie names at bar centers 
    plt.xticks([i + 0.5 for i, _ in enumerate(movies)], movies)
    plt.show()

### Bar Histogram
> A bar chart can also be a good choice for plotting histograms of bucketed numeric values, in order to visually explore how the values are distributed

    from collections import Counter
    grades = [83,95,91,87,70,0,85,82,100,67,73,77,0]
    decile = lambda grade: grade // 10 * 10
    histogram = Counter(decile(grade) for grade in grades)
    # shift each bar to the left by 4
    # give each bar its correct height
    # give each bar a width of 8
    plt.bar([x - 4 for x in histogram.keys()], histogram.values(), 8)
    # x-axis from -5 to 105
    # y-axis from 0 to 5
    plt.axis([-5, 105, 0, 5])
    # x-axis labels at 0, 10, ..., 100
    plt.xticks([10 * i for in range(11)])
    plt.xlabel("Decile")
    plt.ylabel("# of Students")
    plt.title("Distribution of Exam 1 Grades")
    plt.show()

### Line Charts
>we can make line charts using plt.plot(). These are a good choice for showing trends
    from matplotlib import pyplot as plt
    from collections import Counter
    variance = [1, 2, 4, 8, 16, 32, 64, 128, 256]
    bias_squared = [256, 128, 64, 32, 16, 8, 4, 2, 1]
    total_error = [x+y for x, y in zip(variance, bias_squared)]
    xs = [i for i, _ in enumerate(variance)]
    # we can make multiple calls to plt.plot 
    # to show multiple series on the same chart
    plt.plot(xs, variance, 'g-', label='variance') # green solid line
    plt.plot(xs, bias_squared, 'r-', label='bias^2') #red dot dashed line
    plt.plot(xs, total_error, 'b:', label='total error') # blue dotted line
    # because we've assigned labels to each series 
    # we can get a legend for free 
    # loc=9 means "top center"
    plt.legend(loc=9)
    plt.xlabel("model complexity")
    plt.title("The Bias-Variance Tradeoff")
    plt.show()

### Scatterplots
> A scatterplot is the right choice for visualizing the relationship between two paired sets of data.

    from matplotlib import pyplot as plt
    from collections import Counter
    friends = [70,  65,  72,  63,  71,  64,  60,  64,  67]
    minutes = [175, 170, 205, 120, 220, 130, 105, 145, 190]
    labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    plt.scatter(friends, minutes)
    #label each point
    for label, friend_count, minute_count in zip(labels, friends, minutes):
        plt.annotate(label, xy=(friend_count, minute_count), xytext=(5,-5), textcoords='offset points')

    plt.title("Daily Minutes vs. Number of Friends")
    plt.xlabel("# of friends")
    plt.ylabel("daily minutes spent on the site")
    plt.show()
    