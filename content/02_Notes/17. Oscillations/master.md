Here is a comprehensive, exam-focused Obsidian MD note for the Oscillations topic. It strictly follows the CIE A-Level Physics (9702) syllabus and is heavily infused with exact mark-scheme phrasing, edge-cases from past papers, and examiner tips.

You can copy and paste this directly into your Obsidian vault.

***

# ⚛️ Oscillations (CIE A-Level Physics 9702)

## 17.1 Simple Harmonic Oscillations (SHM)

> [!def] Definition: Simple Harmonic Motion (SHM)
> **Simple Harmonic Motion** is a specific type of oscillation where:
> 1. **Acceleration is directly proportional to displacement** from a fixed point / equilibrium position ($a \propto x$).
> 2. **Acceleration is always directed towards that fixed point** / acts in the opposite direction to the displacement ($a \propto -x$).

### Core Terminology
*   **Displacement ($x$):** The distance of a point on the wave from its equilibrium position. It is a vector quantity (can be positive or negative).
*   **Amplitude ($x_0$):** The maximum magnitude of displacement on either side of the equilibrium position.
*   **Period ($T$):** The time interval for one complete repetition/oscillation.
*   **Frequency ($f$):** The number of oscillations per unit time ($f = 1/T$).
*   **Angular Frequency ($\omega$):** The rate of change of angular displacement with respect to time. 
    *   $\omega = 2\pi f = \frac{2\pi}{T}$
*   **Phase Difference ($\phi$):** A measure of how much a point or wave is in front or behind another. Measured in radians or degrees.

### Restoring vs. Resistive Forces
*   **Restoring Force:** The force responsible for *causing* SHM. It always acts towards the equilibrium position.
*   **Resistive Force:** The force responsible for *damping*. It acts in the opposite direction to the *velocity/motion* of the oscillator.

> [!warning] Non-SHM Examples (Common Exam Trap)
> A bouncing ball or a person jumping on a trampoline is **NOT** undergoing SHM. 
> *Mark Scheme Justification:* When in the air, the restoring force acting on them is their weight, which is **constant**. Therefore, the force (and acceleration) is **not proportional to their displacement** from equilibrium.

### Key Equations & Kinematics
The defining equation of SHM is:
$$a = -\omega^2 x$$

**Proving SHM mathematically:**
If a question gives you a derived formula like $a = -\frac{2g}{L}x$ (liquid in a U-tube) or $a = -\frac{A\rho g}{m}x$ (floating block) and asks you to "Explain how this shows SHM", use this exact phrasing:
> *"The equation is in the form $a = -\text{constant} \times x$. This shows that acceleration is directly proportional to displacement, and the negative sign indicates they are in opposite directions."* (The constant is always equal to $\omega^2$).

**Displacement, Velocity, and Acceleration Equations:**
*   **Displacement:** 
    *   $x = x_0 \sin(\omega t)$ (If the object starts oscillating from the *equilibrium* position).
    *   $x = x_0 \cos(\omega t)$ (If the object starts oscillating from the *maximum amplitude*).
*   **Velocity:**
    *   $v = v_0 \cos(\omega t)$ (if displacement is a sine curve).
    *   $v = \pm \omega \sqrt{x_0^2 - x^2}$ (Used to find velocity at a specific displacement).
*   **Maximums:**
    *   **Maximum Velocity / Speed ($v_0$):** Occurs at $x = 0$. Formula: $v_{max} = \omega x_0$
    *   **Maximum Acceleration ($a_0$):** Occurs at $x = \pm x_0$. Formula: $a_{max} = \omega^2 x_0$

> [!info] SHM and Circular Motion
> Uniform circular motion can be linked to SHM. If a ball moves in a horizontal circle and a light shines on it, the shadow it casts on a screen performs Simple Harmonic Motion. The radius $R$ of the circle equals the amplitude $x_0$, so $x = R \sin(\omega t)$.

### Graphical Representations
1.  **Time Graphs ($t$ on x-axis):**
    *   **Displacement ($x-t$):** A sine or cosine curve.
    *   **Velocity ($v-t$):** The gradient of the $x-t$ graph. It is $90^\circ$ ($\frac{\pi}{2}$ rad) out of phase with displacement.
    *   **Acceleration ($a-t$):** The gradient of the $v-t$ graph. It is $180^\circ$ ($\pi$ rad) out of phase with displacement (a direct vertical reflection of the $x-t$ graph).
2.  **Acceleration-Displacement Graph ($a-x$):**
    *   A straight line passing exactly through the origin.
    *   It has a **negative gradient** equal to $-\omega^2$.
3.  **Velocity-Displacement Graph ($v-x$):**
    *   Forms a closed loop / ellipse around the origin.
    *   Intercepts the x-axis at $\pm x_0$ (velocity is 0 at max amplitude).
    *   Intercepts the y-axis at $\pm v_0$ (velocity is max at equilibrium).

---

## 17.2 Energy in Simple Harmonic Motion

### Energy Interchange
In an undamped SHM system, the **Total Energy ($E_T$)** remains perfectly constant. Energy simply transfers between forms:
*   **Simple Pendulum:** Gravitational Potential Energy (max at amplitude) $\rightleftharpoons$ Kinetic Energy (max at equilibrium).
*   **Horizontal Spring:** Elastic Potential Energy (max at amplitude) $\rightleftharpoons$ Kinetic Energy (max at equilibrium).
*   **Vertical Spring:** A constant interplay of EPE, GPE, and KE.

