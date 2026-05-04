Here is a comprehensive, meticulously formatted, "single source of truth" Obsidian Markdown note for **CIE A-Level Physics (9702) Chapter 7: Waves**. 

It is designed using evidence-based learning principles, incorporating exact syllabus definitions, examiner traps, and advanced mathematical insights to push you toward that "Top in the World" standard.

***

# 🌊 Chapter 7: Waves

> [!abstract] Overview
> Waves transfer energy from one point to another without the net transfer of matter. This chapter lays the foundation for understanding wave mechanics, from the display of wave profiles on an oscilloscope to the intricacies of the Doppler effect and polarisation. Mastery of exact definitions and graphical analysis is critical here.

---

## 7.1 Progressive Waves

> [!def] Progressive Wave
> A wave that transfers energy from one point to another **without the transfer of matter**. The energy is transferred through the oscillations (vibrations) of particles in a medium, or electromagnetic fields in a vacuum.

### Key Wave Parameters
Exact definitions are heavily tested in Paper 2. Memorise these word-for-word:

*   **Displacement ($$x$$ or $$y$$):** The distance of a point on the wave from its equilibrium (rest) position in a specified direction. *(Vector quantity)*
*   **Amplitude ($$A$$):** The **maximum** displacement of a particle in the wave from its equilibrium position.
*   **Wavelength ($$\lambda$$):** The minimum distance between two points on the wave that are oscillating exactly **in phase** (e.g., crest to crest).
*   **Period ($$T$$):** The time taken for one complete oscillation or cycle of the wave.
*   **Frequency ($$f$$):** The number of complete oscillations (or wavefronts) passing a fixed point per unit time. ($$f = \frac{1}{T}$$). Measured in Hertz ($$\text{Hz}$$).
*   **Phase Difference ($$\phi$$):** The difference in the stage of a cycle between two points on the same wave, or between two different waves, expressed in degrees ($$^\circ$$) or radians ($$\text{rad}$$).
	*   **In phase:** $$\phi = 0^\circ, 360^\circ, 2\pi \text{ rad}$$. Particles have the same displacement and velocity.
	*   **Antiphase:** $$\phi = 180^\circ, \pi \text{ rad}$$. Particles have opposite displacements and velocities.
	*   *Calculation:* $$\phi = \frac{x}{\lambda} \times 360^\circ$$ or $$\phi = \frac{t}{T} \times 2\pi$$

### The Wave Equation
By definition, speed is distance over time. If a wave travels a distance of one wavelength ($$\lambda$$), the time taken is one period ($$T$$).
$$$$ v = \frac{\lambda}{T} $$$$
Since $$f = \frac{1}{T}$$, we derive the fundamental wave equation:
$$$$ v = f\lambda $$$$

### Wave Energy and Intensity
Progressive waves carry energy. **Intensity ($$I$$)** is defined as the rate of energy transfer (power, $$P$$) per unit area ($$A$$) normal to the direction of wave propagation.

$$$$ I = \frac{P}{A} $$$$
*Units: $$W m^{-2}$$*

> [!important] Intensity Proportionalities (Crucial for A*!)
> 1. **Intensity and Amplitude:** Intensity is directly proportional to the square of the amplitude.
> $$$$ I \propto A^2 $$$$
> *(If amplitude doubles, intensity increases by a factor of 4).*
> 
> 2. **Intensity and Frequency:** Intensity is directly proportional to the square of the frequency.
> $$$$ I \propto f^2 $$$$
>
> 3. **Inverse Square Law (Spherical Waves):** As a wave spreads out from a point source in 3D space, energy spreads over the surface area of a sphere ($$4\pi r^2$$).
> $$$$ I \propto \frac{1}{r^2} $$$$

### Using a Cathode-Ray Oscilloscope (CRO)
A CRO visually displays the waveform of an alternating electrical signal.
*   **Y-axis (Y-gain):** Represents Voltage (Amplitude). Measured in $$\text{V div}^{-1}$$.
*   **X-axis (Time-base):** Represents Time (Period). Measured in $$\text{s div}^{-1}$$.

