# It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested
# SENECA

from kivy.app import App
from kivy.uix.widget import Widget
from kivy.uix.label import Label

quote = "It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested"

class MementoMori(Widget):
    my_label = Label()
    my_label.text = quote
    my_label.color = '#FFFFFF'
    
class MementoApp(App):
    def build(self):
        return MementoMori()

MementoApp().run()