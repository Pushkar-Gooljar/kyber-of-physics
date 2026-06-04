Here is the ultimate, examiner-level Obsidian Markdown cheat sheet for **9702 A-Level Physics: Gravitational Fields**. 

Copy and paste this directly into your Obsidian vault. It is strictly structured around the 2025–2027 syllabus, packed with direct insights from the examiner reports, mark schemes, and common "fatal errors" to ensure maximum marks.

***

# 🪐 The Holy Grail: 9702 A-Level Gravitational Fields

> [!abstract] Overview
> Gravitational Fields is a highly mechanical topic. Marks are heavily skewed towards precise definitions, mathematical derivations, and avoiding classic algebraic pitfalls (like forgetting to square a radius or confusing potential with potential energy). 

---

## 13.1 Gravitational Field

### 1. The Gravitational Field Concept
**Syllabus:** *Understand that a gravitational field is an example of a field of force and define gravitational field as force per unit mass.*

> [!info] Formal Definition: Gravitational Field Strength ($g$)
> Gravitational field strength at a point is defined as the **gravitational force exerted per unit mass** on a small object placed at that point.

> [!danger] Examiner Catching Point
> - **DO NOT** say "force on a unit mass" or "force on 1kg". You **must** indicate the ratio by using the word **"per"** (or "force divided by mass").
> - **DO NOT** use units in definitions (e.g., "force per kg" scores 0).
> - **Field vs. Field Strength:** The syllabus defines the *field* as a region of space where a mass experiences a force. The *field strength* ($g$) is the specific vector quantity ($F/m$).

### 2. Gravitational Field Lines
**Syllabus:** *Represent a gravitational field by means of field lines.*

- Field lines show the **direction of the gravitational force** acting on a (test) mass placed at that point.
- **Around a point mass / uniform sphere:** Lines must be strictly **radial** and pointing **inwards** towards the centre of mass.

> [!warning] Common Drawing Errors (Examiner Reports)
> - Carelessly drawn lines that do not converge exactly at the centre of the sphere.
> - Drawing concentric circles (these are equipotential lines, not field lines, and will lose you marks!).
> - Forgetting to draw the arrows pointing *towards* the mass.

---

## 13.2 Gravitational Force Between Point Masses

### 1. Uniform Spheres as Point Masses
**Syllabus:** *Understand that, for a point outside a uniform sphere, the mass of the sphere may be considered to be a point mass at its centre.*

- This is the core justification for applying Newton's Law of Gravitation to planets and stars. 

### 2. Newton's Law of Gravitation
**Syllabus:** *Recall and use Newton’s law of gravitation $F = Gm_1m_2 /r^2$*

> [!info] Formal Definition
> The gravitational force of attraction between two **point masses** is directly proportional to the **product of their masses** and inversely proportional to the **square of their separation**.

> [!danger] Fatal Omissions
> You will lose marks if you forget to explicitly state the condition that this applies to **point masses**. Also, avoid the word "distance" without context; use **"separation"**.

### 3. Circular Orbits & Centripetal Acceleration
**Syllabus:** *Analyse circular orbits in gravitational fields by relating the gravitational force to the centripetal acceleration it causes.*

This is the most frequently tested derivation in the topic. 

> [!check] Golden Phrasing (Memorize This)
> **"The gravitational force provides the centripetal force."**

> [!danger] What NOT to say (Examiner Reports)
> - **"Gravitational force is equal and opposite to centripetal force"** (This implies equilibrium, which is false—the object is accelerating!).
> - **"Gravitational force balances centripetal force"** (Again, implies zero resultant force).
> - Just writing $F_g = F_c$ without the explanatory text will often cost you the B1 (explanation) mark in "Explain your working" derivations.