> [!tip] Examiner Trick: CRO Calculations
> To find the frequency from a CRO trace:
> 1. Count the number of horizontal divisions for **one complete wave cycle**.
> 2. Multiply by the **time-base** setting to find the Period ($$T$$). *(Watch out for units like $$ms$$ or $$\mu s$$!)*
> 3. Calculate $$f = \frac{1}{T}$$.

---

## 7.2 Transverse and Longitudinal Waves

### Transverse Waves
> [!def] Transverse Wave
> A wave in which the oscillations of the particles/fields are **perpendicular** to the direction of energy transfer (wave propagation).
*   **Features:** Consists of peaks (crests) and troughs.
*   **Examples:** All Electromagnetic (EM) waves, secondary seismic waves (S-waves), waves on a string.
*   **Unique property:** Can travel through a vacuum (if EM) and **can be polarised**.

### Longitudinal Waves
> [!def] Longitudinal Wave
> A wave in which the oscillations of the particles are **parallel** to the direction of energy transfer.
*   **Features:** Consists of **compressions** (regions of high pressure/particle density) and **rarefactions** (regions of low pressure/particle density).
*   **Examples:** Sound waves, primary seismic waves (P-waves), ultrasound.
*   **Unique property:** Require a medium to travel (cannot travel through a vacuum). **Cannot be polarised**.

### Graphical Representations: The Golden Trap
> [!warning] Displacement-Distance vs. Displacement-Time Graphs
> Examiners love to mix these up to catch you out. Always check the x-axis!
> *   **$$y$$ vs $$x$$ (Distance):** A "snapshot" of the whole wave in space. The distance between two peaks is the **Wavelength ($$\lambda$$)**.
> *   **$$y$$ vs $$t$$ (Time):** The motion of a *single particle* over time. The distance between two peaks is the **Period ($$T$$)**.

---

## 7.3 The Doppler Effect for Sound Waves

> [!def] The Doppler Effect
> The apparent change in the observed frequency and wavelength of a wave due to the relative motion between the source of the waves and the observer.

When a source moves **towards** an observer, the wavefronts bunch up. The wavelength decreases, and the observed frequency **increases** (higher pitch).
When a source moves **away**, wavefronts spread out. Wavelength increases, and observed frequency **decreases** (lower pitch).

### The Doppler Equation
For a source moving at velocity $$v_s$$ emitting sound of frequency $$f_s$$ in a medium where the wave speed is $$v$$:

$$$$ f_0 = f_s \left( \frac{v}{v \pm v_s} \right) $$$$
*Where:*
*   $$f_0$$ = Observed frequency
*   $$f_s$$ = Source frequency
*   $$v$$ = Speed of the wave in the medium (e.g., speed of sound $$\approx 340 \text{ m s}^{-1}$$)
*   $$v_s$$ = Speed of the moving source

> [!tip] Which sign to use? ($\pm$)
> *   **Moving Towards:** Denominator must be smaller to make $$f_0$$ larger. Use **MINUS** ($$v - v_s$$).
> *   **Moving Away:** Denominator must be larger to make $$f_0$$ smaller. Use **PLUS** ($$v + v_s$$).

---

## 7.4 The Electromagnetic Spectrum

All electromagnetic (EM) waves are transverse waves consisting of oscillating electric and magnetic fields. 

**Universal Properties of EM Waves:**
1. They all travel at the speed of light in a free space/vacuum ($$c = 3.00 \times 10^8 \text{ m s}^{-1}$$).
2. They are all transverse waves.
3. They can all be polarised.

### The Spectrum (Wavelengths to Memorise)
You must memorise the rough wavelength boundaries in meters ($$m$$). 
*Note: Boundaries overlap; these are typical ranges.*

