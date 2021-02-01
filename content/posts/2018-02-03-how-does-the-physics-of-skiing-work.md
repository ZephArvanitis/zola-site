+++
title = "How does the physics of skiing work?"
date = 2018-02-03
[taxonomies]
tags = ["Adventuring", "How stuff works"]
+++
Recently I've been out west downhill skiing in glorious Park City, Utah. All that time around snow has prompted a lot of questions on wintry topics. It's led me to think about the physics of skiing again – here are some of the things I've been pondering.

<!-- more -->

### Why do heavier skiers go faster?

This is something that bugged me when I was a kid: why could my parents or other adults outpace me on those long nearly-flat segments of downhill skiing even if I pointed my skis straight down the hill? The answer turns out to be fairly straightforward: consider the main forces on a skier. We have gravity and the normal force, which collude to push our skier downward, versus friction and air resistance, which both slow the skier's motion.

If we ignore air resistance and assume friction behaves nicely (proportional to the normal force) then the acceleration of our ideal skier will have nothing to do with their mass. That's based on the same principles as when Galileo fictitiously dropped two different weights off a certain Pisan tower. And that point is where younger-Tasha got stuck.

Here's what I was missing: just like a feather and a book fall at different rates in real life, lighter skiers will "fall" down the slope slower than a heavier one. The reason: air resistance. In general, it's proportional to the object's front-facing area and the square of the object's velocity. Thanks to that velocity dependence, we can solve for a terminal velocity, when friction and drag exactly match the down-slope force. And the terminal velocity increases roughly with the square root of the skier's mass.

Fun fact: using the same math, if you halve your front-facing area on skis – for instance by squatting down – you can increase your terminal velocity by around 40%.

### What's a good friction model for snow and skis?

I'm not totally sure on this, but it may be related to the various theories about friction between ice skates and ice, most of which focus on a lubricating boundary layer of water between the two. [This 2008 paper](http://iopscience.iop.org/article/10.1088/0031-9120/43/4/006/pdf) describes some leading theories at the time, and provides a fairly approachable technique for measuring coefficients of friction. It's worth noting that the paper shows that the coefficient of dynamic friction got* smaller* as load increased. That effect could also contribute (though likely not by much) to heavier skiers going faster. In practice a ballpark estimate of an 80-90 kg skier with around 160 by 9-cm skis gives a lower pressure than studied in the paper. That makes it hard to take too much from this study.

Contrast the results above for ice with the ones from [this 2010 study](http://iopscience.iop.org/article/10.1088/1742-6596/258/1/012007/pdf), which showed no load dependence but lots of temperature and velocity dependence in the dynamic friction coefficient.

Bottom line: I'd like to learn more about this at some point! There's some really neat research in the area, with a wide range of techniques.