**Standard Derivation:**
1. Stating the principle: "Gravitational force provides the centripetal force."
2. $G\frac{Mm}{r^2} = \frac{mv^2}{r}$  OR  $G\frac{Mm}{r^2} = mr\omega^2$
3. Use $\omega = \frac{2\pi}{T}$ or $v = \frac{2\pi r}{T}$ to link to time period $T$.
4. Arrive at Kepler's Third Law: $T^2 = (\frac{4\pi^2}{GM})r^3$

### 4. Geostationary Orbits
**Syllabus:** *Understand that a satellite in a geostationary orbit remains at the same point above the Earth’s surface...*

> [!info] Required Conditions for Geostationary Orbit (B-marks)
> 1. Equatorial orbit (orbits directly above the Equator).
> 2. Period is exactly 24 hours.
> 3. Orbits from West to East (same direction as Earth's rotation).

> [!tip] Calculation Pitfall
> If asked to find the *height* of a geostationary satellite above the Earth's surface, first calculate the orbital radius $r$ using the formulas above. Then, **subtract the radius of the Earth** ($h = r - R_E$).

---

## 13.3 Gravitational Field of a Point Mass

### 1. Deriving $g$
**Syllabus:** *Derive, from Newton’s law... the equation $g = GM/r^2$*

1. Start with $F = \frac{GMm}{r^2}$
2. State definition of $g$: $g = \frac{F}{m}$
3. Substitute $F$: $g = \frac{GMm/r^2}{m} \Rightarrow g = \frac{GM}{r^2}$

### 2. Calculating $g$
**Syllabus:** *Recall and use $g = GM/r^2$*

> [!warning] Math Errors to Avoid
> - **Unit Conversions:** Always convert km to m ($10^3$) before squaring.
> - **Inside vs Outside:** If asked for $g$ at a height $h$ above a planet, remember $r = R_{planet} + h$. Do not just use $h$.
> - **Ratios:** Questions often ask for ratios (e.g., $g_{Earth} / g_{Moon}$). Set up $\frac{g_1}{g_2} = \left(\frac{M_1}{M_2}\right) \times \left(\frac{r_2}{r_1}\right)^2$. *Examiners noted many students forget to square the radii when calculating ratios!*

### 3. $g$ near the Earth's surface
**Syllabus:** *Understand why $g$ is approximately constant for small changes in height near the Earth’s surface.*

> [!check] Standard Examiner Answer
> For small changes in height ($h \ll R_E$), the change in distance from the Earth's centre is negligible. Therefore, $r \approx R_E$, meaning $g$ remains effectively constant. Additionally, over a small area, the radial field lines are **approximately parallel**, indicating a uniform field.

---

## 13.4 Gravitational Potential

### 1. Defining Gravitational Potential ($\phi$)
**Syllabus:** *Define gravitational potential at a point as the work done per unit mass in bringing a small test mass from infinity to the point.*

> [!info] Formal Definition (Learn word-for-word)
> The work done **per unit mass** in moving a small mass **from infinity** to that point.

> [!question] "Why is gravitational potential always negative?" (Standard 2-mark question)
> 1. Gravitational potential is defined as zero at infinity.
> 2. Gravitational forces are strictly attractive.
> 3. Therefore, work is done *by* the mass (or work done *on* the mass is negative) as it moves from infinity to the point, meaning potential must be less than zero.

### 2. Using Potential ($\phi$) and Potential Energy ($E_p$)
**Syllabus:** *Use $\phi = -GM/r$ and $E_p = -GMm/r$*

> [!danger] The #1 Student Error Across All Papers
> Students constantly mix up **Gravitational Potential ($\phi$)** and **Gravitational Potential Energy ($E_p$)**. 
> - Potential ($\phi$) = Joules per kilogram ($J \cdot kg^{-1}$). Equation: $\phi = -\frac{GM}{r}$
> - Potential Energy ($E_p$) = Joules ($J$). Equation: $E_p = m\phi = -\frac{GMm}{r}$

**Calculating Changes in Potential Energy ($\Delta E_p$):**
When a mass moves from $r_1$ to $r_2$:
$$\Delta E_p = E_{p2} - E_{p1} = \left(-\frac{GMm}{r_2}\right) - \left(-\frac{GMm}{r_1}\right) = GMm\left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$
*Examiners report that weak candidates try to write $GMm/(r_1 - r_2)$, which is mathematically completely wrong.*

> [!warning] Using $\Delta E_p = mg\Delta h$
> Only use this formula if the change in height $\Delta h$ is very small compared to the radius of the planet (i.e., $g$ is constant). If a rocket travels into space, you **MUST** use $\Delta E_p = GMm(1/r_1 - 1/r_2)$.

---

## 🚀 High-Yield Exam Scenarios & Tough Questions

### Scenario A: Binary Star Systems
Two stars of masses $M_A$ and $M_B$ orbit a common centre of mass. Distance between them is $d$.
*   **The Trap:** Students use the wrong radii in the equations.
*   **The Truth:** 
    *   The Gravitational Force uses the **total separation**: $F_g = G\frac{M_A M_B}{d^2}$
    *   The Centripetal Force uses the **radius of the specific star's orbit**: $F_c = M_A r_A \omega^2$
    *   Because they are locked in a binary orbit, they share the **same angular velocity ($\omega$)** and the **same time period ($T$)**.
    *   Equating them: $G\frac{M_A M_B}{d^2} = M_A r_A \omega^2$. (Notice $M_A$ cancels out!)

### Scenario B: Changing Orbits (Energy Considerations)
A satellite moves from a higher orbit to a lower orbit (radius $r$ decreases).
*   **Potential Energy ($E_p$):** Because $E_p = -GMm/r$, as $r$ decreases, the fraction $GMm/r$ gets larger, but because it is *negative*, the $E_p$ **decreases** (becomes more negative).
*   **Kinetic Energy ($E_k$):** From circular motion, $E_k = \frac{GMm}{2r}$. As $r$ decreases, $E_k$ **increases**.
*   *Examiners Note:* Do NOT just write "by conservation of energy, $E_k$ increases because $E_p$ decreases". If there are resistive forces or thrusters fired, total energy is not conserved! Use the orbital equations to prove it.

### Scenario C: Escape Velocity
A mass is projected from the surface of a planet to escape to infinity.
*   **Physics Principle:** Loss in Kinetic Energy = Gain in Potential Energy.
*   **Equation:** $\frac{1}{2}mv^2 = \Delta E_p = \frac{GMm}{R_{planet}} - 0$
*   *Catching Point:* Remember that total energy at infinity is 0. So initial $E_k + E_p \ge 0$.

### Scenario D: The Neutral Point (Null Point)
A point exactly between the Earth and the Moon where the resultant gravitational field strength is zero.
*   **Set up:** $g_{Earth} = g_{Moon} \Rightarrow \frac{GM_E}{x^2} = \frac{GM_M}{(d-x)^2}$
*   **Pro Tip for Algebra:** Do not expand the quadratic! Take the **square root of both sides** immediately: $\frac{\sqrt{M_E}}{x} = \frac{\sqrt{M_M}}{d-x}$. This saves massive amounts of time and prevents algebraic errors.

---

## 🧮 A Checklist for Calculations (Don't lose silly marks!)
- [ ] Did I convert **km to m**? ($10^3$)
- [ ] Did I convert **days/hours to seconds**? (e.g., $24 \times 60 \times 60$)
- [ ] Did I remember to **square** the radius in $g = GM/r^2$ and $F = GMm/r^2$?
- [ ] Did I remember **NOT to square** the radius in $\phi = -GM/r$ and $E_p = -GMm/r$?
- [ ] Did I remember the **negative sign** for Potential and Potential Energy?
- [ ] Is my radius calculated from the **centre of the planet**, or did I mistakenly use just the height above the surface? ($r = R + h$)
- [ ] In "Show That" questions, did I substitute **ALL numbers** (including $G$) into the equation before writing the final answer? (Examiners give 0 marks if you just write the formula and then the final answer).