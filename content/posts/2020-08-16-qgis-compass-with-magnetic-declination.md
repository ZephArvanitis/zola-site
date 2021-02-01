+++
title = "QGIS: Compass with magnetic declination"
date = 2020-08-16
[taxonomies]
tags = ["GIS"]
+++
<!-- wp:paragraph -->

Learn to add magnetic declination to all your QGIS maps and charts! [Part 1 is here](https://heytasha.com/questions/2020/08/install-qgis-plugin/).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If you're an experienced paddler, you'll recognize the NOAA compass with declination anywhere:

<!-- /wp:paragraph -->

<!-- wp:image {"id":723,"align":"center","width":300,"height":313} -->

<img src="/img/questions-wp-content-uploads-2020-08-compass.jpg" class="center" width=50%>

(From NOAA chart 18650, RNC format available on [NOAA site](https://www.charts.noaa.gov/InteractiveCatalog/nrnc.shtml))

<!-- /wp:image -->

<!-- wp:paragraph -->

These are sprinkled all over every chart, because you want one always to hand when you need it.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

So when it comes to making your own maps/charts for navigation, if you need a map of a specific area but it doesn't come with a compass built in...what are you to do?

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Well, if you're in QGIS, look no further! This is a step-by-step walkthrough of adding a NOAA-style compass to any map you like.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This tutorial expects that you've already Installed the Magnetic Declination plugin. If you're not sure how to do that, check out my post on the topic [here](https://heytasha.com/questions/2020/08/install-qgis-plugin/).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

We're going to follow these steps to make it happen:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->

1. Open the magnetic declination plugin window
2. Get to the calculate tab!
3. Select the location you want the center of the compass
4. Calculate magnetic declination
5. Draw the compass on the map
6. Save the compass layer if you want to keep it

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Open the plugin window

<!-- /wp:heading -->

<!-- wp:paragraph -->

To use the magnetic declination plugin, you have two options. If the green and yellow star is already in your toolbar, you can just click it. Otherwise, you can go to Plugins -> Magnetic Declination -> Magnetic Declination.

<!-- /wp:paragraph -->

<!-- wp:gallery {"ids":[741,725],"columns":1} -->

- <img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-3.35.17-PM.png" class="center" width=50%>

  Option 1: Yellow and green star in toolbar

- <img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-1.07.23-PM.png" class="center" width=50%>

  Option 2: Plugins -> Magnetic Declination -> Magnetic Declination

<!-- /wp:gallery -->

<!-- wp:heading {"level":4} -->

#### Go to the calculate tab

<!-- /wp:heading -->

<!-- wp:paragraph -->

As of August 2020, there are four tabs in the Magnetic Declination window: Calculate, Options, Help, and About. You want the calculate tab. (You can also change the compass color in Options.)

<!-- /wp:paragraph -->

<!-- wp:image {"id":727,"width":371,"height":304} -->

<img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-1.16.32-PM.png" class="center" width=50%>

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Select where you want the center of the compass

<!-- /wp:heading -->

<!-- wp:paragraph -->

Click the "LON/LAT from map" button.

<!-- /wp:paragraph -->

<!-- wp:image {"id":728} -->

<img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-1.20.34-PM.png" class="center" width=50%>

<!-- /wp:image -->

<!-- wp:paragraph -->

It'll pop back to the original QGIS window, where you should click exactly where you want the center of the compass. Ideally, pick a nice open area without too much distraction.

<!-- /wp:paragraph -->

<!-- wp:image {"id":742} -->

<img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-2.33.53-PM-1.png" class="center" width=50%>

<!-- /wp:image -->

<!-- wp:paragraph -->

Once you click, it brings you back to the plugin window.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Calculate magnetic declination

<!-- /wp:heading -->

<!-- wp:paragraph -->

Press the calculate button! This is an important step! This is where the plugin does the math to figure out what the magnetic variation is at that location.

<!-- /wp:paragraph -->

<!-- wp:image {"id":730,"width":370,"height":300} -->

<img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-2.55.55-PM.png" class="center" width=50%>

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Draw the compass

<!-- /wp:heading -->

<!-- wp:paragraph -->

Click on "Draw compass rose."

<!-- /wp:paragraph -->

<!-- wp:image {"id":731,"width":401,"height":324} -->

<img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-2.57.24-PM.png" class="center" width=50%>

<!-- /wp:image -->

<!-- wp:paragraph -->

Then move your mouse until the size seems about right. Don't worry about the angle – the cross just shows the center and size of the resulting compass.

<!-- /wp:paragraph -->

<!-- wp:image {"id":732} -->

<img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-2.58.30-PM.png" class="center" width=50%>

<!-- /wp:image -->

<!-- wp:paragraph -->

Aaaand, voila! You have a compass rose!

<!-- /wp:paragraph -->

<!-- wp:image {"id":733} -->

<img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-2.59.28-PM.png" class="center" width=50%>

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Save the compass

<!-- /wp:heading -->

<!-- wp:paragraph -->

You'll note that the COMPASS_ROSE layer above has a little icon next to it on the right side – that means it's a temporary scratch layer, so if you want the compass to stick around, you'll have to save it. Right click on the layer and click "Make Permanent."

<!-- /wp:paragraph -->

<!-- wp:image {"id":734,"width":372,"height":504} -->

<img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-3.03.01-PM.png" class="center" width=50%>

<!-- /wp:image -->

<!-- wp:paragraph -->

And then choose a format – it doesn't matter too much, so I usually use whatever it has as a default. ALWAYS use the '...' button to choose the file and its name, or it will error (bug, but workable). And then hit OK, and you're done! Congrats.

<!-- /wp:paragraph -->

<!-- wp:image {"id":735,"width":497,"height":551} -->

<img src="/img/questions-wp-content-uploads-2020-08-Screen-Shot-2020-08-16-at-3.03.50-PM.png" class="center" width=50%>

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Lather, rinse, repeat

<!-- /wp:heading -->

<!-- wp:paragraph -->

If you're anything like me, you do this multiple times a day when you're making maps. Enjoy!

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_NOTE: If you appreciate this plugin (I know I do!) and have the means to do so, please consider donating a few bucks to the creator, which you can do _[_here_](https://www.paypal.com/pools/c/8cpB6vAiKm)_. Open source software takes time, and if a few donations means the plugin will be maintained, that's a win for everyone._

<!-- /wp:paragraph -->
