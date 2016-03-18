# Flone frame

This is the official repository of the airframe of [flone](http://flone.cc) quadcopter. 

Flone is an Free Libre Open Source drone ecosystem composed by physical hardware and software.

Some charateristics of this frame are:

* **smart** - There is space for the camera to see, and you can use the rest of the sensors of the smartphone, like bluetooth, wifi, gps or 4G 

* **compact** - Designed to be as small as possible but fully capable of carry an smartphone or sport camera.

* **cheap** - Hard to found a drone frame cheaper than a piece of plywood of 30x30cm.

## Materials 
There are different materials to cut the frame, we recommend Plywood, but you can use other materials:

* Plywood: Natural & bio-degradable, very light, cheap and easy to obtain
Recommended thickness: 5mm.
* MDF: Natural & bio-degradable, cheap and easy to obtain. Litle bit more heavy.
Recommended thickness: 4mm.
* Acrilic: Solid, light but less resistant to impacts.
Recommended thickness: 3mm.
* Acetal or Delrin: Much more resistance to impacts, but expensive and hard to obtain.
Recommended thickness: 2mm.
   
## Getting Started
* Download the file of the thickness of your material.

* **Find out the thickness** - in order to make the frame as strong as possible is highly recomendable to cut a frame that fits the thickness of the materials. Ask your distributor or mesure by yourself with a caliber.

* **Download the right file**  - select the file more close to the thickness of the material or create one if you want the exact size.  

```python
    from pyechonest import config
    config.ECHO_NEST_API_KEY="YOUR API KEY"
```

* Check out the [docs](http://echonest.github.com/pyechonest/) and examples below.


## Hack the frame
*We encourage to hack the structure to fit your needs and share with others!*
Download the file and edit with Inkscape:

```python
from pyechonest import artist
bk = artist.Artist('bikini kill')
print "Artists similar to: %s:" % (bk.name,)
for similar_artist in bk.similar: print "\t%s" % (similar_artist.name,)
```