| Region | Wavelength Range ($$m$$) |
| :--- | :--- |
| **Radio Waves** | $$> 10^{-1}$$ |
| **Microwaves** | $$10^{-1}$$ to $$10^{-3}$$ |
| **Infrared (IR)** | $$10^{-3}$$ to $$7 \times 10^{-7}$$ |
| **Visible Light** | $$7 \times 10^{-7}$$ to $$4 \times 10^{-7}$$ |
| **Ultraviolet (UV)** | $$4 \times 10^{-7}$$ to $$10^{-8}$$ |
| **X-rays** | $$10^{-8}$$ to $$10^{-13}$$ |
| **Gamma ($$\gamma$$) rays** | $$< 10^{-10}$$ |

> [!note] The Visible Spectrum
> You must know the visible spectrum specifically in nanometers ($$\text{nm}$$):
> **$$400 \text{ nm}$$ (Violet)** to **$$700 \text{ nm}$$ (Red)**.
> *(Red has the longest wavelength/lowest frequency; Violet has the shortest wavelength/highest frequency).*

---

## 7.5 Polarisation

> [!def] Polarisation
> The restriction of the oscillations of a transverse wave to a **single plane**. This plane contains the direction of wave propagation.

*   Unpolarised light (like sunlight or a filament lamp) oscillates in *all* planes perpendicular to the direction of travel.
*   **Longitudinal waves cannot be polarised** because their oscillations are already parallel to the direction of energy transfer.

### Polarising Filters & Malus's Law
A polariser (like Polaroid glass) only allows oscillations parallel to its transmission axis to pass through.

> [!warning] The Half-Rule (Examiner Trap)
> When **unpolarised** light of intensity $$I_0$$ passes through a single polarising filter, the transmitted light is perfectly plane-polarised, and its intensity is exactly halved:
> $$$$ I_{transmitted} = \frac{I_0}{2} $$$$
> *Do not use Malus's law for the first filter if the incident light is unpolarised!*

**Malus's Law** applies when already **plane-polarised** light passes through a *second* polarising filter (an analyser).

$$$$ I = I_0 \cos^2\theta $$$$
*Where:*
*   $$I$$ = Transmitted intensity
*   $$I_0$$ = Incident intensity (of the already polarised light)
*   $$\theta$$ = Angle between the plane of polarisation of the incident light and the transmission axis of the analyser.

**Key Angles:**
*   $$\theta = 0^\circ$$ (Parallel): $$I = I_0$$ (Maximum transmission)
*   $$\theta = 90^\circ$$ (Crossed): $$I = 0$$ (No light transmitted - complete absorption)

---

## 🧠 Masterclass: Common Traps & High-Scoring Tips

1.  **"Displacement" vs "Distance" in Definitions:** When defining wavelength, do not say "distance between two peaks". Say "minimum distance between two points vibrating in phase". For amplitude, it is "maximum **displacement** from equilibrium", not "maximum distance".
2.  **Intensity Ratios:** If a question says wave A has 3 times the amplitude of wave B, the intensity of A is $$3^2 = 9$$ times greater. If frequency also changes, calculate the overall multiplier using $$I \propto A^2 f^2$$.
3.  **Doppler Conversions:** The speed of sound is usually $$340 \text{ m s}^{-1}$$, but EM waves use $$c = 3.00 \times 10^8 \text{ m s}^{-1}$$. Always ensure the velocities ($$v$$ and $$v_s$$) are in the same units (usually $$\text{m s}^{-1}$$) before plugging into the Doppler equation.
4.  **Prefixes are Lethal:** In CRO questions, time-bases are often in $$\text{ms div}^{-1}$$ ($$\times 10^{-3}$$) or $$\mu\text{s div}^{-1}$$ ($$\times 10^{-6}$$). Missing this prefix is the #1 reason students lose calculation marks in Chapter 7.
5.  **Malus's Law Cascades:** If light passes through 3 filters, calculate the intensity drop step-by-step. Filter 1 halves the unpolarised light. Filter 2 applies Malus's law based on the angle to Filter 1. Filter 3 applies Malus's law based on the angle to Filter 2.
