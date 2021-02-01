+++
title = "Current directions in the San Juans"
date = 2019-09-30
[taxonomies]
tags = ["Adventuring", "Anacortes Kayak Tours", "Programming"]
+++
<!-- wp:paragraph -->

Guiding in the San Juans, current is an ever-present force. Tidal currents here are part of life, and bring an additional level of challenge and fun to paddling in the area. Ebb and flood, ebb and flood – a natural rhythm to days here. Every day before hitting the water, I check the currents and use them to make a plan for the day. For day trips, that's fairly straightforward – there's only a few places I care about the current, and I know off the top of my head which direction currents move when it's flooding (broadly speaking, when the tide is rising) and ebbing (when the tide is dropping).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

When I first started guiding multiday trips, I was faced with the challenge of keeping many more currents straight in my head. Following the lead of some experienced guides, I started marking up my chart with arrows designating the flood and ebb directions. With the help of these arrows, I can keep current directions straight in my head, so when an app says "Bellingham Channel will be ebbing at two knots this morning," I know if that will help or hinder me.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In the course of planning a personal expedition recently, I was confronted with the question of how to find these tidal directions on my own. I no longer had a trusty experienced guide to tell me about where the flood would push me, and I was venturing into waters I'd never even seen before.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Finding tide direction data

<!-- /wp:heading -->

<!-- wp:paragraph -->

After a fair bit of poking around, I stumbled upon a [NOAA webpage](https://tidesandcurrents.noaa.gov/currents12/tab2pc2.html#20) that gives current directions and speeds for most (all?) current stations in the Pacific Northwest. This was exactly the data I wanted: it told me the direction the current moves at a max flood and at a max ebb. In practice, everything is more complicated: the current direction changes slowly as it builds and then slackens. But this was at least enough to get me started.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Here's a tiny sample of the data this page provides:

<!-- /wp:paragraph -->

<!-- wp:table -->

|                    |              |               |                 |               |               |             |
| ------------------ | ------------ | ------------- | --------------- | ------------- | ------------- | ----------- |
| **Station**        | **Latitude** | **Longitude** | **Flood speed** | **Flood dir** | **Ebb speed** | **Ebb dir** |
| Bellingham Channel | 48° 33.62'   | 122° 39.82'   | 1.2             | 045           | 2.2           | 185         |

<!-- /wp:table -->

<!-- wp:paragraph -->

Essentially this gives three pieces of information for the Bellingham Channel station.

<!-- /wp:paragraph -->

<!-- wp:list -->

- First, its location, in the form of latitude and longitude.
- Second, how fast it tends to flood and ebb, in knots. This is approximate, and seems to be an average of some sort – I've certainly seen ebbs of more than 2.2 knots in Bellingham Channel!
- Finally, the data I care about: the direction of maximum ebb and flood currents. These are provided in compass bearings, with 0 being due north, 90 being east, and so forth.

<!-- /wp:list -->

<!-- wp:paragraph -->

So to read this out, Bellingham Channel is located at a specific lat/long and ebbs (on average) a little faster than it floods. When ebbing, it moves mostly south and a tiny bit west, while floods move nicely northeast.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Let's visualize!

<!-- /wp:heading -->

<!-- wp:paragraph -->

From here, it was time to boot up a Jupyter notebook and dig into the data! I wanted to construct a map of all the current stations in the area. Just to spoil the story, here's the result! I present tide directions in the San Juans.

<!-- /wp:paragraph -->

<!-- wp:image {"id":561,"align":"center","linkDestination":"media"} -->

[<img src="/img/questions-wp-content-uploads-2019-09-tide-map.png" alt="Chart shows current directions across the San Juan Islands.](/img/wp-content-uploads-2019-09-tide-map.png)" class="center" width=50%>

Current directions in the San Juans!

DISCLAIMER: Not intended for navigation or planning purposes, no warranty etc., don't do stupid stuff.  
Also, because this uses GADM, it cannot be used for commercial applications – feel free to reproduce (for free) as long as you provide a link to this page and credit Tasha Arvanitis/heytasha.com

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Boring technical details

<!-- /wp:heading -->

<!-- wp:paragraph -->

As usual in any data science endeavor, the hardest part of this was finding the data. I discussed the current station data above, but I still had to find info about the shapes of these islands! I played with a few different sources of geodata, but in the end [GADM](<https://gadm.org/maps/USA/washington/sanjuan.html >) was the best match for what I wanted. By downloading the geopackage format for the US, I was able to select only the specific counties in Washington that I cared about. (Strangely, Canada didn't come with such divisions, so I actually plot all of Canada and then crop most of it out for the above map.)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The other fun bit was setting the scale factor – [geopandas](http://geopandas.org) at first tried to make one degree of latitude the same scale as one degree of longitude. Since longitude lines get closer together as you move away from the equator, this produced an obviously distorted map. Luckily with just a small amount of trig and the handy `set_aspect` function in matplotlib, I could scale longitudes to the correct (or at least least incorrect) aspect ratio.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Finally, a little work with `quiver` allowed me to plot lots of arrows at once, producing the map above!

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

I'm happy to provide the quick-and-dirty code used to produce this graphic, if you're interested. Email me at firstname dot lastname on gmail and I'll send you the Jupyter notebook. ~~As long as you promise not to judge me for still using python 2.7, that is. :)~~ (EDIT: At long last, I upgraded to python 3, so you can request this notebook even if you're a 2.7-judger.)

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Interesting takeaways

<!-- /wp:heading -->

<!-- wp:paragraph -->

Above all, the thing I took away from this experience is that working with geospatial data is fun! As usual, finding the raw data to work with is hard, but it's neat to produce a really relevant graphic.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Other than that, I find it fascinating how rarely ebb and flood directly oppose one another, and how in some places they actually move at nearly ninety degrees to one another, rather than 180 as you might expect. For example, up north of Orcas Island, there are a few stations, including [Parker Reef](https://tides.mobilegeographics.com/locations/5787.html), where you can see the current curve around Sucia Island.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In my planning process, this graphic came in handy several times. I hope it can be useful to others too!

<!-- /wp:paragraph -->
