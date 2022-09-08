+++
title = "Hydrant capacity calculations"
[taxonomies]
tags = ["fire stuff", "physics"]
[extra]
latex = true
footnote = true
+++

Yet another post on pump operations, sorry y'all. This one, like a
[previous post](/posts/head-pressure), is me coming to terms with a
statement about water flow in a textbook. This time around, I'm looking at
how to estimate additional hydrant capacity if you're already flowing some
amount of water from your hydrant.

Big picture, I'll do some calculations based on [Bernoulli's
equation](/posts/bernoulli-and-pressure) to show how much additional water
flow a hydrant can provide, then I'll briefly compare that to two of the
three methods discussed in Sykes and Sturtevant's 1999 *Fire Apparatus
Operator: Pumper* textbook.

<!-- more -->

For the below, I'll be assuming we know the static pressure of the hydrant
(note the intake pressure before you start flowing water), along with the
current flow rate and current *residual hydrant pressure* (look at the
intake pressure now).[^1]

### Getting started

We'll start with Bernoulli's equation, which says the total energy at a
point along the flowstream will be constant, both over time and along the
flow, and writes out the energy in terms of three "pressures": static
pressure (what you can measure on a gauge), hydrostatic pressure (think
gravitational potential energy), and hydrodynamic pressure (think kinetic
energy):

\begin{align}
p_{tot} &= p_{s} + p_{hs} + p_{dyn}\\\\
        &= p_s + \rho g h + \frac12 \rho v^2
\end{align}

In the above, $p_s$ is the static pressure, $\rho$ is the water's density,
$g$ is a gravitational constant in Earth's gravitational field, $h$ is the
water's height over some arbitrarily defined starting point, and $v$ is the
water's velocity. For this calculation, we'll imagine that we don't have to
worry about elevation changes, so we can drop the $\rho g h$ term for the
rest of our analysis.

Now we're going to define three points in time that we're interested in: 

* Time zero: Before we start flowing water: velocity is zero, and $p_s$ is
  whatever we see on our intake pressure gauge, which we'll call $p_0$.
* Time one: Once we've started flowing water and can see our current flow
    rate ($Q_1$) and residual pressure ($p_1$). At this point is where
    we're wondering how much additional flow we can safely get from the
    hydrant.
* Time two: a hypothetical future time when we're flowing even more water.
    Flow rate $Q_2$, residual pressure $p_2$.

The beauty of energy conservation is that for all three of these times, the
total energy will have to be the same.

### Flow rate and velocity
For any further calculations, we'll need to be able to convert between flow
rate (e.g. in gallons per minute) and water velocity (e.g. in feet per
second). The former is much easier to estimate in the field, while the
latter is what we actually need to calculate anything with Bernoulli's
equation.

If we take the cross-section of whatever supply line(s) we're
using to be a constant, and call it $A$, then the total flow rate will just
be the product of the water's velocity and that cross-sectional area:

\begin{align}
Q &= A * v\\\\
v &= \frac{Q}{A}
\end{align}

Phew, that wasn't so scary, was it?

### Pressure drop as a function of flow rate
Alrighty, now let's take a look at how our intake's static pressure will
change with a given flow rate. To do this we'll compare time 0 (no flow)
and time 1 (arbitrary flow) using Bernoulli's equation:

\begin{align}
p_0 + \frac12\rho {v_0}^2 &= p_1 + \frac12\rho {v_1}^2\\\\
p_0 &= p_1 + \frac12\rho\left(\frac{Q_1}{A}\right)^2
\end{align}

Rearranging a bit, we can see the pressure drop is:

\begin{align}
(p_0 - p_1) &= \frac12\rho\left(\frac{Q_1}{A}\right)^2
\end{align}

Or, if we want to flip this on its head, flow rate as a function of
pressure drop:

\begin{align}
\left(\frac{Q_1}{A}\right)^2 &= \frac{2(p_0 - p_1)}{\rho}\\\\
\frac{Q_1}{A} &= \sqrt{\frac{2(p_0-p_1)}{\rho}}\\\\
Q_1 &= A\sqrt{\frac{2(p_0-p_1)}{\rho}}
\end{align}

Now, this isn't particularly useful at this moment – after all, we already
know the pressures and flow rates at times zero and one! Where it starts to
get useful, though, is when we start comparing the flow rates at different
times. (See also [Physics factor problems](/posts/physics-factor-problems/)
for a discussion of factor problems in general.)

### Let's compare multiple flow rates
Okay, if we're already successfully flowing one line's worth of water from
the hydrant, what we really care about is how many more lines we can hook
up without endangering our water supply. That is, we care about max amount
of water we can flow compared to however much we're flowing now. In math
terms, we care about $Q_{max}/Q_1$. To be a bit more general, I'll say that
we care about the ratio of two flow rates $Q_2/Q_1$. Plugging in our
equation above, we can cancel a bunch of stuff:

\begin{align}
\frac{Q_2}{Q_1} &= \frac{A\sqrt{\frac{2(p_0-p_2)}{\rho}}}{A\sqrt{\frac{2(p_0-p_1)}{\rho}}}\\\\
    &= \sqrt{\frac{p_0-p_2}{p_0-p_1}}\\\\
