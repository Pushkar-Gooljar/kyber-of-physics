# Derivation of $a = -\omega^2 x$

The equation $a = -\omega^2 x$ is the defining characteristic of Simple Harmonic Motion (SHM). There are two ways to derive this: the **Reference Circle** method (geometric/visual intuition) and the **Calculus** method (mathematical rigour).

As a top student, you should master both to fully grasp the physics.

## Method 1: The Reference Circle (Geometric Derivation)

This method projects the motion of a particle undergoing **Uniform Circular Motion (UCM)** onto a 1D diameter.

### The Setup
Imagine a particle $P$ moving in a circle of radius $x_0$ (amplitude) with a constant **angular velocity** $\omega$.
We look at the "shadow" of this particle projected onto the horizontal diameter (the x-axis).

### 1. Displacement ($x$)
At time $t=0$, the particle is at the equilibrium position (angle $\theta = 0$ is vertical, or we use a phase shift). Let's assume the angle $\theta$ is swept out from the vertical axis (equilibrium position for the projection) to keep it consistent with sine.
$$ \theta = \omega t $$
The horizontal displacement $x$ from the center is the projection of the radius:
$$ x = x_0 \sin \theta = x_0 \sin(\omega t) $$

### 2. Acceleration ($a$)
The particle $P$ experiences a **Centripetal Acceleration** ($a_{centripetal}$) directed towards the center of the circle.
$$ a_{centripetal} = x_0 \omega^2 $$
*(Note: we use radius $r = x_0$ here)*.

### 3. Projection of Acceleration
We need the component of this centripetal acceleration acting along the horizontal oscillation line (the x-axis).
From geometry, the component of the centripetal vector along the x-axis is:
$$ a_x = -a_{centripetal} \sin \theta $$

> [!danger] The Negative Sign
> Why is it negative?
> Look at the vector. If the particle is in the top right quadrant ($+x$), the centripetal acceleration points bottom-left (towards center). The horizontal component points **left** (negative direction).
> *   Displacement is positive ($+x$).
> *   Acceleration is negative ($-a$).
> They essentially oppose each other.

### 4. Substitution
Substitute $a_{centripetal} = x_0 \omega^2$ into the projection equation:
$$ a = -(x_0 \omega^2) \sin(\omega t) $$

Rearrange to group terms:
$$ a = -\omega^2 (x_0 \sin(\omega t)) $$

Since we defined $x = x_0 \sin(\omega t)$, we can substitute $x$ back in:

$$
\boxed{a = -\omega^2 x}
$$

---

## Method 2: The Calculus Derivation (Mathematical Rigour)

This method is faster and often preferred by examiners if asked to "show that $x = x_0 \sin \omega t$ is a solution to the harmonic equation."

**Start with the displacement solution:**
$$ x = x_0 \sin(\omega t) $$

**Step 1: Differentiate with respect to time ($t$) to find velocity ($v$).**
Recall chain rule: $\frac{d}{dt}(\sin(kx)) = k\cos(kx)$.
$$ v = \frac{dx}{dt} = \omega x_0 \cos(\omega t) $$

**Step 2: Differentiate again to find acceleration ($a$).**
Recall: $\frac{d}{dt}(\cos(kx)) = -k\sin(kx)$.
$$ a = \frac{dv}{dt} = \frac{d^2x}{dt^2} = -\omega^2 x_0 \sin(\omega t) $$

**Step 3: Substitute original $x$.**
We see the term $x_0 \sin(\omega t)$ appears in the acceleration equation.
$$ a = -\omega^2 (x_0 \sin(\omega t)) $$
$$ a = -\omega^2 x $$

---

## Deep Dive: Analyzing the Equation

$$
a = -\omega^2 x
$$

### 1. The Constant ($\omega^2$)
Since $\omega$ (angular frequency) is real, $\omega^2$ is always **positive**. This ensures that the negative sign dictates the relationship's directionality, not the constant.
*   **Physics meaning:** A larger $\omega$ means a "stiffer" system (like a stronger spring or shorter pendulum). The restoring acceleration is sharper for a given displacement.

### 2. The Negative Sign (Restoring Nature)
This is the most critical part of the equation. It tells us:
*   Vectors $\vec{a}$ and $\vec{x}$ represent vectors in **opposite directions**.
*   If displacement is to the right ($+ve$), acceleration is to the left ($-ve$).
*   If displacement is to the left ($-ve$), acceleration is to the right ($+ve$).
This creates a **Restoring Force** ($F=ma \rightarrow F = -m\omega^2x$) that always tries to return the object to equilibrium.

### 3. Proportionality
$$ |a| \propto |x| $$
*   At **Equilibrium** ($x=0$): Acceleration is zero. The object is moving at max velocity but isn't being pulled.
*   At **Amplitude** ($x=x_0$): Acceleration is maximum. The object has momentarily stopped ($v=0$) but is being pulled back with maximum force.

> [!tip] Examiner Tip: "Defining SHM"
> If an exam question asks "State the conditions for Simple Harmonic Motion" [2 marks], do **not** just write the equation.
> 
> **Correct Answer:**
> 1.  Acceleration is directly proportional to displacement.
> 2.  Acceleration is directed towards the fixed equilibrium position (or in the opposite direction to displacement).

---

## Common Pitfall: Centripetal vs Harmonic
Do not confuse the two acceleration formulae involving $\omega$:

| Formula | Context | Direction |
| :--- | :--- | :--- |
| $$a = r\omega^2$$ | **Circular Motion** | Constant magnitude, always perpendicular to velocity (towards center). |
| $$a = -\omega^2 x$$ | **SHM** | Varying magnitude, always parallel to velocity (towards equilibrium). |

The SHM acceleration is effectively the **component** of the Circular Motion acceleration projected onto the diameter.

