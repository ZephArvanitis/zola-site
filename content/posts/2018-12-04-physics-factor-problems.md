+++
title = "Physics factor problems"
date = 2018-12-04
[taxonomies]
tags = ["How stuff works", "Physics"]
[extra]
latex = true
+++
A common stumbling block in an introductory physics class is physics factor
problems. They force you to work algebraically, and as a result they can
confuse students. I've been helping a cousin with physics recently. He's
brilliant at the physics, but can sometimes struggle with figuring out what
algebra he needs to do. We talked recently about several "factor problems,"
and I ended up writing up the procedure I use.

### What is a physics factor problem?

Here's an example:

> A coin is on a turntable, at radius $r$ from the center and spinning at
> constant speed $v$. If the coefficient of friction between the turntable
> and coin $\mu$ is doubled, how does the maximum rotation speed at which
> the coin will remain on the turntable change?

Not relevant here are free body diagrams or the actual "just before
slipping" condition. All I want to talk about is how to navigate a problem
that gives you one factor and asks you to find another one.

### Basic steps

#### 1) Write the relevant equation

This steps requires you to do the actual physics of the problem. Here I would draw a free body diagram (hint: gravity, normal force, friction). Then I'd think about circular motion and centripetal acceleration. Here friction is the centripetal force. So after a bit of physics, the relevant equation turns out to be:

$\frac{mv^2}{r} = \mu m g$

#### 2) Create new variables

Now it's time to use the information the problem gave us. We're going to
create two new variables.

The first variable is the one that the problem tells us to change: $\mu_2=2\mu_1$

The second is what we're solving for: $v_2=(??)v_1$

Our goal now is to find the factor between the old and new variables of the
"solving for" variable. In other words, solve for the question marks.

#### 3) Rewrite the original equation in terms of the original variables

Here, that means switching $\mu$ for $\mu_1$ and $v$ for $v_2$. We get:

$$\frac{m{v_1}^2}{r}=\mu_1 m g$$

Pretty straightforward, right? We just added a couple subscripts. Just wait
'til the next step.

#### 4) Write it again with the _new_ variables

$$\frac{m{v_2}^2}{r}=\mu_2 m g$$

Wow, that sure was exciting...

#### 5) Plug in the changed variable

In step (2), we defined $\mu_2=2\mu_1$. Let's plug that in up above.

$$\frac{m{v_2}^2}{r}=(2 \mu_1) m g$$

#### 6) Find something familiar from step (3) by factoring

This is often the hardest step. In that equation in step (5), we see
something that looks a lot like step (3), right? In this case, the similar
expression is $\mu_1 m g$ and $(2 \mu_1) m g$. We can factor
this:

$$\frac{m{v_2}^2}{r}=2 (\mu_1 m g)$$

That may not seem useful yet, but it will be!

#### 7) Use equation (3) to substitute for our familiar expression

From up in (3), we know $\mu_1  m g = \frac{m{v_1}^2}{r}$. So let's plug that in!

$$\frac{m{v_2}^2}{r}=2\left(\frac{m{v_1}^2}{r}\right)$$

I know, I know. This is just looking scarier and scarier. But it's about to lose some of that terror!

#### 8) Cancel stuff with reckless abandon until you have only the "solving for" variables

Here we can divide both sides by $m$ and multiply by $r$. That gives us:

$${v_2}^2=2{v_1}^2$$

And finally...(drumroll please)

#### 9) Solve for that variable!

Just take the square root of both sides here, and you get:

$$v_2 = \sqrt{2}v_1$$

In other words, if we double the coefficient of friction, the max speed of the coin where it won't slip increases by a factor of root two.

Phew!

### In other words

In general, once you have practice you won't need to write out every step of the procedure for physics factor problems. Here's what it would look like if I were writing it up in detail:

> As discussed above, the relevant equation relating velocity and the coefficient of friction is
>
> \\\[\\frac{mv^2}{r}=\\mu m g.\\]
>
> Now if we double the coefficient of friction ($\\mu_2=2\\mu$), then we'll get a new velocity $v_2$ given by
>
> \\\[\\frac{m{v_2}^2}{r}=(2\\mu) m g = 2(\\mu m g).\\]
>
> Plugging in the equation above, we see
>
> \\\[\\frac{m{v_2}^2}{r}=2(\\mu m g) = 2\\left(\\frac{mv^2}{r}\\right),\\]
>
> which we can solve for $v_2$:
>
> \\\[{v_2}^2=2v^2,\\]
>
> and thus $v_2=\\sqrt{2}v$. In other words, doubling the coefficient of friction will increase the max speed at which the coin can revolve without slipping by a factor of $\\sqrt2$.
