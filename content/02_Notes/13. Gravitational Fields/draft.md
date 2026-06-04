Here is a comprehensive, meticulously structured set of revision notes tailored for a "Top in World" (A*) level of understanding for the Cambridge A-Level Physics (9702) syllabus. 

These notes are formatted specifically for **Obsidian (.md)**, utilizing callouts, LaTeX mathematics, and a logical progression that builds conceptual depth while perfectly aligning with the 2025-2027 syllabus requirements.

***

# 🌌 Topic 13: Gravitational Fields

**Tags:** #A-Level/Physics/9702 #Gravitational-Fields #A-Star-Notes #Macro-Physics
**Related Topics:** [[Circular Motion]], [[Electric Fields]] *(for analogies)*

---

## 13.1 The Concept of a Gravitational Field

> [!abstract] Definition: Gravitational Field
> A gravitational field is an example of a **field of force**. It is a region of space where a mass experiences a force. It is formally defined as the **gravitational force per unit mass** at that point.

- **Nature of the Force:** Gravitational forces are strictly **attractive** (unlike electric/magnetic fields which can repel). The force always acts towards the centre of the mass creating the field.
- **Representing Fields:**
	- **Radial Fields:** Field lines point towards the center of a point mass or uniform sphere. As distance increases, field lines get further apart, showing decreasing field strength.
	- **Uniform Fields:** Represented by parallel, equally spaced lines. *Near the Earth's surface*, the field is effectively uniform over small changes in height.

---

## 13.2 Newton's Law of Gravitation & Point Masses

> [!abstract] Definition: Newton's Law of Gravitation
> The gravitational force of attraction between two point masses is **directly proportional to the product of their masses** and **inversely proportional to the square of the distance between their centers**.

$$ F = \frac{Gm_1m_2}{r^2} $$
- $F$ = Gravitational force (N)
- $G$ = Universal Gravitational Constant ($6.67 \times 10^{-11} \text{ N m}^2 \text{ kg}^{-2}$)
- $m_1, m_2$ = The interacting masses (kg)
- $r$ = Distance between the **centres** of the masses (m)

> [!info] The Point Mass Approximation
> For a point outside a uniform sphere (like a planet), the mass of the sphere can be considered to be completely concentrated as a **point mass at its centre**. 
> *Condition:* This is only valid if the sphere has uniform density (or spherical symmetry) and the distance $r$ is greater than the radius of the sphere.

---

## 13.3 Gravitational Field Strength ($g$)

> [!abstract] Definition: Gravitational Field Strength ($g$)
> The gravitational force exerted per unit mass on a small object placed at that point. 
> $$ g = \frac{F}{m} $$
> *Units:* $\text{N kg}^{-1}$ (equivalent to $\text{m s}^{-2}$)

### Deriving $g$ for a Point Mass
*(Syllabus Requirement 13.3.1)*
1. Start with Newton's Law for a test mass $m$ in the field of a large mass $M$: 
   $F = \frac{GMm}{r^2}$
2. Use the definition of field strength: 
   $g = \frac{F}{m}$
3. Substitute $F$: 
   $g = \frac{\frac{GMm}{r^2}}{m}$
4. **Final Equation:**
   $$ g = \frac{GM}{r^2} $$
*(Note: $g$ obeys an inverse-square law with distance $r$.)*

### Why is $g$ constant near the Earth's surface?
- The Earth's radius $R \approx 6400 \text{ km}$.
- For small changes in height $h$ (e.g., $h = 100 \text{ m}$), the distance from the center is $R + h$.
- Because $R \gg h$, the value of $(R+h)^2 \approx R^2$. Therefore, $g$ changes by a negligible amount and is approximated as a constant $9.81 \text{ N kg}^{-1}$.

> [!warning] Examiner Pitfall: $r$ vs Altitude
> A classic trap! Orbital altitude / height ($h$) is measured from the *surface*. To use the equations, you **must** find $r$ by adding the radius of the planet ($R$).
> $$ r = R + h $$

---

## 13.4 Circular Orbits & Satellites

In orbit, the gravitational force provides the exact **centripetal force** required to keep the object in circular motion.

$$ F_G = F_C $$
$$ \frac{GMm}{r^2} = \frac{mv^2}{r} = mr\omega^2 $$

From this, you can derive several critical relationships:
1. **Orbital Speed ($v$):** $v = \sqrt{\frac{GM}{r}}$ *(Notice: mass of the satellite $m$ cancels out. All objects at radius $r$ orbit at the exact same speed).*
2. **Kepler's Third Law ($T^2 \propto r^3$):**
   Using $\omega = \frac{2\pi}{T}$:
   $$ \frac{GM}{r^2} = r\left(\frac{2\pi}{T}\right)^2 \implies T^2 = \left(\frac{4\pi^2}{GM}\right)r^3 $$

