Here are the high-quality, examiner-standard notes for **Topic 19.1: Capacitors and Capacitance**.

This topic is the direct application of the theory learned in **Topic 18 (Electric Fields)**.

***

# 19.1 Capacitors and Capacitance

## 1. Definition of Capacitance

Capacitance is a measure of the ability of a body to store electric charge.

> [!INFO] Syllabus Definition
> **Capacitance** ($C$) is defined as the ratio of the charge on a conductor to its potential (or the potential difference across it).
> 
> $$ C = \frac{Q}{V} $$

*   **Unit:** Farad (F).
*   **Base Units:** $1 \text{ F} = 1 \text{ C V}^{-1} = 1 \text{ A}^2 \text{ s}^4 \text{ kg}^{-1} \text{ m}^{-2}$ (Deriving this is a common Paper 1 skill).
*   **Scalar Quantity.**

### Context 1: Parallel Plate Capacitor
This is the standard circuit component.
*   **$Q$:** The magnitude of charge on **one** of the plates (Note: The net charge of the capacitor is zero, $+Q$ and $-Q$).
*   **$V$:** The potential difference **between** the plates.

### Context 2: Isolated Spherical Conductor
Any conductor can store charge. If you put charge on a sphere, its potential rises.
*   **$Q$:** The charge stored on the sphere.
*   **$V$:** The potential at the **surface** of the sphere (relative to infinity).

---

## 2. Capacitance of an Isolated Sphere
This is a frequent "Show that" derivation in Paper 4, linking Topic 18 and Topic 19.

**Derivation:**
1.  Recall the potential at the surface of a charged sphere of radius $R$:
    $$ V = \frac{Q}{4\pi\epsilon_0 R} $$
2.  Recall the definition of capacitance:
    $$ C = \frac{Q}{V} $$
3.  Substitute $V$ into the capacitance formula:
    $$ C = \frac{Q}{\left( \frac{Q}{4\pi\epsilon_0 R} \right)} $$
4.  Cancel $Q$ and rearrange:
    $$ C = 4\pi\epsilon_0 R $$

> [!TIP] Top in World Insight
> Notice that for an isolated sphere, $C \propto R$.
> *   This means the Earth has a capacitance.
> *   The "Capacity" depends **only on geometry** (Radius) and the medium ($\epsilon_0$). It does **not** depend on how much charge is actually on it.

---

## 3. Combinations of Capacitors
You must be able to **derive** these formulae from first principles (conservation of charge and energy).

### A. Capacitors in Parallel
**Visual:** Plates are connected side-by-side to the same potential terminals.

**The Physics:**
1.  **Potential Difference:** Connected to the same nodes, so p.d. is the same for all. ($V = V_1 = V_2$).
2.  **Charge:** The total charge drawn from the source is divided among the branches. ($Q_{total} = Q_1 + Q_2$).

**Derivation:**
$$ Q_{total} = Q_1 + Q_2 + ... $$
Since $Q = CV$:
$$ C_{total}V = C_1 V + C_2 V + ... $$
Divide by $V$ (since $V \neq 0$):
$$ C_{total} = C_1 + C_2 + ... $$

> [!NOTE] Analogy
> Capacitors in parallel behave like **Resistors in Series**. Adding more capacitors in parallel increases the total area available to store charge, thus **increasing** total capacitance.

---

### B. Capacitors in Series
**Visual:** Connected in a single chain.

**The Physics:**
1.  **Charge:** Due to electrostatic induction, the charge magnitude on each plate is the **same**.
    *   If $+Q$ flows to the left plate of $C_1$, it repels $+Q$ from the right plate.
    *   This $+Q$ flows to the left plate of $C_2$, and so on.
    *   $\therefore Q_{total} = Q_1 = Q_2$.
2.  **Potential Difference:** The total p.d. is split across the components (Kirchhoff's Voltage Law). ($V_{total} = V_1 + V_2$).

**Derivation:**
$$ V_{total} = V_1 + V_2 + ... $$
Since $V = \frac{Q}{C}$:
$$ \frac{Q}{C_{total}} = \frac{Q}{C_1} + \frac{Q}{C_2} + ... $$
Divide by $Q$:
$$ \frac{1}{C_{total}} = \frac{1}{C_1} + \frac{1}{C_2} + ... $$

> [!WARNING] Examiner's Trap: The "Total Charge"
> In a series circuit with two capacitors holding charge $Q$ each:
> *   **Wrong:** "Total charge is $2Q$."
> *   **Correct:** "Charge stored by the combination is $Q$."
>
> **Reason:** The circuit externally only "sees" the $+Q$ at the very start and the $-Q$ at the very end. The internal charges cancel out.

---

## Summary Table

| Feature             | Series Combination                                  | Parallel Combination            |
| :------------------ | :-------------------------------------------------- | :------------------------------ |
| **Circuit Diagram** | One path                                            | Multiple paths                  |
| **Current/Charge**  | Same ($Q = Q_1 = Q_2$)                              | Splits ($Q_{tot} = Q_1 + Q_2$)  |
| **Potential ($V$)** | Splits ($V_{tot} = V_1 + V_2$)                      | Same ($V = V_1 = V_2$)          |
| **Formula**         | $\frac{1}{C_{tot}} = \frac{1}{C_1} + \frac{1}{C_2}$ | $C_{tot} = C_1 + C_2$           |
| **Effect on $C$**   | Decreases ($C_{tot} < C_{min}$)                     | Increases ($C_{tot} > C_{max}$) |
| **Analogy**         | Like Resistors in Parallel                          | Like Resistors in Series        |