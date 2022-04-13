
from gtts import gTTS


import os
def t2s (text):

    mytext = text

    language = 'en'


    myobj = gTTS(text=mytext, lang=language, slow=False)
    myobj.save("welcome.mp3")
    os.system("nvlc welcome.mp3")

t2s(input())