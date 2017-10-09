from tkinter import *

root = Tk()
# simple text on the screen
theLabel = Label(root, text="This is easy")
# display the text on screen
theLabel.pack()

#keep the screen open until Someone manually closes it
root.mainloop()