+++
title = "Generating district familiarity maps with QGIS"
[taxonomies]
tags = ["gis"]
+++

As discussed [previously](/posts/learning-the-district), I've benefitted a
lot from studying my district very explicitly. Generating maps
automatically played a huge role in that process, and I wanted to share a
high-level overview of how to do this yourself in case any other GIS nerds
are also fire nerds, or vice versa.

<!-- more -->

Sorry, this is a work in progress and I do intend to come back later and
expand on some of these steps. Pardon my dust!

Big picture steps:

1. Find data for your area, including the boundaries of your district and
   neighboring ones, coastline (if relevant), and roadways.
2. Find a roadway dataset that includes roadway names, and select only
   roads that exist at least partially in your district.
3. Set up a print layout that is the size + shape you want to cover your
   whole district.
4. Use the QGIS Atlas feature (I found [this
   documentation](https://www.qgistutorials.com/en/docs/3/automating_map_creation.html)
   helfpul, and [this
   how-to](https://gist.github.com/rbanick/cddc75f6398ddbef5cee) as well)
   to create an atlas with roads as your feature. To do this you'll have to
   set up the atlas and then set styling on your roads layer (probably
   duplicated from your base map, so that you can still see the road layout
   in the background) to be different between atlas and non-atlas features.
5. Verify the atlas looks as you expect
6. Generate your images!
