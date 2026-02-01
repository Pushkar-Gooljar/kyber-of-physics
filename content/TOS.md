hell
***

# 18.5 Electric Potential

## 1. Definition of Electric Potential ($V$)

> [!INFO] Syllabus Definition
> The **electric potential** at a point is defined as the **work done per unit positive charge** in bringing a small test charge from **infinity** to that point.
> 
> $$ V = \frac{W}{Q} $$

*   **Unit:** Volt (V) or Joule per Coulomb (J C$^{-1}$).
*   **Nature:** **SCALAR**. (This is critical. You do not resolve potential into components. You simply add them: $V_{total} = V_1 + V_2$).
*   **The Reference Point:** Infinity ($\infty$) is defined as the point of **zero potential**.

---

## 2. Electric Potential of a Point Charge
For an isolated point charge $Q$, the potential at a distance $r$ is given by:

$$ V = \frac{Q}{4\pi\epsilon_0 r} $$

> [!WARNING] "Top in World" Precision: Signs Matter!
> Unlike Force or Field Strength where we often calculate magnitude and decide direction later, for Potential **you must substitute the sign of the charge**.
> 
> | Source Charge | Potential ($V$) | Meaning |
> | :--- | :--- | :--- |
> | **Positive ($+Q$)** | **Positive ($+V$)** | Work must be done **by an external agent** to push a $+ve$ test charge against repulsion. |
> | **Negative ($-Q$)** | **Negative ($-V$)** | Work is done **by the field** to pull a $+ve$ test charge in (Potential Well). |

### Graphical Representation ($V$ vs $r$)
*   **Shape:** Rectangular Hyperbola ($V \propto 1/r$).
*   **Comparison:** It falls off *slower* than Field Strength ($1/r^2$).
*   **At Surface ($R$):** $V = \frac{Q}{4\pi\epsilon_0 R}$.
*   **Inside a Conductor ($r < R$):** **CONSTANT**. The potential inside a hollow or solid conducting sphere is the same as the potential at the surface. (Because $E=0$ inside, no work is done moving charge around inside).

---

## 3. Relationship between Field Strength and Potential
Electric Field Strength is the **potential gradient**.

$$ E = - \frac{\Delta V}{\Delta x} \quad \text{or} \quad E = - \frac{dV}{dr} $$

*   **The Negative Sign:** Indicates that the field lines point in the direction of **decreasing potential** (from High Potential $\to$ Low Potential).
*   **Graphical Connection:**
    *   The **Gradient** of a $V-r$ graph is $-E$.
    *   The **Area** under an $E-r$ graph is $\Delta V$.

---

## 4. Electric Potential Energy ($E_P$)
If Electric Potential is "Work per unit charge", then Electric Potential Energy is the total work for a specific charge $q$.

$$ E_P = qV $$
$$ E_P = \frac{Qq}{4\pi\epsilon_0 r} $$

*   **Unit:** Joules (J).
*   **Scalar Quantity.**

### Determining the Nature of the Interaction
The sign of $E_P$ tells you the stability of the system:
1.  **Like Charges ($+,+$ or $-,-$):** $E_P$ is **Positive**.
    *   Repulsive system.
    *   You must put energy *in* to bring them together.
    *   The system "wants" to fly apart (converting $E_P \to E_k$).
2.  **Opposite Charges ($+,-$):** $E_P$ is **Negative**.
    *   Attractive system (Bound state).
    *   To separate them (move to $\infty$), you must supply energy (Work Done).

---

## 5. Paper 4 Application: Conservation of Energy
This is the most common high-mark question type for this topic.

**Scenario:** An alpha particle ($+2e$, mass $m$) is fired with speed $u$ at a gold nucleus ($+79e$) but stops momentarily at a distance $d$ (Distance of Closest Approach) before rebounding.

**Concept:** Loss of Kinetic Energy = Gain in Electric Potential Energy.

$$ \Delta E_k = \Delta E_P $$
$$ \frac{1}{2}mu^2 = \frac{Q_{gold} q_{\alpha}}{4\pi\epsilon_0 d} $$

> [!TIP] Problem Solving Strategy
> 1.  **Initial State:** Far away ($r \approx \infty$), so $E_P = 0$. Total Energy = $\frac{1}{2}mu^2$.
> 2.  **Final State:** Momentarily stopped at distance $d$. $E_k = 0$. Total Energy = $\frac{Qq}{4\pi\epsilon_0 d}$.
> 3.  **Equate:** Solve for $d$ or $u$.

---

## 6. Summary Comparison: Potential vs Field

| Feature | Electric Field Strength ($E$) | Electric Potential ($V$) |
| :--- | :--- | :--- |
| **Definition** | Force per unit +ve charge | Work per unit +ve charge |
| **Type** | **VECTOR** (Magnitude & Direction) | **SCALAR** (Magnitude & Sign) |
| **Formula (Point)** | $\frac{Q}{4\pi\epsilon_0 r^2}$ | $\frac{Q}{4\pi\epsilon_0 r}$ |
| **Relation** | Gradient of Potential | Integral of Field |
| **Inside Conductor** | Zero | Constant (Non-zero) |
| **Combined** | Vector Addition (Parallelograms) | Algebraic Sum ($V_1 + V_2$) |

> [!example] The "Zero" Trap
> **Question:** Two equal positive charges are separated by distance $2x$.
> *   **Midpoint Field:** $E = 0$ (Vectors cancel: $\to$ vs $\leftarrow$).
> *   **Midpoint Potential:** $V = V_1 + V_2 \neq 0$. (Scalars add: $V + V = 2V$).
>
> **Question:** One positive $+Q$ and one negative $-Q$ separated by $2x$.
> *   **Midpoint Field:** $E \neq 0$ (Vectors add: $\to$ and $\to$).
> *   **Midpoint Potential:** $V = 0$ (Scalars cancel: $+V$ and $-V$).