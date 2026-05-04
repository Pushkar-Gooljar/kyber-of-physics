# 🌊 Superposition (Cambridge 9702)

> [!abstract] Syllabus Overview
> This topic covers the behavior of waves when they meet. It is divided into four main sections:
> 1. **Stationary Waves** 
> 2. **Diffraction** 
> 3. **Interference** 
> 4. **The Diffraction Grating**

---

## 8.1 Stationary Waves & The Principle of Superposition

The fundamental rule governing all interference and stationary wave phenomena is the **Principle of Superposition**. You will be asked to define this in almost every exam series.

> [!info] Definition: Principle of Superposition
> When two (or more) waves **meet / overlap** (at a point), the **resultant displacement** is the (vector) **sum of the individual displacements**. 
> *(Ref: 9702_s25_ms_21 Q4, 9702_w23_ms_21 Q4)*

### Formation of Stationary Waves
A stationary (standing) wave is formed when two identical waves travelling in **opposite directions** superpose. 

*   **Nodes:** Points of zero amplitude (destructive interference).
*   **Antinodes:** Points of maximum amplitude (constructive interference).
*   **Wavelength ($\lambda$):** The distance between adjacent nodes (or adjacent antinodes) is exactly $\mathbf{\lambda / 2}$. The distance between a node and the adjacent antinode is $\mathbf{\lambda / 4}$.

> [!example] Model Answer: Formation of a Stationary Wave
> **Question:** An electromagnetic wave reflects at an aluminium sheet. Explain how the stationary wave, including its nodes and antinodes, is formed. *(Ref: 9702_w25_qp_24 Q4)*
> **Explanation:** The incident wave and the reflected wave travel in opposite directions and overlap. According to the principle of superposition, their displacements add together. 
> *   At points where the waves are $180^\circ$ out of phase, they cancel out to form **nodes** (zero amplitude). 
> *   At points where they meet in phase, they reinforce each other to form **antinodes** (maximum amplitude).

---

## 8.2 Diffraction

Diffraction explains how waves behave when they pass through a gap or around an obstacle.

> [!info] Definition: Diffraction
> The **bending / spreading** of a wave as it passes an edge or a slit.
> *(Ref: 9702_s12_ms_23 Q6)*

### Effect of Gap Width
The extent of diffraction depends on the ratio of the wavelength ($\lambda$) to the gap width ($a$).
*   **Maximum diffraction** occurs when the gap width is approximately equal to the wavelength ($a \approx \lambda$).
*   If the gap is much larger than the wavelength ($a \gg \lambda$), the wave passes through mostly unchanged, with only slight spreading at the edges.

---

## 8.3 Interference

For stable, observable interference patterns to form, the two sources of waves must be **coherent**.

> [!info] Definition: Coherence
> Waves are coherent if they have a **constant phase difference**.
> *(Ref: 9702_m19_ms_22 Q5)*
> *Note: Do not just say "same phase" or "same wavelength". The phrase "constant phase difference" is strictly required by the mark scheme.*

### Conditions for Observable Interference Fringes
1. The waves must meet/overlap.
2. The sources must be **coherent**.
3. The waves should have roughly the same amplitude (so dark fringes cancel out effectively).
4. (For transverse waves) They must be unpolarized or polarized in the same plane.

