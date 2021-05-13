+++
title = "Setting up a used printrbot"
[taxonomies]
tags = ["hardware", "tinkering"]
+++

Several months ago a friend with more 3D printers than time loaned me a
Printrbot that needed some love. This weekend, I finally sat down and
started ~~working on it~~ banging my head against it repeatedly.

<!-- more -->

First up was identifying which printrbot I have. Their website isn't much
use, since they went out of business for a few years. After poking around a
bit, my conclusion is that I have either a printrbot play or a printrbot
play v2, most likely the play.

Next it was time to run the printer through its paces. I established early
on that the usb connector wasn't working, which seems to be a common
problem with this model. It's a bit of a pain, but luckily I can still use
micro SD to communicate with the printer. (It'll unfortunately make loading
new filament and calibrating the build plate a real struggle, but it's what
I've got.)

So, I:

1. Booted up Cura, loaded a model, made sure it was on the base, and
   saved the gcode.
2. For microsd card printing, you need to save the gcode file as `auto0.g`
   on the card. So I did that, then plugged the micro SD in.
3. Plug the printer in! It takes a while to heat up the build plate and
   extruder, but once those are at temp, it starts (trying) to print.

What I observed at this point is that no matter what I did, the extruder
would start "trying to print" a couple millimeters above the build surface.
Sometimes it was actually much further above the build surface, depending
on where I'd positioned the extruder to start. specifically, if I start the
extruder unit high up, it extrudes from high up. If I start it right on the
build plate (with just a sheet of paper slipping beneath it), it is much
closer, but still prints a couple millimeters above the actual build plate.

My conclusion is that the "Start G-code" (in Manage Printers -> Machine
Settings) isn't zeroing the Z axis right. Unfortunately I'm not sure
exactly how it *should* work, so that's the next step. Furthermore, because
this is a fairly basic printer that doesn't reset the extruder position at
the end of a job or when I stop a job manually, I can't guarantee that the
extruder will always start at a fixed Z value, so calibrating this is gonna
be a party!

## Learning about z-axis adjustments

Next thing to do here is figure out what the heck is going on when we
adjust the height of the extruder module. Some parts to be aware of:

* The extruder: (VERY HOT) the bit that actually melts and extrudes the
    filament.

* The probe: it's a bulky threaded piece with a  plastic-covered bit at the
    end. Evidently this is what the printer uses to detect if it's close to
    the build plate – the probe should activate when close to metal in
    general. In theory you should be able to see the probe's LED (up on the
    top) light up if you put a metal tool near it when there's power to the
    printer. This isn't true for my printer right now, but might be in the
    future?? Which may mean I need to replace the probe. Luckily I have at
    least one probe sitting in a ziploc bag that I can try.
  * Another note on the probe: the printrbot comes with a little
      plastic spacer (a mm or so thick), and the spacer should fit
      snugly beneath the probe. On my current setup, there's a bit of
      free space, which may indicate the probe is too high up.

* The g-code: the control sequences used to move the extruder, actually
    extrude/retract filament, etc.

NOTE that if the printer tries to print:

* Too high: you get wavy looking abstract art rather than the piece you
    actually tried to print
* Too low: you gouge the build plate and damage the extruder.

Talk about being stuck between a rock and a hard place!

## Solutions??

Some options that come to mind:

1. Always start the printer "zero'd" (meaning a sheet of paper can slide
   between extruder and build plate, but no more), manually set the "start
   g-code" to go down/up by the right amounts.
2. Get the probe working and learn enough g-code that I can actually use
   the probe to find where Z0 should be each run. This is obviously ideal
   for the longer term.

## Testing to work up to solution 1
Before playing with solution (1) above, I want to make sure I'm not going
to damage the build plate/extruder. So I want to check that it's somewhat
regular in the way it warms itself up and orients itself. To do that, I'm
going to start it three times on the left side of the build plate, a
paper-thickness above the build plate, and visually assess whether it
starts extruding from the same height each time. It seems like it does!

## Next steps
Next time I have a few hours to play with this, I'll be evaluating whether
configuring the printer's settings is easier than just fixing the probe,
and learning a lot more about gcode and printer internals.

## Useful resources

* [Getting Cura set up](https://images-na.ssl-images-amazon.com/images/I/91lcoqPF8eS.pdf)
* [6-min intro to Cura](https://ultimaker.com/software/ultimaker-cura)
* [Using Cura to level and make a print](https://images-na.ssl-images-amazon.com/images/I/A102jpqgleS.pdf)