\left(\frac{Q_2}{Q_1}\right)^2 &= \frac{p_0-p_2}{p_0-p_1}
\end{align}

Now we're in business! This equation relates only to pressures (which we
can read from gauges) and flow rates (which we can estimate based on what
lines are connected and what stage of fire operations we're in).

### Looking at estimation methods
With that physics-y stuff out of the way, let's take a look at the
estimation methods provided by Sykes and Sturtevant: the percentage method
and the squaring-the-lines method.

#### Percentage method
In their words:

{% quote(author="Sykes + Sturtevant, 1999") %}
1. Determine the percentage drop using the formula $(\text{static pressure} - \text{residual pressure})\times \left(\frac{100}{\text{static pressure}}\right)$.<br>
2. Determine the amount of additional hydrant capability using the
   percentage drop and the following table:

| Percentage drop $\ \ \ $ || Extra water available |
| --------------- || --------------------- |
| 0-10% | | 3 times original flow |
| 11-15% | | 2 times |
| 16-25%  || 1 time |
| Over 25% | | less than original flow |
{% end %}

Let's translate this approach into the terms we were using in our
calculations above. This is all about the maximum possible flow rate
$Q_{max}$, which will correspond to a minimum acceptable residual hydrant
pressure $p_{min}$.[^2] With that in mind, we get:

\begin{align}
\left(\frac{Q_1}{Q_{max}}\right)^2 &= \frac{p_0 - p_1}{p_0 - p_{min}}
\end{align}

If we make the assumption that $p_{min}$ is much smaller than the initial
static pressure of the hydrant,[^3] then the right side of this equation is
pretty much exactly the percentage drop their method refers to, just
without the factor of 100. Note: since $p_{min}$ isn't exactly zero, our
percentage drop will slightly underestimate the true ratio of pressure
drops.

So, if we want to double the water flow rate ($Q_1/Q_{max}=\frac{1}{2}$),
we'll need our percentage drop to be approximately
$\left(\frac12\right)^2=0.25=25\\%$ With a bit of wiggle room for $p_{min}$
not actually being zero, 16-25% seems reasonable here.

What if we want to triple our flow rate (that is, have 2 times the original
flow available as extra water)? Then we get $Q_1/Q_{max}=\frac13$, so the
percentage drop should be $1/9=0.11=11\\%$. Again, with a bit of fudgign
for $p_{min}$, 11-15% seems reasonable.

Finally, if we want to get three times the original flow, we have
$Q_1/Q_{max}=\frac14$, so the percentage drop is in the range of 6%. With
fudge factor...sure, 0-10% seems legit.

#### Squaring-the-lines method
For this one I'm going to paraphrase, because I think the original textbook
makes things unnecessarily complicated and omits some important notes.
Basically:

{% quote(author="Sykes + Sturtevant, 1999") %}
The new pressure drop is the ratio of new lines to those already flowing
water, squared, multiplied by the original pressure drop.
{% end %}

If we switch out line count for flow rate (assuming all these lines are the
same diameter/general flow rate), then we can translate that into math:

$$
(p_0-p_2) = \left(\frac{Q_2}{Q_1}\right)^2(p_0-p_1)
$$

That's exactly what we found up above! No fudging or room for error
necessary.

As an example of how to use this, let's say that you're operating one of
our particularly energetic hydrants, which has a static pressure of 100
psi. You're already flowing one inch and three quarter line off it, at 125
gallons per minute, and you see a pressure drop of 15 psi. If you hook up
another inch and three quarter line at the same gallonage, what will be the
resulting residual hydrant pressure?

\begin{align}
p_0 - p_2 &= \left(\frac{Q_2}{Q_1}\right)^2(p_0-p_1)\\\\
  &= \left(\frac{250\ \text{gpm}}{125\ \text{gpm}}\right)^2\left(
  (100\ \text{psi}) - (85\ \text{psi})\right)\\\\
  &= \left(2\right)^2\left(15\ \text{psi}\right)\\\\
  &= 60\ \text{psi}
\end{align}

So the resulting residual pressure in this case would be 40 psi, so still
safe for the water system. Hooray!

### Wrapping up
At least for me, this was fairly helpful in understanding where these ruels
come from – it's all about pressure and flow rates, and Bernoulli's
equation continues to help out with converting between the two. Plus it's
nice to confirm that the standard wisdom really does work with the
underlying physics.


### Footnotes

[^1]: In practice, the trickiest of these on our engines is estimating flow
rates, as long as you remember to check the hydrant's static pressure when
you first get it hooked up.

[^2]: The textbook suggests 20 psi here. Our department SOPs say 30.

[^3]: This assumption probably holds up better for big city departments.
  Some of our less enthusiastic hydrants have static pressures of around 40
  psi, according to the city's dataset (discussed
  [here](/posts/spatial-join)), which is *not* noticeably much larger than
  the 30 psi minimum residual pressure we operate with...