### Energy Equations
Because $E_T$ is constant, we can calculate it using the maximum kinetic energy (which occurs when $v = v_0$):
$$E_T = \frac{1}{2} m v_0^2$$
Since $v_0 = \omega x_0$, we get the standard total energy formula:
$$E_T = \frac{1}{2} m \omega^2 x_0^2$$

From this, we can derive the energy at any specific displacement $x$:
*   **Kinetic Energy:** $E_K = \frac{1}{2} m \omega^2 (x_0^2 - x^2)$
*   **Potential Energy:** $E_P = \frac{1}{2} m \omega^2 x^2$

### Energy Graphs
*   **Energy vs. Displacement ($E-x$):**
    *   **$E_P$ Curve:** A 'U' shaped parabola. Min at $x=0$, Max at $\pm x_0$.
    *   **$E_K$ Curve:** An 'n' shaped inverted parabola. Max at $x=0$, Min (zero) at $\pm x_0$.
    *   **$E_T$ Line:** A horizontal straight line capping the peaks of $E_K$ and $E_P$.
*   **Energy vs. Time ($E-t$):**
    *   Kinetic and potential energy cycle from max to min **twice** during one full displacement oscillation.
    *   *Rule:* Frequency of energy oscillation = $2 \times$ Frequency of displacement oscillation.

---

## 17.3 Damped and Forced Oscillations, Resonance

### Damping
> [!def] Damping
> The reduction in energy and amplitude of oscillations due to resistive forces acting on the oscillating system.

*   **Causes of Damping:** Air resistance, friction (e.g., between wheels and a track), viscous drag (in liquids).
*   **Electromagnetic Damping (Eddy Currents):** *Must use exact mark scheme phrasing:* 
    1. The magnet's motion causes cutting of magnetic flux.
    2. This induces an e.m.f. in the metal/coil.
    3. The e.m.f. causes induced (eddy) currents, leading to thermal energy dissipation in the resistor/metal.
    4. Energy is drawn from the oscillations, and the induced magnetic field opposes the motion of the magnet.

**Three Types of Damping:**
1.  **Light Damping:** The amplitude gradually decreases/decays exponentially over time. The time period $T$ remains constant. (e.g., pendulum in air).
2.  **Critical Damping:** The system returns to the equilibrium position in the *shortest possible time* without oscillating or overshooting. (e.g., car suspension).
3.  **Heavy Damping:** The system returns to equilibrium very slowly, without oscillating. (e.g., door closing dampers).

### Free vs. Forced Oscillations
*   **Free Oscillation:** A body oscillates without any loss of energy (no resistive forces) and with no external forces applied. It oscillates at its **natural frequency ($f_0$)**.
*   **Forced Oscillation:** A body is made to vibrate by a continuous external periodic force (a driving force) inputting energy into the system at a **driving frequency ($f$)**.

### Resonance
> [!def] Resonance
> Occurs when the driving frequency of an external force equals the natural frequency of the oscillating system ($f = f_0$). This results in the system oscillating with a **maximum amplitude** and absorbing maximum energy.

**The Resonance Curve (Amplitude vs. Driving Frequency):**
*   Features a sharp peak where driving frequency = natural frequency.
*   The amplitude does *not* reach infinity at the peak because there are always some frictional/damping forces present in reality.

**Effect of Damping on the Resonance Curve:**
If you increase damping on a resonating system:
1.  The peak amplitude becomes **lower**.
2.  The curve becomes **broader/flatter** (less sharp).
3.  The peak shifts slightly to the **left** (resonance occurs at a slightly lower driving frequency).

**Examples of Resonance:**
*   **Useful:** Piezoelectric quartz crystals vibrating for accurate timing/ultrasound generation; MRI scanners; microwaves matching the natural frequency of water molecules to heat food.
*   **Destructive (to be avoided):** Vibrating metal body panels in cars; bridges oscillating wildly in the wind. *Mitigation:* Add stiffening struts or damping materials to change the natural frequency or absorb energy.

---

## 🧠 Examiner Tips & Common Pitfalls

> [!check] Calculations & Formulas
> *   **RADIANS MODE:** Whenever you calculate displacement using $x = x_0 \sin(\omega t)$ or $x_0 \cos(\omega t)$, your calculator **MUST** be in radians mode. The product $\omega t$ is an angle in radians, not degrees.
> *   **Speed vs. Velocity:** Exams frequently ask for the *speed* of the oscillator. Speed is a scalar. Calculate velocity using $v = \pm \omega \sqrt{x_0^2 - x^2}$ and simply omit the $\pm$ sign for your final answer.
> *   **Extracting $\omega$ from maximums:** If a question gives you $v_{max}$ and $a_{max}$ (or you read them off a graph), you can easily find angular frequency: $\omega = \frac{a_{max}}{v_{max}}$.

> [!check] Graphing Rules
> *   **Drawing Arrows:** If asked to label Wavelength ($\lambda$), Period ($T$), or Amplitude ($x_0$) on a graph, draw the arrows exactly from peak-to-peak or axis-to-peak. Sloppy, short, or floating arrows that don't touch the lines will be penalized.
> *   **Sketching Curves:** Make sure your sine/cosine curves are drawn symmetrically. For $E-x$ graphs, ensure the curves are distinctly U-shaped (parabolic) and not V-shaped (linear).

> [!check] Definitions & Explanations
> *   **Restoring vs. Resistive:** Do not mix these up. The *restoring* force pulls the mass back to $x=0$ and creates the SHM. The *resistive* force opposes the velocity and creates the damping.
> *   **Proving SHM:** Never just say "it oscillates". You must state that the formula is in the form $a = - \text{constant} \times x$, which means $a \propto x$, and the minus sign proves they are in opposite directions.

