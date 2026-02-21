# Kinematics of SHM

## 1. Displacement-Time Equation (LO 3)

The syllabus explicitly requires the solution to $$a = -\omega^2 x$$ where the timing starts at the equilibrium position ($$x=0$$ at $$t=0$$):

$$
x = x_0 \sin \omega t
$$

> [!info] Context: Starting Position
> *   If the oscillator starts at **equilibrium** moving positively: Use $$x = x_0 \sin \omega t$$
> *   If the oscillator starts at **maximum amplitude**: Use $$x = x_0 \cos \omega t$$
> *   The syllabus focuses on the sine version, but be adaptable based on the question's boundary conditions.

## 2. Velocity-Time Equation (LO 4)

Velocity is the rate of change of displacement ($$v = \frac{dx}{dt}$$). Differentiating the displacement equation:

$$
v = \frac{d}{dt}(x_0 \sin \omega t)
$$

$$
v = x_0 \omega \cos \omega t
$$

We define the **maximum velocity** ($$v_0$$) as:
$$
v_0 = \omega x_0
$$

So:
$$
v = v_0 \cos \omega t
$$

## 3. Acceleration-Time Equation

Acceleration is the rate of change of velocity ($$a = \frac{dv}{dt}$$):

$$
a = \frac{d}{dt}(v_0 \cos \omega t) = -v_0 \omega \sin \omega t
$$

Substituting $$v_0 = \omega x_0$$:
$$
a = -\omega^2 x_0 \sin \omega t
$$

Notice that $$x_0 \sin \omega t$$ is just $$x$$. Thus, we return to the definition:
$$
a = -\omega^2 x
$$

## 4. Velocity-Displacement Relationship (LO 4)

This is a derivation often required for "Top in World" conceptual understanding. It stems from the Pythagorean identity: $$\sin^2\theta + \cos^2\theta = 1$$.

1.  $$x = x_0 \sin \omega t \implies \sin \omega t = \frac{x}{x_0}$$
2.  $$v = \omega x_0 \cos \omega t \implies \cos \omega t = \frac{v}{\omega x_0}$$
3.  Substitute into identity:
    $$
    (\frac{x}{x_0})^2 + (\frac{v}{\omega x_0})^2 = 1
    $$
4.  Rearrange for $$v$$:
    $$
    \frac{v^2}{\omega^2 x_0^2} = 1 - \frac{x^2}{x_0^2} = \frac{x_0^2 - x^2}{x_0^2}
    $$
    $$
    v^2 = \omega^2 (x_0^2 - x^2)
    $$

$$
v = \pm \omega \sqrt{x_0^2 - x^2}
$$

> [!tip] Practical Use
> Use this equation when you are given **position** data but no **time** data. The $$\pm$$ indicates that at any position $$x$$ (except amplitude), the body could be moving left or right.