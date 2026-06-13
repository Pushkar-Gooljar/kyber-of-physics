Here are your comprehensive, top-tier revision notes for **CIE 9702 A Level Physics: Chapter 16 - Thermodynamics**. 

These notes are formatted perfectly for Obsidian MD, utilising your custom `[!concept]` and `[!math]` callouts, seamlessly integrating syllabus requirements, textbook insights, and crucial examiner/mark scheme tropes.

***

# Chapter 16: Thermodynamics

## 16.1 Internal Energy

Thermodynamics is fundamentally  study of energy transfers within a system. To understand this, we must first define the energy contained *within* the matter itself.

> [!cite] Definition: Internal Energy ($U$)
> The internal energy of a system is defined as the **sum of a random distribution of kinetic and potential energies** associated with the molecules of a system.
> *Examiner Tip: If an exam asks you to define internal energy, you **must** include the words "sum of", "random distribution", and "kinetic and potential". Omission of the word "random" is the most common reason students lose this mark!*

All molecules in a substance possess these two forms of energy:
1. **Kinetic Energy (KE):** Associated with the random motion (translational, rotational, and vibrational speed) of the molecules. A rise in the thermodynamic temperature of an object is directly related to an increase in the mean kinetic energy of its molecules.
2. **Potential Energy (PE):** Associated with the **intermolecular forces** between the molecules. It varies with the separation of the particles (i.e., the state of matter).