> [!tip] Top-in-World Application: Binary Star Systems
> In binary star questions (two stars orbiting a common center), both stars share the **same angular velocity ($\omega$)** and **time period ($T$)**. The gravitational force between them provides the centripetal force for *each* star.
> $F = \frac{Gm_1m_2}{(r_1+r_2)^2} = m_1r_1\omega^2 = m_2r_2\omega^2$

### Geostationary Orbits
A geostationary satellite remains at the exact same point above the Earth's surface. To do this, it must satisfy **three strict conditions**:
1. It must have an orbital period of exactly **24 hours**.
2. It must orbit from **West to East** (the same direction the Earth rotates).
3. It must orbit **directly above the Equator**.
*(Main use: Telecommunications and satellite TV, because satellite dishes on Earth do not need to move to track it).*

---

## 13.5 Gravitational Potential ($\phi$)

> [!abstract] Definition: Gravitational Potential ($\phi$)
> The **work done per unit mass** in bringing a small test mass from infinity to that point in the field.
> $$ \phi = -\frac{GM}{r} $$
> *Units:* $\text{J kg}^{-1}$ (Scalar quantity)

### Why is Potential ALWAYS Negative?
This is a guaranteed exam question. Memorize this logic:
1. Gravitational potential is strictly defined as **zero at infinity**.
2. Gravitational forces are always **attractive**.
3. Therefore, as a mass moves from infinity towards a planet, the field does work *on* the mass (it accelerates). 
4. To move it *back* to infinity, external work must be done against the field. Thus, the potential everywhere closer than infinity must be less than zero (negative).

### Equipotential Surfaces
- Lines or surfaces where the gravitational potential $\phi$ is identical.
- Moving a mass along an equipotential surface requires **zero work**.
- Equipotentials are always perpendicular to gravitational field lines.

---

## 13.6 Gravitational Potential Energy ($E_p$)

Gravitational Potential Energy of a two-mass system is the work done bringing the masses from infinity to a separation $r$. 
Because $E_p = m\phi$, we get:

$$ E_p = -\frac{GMm}{r} $$

### Calculating Changes in Energy ($\Delta E_p$)
To find the work done moving a satellite from radius $r_1$ to radius $r_2$:
$$ \text{Work Done} = \Delta E_p = E_{p(\text{final})} - E_{p(\text{initial})} $$
$$ \Delta E_p = \left(-\frac{GMm}{r_2}\right) - \left(-\frac{GMm}{r_1}\right) = GMm \left(\frac{1}{r_1} - \frac{1}{r_2}\right) $$

> [!warning] $mgh$ vs $-\frac{GMm}{r}$
> Never use $\Delta E_p = mgh$ for satellites in space! 
> $mgh$ is an approximation that only works near the Earth's surface where $g$ is constant. For large distances (orbits), $g$ changes, so you **must** use the $E_p = -\frac{GMm}{r}$ formula.

---

## 🏆 A* / Top in World Examiner Insights

1. **Big $G$ vs Little $g$:** Never confuse them in writing. $G$ is the Universal Gravitational Constant (a fundamental property of the universe). $g$ is local field strength (depends on where you are and the mass of the nearby planet).
2. **Logarithmic Graphs (Paper 5 Focus):** You are often given $T^2 \propto r^3$ and asked to verify it. 
   - Taking logs: $\log(T) = \frac{3}{2}\log(r) + \text{constant}$. 
   - A graph of $\log(T)$ vs $\log(r)$ will yield a straight line with a gradient of exactly **1.5**.
3. **Resultant Field Strength:** $g$ is a **vector**. If a question asks for the point between Earth and the Moon where the net field is zero (neutral point), you must equate the magnitudes: $g_{earth} = g_{moon}$ $\implies \frac{GM_E}{r_1^2} = \frac{GM_M}{r_2^2}$.
4. **Work Done calculation signs:** If an object falls *towards* a planet, it loses $E_p$ (potential becomes *more* negative) and gains Kinetic Energy ($E_k$). If launched *away*, it gains $E_p$ (potential becomes *less* negative, closer to zero) and loses $E_k$. Keep strict track of your minus signs!
5. **Definitions are absolute:** When defining fields or potentials, the exact syllabus wording is required. Missing "per unit mass" or "from infinity" will instantly drop the mark.