### The Double-Slit Equation
For a double-slit experiment (like Young's slits), the separation between adjacent bright (or dark) fringes is given by:

$$x = \frac{\lambda D}{a}$$

*   $x$ = fringe separation / fringe width (m)
*   $\lambda$ = wavelength (m)
*   $D$ = distance from slits to screen (m)
*   $a$ = distance between the centres of the two slits (m)

> [!tip] Graphing the Relationship
> Examiners love to ask you to sketch the relationship between fringe width ($x$) and slit separation ($a$). Since $x \propto \frac{1}{a}$, the graph of $x$ (y-axis) against $a$ (x-axis) is a **curved line with a negative gradient of decreasing magnitude** (a standard $1/x$ curve). 
> *(Ref: 9702_s25_ms_21 Q4)*

### Amplitude and Intensity
The intensity ($I$) of a wave is directly proportional to the square of its amplitude ($A$).
$$I \propto A^2$$

> [!example] Model Calculation: Finding Resultant Intensity
> **Question:** Two waves, with intensities $I$ and $4I$, superpose in phase. Determine, in terms of $I$, the maximum possible intensity of the resulting wave. *(Ref: 9702_s21_ms_23 Q4)*
> **Step 1:** Convert intensities to relative amplitudes. 
> $A_1 \propto \sqrt{I}$  and  $A_2 \propto \sqrt{4I} = 2\sqrt{I}$
> **Step 2:** Add the amplitudes (because they meet in phase for a maximum).
> $A_{max} = A_1 + A_2 = \sqrt{I} + 2\sqrt{I} = 3\sqrt{I}$
> **Step 3:** Square the resultant amplitude to find resultant intensity.
> $I_{max} \propto (A_{max})^2 = (3\sqrt{I})^2 = \mathbf{9I}$

### Changing the Experimental Conditions (High-Yield 🚨)
Examiners frequently ask what happens to the interference pattern if a parameter is changed. Memorize these standard answers:

| Change Made to Experiment | Effect on Fringe Separation ($x$) | Effect on Appearance of Fringes | Reference |
| :--- | :--- | :--- | :--- |
| **Reduce intensity of one slit** | No change | Bright fringes become **darker**; Dark fringes become **brighter**. *(Incomplete cancellation)* | *9702_s20_ms_21* |
| **Increase intensity of both slits** | No change | Bright fringes become **brighter**; Dark fringes are **unchanged** *(Still perfectly cancel out)*. | *9702_w18_ms_21* |
| **Use red light instead of green/blue** | Increases | Fringes spread further apart because red light has a **longer wavelength**. | *9702_s21_ms_23* |

---

## 8.4 The Diffraction Grating

A diffraction grating consists of thousands of narrow parallel slits. It produces much sharper and brighter maxima than a double slit.

### The Grating Equation
$$d \sin \theta = n\lambda$$

*   $d$ = grating spacing (distance between adjacent slits in meters). *If given lines per mm ($N$), $d = \frac{1}{N \times 10^3}$*.
*   $\theta$ = angle of the maximum from the central normal.
*   $n$ = order of the maximum ($0, 1, 2, ...$).
*   $\lambda$ = wavelength.

To find the **maximum number of orders** produced, set $\theta = 90^\circ$ ($\sin \theta = 1$) and solve for $n$, rounding **down** to the nearest whole number. 
*Total number of bright spots observed = $2n + 1$ (including the zero order).*

> [!example] Model Answer: Explaining the Diffraction Grating Pattern
> **Question:** White light is incident on a diffraction grating. Describe how the principle of superposition is used to explain (1) the white light at the zero order, and (2) the difference in position of red and blue light in the first order. *(Ref: 9702_w12_ms_21 Q4)*
> 
> **Answer:**
> 1. **Zero Order (White Light):** At the center, the path difference for all waves from all slits is zero. Therefore, every wavelength meets in phase (constructive interference), producing a maximum. Because all wavelengths/colors mix together at this point, the light appears white.
> 2. **First Order (Colored Spectrum):** To obtain a maximum, the path difference must equal exactly $\lambda$ (or phase difference $= 360^\circ$). Because the wavelength ($\lambda$) of red light is greater than that of blue light, the red and blue waves must travel at different angles to achieve their respective one-wavelength path differences. Hence, maxima occur at different angles, creating a spectrum.

> [!tip] Exam Tip: Red vs. Blue Light
> *   **Red light** has the **longest** visible wavelength ($\approx 700 \text{ nm}$) $\rightarrow$ it diffracts the **most** (largest $\theta$).
> *   **Blue/Violet light** has the **shortest** visible wavelength ($\approx 400 \text{ nm}$) $\rightarrow$ it diffracts the **least** (smallest $\theta$).
> *   Because blue light bends less, a grating will show **more orders** for blue light than for red light. *(Ref: 9702_s12_ms_23 Q6)*