![Internal Energy in Water](https://cdn.savemyexams.com/cdn-cgi/image/f=auto,width=3840/https://cdn.savemyexams.com/uploads/2021/05/6.4.1-Internal-Energy-in-Water.png)

### The Ideal Gas Exception
A staple concept in A Level Physics is understanding how an ideal gas differs from real gases, liquids, and solids regarding internal energy.

> [!concept] Internal Energy of an Ideal Gas
> One of the core assumptions of the kinetic theory of ideal gases is that **there are no intermolecular forces** between the molecules. 
> Because there are no intermolecular forces, the molecules have **zero potential energy**. 
> Therefore, the internal energy of an ideal gas is purely equal to the **total kinetic energy** of its molecules. 

Because internal energy in an ideal gas is solely kinetic, and mean kinetic energy is directly proportional to thermodynamic temperature ($E_k = \frac{3}{2}kT$), we can state:
> [!math] $\Delta U \propto \Delta T$
> For an ideal gas, the change in internal energy is directly proportional to the change in thermodynamic temperature. If the temperature doesn't change (isothermal), the internal energy doesn't change ($\Delta U = 0$).

### Changing Internal Energy
The internal energy of a system is determined entirely by the *state* of the system (its pressure, volume, and temperature). It can be increased by:
1. Doing **work** on the system (e.g., compressing a gas).
2. Adding **thermal energy** to it (heating it).

![Molecular Movement at Low and High Temperatures](https://cdn.savemyexams.com/cdn-cgi/image/f=auto,width=3840/https://cdn.savemyexams.com/uploads/2021/04/16.1-Change-in-internal-energy.png)

---

## 16.2 Work Done by/on a Gas

When a gas expands or is compressed, energy is transferred. If a gas expands, it pushes against the walls of its container (or a moveable piston), exerting a force over a distance. 

![Piston Expansion](https://cdn.savemyexams.com/cdn-cgi/image/f=auto,width=3840/https://cdn.savemyexams.com/uploads/2021/04/16.1-Work-done-by-gas.png)

> [!math] Work Done at Constant Pressure
> $$W = p\Delta V$$
> Where:
> *   $W$ = Work done (Joules, $\text{J}$)
> *   $p$ = External pressure (Pascals, $\text{Pa}$)
> *   $\Delta V$ = Change in volume ($\text{m}^3$)

> [!warning] Examiner Tip: "External" Pressure
> The pressure $p$ in the equation $W = p\Delta V$ is the pressure of the **surroundings** (often atmospheric pressure), not necessarily the internal pressure of the gas itself. This is because when a gas expands, it is doing work *against* the external environment.

### $pV$ (Pressure-Volume) Graphs
Work done can be found graphically. On a graph of pressure against volume:
* The **area under the line** represents the work done.
* If the gas expands (moves right on the x-axis), work is done *by* the gas.
* If the gas is compressed (moves left on the x-axis), work is done *on* the gas.
* *Note: If pressure is not constant, $W = p\Delta V$ cannot be used directly; you must count the squares or calculate the area under the curve.*

---

## 16.3 The First Law of Thermodynamics

The First Law of Thermodynamics is essentially the **principle of conservation of energy** applied to a thermodynamic system.

> [!math] The First Law of Thermodynamics
> $$\Delta U = q + W$$
> Where:
> *   $\Delta U$ = Increase in internal energy of the system ($\text{J}$)
> *   $q$ = Thermal energy transferred (heating) **to** the system ($\text{J}$)
> *   $W$ = Work done **on** the system ($\text{J}$)

### The Strict Sign Convention
Mastering the sign convention is the difference between an A* and a B in this topic. The CIE syllabus strictly defines $W$ as work done **ON** the gas. 

| Variable | Positive (+) | Negative (-) |
| :--- | :--- | :--- |
| **$\Delta U$** | Internal energy **increases** (Temp rises for ideal gas) | Internal energy **decreases** (Temp drops for ideal gas) |
| **$q$** | Thermal energy is **supplied to** the system | Thermal energy is **removed from** the system |
| **$W$** | Work is done **on** the system (Gas is **compressed** / $\Delta V$ is negative) | Work is done **by** the system (Gas **expands** / $\Delta V$ is positive) |

![Positive and Negative Work Convention](https://cdn.savemyexams.com/cdn-cgi/image/f=auto,width=3840/https://cdn.savemyexams.com/uploads/2023/07/2-4-1-positive-and-negative-work-done-convention.png)

---

## Exam Tropes & Discriminator Questions

Past papers heavily recycle specific scenarios. You must be able to view everyday physical processes through the lens of $\Delta U = q + W$.

### Trope 1: Boiling vs. Melting (Changes of State)
**The Scenario:** You are asked to explain what happens to internal energy during melting or boiling, or why the Specific Latent Heat of Vaporisation ($L_v$) is much larger than Fusion ($L_f$).
**The Physics:**
*   **Melting (Solid to Liquid):** Thermal energy is supplied ($+q$). The temperature is constant, so kinetic energy is constant. The molecular spacing increases slightly, so Potential Energy increases. The volume change is negligible, so **work done is roughly zero** ($W \approx 0$). Therefore, $\Delta U = q$.
*   **Boiling (Liquid to Gas):** Thermal energy is supplied ($+q$). Temperature is constant, so KE is constant. Molecular spacing increases *massively*. The gas expands against atmospheric pressure, meaning **work is done BY the gas against the atmosphere** ($-W$). 
*   **Why $L_v \gg L_f$:** During vaporisation, a significant portion of the thermal energy supplied ($q$) must be used to do work *against* atmospheric pressure (because of the massive volume expansion) AND to completely break the intermolecular bonds (massive increase in PE). During melting, there is almost no expansion work, and bonds are only loosened, not fully broken.

### Trope 2: The Bicycle Pump (Rapid Compression)
**The Scenario:** A gas is compressed very quickly in a cylinder or pump, and you are asked why the temperature rises.
**The Physics:** 
*   The gas is compressed, so volume decreases. Therefore, work is done **ON** the gas ($+W$).
*   Because the compression happens *rapidly*, there is no time for thermal energy to escape to the surroundings ($q = 0$).
*   Using $\Delta U = q + W$, if $q = 0$ and $W$ is positive, then $\Delta U$ must be positive.
*   An increase in internal energy means an increase in molecular kinetic energy, which manifests as a **rise in temperature**.

### Trope 3: Thermodynamic Cycles ($pV$ Loops)
**The Scenario:** A gas undergoes a sequence of changes (e.g., A $\rightarrow$ B $\rightarrow$ C $\rightarrow$ A) and you must fill in a table for $\Delta U$, $q$, and $W$.
**The Physics:**
*   **The Complete Cycle Rule:** If a gas returns to its exact original state (A $\rightarrow$ A), its final temperature is identical to its initial temperature. Therefore, over the complete cycle, **the total change in internal energy is zero** ($\Delta U_{total} = 0$). 
*   Because $\Delta U_{total} = 0$, the First Law dictates that over a full cycle: $0 = q_{total} + W_{total} \implies q_{total} = -W_{total}$. The net heat supplied equals the net work done by the gas.
*   **Isothermal changes:** If a specific path on the graph is isothermal (constant temperature), $\Delta U = 0$ for that path. So, $q = -W$. If the gas expands isothermally, it does work ($-W$), so it must absorb heat ($+q$) to keep its temperature from dropping.

> [!example] Past Paper Walkthrough: Calculating $\Delta U$ during Boiling
> **Question:** $1.00 \text{ kg}$ of liquid water at $100^\circ\text{C}$ is boiled at atmospheric pressure ($1.01 \times 10^5 \text{ Pa}$). The volume of the liquid is $1.00 \times 10^{-3} \text{ m}^3$ and the volume of the resulting vapour is $1.69 \text{ m}^3$. The specific latent heat of vaporisation is $2.26 \times 10^6 \text{ J kg}^{-1}$. Calculate the increase in internal energy of the water.
> 
> **Step 1: Calculate heat supplied ($q$)**
> $q = mL = (1.00)(2.26 \times 10^6) = +2.26 \times 10^6 \text{ J}$ (Positive because heat is supplied).
> 
> **Step 2: Calculate work done ($W$)**
> $\Delta V = V_{final} - V_{initial} = 1.69 - 1.00 \times 10^{-3} = 1.689 \text{ m}^3$
> $W = p\Delta V = (1.01 \times 10^5) \times (1.689) = 1.71 \times 10^5 \text{ J}$
> *Crucial Step:* The gas expanded. Therefore, work was done *by* the gas. According to convention, $W = -1.71 \times 10^5 \text{ J}$.
> 
> **Step 3: Apply the First Law**
> $\Delta U = q + W$
> $\Delta U = (2.26 \times 10^6) + (-1.71 \times 10^5) = 2.09 \times 10^6 \text{ J}$


You are an expert senior examiner, data analyst, and personal tutor for 9701 A Level Chemistry. I have attached the following resources relating to 9701 A Level chapter 24. Electrochemistry:
1. Worksheet with mark scheme answers
2. SaveMyExams Notes
3. A pdf file containing the images used in the SaveMyExams notes as well as their CDN URLs so they can be used to embed images into notes.
4. Same type of image URL pdf but for Cognito Edu notes
5. Notes from the reputable Collins textbook for A Level Chemistry
6. Syllabus content for Chapter 24. Electrochemistry

Your task is to carefully analyse all the resources I have given you to create as a single markdown file for Obsidian MD perfect, top notch, high quality notes for the chapter 24. Electrochemistry.
The notes should contain everything listed in the syllabus content for 24. Electrochemistry, as well as information that came out in past papers but is not explicitly mentioned. 
Prioritise mark scheme answers where applicable.
Ensure that the notes are very high quality, the type of notes top students would kill to have, as such, in addition to making proper use of formatting including the various types of callouts, ensure you include extra details/context where appropriate to make grasping the concepts seamless. 
Also identify discriminator/staple or otherwise interesting/challenging/important questions from the past papers. The notes should be such that in addition to learning the knowledge, the reader should know how to answer common exam question tropes/types.
Include any other relevant/appropriate details/information you might consider to be useful.
