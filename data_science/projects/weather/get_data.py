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
browser.get('https://www.google.com/search?q=weather&rlz=1C1CHBF_enUS712US712&oq=weather&aqs=chrome.0.0j69i60l3j0l2.1602j0j7&sourceid=chrome&ie=UTF-8')
time.sleep(1)

temp_list = []

temp = browser.find_element_by_class_name('vk_bk')
temp_list.append(temp.text)

# city = 'Brooklyn',
# city_list.append(city)

# state = 'NY',
# state_list.append(state)

# zipcode = '11225'
# zipcode_list.append(zipcode)

f= open("./data/daily_weather.txt","a+")

for data in temp_list:
	f.write(data + '\n')

# weather = OrderedDict([('temperature', temp_list), ('city', city_list), ('state', state_list), ('zipcode', zipcode_list)])

# df = pd.DataFrame.from_dict(weather)

# df.to_csv('./data/daily_weather.csv', mode='a', header=None)


# # Home Page
# @app.route("/")
# def index():
#     return render_template("index.html")

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)