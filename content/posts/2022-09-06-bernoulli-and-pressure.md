+++
title = "Ways of viewing pressure"
[taxonomies]
tags = ["fire stuff", "physics"]
[extra]
latex = true
footnote = true
+++

Well, guess who's still making sense of water flow through hose and pumps
these days? (Yep, you got it. It's me.)

Today I finally figured out a point of confusion I'd had for weeks around
the relationship between pressure and volume of flow out of a nozzle. Turns
out the answer has to do with a new-to-me way of viewing pressure that
offers some additional tools for reasoning about how water flow works.

<!-- more -->

Like many of my posts about the physics of firefighting, the target
audience for this post might be just me. If you're not into firefighting or
not into physics, you're welcome to read on, but at least you've now been
warned.

### Energy per volume

In short, previously I viewed pressure as force per area. You can see this
deep-seated assumption in my [previous](/posts/head-pressure)
[posts](/posts/pumps-and-suction) about pressure from the atmosphere and
from a stack of water. Turns out that it's sometimes more useful to view
pressure as _energy per volume_. The units match up. But it makes some
things easier to reason about and had the pleasant side effect of blowing
my mind.

First off, why does this work? I'm going to get a little handwavy here, but
if you think of pressure in those old terms of force over an area, imagine
some water in a cylinder with a piston on top. Piston presses down with
some amount of force (let's say that we're at equilibrium, for simplicity),
so Newton's second law says that the water presses back up on the piston
with the same amount of force. You can figure out the pressure by dividing
the force by the cross section of the piston.

Now envision that we increase the pressure in the water somehow – maybe we
attach a pump and start it up or something. The result, intuitively, is
that the water can now press the piston upward. In other words, it can
apply a force over a distance. Now, if you're a physics nerd like me, you
might recognize that as the very definition of _work_. And work, according
to the work-energy principle, is the amount of energy a system can do on
the world around it. [^5] So our water can exert force over a distance on that
piston (aka "do work on the piston"), and the amount of work it can do is
related to the pressure. Now for the super handwavy part: where does volume
come into it? In general, if you envision a tiny amount of water with a
certain pressure, let's say a cubic centimeter, that water at that pressure
will be able to push the piston a lot less far than a cubic meter at the
same pressure. In other words, the amount of work that the water can do
depends on its volume. [^1]

(If you want a more in-depth discussion of how you can view pressure as a
volume-specific energy, check out [this invaluable tec-science
article](https://www.tec-science.com/mechanics/gases-and-liquids/venturi-effect/)).

Anyway, hopefully that clarifies things more than it muddies the
metaphorical waters. In short, pressure in an incompressible fluid like
water is energy per volume.

### Who cares? Bernoulli's equation
Okay, but why does this matter? Can it help with understanding the
relationship between pressure and volume of flow out of, say, a
firefighting nozzle? The answer is a resounding _yes_, because it allows us
to make statements about pressure based on the conservation of energy. 

Before we get too much further, let's define three different types of
pressure:

* Static pressure: this is probably the first thing you think about when I
    say "pressure:" the result of pushing on water, which results in the
    water pushing back on the container around it. We'll call it $p$,
    $p_{stat}$, or $p_{static}$ here. This is also the pressure you'll
    measure if you stick a gauge at a specific spot in a system.
* Hydrostatic pressure: If we're talking energy, one major thing we often
    think about is gravitational potential energy, which in general is
    $mgh$ for a mass $m$ that is elevated a height $h$ in the Earth's
    gravity. If we're talking volume (since we now view pressure as
    volume-specific energy), then we can reframe that using the liquid's
    density $\rho$: $p_{hydrostatic}=\frac{mgh}{V}=\frac{\rho Vgh}{V} =
    \rho gh$. Here I'll call this $p_{g}$ (for gravity).
* Dynamic pressure: just like hydrostatic pressure is the pressure
    equivalent of gravitational potential energy, dynamic pressure is the
    pressure equivalent of kinetic energy. It looks like this: $p_{dynamic}
    = \frac{\frac12 m v^2}{V}$, where $v$ is the water's velocity. Once
    again converting using the liquid's density and abbreviating
    $p_{dynamic}$ to $p_d$: $p_{d} = \frac{\frac12 \rho V v^2}{V} =
    \frac{1}{2}\rho v^2$.

Combining all of those, we can get the total energy in a chunk of water:

\begin{align}
E &= p + p_g + p_d\\\\
  &= p + \rho g h + \frac{1}{2}\rho v^2
\end{align}

Now for the magic: _Energy is conserved_. So that sum will be a constant
across the distance of travel. If you know the energy at one point along a
pipe/system, you know the total energy at another point too. (Let's leave
branching systems aside for the moment.) The easiest way to see this is via
an example. So let's take a look!

(Note: for this example I'll be ignoring friction loss in hoses, just for
simplicity, and will be assuming all operations are happening with no real
elevation changes. Similarly, let's say our pump is operating at a constant
speed, rather than using a pressure governor.)

### Let's turn off a nozzle
{% quote(author="") %}
We've been fighting fire, and your nozzle operator has been
flowing 125 gallons per minutes through your super snazzy combination
nozzle at the end of an inch and three quarter hose line. It likes 100 psi
at the nozzle, and as an excellent pump operator you're providing exactly
the right pressure.<br><br>

Now your nozzle person turns off the nozzle. What happens?
{% end %}

#### Intuition

Before we jump into the mathy details, let's think about what we expect to
happen. Broadly speaking, the pump is providing the same amount of
"oomph" before and after the nozzle is turned off. But beforehand, some of
that oomph goes to moving all that water. After, it's just pushing the
water against the sides of the hose and the close nozzle. So intuitively we
probably expect the pressure to increase a bit after closing the nozzle.

#### Math time!

We'll start by figuring out the components of Bernoulli's equation before
the nozzle turns off. Since the pump is providing the same amount of
*oomph* to the system, the total energy will be the same. So that will
allow us to solve for the new static pressure at the nozzle.

**Some prep work**

Since we've already decided there's no elevation change here, we can ignore
hydrostatic pressure. All we have to worry about are before and after
static pressures (of which I've already told you the former) and
hydrodynamic pressure.  In other words, if we name $v_1$ and $v_2$ as the
water speeds before and after shutting off the nozzle and say the static
pressure is $p_1$ before and $p_2$ after, we've got:

\begin{align}
p_1 + \frac12 \rho {v_1}^2 &= p_2 + \frac12\rho{v_2}^2
\end{align}

**After**

<div class="row">
<div class="offset-2 col-8">
<img src="/img/2022-09-05-example1-after.png" alt="A schematic shows a pump providing pressure to a combination nozzle that is shut off and not flowing water." class="center" width="100%">
</div>
</div>

Since the water stops when we shut the nozzle off, $v_2$ is zero:

\begin{align}
p_1 + \frac12 \rho {v_1}^2 &= p_2
\end{align}

This is already interesting to me! The pressure difference when you shut
this nozzle off *doesn't depend on the initial pressure, only on the
water's speed!* [^2]

**Before**

Okay, let's dig into the left side of that equation.

<div class="row">
<div class="offset-2 col-8">
<img src="/img/2022-09-05-example1-before.png" alt="A schematic shows a pump providing pressure to a combination nozzle that is flowing water." class="center" width="100%">
</div>
</div>


Anyway, to find the water speed we'll need to do a bit of math to get the
water's velocity from the flow rate. The basic question: if we're flowing
125 gpm, how much length of hose does the water flow down each minute?

For inch and three quarter hose, let's figure out the volume of water in a
length of hose with length $L$:

\begin{align}
V(L) &= A \cdot L\\\\
     &= \pi r^2 \cdot L\\\\
     &= \pi \left(\frac{1.75\ \text{in}}{2}\right)^2\cdot L\\\\
V(1\ \text{ft}) &= \frac{1.75^2\pi\ \text{in}^2}{4} \cdot 12\ \text{in}\\\\
     &= 28.86\ \text{in}^3
\end{align}

Now with the power of modern search engines we can find that a gallon is
231 cubic inches (okay seriously, who came up with these units). So a foot
of hose contains $28.86 / 231 = 0.125\ \text{gal}$ of water. That means
that if we're flowing 125 gallons per minute, the water has to flow at a
rate of 1000 feet per minute. That's a little over 11 miles per hour, so it
seems like a reasonable result so far.

Now for the agonizing part: unit conversions. (Have I mentioned recently
how lovely SI units are?) A psi is 6.89 kPa ($kPa = \frac{kg}{s^2m}$), and
$1\ \frac{\text{m}}{\text{s}} = 197\ \frac{\text{ft}}{\text{min}}$. Let's
figure out the hydrodynamic pressure before the nozzle gets turned off:

\begin{align}
\frac12\rho{v_1}^2 &= \frac12\cdot\left(1000\ \frac{\text{kg}}{\text{m}^3}\right)\cdot
    \left(\frac{1000\ \text{ft}}{\text{min}} \cdot
    \frac{1\ \text{m}/\text{s}}{197\ \text{ft}/\text{min}}
    \right)^2\\\\
    &= 12,900\ \frac{\text{kg}}{\text{s}^2\text{m}}\\\\
    &= 12,900\ \text{Pa}\\\\
    &= 12.9\ \text{kPa}\cdot\frac{1\ \text{psi}}{6.89\ \text{kPa}}\\\\
    &= 1.87\ \text{psi}
\end{align}

**Drumroll please**

So now that we know the hydrodynamic pressure, we can figure out the new
pressure at the nozzle after it's turned off:

\begin{align}
p_2 &= p_1 + \frac{1}{2}\rho{v_1}^2\\\\
    &= 100\ \text{psi} + 1.87\ \text{psi}\\\\
    &= 102\ \text{psi}
\end{align}

The result: turning off the water at the nozzle and then allowing the
system to equilibrate increases the pressure in the hose by just 2 psi.
It's such a small increase that I had to fudge significant figures to make
it noticeable at all. I find this immensely reassuring: it means that as a
pump operator I basically don't have to worry about whether or how much
water is flowing when I set the initial pressure on a hose line – it'll be
approximately the same once the nozzle person opens the nozzle.

Final caveat: this doesn't account for water hammer, which is what happens
*before* the system equilibrates. But that's the subject for another day.

### Wrapping up
I hope to play a bit with some other examples of Bernoulli's equation, like
pumping water up a hill or educting foam into a system. But for today, I'm
gonna call it there. In short:

* Pressure can be viewed as energy per volume
* Bernoulli's equation describes energy conservation in smooth
    incompressible flow, by expressing pressure, kinetic energy, and
    gravitational potential energy all per volume.
* The magnitudes really do work out and shutting off a nozzle increases the
    pressure in that hose, but only slightly.

### Citations
* I found [this tec-science
    article](https://www.tec-science.com/mechanics/gases-and-liquids/bernoullis-principle/)
    very useful in understanding Bernoulli's equation and reframing pressure
    as energy per volume.
* ITCANet had a [similarly useful
    writeup](https://www.itacanet.org/fluid-mechanics-for-gravity-flow-water-systems-and-pumps/part-5-energy-in-a-perfect-system-the-bernoulli-equation/)
    of the Bernoulli equation.

### Footnotes

[^5]: Okay, it's a bit more complicated than that, but broadly speaking.

[^1]: This is super handwavy, partly because talking about pressure in an
incompressible fluid is a bit dicey. Properly pressure generally involves
increasing the density of the fluid by compressing it a bit. In an
incompressible fluid...that's a bit funky, so we handwave our way around
it.

[^2]: Side note: with a combi nozzle, the initial pressure is
part of what determines the water's speed, but in general this point
stands.
