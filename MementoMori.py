# It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested
# SENECA

from kivy.app import App
from kivy.uix.widget import Widget

class PongGame(Widget):
    pass

class TestApp(App):
    def build(self):
        return PongGame()

TestApp().run()