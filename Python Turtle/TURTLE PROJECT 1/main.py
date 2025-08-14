###----------[ INFO  ]---------- ###
#_CODING BY > U7P4L 1N
#_GITHUB > github.com/U7P4L-IN
#_PROJECT NO > 1
#_COPYRIGHT  > This Is Only For Education Purpose And No Copyright Infringement Intended, All The Credits & Rights Reserved to the Actual Owner.
###--------[ IMPORT LIBRARY ]---------- ###
import turtle as tur
import colorsys as cs
tur.setup(800,800)
tur.speed(0)
tur.width(2)
tur.bgcolor("black")
for j in range(25):
    for i in range(15):
        tur.color(cs.hsv_to_rgb(i/15,j/25,1))
        tur.right(90)
        tur.circle(200-j*4,90)
        tur.left(90)
        tur.circle(200-j*4,90)
        tur.right(180)
        tur.circle(50,24)
tur.hideturtle()
tur.done()
