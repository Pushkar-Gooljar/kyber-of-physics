# ⚡ Electricity & D.C. Circuits (Master Note)
**Syllabus:** Chapters 9 & 10 (Cambridge International AS Level Physics 9702)
**Tags:** #physics #electricity #circuits #A-Level #9702

---

## 📑 Table of Contents
1. [[#1. Electric Current & Charge|Electric Current & Charge]]
2. [[#2. Potential Difference, E.M.F., and Power|Potential Difference, E.M.F., & Power]]
3. [[#3. Resistance & Resistivity|Resistance & Resistivity]]
4. [[#4. I-V Characteristics|I-V Characteristics]]
5. [[#5. D.C. Circuits & Kirchhoff's Laws|D.C. Circuits & Kirchhoff's Laws]]
6. [[#6. Potential Dividers & Potentiometers|Potential Dividers & Potentiometers]]
7. [[#7. Essential Past Paper MCQs|Essential Past Paper MCQs]]

---

## 1. Electric Current & Charge

> [!note] Official CIE Definitions
> **Electric Current:** The rate of flow of charge carriers. 
> **Quantised Charge:** Charge only exists in discrete amounts (multiples of the elementary charge, $e = 1.60 \times 10^{-19}\text{ C}$).

### Core Equations
$$Q = It$$
Where $Q$ is charge in Coulombs (C), $I$ is current in Amperes (A), and $t$ is time in seconds (s).

### Current in a Current-Carrying Conductor
The current can be expressed in terms of the microscopic properties of the conductor:
$$I = Anvq$$
*   **$A$**: Cross-sectional area ($m^2$)
*   **$n$**: Number density of charge carriers (number per unit volume, $m^{-3}$)
*   **$v$**: Average drift speed/velocity ($ms^{-1}$)
*   **$q$**: Charge of the charge carrier (for electrons, $q = e = 1.60 \times 10^{-19}\text{ C}$)

> [!tip] Examiner Tip: Conventional Current vs Electron Flow
> By definition, **conventional current** always goes from positive to negative. In metals, the actual charge carriers are electrons (negative), which flow from negative to positive. They flow in **opposite directions**, but the math works out the same!
> ![[9-E_9-1_CALCULAT_VB64.png]]

---

## 2. Potential Difference, E.M.F., and Power

These two definitions are the most frequently tested 1-2 mark questions in Paper 2. **Memorize them exactly as written in the Mark Scheme.**

> [!danger] E.M.F. vs P.D. (Mark Scheme Standard: e.g., 9702_m19_qp_22-Q6)
> *   **Electromotive Force (e.m.f.):** Energy transferred **from** chemical/other forms **to** electrical energy per unit charge (driven around a complete circuit).
> *   **Potential Difference (p.d.):** Energy transferred **from** electrical energy **to** thermal/other forms per unit charge (across a component).

**Equation:** $V = \frac{W}{Q}$ (where $W$ is work done / energy transferred).

### Electrical Power
Power is the rate of doing work. Using $V = IR$, we can substitute to get three variations:
$$P = VI \quad \implies \quad P = I^2R \quad \implies \quad P = \frac{V^2}{R}$$

> [!tip] Mnemonic
> Think: *"Twinkle Twinkle Little Star, Power equals $I$ squared $R$"*. Use $P = V^2/R$ when voltage is constant (e.g., parallel circuits), and $P=I^2R$ when current is constant (e.g., series circuits).

### Internal Resistance and Lost Volts
All real power supplies have an internal resistance ($r$). This causes some energy to be dissipated as heat *inside* the battery before it reaches the external circuit.

![[10-_10-_INTERNAL_NJ0U.png]]

$$E = I(R + r)$$
$$E = V + Ir$$
*Where:* $E$ = e.m.f., $V$ = terminal p.d. ($IR$), and $Ir$ = **lost volts**.

> [!example] High-Yield Graphic Analysis (Paper 2 & 3)
> If you plot a graph of Terminal p.d. ($V$) against Current ($I$):
> *   **y-intercept** = e.m.f ($E$)
> *   **gradient** = $-r$ (negative internal resistance)

---

## 3. Resistance & Resistivity

> [!note] Definition of Resistance and the Ohm
> **Resistance:** The ratio of potential difference across a component to the current through it ($R = V/I$).
> **The Ohm ($\Omega$):** One volt per ampere ($1\,\Omega = 1\text{ V A}^{-1}$).

### Resistivity ($\rho$)
Resistivity is a property of the *material* itself, independent of its shape. Resistance depends on resistivity, length, and cross-sectional area:
$$R = \frac{\rho L}{A}$$

> [!warning] Common Exam Trap
> Exam questions rarely give you the Area ($A$) directly. They give you the diameter ($d$). 
> Remember: **$A = \frac{\pi d^2}{4}$**. 
> Therefore, if the diameter doubles, the Area increases by a factor of 4, so Resistance drops by a factor of 4!
> ![[9-E_9-3_RESISTIV_1SG0.png]]

### Sensory Resistors
*   **LDR (Light Dependent Resistor):** As light intensity increases, resistance **decreases**. (More light frees up more charge carriers).
    ![[9-E_9-3_RESISTAN_25RU.png]]
*   **Thermistor (NTC):** As temperature increases, resistance **decreases**. (Thermal energy frees electrons, drastically increasing number density $n$).
    ![[9-E_9-3_RESISTAN_J01K.png]]

---

## 4. I-V Characteristics

You must be able to sketch and explain these three graphs:

### 1. Metallic Conductor (Fixed Resistor) at Constant Temp
*   **Ohm's Law:** Current is directly proportional to p.d., provided temperature remains constant.
*   Straight line through the origin.
![[9-E_9-3_OHMS-LAW_8KXE.png]]

### 2. Filament Lamp (Non-Ohmic)
*   **Explanation (Paper 2 staple):** As current increases, temperature increases. The metal lattice ions vibrate with greater amplitude. This causes a higher rate of collision with free electrons, impeding their flow. Hence, resistance increases.
*   Graph curves inward (gradient decreases if $I$ is on the y-axis).
![[9-E_9-3_I-V-CHAR_7NNK.png]]

### 3. Semiconductor Diode
*   **Forward bias:** Conducts easily past a certain threshold (approx 0.6V).
*   **Reverse bias:** Virtually zero current (infinite resistance).
![[9-E_9-3_I-V-CHAR_3TEB.png]]

---

## 5. D.C. Circuits & Kirchhoff's Laws

### Circuit Symbols You Must Know
![[10-_10-_CIRCUIT-_2D8C.png]]

### Kirchhoff's First Law (K1L)
> **Law:** The sum of currents entering a junction is exactly equal to the sum of currents leaving the junction. ($\Sigma I_{in} = \Sigma I_{out}$).
> **Fundamental Principle:** Conservation of **Charge**.
> ![[10-_10-_KIRCHHOF_BYUU.png]]

### Kirchhoff's Second Law (K2L)
> **Law:** In any closed loop network, the algebraic sum of the e.m.f.s is equal to the algebraic sum of the potential differences. ($\Sigma E = \Sigma IR$).
> **Fundamental Principle:** Conservation of **Energy**.
> ![[10-_10-_KIRCHHOF_VGQR.png]]

### Deriving Resistor Formulas (Frequent P2 Proofs)

> [!example] Deriving Series Resistance (using K2L)
> 1. Consider two resistors $R_1$ and $R_2$ in series with a supply $E$.
> 2. By K2L: Total p.d. $V = V_1 + V_2$.
> 3. Current $I$ is the same everywhere. Since $V = IR$:
> 4. $I R_{total} = I R_1 + I R_2$
> 5. Divide by $I$: **$R_{total} = R_1 + R_2$**

> [!example] Deriving Parallel Resistance (using K1L)
> 6. Consider two resistors $R_1$ and $R_2$ in parallel.
> 7. By K1L: Total current $I = I_1 + I_2$.
> 8. Voltage $V$ is the same across both branches. Since $I = V/R$:
> 9. $\frac{V}{R_{total}} = \frac{V}{R_1} + \frac{V}{R_2}$
> 10. Divide by $V$: **$\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2}$**

---

## 6. Potential Dividers & Potentiometers

### Potential Dividers
A circuit used to produce an output voltage as a fraction of its input voltage.
$$V_{out} = \left( \frac{R_2}{R_1 + R_2} \right) V_{in}$$
*Rule of thumb:* The ratio of the voltages is equal to the ratio of the resistances ($V_1/V_2 = R_1/R_2$). The larger resistor takes the larger share of the p.d.

![[10-_10-_POTENTIA_905L.png]]

### The Potentiometer (Null Method)
Used for highly accurate comparisons of e.m.f.s because at the "null point", **zero current is drawn from the test cell**, meaning no "lost volts" due to its internal resistance.

![[10-_10-_GALVANOM_GNOD.png]]

*   The jockey/sliding contact is moved along the wire until the galvanometer reads zero (the "null" point).
*   At this point, the p.d. across the length of the wire exactly balances the e.m.f. of the test cell: $E_{test} \propto L_{null}$.
*   Therefore, comparing two cells: $\frac{E_1}{E_2} = \frac{L_1}{L_2}$.

---

## 7. Essential Past Paper MCQs (Test Your Knowledge)

*Click the links to view the exact exam graphics.*

**Q1. Resistance of a stretched wire.** (A classic ratio trap). 
![MCQ 1](https://fra.cloud.appwrite.io/v1/storage/buckets/9702-p1-parts-jpg/files/9702_w22_qp_12-Q34/view?project=daddy-cambridge)
> *Solution Concept:* If volume is unchanged, stretching a wire so diameter decreases to $0.94d$ means Area decreases by $0.94^2 \approx 0.88$. To maintain volume, Length must increase by $1/0.88$. Since $R \propto L/A$, $R$ increases by $(1/0.88) / 0.88 = 1/(0.94^4) \approx 1.28$. **Answer: D**

**Q2. Internal resistance graphical interpretation.**
![MCQ 2](https://fra.cloud.appwrite.io/v1/storage/buckets/9702-p1-parts-jpg/files/9702_m19_qp_12-Q36/view?project=daddy-cambridge)
> *Solution Concept:* Graph B shows a straight line with a negative gradient. $V = E - Ir$. $V$ decreases linearly as $I$ increases. **Answer: B**

**Q3. Kirchhoff's Laws complex circuit.**
![MCQ 3](https://fra.cloud.appwrite.io/v1/storage/buckets/9702-p1-parts-jpg/files/9702_w20_qp_12-Q37/view?project=daddy-cambridge)
> *Solution Concept:* A bridge circuit. If the voltmeter reads zero, the potential at the left junction equals the potential at the right junction. This means the ratio of top/bottom resistors on the left equals the ratio of top/bottom on the right. $3.0 / 2.0 = R / 4.8 \implies R = 1.5 \times 4.8 = 7.2\,\Omega$. **Answer: C**

**Q4. Ammeters & Voltmeters with internal resistance.**
![MCQ 4](https://fra.cloud.appwrite.io/v1/storage/buckets/9702-p1-parts-jpg/files/9702_s21_qp_13-Q36/view?project=daddy-cambridge)
> *Solution Concept:* Adding a parallel external resistor decreases total circuit resistance. Current drawn from the cell increases. Because of the cell's internal resistance, more current means more "lost volts" ($Ir$). Thus, terminal p.d. (voltmeter reading) decreases. Ammeter reading (total current) increases. **Answer: C**

**Q5. Potentiometer logic (Null point movement).**
![MCQ 5](https://fra.cloud.appwrite.io/v1/storage/buckets/9702-p1-parts-jpg/files/9702_s21_qp_11-Q38/view?project=daddy-cambridge)
> *Solution Concept:* What is *not* a requirement? The internal resistance of cell X does *not* need to be known, because at the null point, zero current flows through X, hence $Ir_{x} = 0$, meaning the balance length measures the true e.m.f directly. **Answer: B**


