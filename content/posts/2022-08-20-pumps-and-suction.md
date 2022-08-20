+++
title = "Pumps and suction"
[taxonomies]
tags = ["Mount Erie Fire", "fire stuff", "physics"]
[extra]
latex = true
+++

I've been slowly learning how to operate the pumps on Mt. Erie's apparatus.
A lot of that is hands-on stuff – flip this switch and then pull this lever
to accomplish goal xyz. Those details are really important, but for my
specific brain, I benefit from understanding the underlying theory too, so
I've been reading up a bit and trying to build intuition around some of the
fundamentals.

In doing so, I learned something that blew my mind: there is a physical
limit to how high up you can possibly suck water, no matter how good your
pump is. This is my attempt to explain that in a way that actually builds
intuition rather than just memorizing "oh, we can only suction 10 vertical
meters in the best case".

<!-- more -->


What is the maximum suction head from a static source of water?
---
I’m gonna be honest – it was counterintuitive to me that there is a maximum
height we can suction water from a static source. I just figured you could
always put a better pump in and get the water a little further.

The easiest way I’ve been able to conceptualize this: water is moved by
pressure differentials. If there’s higher pressure in one place, lower in
another, and a route for the water to travel, it will travel toward the
lower pressure. In the case of suction from a static water source, the
higher pressure is provided by just the atmosphere pressing down on the
water source, which is a fixed pressure that varies with elevation and
large-scale weather systems. The low pressure can’t get any lower than 0
psi (well, until you get into weird plasma or particle physics, but I think
we can safely ignore those cases here). So there’s inherently a limit to
how much oomph the water will have as it moves from high pressure (pushed
on by the atmosphere) to lower pressure (sucked up the hard suction hose).
Let’s figure out what that limit is.

_Note: there is no such theoretical limit to how high you can pump water
forward – effectively that's done by increasing the high-pressure side of
the water movement equation. So if you give your pump more power, it'll be
able to push water further up a hill. This limitation is just on suctioning
water uphill._

We can find the max height we can suction water upward by balancing forces,
specifically on the little parcel of water right at the bottom of our rigid
suction hose. To that little parcel of water, only two forces matter: the
atmosphere pressing down on it, and the stack of water pressing down on it.
If the stack of water is really short, it’s lower pressure in that
direction and the parcel will get sucked up. When that parcel at the bottom
of the suction hose has the same amount of force from both atmosphere and
water stack, it’s at equilibrium and the column has reached the maximum
heigh it can possibly be suctioned.

So that tells us that we can solve for max suction height using this equation:

$$ F_{atm} = F_{water stack} $$

In this case, I’m going to use a dummy cross section of a square
centimeter, because I think it helps to visualize a literal column of water
that’s a square centimeter across. I’m also going to deal in mass rather
than force, because again I think it makes things clearer. So I’m going to
be comparing “weight of atmosphere over one square centimeter” to “weight
of just water over one square centimeter” (note we don’t have to worry
about air pressing down on our water column, because our 100% ideal dream
pump is reducing the pressure in the rigid suction to zero). But the
calculation applies independent of the area you choose and generalizes very
easily to force instead of mass. Anyway, with that modification:

$$ m_{atm }= m_{water stack} $$

We’ve already discussed that the atmosphere exerts a force of 14.7 psi
downward (at sea level, anyway). Using my favorite trick of repeatedly multiplying
things by one in order to convert between units and then getting the mass
by multiplying by our cross-sectional area of one square centimeter, and we
get:

\begin{align}
14.7\ \text{psi} &= \frac{14.7\ \text{lb}}{\text{in} \cdot \text{in}} * \frac{1\ \text{in}}{2.54\ \text{cm}} *\frac{1\ \text{in}}{2.54\ \text{cm}}\\\\
         & = \frac{2.28\ \text{lb}}{\text{cm}\cdot\text{cm}} * \frac{1\
         \text{kg}}{2.2\ \text{lb}}\\\\
         & = 1.03 \frac{\text{kg}}{\text{cm}^2}
\\\\
m_{atm} &= 1.03\ \text{kg}
\end{align}

To match that mass in our column of water, we need 1.03 kg of water stacked
on top of one $\text{cm}^2$. If we approximate the weight of a liter of water to be a
kilogram (by assuming water is right around its highest density at 4 C), we
can calculate how many cubic centimeters of water are in the column:

\begin{align}
1.03\ \text{kg water} &= 1.03\ \text{kg water} * \frac{1.0\ \text{L water}}{1.0\ \text{kg water}}\\\\
                      &= 1.03\ \text{L water} * \frac{1000\ \text{mL}}{1\
                      \text{L}} * \frac{1\ \text{cm}^3}{1\ \text{mL}}\\\\
                      &= 1030\ \text{cm}^3\ \text{water}
\end{align}

Spreading this over $1\ \text{cm}^2$:

\begin{align}
H_{water} &= \frac{V_{water}}{A}\\\\
          &= \frac{1030\ \text{cm}^3\ \text{water}}{1\ \text{cm}^2}\\\\
          &= 1030\ \text{cm water} * \frac{1\ \text{m}}{100\ \text{cm}}\\\\
          &= 10.3\ \text{m water}
\end{align}


So with a perfectly ideal pump able to create a total vacuum in your
suction hose, the very highest you can suction water is about 10.3 meters,
or around 33-34 feet.

Caveats: no pump is that perfect – miscellaneous sources on the internet
suggest that a pump more realistically can produce a pressure of ~4 psi on
the suction side. Also, you’re gonna have to worry about friction loss in
the suction hose and with couplings and strainers and such. The moral of
the story: if you’re getting water from a static source, you need to be
very close to the elevation of the water’s surface, or you’re gonna have a
bad time.
