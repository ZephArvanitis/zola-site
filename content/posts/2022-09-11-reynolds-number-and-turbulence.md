+++
title = "Turbulent flow in hoses"
[taxonomies]
tags = ["fire stuff", "physics"]
[extra]
latex = true
footnote = true
+++

Yet another pump operations/water flow post, sorry folks! If only it
weren't so darn interesting...

This is another "Zeph convinces themself that the book is right" post, this
time on a statement about laminar versus turbulent flow in hoses:

{% quote(author="Sykes + Sturtevant, 1999") %}
The pressures in hose are typically high enough to cause turbulent flow.
{% end %}

If you're interested in a demonstration of this, buckle in and come along!
If not, might I suggest different reading material?

<!-- more -->

### Turbulence

Okay, first, some definitions:

* Laminar flow: when water flows in an orderly way from one point to
    another. Generally this means that following a hypothetical water
    molecule will give you a straight line. On a small scale, it means that
    even when something introduces a little turbulence – maybe a bit of
    roughness in a pipe or a change of direction – the fluid's flow is
    stable enough that it damps out the turbulence and returns to smooth
    flow.
* Turbulent flow: the opposite of laminar flow! Basically, even if you have
    the smoothest, straightest pipe in the world, past a certain point the
    flow will be topsy turvy no matter what you do.

Two major things affect the boundary between laminar and turbulent flow:
viscosity (how "thick" a liquid is – envision honey versus water), which
damps out turbulence; and velocity, which encourages it by making
everything move faster. The balance between these two components is
expressed in a unitless value called the *Reynolds number* (no apostrophe).
It's defined like so:

$$
\text{Re} = \frac{v L}{\nu}
$$

where $v$ is the fluid's velocity, $L$ is a characteristic length (for
round pipes or hoses, it's the inner diameter), and $\nu$ is the kinematic
viscosity of the fluid.[^2]

The cool thing about the Reynold's number is that
we can say pretty reliably whether the flow of a fluid will be turbulent
just by looking at this one value. In general, if $\text{Re}$ is less than
2300, flow will be laminar, and if $\text{Re}$ is more than 2900, it'll be
turbulent. The in between area is a bit of a transitional space, with
properties of both laminar and turbulent flow present at the same time.

### Turbulence in a hose

At this point, I'm interested in understanding how much water flow we can
have through a hose before the flow becomes particularly turbulent. We'll
say that $Q_1$ is the flow rate at which $\text{Re}$ hits 2300 and the flow
starts to get turbulent, and we'll call $Q_2$ the flow rate where the flow
is conclusively turbulent at $\text{Re}=2900$.

Now, if we want to express the Reynolds number in terms of total
volumetric flow $Q$,[^1] we just have to remember that the total volume flowing
is the water's speed times the hose's cross sectional area $A$, or $Q=vA$:

$$
\text{Re} = \frac{Q L}{\nu A}
$$

Let's say the inner diameter of the hose is $D$, and substitute in the
hose's cross sectional area $A=\frac{\pi D^2}{4}$:

\begin{align}
\text{Re} &= \frac{4 Q D}{\pi\nu D^2}\\\\
          &= \frac{4 Q}{\pi \nu D}
\end{align}

Of the values in here, the only two that can vary are flow rate $Q$ – by
increasing the gallonage on a combination nozzle, for instance – and the
hose diameter $D$. If we want to solve for $Q$, we can rearrange a bit:

\begin{align}
Q &= \frac{\text{Re}\ \pi\nu D}{4}\\\\
  &= \text{Re}\frac{\pi\nu}{4} D
\end{align}

Now let's stick in some values for our constants $\pi$ and $\nu$

\begin{align}
Q &= \text{Re}\frac{\pi\nu}{4} D\\\\
  &= \text{Re}\frac{(3.14)\cdot\left(1.0\cdot 10^{-6}\frac{\text{m}^2}{\text{s}}\right)}{4} D\\\\
  &= 7.85\cdot10^{-7}\cdot\text{Re}\cdot D \cdot\frac{\text{m}^2}{\text{s}}\\\\
\end{align}

Now for my favorite part of all this: more unit conversion.

\begin{align}
Q &= 7.85\cdot10^{-7}\cdot\text{Re}\cdot D \cdot\frac{\text{m}^2}{\text{s}}\\\\
  &= 7.85\cdot10^{-7}\cdot\text{Re}\cdot D \cdot\frac{\text{m}^2}{\text{s}}
     \left(\frac{\text{m}}{\text{m}}\right)
     \left(\frac{60\ \text{s}}{\text{min}}\right)\\\\
  &=
  4.7\cdot10^{-5}\cdot\text{Re}\cdot\frac{D}{\text{m}}\frac{\text{m}^3}{\text{min}}\\\\
  &= 4.7\cdot10^{-5}\cdot\text{Re}\cdot\frac{D}{\text{m}}\frac{\text{m}^3}{\text{min}}
  \left(\frac{264\ \text{gal}}{\text{m}^3}\right)\\\\
  &= 0.012\cdot\text{Re}\cdot\frac{D}{\text{m}}\frac{\text{gal}}{\text{min}}
\end{align}

In words: the flow rate (in gallons per minute) that produces a Reynolds
number of $\text{Re}$ in a pipe or hose of diameter $D$ is the diameter in
meters multiplied by the Reynolds number multiplied by 0.012. What that
means for some standard hose diameters:

| Hose diameter $\ \ \ $ | Flow rate for turbulence $(\text{Re} = 2300-2900)$ |
| ------------- | ------------------ |
| 1.75 inch | 1.2-1.6 gpm |
| 2.5 inch | 1.8-2.2 gpm |
| 5 inch | 3.5-4.4 gpm |

<br>

In other words, with a 5-inch supply hose, if you're flowing fewer than 3.5
gallons per minute, you're likely in laminar flow. Fun fact: you're never
going to do that (think more like 500-1000 gpm). So the textbook is right!
We can pretty safely assume that all water flow through fire hose is fully
turbulent.[^3]

### Wrapping up
In summary:

* The Reynolds number is a dimensionless value that describes the balance
    of viscosity (which tends to make a fluid flow smoothly) and velocity
    (which tends to lead to turbulence)..
* Reynolds numbers above 2900 mean fully turbulent flow.
* In fire hose at any reasonable flow rate (more than 5 gpm, say), we can
    safely assume that all flow is fully turbulent.
* SI units are still superior to whatever the heck gpm and inches are.
* If you want to do this more simply, consider an online Reynolds number
    calculator like [this
    one](https://www.omnicalculator.com/physics/reynolds-number).

### Footnotes
[^2]: There is a difference between kinematic viscosity $\nu$ and dynamic
viscosity $\mu$, but I don't entirely follow it, and for our purposes it's
basically a constant (in practice it varies a tiny bit with water
temperature, but I'll be using values for around 20 degrees Celsius and
leaving it at that.)

[^1]: (not to be confused with mass flow rate, which measures the mass of a
fluid passing a point over time, so something more like
$\text{kg}/{\text{m}^3}$)

[^3]: I don't, however, buy their statement about this being because of the
  *pressure* in fire hose. From what I understand, pressure has basically
  no bearing on turbulence; what matters is viscosity and velocity.
