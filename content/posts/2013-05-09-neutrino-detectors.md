+++
title = "Neutrino Astrophysics: Detectors"
[taxonomies]
tags = ["physics", "neutrinos", "astrophysics"]
[extra]
latex = true
+++

Neutrino detection is a tricky enterprise in the best of cases. Since
neutrinos interact only via the weak interaction, their interactions have
fantastically low cross-sections, which means that detectors end up seeing
only a couple of neutrinos per day in some of the better cases.

<!-- more -->

The very first neutrino detector is typically called the Homestake or Davis
experiment, and involved ${}^{37}$Cl in the form of perchloroethylene, a
common cleaning chemical. The interaction monitored by the experiment was
$\nu_e+{}^{37}\text{Cl}\rightarrow e^- + {}^{37}\text{Ar}$. For those of
you without a periodic table handy, this is just the conversion of a
neutron in chlorine to a proton in argon. The lowest-energy neutrinos that
could participate in this reaction had energies of around 0.8 MeV. Luckily
for science, the results of the experiment were interesting enough to
warrant a new generation of detectors, based on gallium-71.

Gallium detectors monitor the reaction $\nu_e+{}^{71}\text{Ga}\rightarrow
e^- + {}^{71}\text{Ge}$, but have a much lower threshold energy: just 0.2
MeV, which is low enough to detect pp chain neutrinos. Oh, and another fun
fact: one of the gallium neutrino detectors contained 60 tons of gallium,
at a time when the world production of gallium was just 10 tons per year!
The threshold energies for these detector types are shown in the figure
below. Both of these experiment types are chemically based: physicists set
up the detectors, leave them alone for a couple of months, then chemically
separate out the desired atoms, and somehow count them one by one. While
these can detect solar neutrinos, this experimental model has some
drawbacks: it can't tell you exactly when an interaction occurred, and it
gives little to no information about the direction or energy of the
incoming neutrino. These drawbacks led to the next generation of neutrino
detection: Cerenkov detectors.

The first Cerenkov detectors looked for elastic scattering between
neutrinos and electrons. In such a process, the electron may be accelerated
to faster than the speed of light in the detector medium (water or ice).
When this occurs, Cerenkov radiation is emitted as the electron
decelerates. This is the source of that beautifully toxic blue you see
around nuclear waste in underwater facilities. The basic structure for a
Cerenkov detector is a huge tank of water (or a cubic kilometer of
Antarctic ice, in the case of Ice Cube) for neutrinos to interact with,
surrounded by hundreds or thousands of photomultiplier tubes to detect the
Cerenkov radiation. Elastic scattering of neutrinos and electrons requires
fairly high-energy neutrinos (around 7 MeV), so it can't detect the pp
chain neutrinos that gallium detectors can, but it has the advantages of
time resolution and directional resolution, since Cerenkov radiation is
produced in a cone around the accelerated electron. Note that the neutrinos
that scatter with electrons are primarily electron neutrinos, though small
fractions of the interactions can involve the other flavors.

Based on this idea is a fourth detector, the Sudbury Solar Neutrino
Observatory (SNO). It is a Cerenkov detector with heavy water, which
contains a lot of deuterium, instead of the normal old hydrogen. The beauty
of this detector is that it's sensitive to two reactions:
$\nu_e+D\rightarrow e^-+p+p$, which only detects electron neutrinos, and
$\nu+D\rightarrow \nu'+n+p$, which can detect all three flavors of
electrons. This ability will turn out to be very beneficial in the
resolution of the solar neutrino problem.

<figure class="figure">
<img src="/img/201305-solar-neutrinos-2.png" class="center img-fluid rounded" style="max-width:500px; max-width:100%"/>
<figcaption class="figure-caption">Modified image from Bahcall, Solar Neutrinos.
http://www.sns.ias.edu/~jnb/Papers/Popular/Wiley/paper.pdf
</figcaption>
</figure>

This is the second post in a series on neutrino astrophysics. 
Other neutrino-related posts can be found [here](/tags/neutrinos).
