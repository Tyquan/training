# from flask import Flask
# from flask import render_template
# from flask import request
# from bs4 import BeautifulSoup
# import pandas as pd
# from urllib.request import Request, urlopen

from selenium import webdriver
import time
import numpy as np
import pandas as pd
from collections import OrderedDict
from datetime import date

# app = Flask(__name__)

chrome_path = r'C:\Users\Jazz\Desktop\chromedriver.exe'
browser = webdriver.Chrome(chrome_path)
browser.get('http://stats.nba.com/leaders/?Season=2016-17&SeasonType=Regular%20Season&StatCategory=MIN')
time.sleep(5)

player_list = []
gp_list = []
min_list = []
pts_list = []
fgm_list = []
fga_list = []
fg_Percentage_list = []
three_m_list = []
three_a_list = []
three_percentage_list = []
ftm_list = []
fta_list = []
ft_percentage_list = []
oreb_list = []
dreb_list = []
reb_list = []
ast_list = []
stl_list = []
blk_list = []
tov_list = []
eff_list = []

# PLAYER	GP	MIN	PTS	FGM	FGA	FG%	3PM	3PA	3P%	FTM	FTA	FT%	OREB	DREB	REB	AST	STL	BLK	TOV	EFF

players = browser.find_elements_by_class_name('player')
for player in players:
	player_list.append(player.text)

# print(player_list)

numbers = browser.find_elements_by_xpath("""//*[index="::1"]""")

print(numbers)


# city = 'Brooklyn',
# city_list.append(city)

# state = 'NY',
# state_list.append(state)

# zipcode = '11225'
# zipcode_list.append(zipcode)

# f= open("./data/daily_weather.txt","a+")

# for data in temp_list:
# 	f.write(data + '\n')

# weather = OrderedDict([('temperature', temp_list), ('city', city_list), ('state', state_list), ('zipcode', zipcode_list)])

# df = pd.DataFrame.from_dict(weather)

# df.to_csv('./data/daily_weather.csv', mode='a', header=None)


# # Home Page
# @app.route("/")
# def index():
#     return render_template("index.html")

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)