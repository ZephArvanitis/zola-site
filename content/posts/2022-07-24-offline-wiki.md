+++
title = "Downloading a wiki for offline use"
[taxonomies]
tags = ["Mount Erie Fire", "hacking around"]
+++

Some background: Mount Erie Fire Department (MEFD) has an awesome
[handbook](https://handbook.mteriefire.com)
in mediawiki, which contains SOPs, information on equipment we carry, and
other very useful information. Sometimes one might want to reference the
handbook without a robust internet connection (I'm looking at you, Bowman
Bay). So my goal was to come up with a way to reference a snapshot of the
handbook offline.

<!-- more -->

The standard download format for full wikis in the mediawiki ecosystem is a
ZIM file (.zim). You can read all about what's in a zim file and how to
manipulate them on the [OpenZIM wiki](https://www.openzim.org/wiki/OpenZIM).

After a great deal of unproductive hacking around with manually scraping
the and using `pyzim` to generate zim files (I still think that ought to be
possible, but I don't recommend it as a solution), I settled on mwoffliner to generate a zim file
for the MEFD wiki. Read all about it in its [GitHub
repository](https://github.com/openzim/mwoffliner). You can
install mwoffliner globally by running `npm i -g mwoffliner` on a system with
npm set up.

Script to download is [here](https://github.com/ZephArvanitis/mefd-offliner).
If you want the zim file without the hassle of setting up mwoffliner, you
can download it at
[http://wxyzeph.com/mefd-latest.zim](http://wxyzeph.com/mefd-latest.zim) (I
didn't want to version control it, and this was easier than figuring out a
real solution.)

If you notice that version is a bit out of date, ping me and I can update
it.

Outstanding issues:

* While this works okay for desktop use and on iPhones, the Android Kiwix
    app seems to have difficulty with accessing PDFs. From what I can tell,
    it's standard practice on Android to open PDFs in an external app, but
    I'm not sure why it fails and gives a warning about possibly using
    mobile data to download the file, when it's all right there in the
    .zim!
* I'm still a bit puzzled by how small the zim file is. As of right now,
    it's just over 8 MB, while a subset of our PDF documents adds up to
    easily 7.5 MB. It does seem like most of the info is in the zim, since
    I can access things in airplane mode on my phone, including pages and
    documents I've never viewed before (and thus which I suspect are not
    somehow cached). But how is it so small?
