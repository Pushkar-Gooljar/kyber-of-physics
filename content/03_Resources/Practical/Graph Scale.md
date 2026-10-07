# Graph Scale Selection & The Danger Zone

## 1. Definitions

* **Large square:** $2\text{ cm}$ i.e. 10 small squares ($2\text{ mm}$)
* **$N$:** Total number of large squares on the axis:
  * $8$ on x-axis
  * $12$ on y-axis
* **$R$:** Range of data to be plotted on that axis ($R = \text{max} - \text{min}$)
* **$s$:** Value represented by 1 large square (e.g. 1 large square represents $50\ \Omega$)

---

## 2. Core Graph Rules

### Rule 1: Points must fit on the grid:
$$\text{Total axis range} \geq \text{Data range}$$
$$N \times s \geq R \implies s \geq \frac{R}{N}$$

### Rule 2: Points must occupy at least half the grid (50% rule)
$$\text{Squares used} \geq \frac{N}{2}$$
$$\frac{R}{s} \geq \frac{N}{2} \implies s \leq \frac{2R}{N}$$

> [!TIP]
> ### Combining both
> $$\frac{R}{N} \leq s \leq \frac{2R}{N}$$

---

## 3. Standard Scales Rule

The mark scheme requires **sensible scales**:
$$s \text{ must be } 1 \times 10^n, 2 \times 10^n, \text{ or } 5 \times 10^n$$

> [!WARNING]
> **Awkward scales** like 3, 4, 6, 7, 8 or 2.5 lose marks

### Derivation of the "Danger Zone"
We want to find when **no** standard scale can satisfy $\frac{R}{N} \leq s \leq \frac{2R}{N}$

Notice the ratio between consecutive standard scales:
* From $1$ to $2$: factor of $\frac{2}{1} = 2.0$
* From $5$ to $10$: factor of $\frac{10}{5} = 2.0$
* From $2$ to $5$: factor of $\frac{5}{2} = 2.5$

Because our acceptable range only allows a factor of $2$ ($\text{upper limit} = 2 \times \text{lower limit}$), a problem occurs **only between $2 \times 10^n$ and $5 \times 10^n$**.

For the entire interval to fall in the gap between $2 \times 10^n$ and $5 \times 10^n$:

1. The lower limit must be greater than $2 \times 10^n$:
   $$\frac{R}{N} > 2 \times 10^n$$

2. The upper limit must be less than $5 \times 10^n$:
   $$\frac{2R}{N} < 5 \times 10^n \implies \frac{R}{N} < 2.5 \times 10^n$$

Combining these two inequalities:
$$2 \times 10^n < \frac{R}{N} < 2.5 \times 10^n$$

Multiply everything by $N$:
$$\mathbf{2N \times 10^n < R < 2.5N \times 10^n}$$

---

## 4. Summary for Exam Planning

If your range $R$ falls in this interval, you cannot choose a standard scale that obeys both marking points.

* **For $N = 8$ squares:** (x-axis)
  $$16 \times 10^n < R < 20 \times 10^n$$
  *(Avoid ranges whose leading digits are between $1.6$ and $2.0$)*

* **For $N = 12$ squares:** (y-axis)
  $$24 \times 10^n < R < 30 \times 10^n$$
  *(Avoid ranges whose leading digits are between $2.4$ and $3.0$)*

> [!TIP]
> ### How to Check Leading Digits (Excluding Leading Zeros)
> Because the standard scales just repeat every power of 10, the $\times 10^n$ only shifts decimal places. 
> 1. Ignore units, prefixes (milli, micro, kilo), and $\times 10^{\text{power}}$.
> 2. **Skip past all leading zeros** until you reach the first non-zero number.
> 3. Read the first two digits to see if they land in the danger zone:
>    * $0.000\mathbf{18}\text{ A} \to \mathbf{18}$ (falls between $16$ and $20$) ❌
>    * $\mathbf{1.9}\times 10^{-6}\text{ V} \to \mathbf{19}$ (falls between $16$ and $20$) ❌
>    * $0.0\mathbf{27}\text{ mA} \to \mathbf{27}$ (falls between $24$ and $30$) ❌
>    * $0.0\mathbf{85}\text{ V} \to \mathbf{85}$ (Safe) 

---

## 5. Pre-Experiment Workflow & $R_y$ Calibration

Since modern exam graphs are linear, you can calibrate your range after testing just your two extreme points.

### Step 1: Test Extremes First
1. Measure your lowest and highest independent variable ($x$) points first.
2. Ensure $R_x$ is wide and its leading digits **are not between $1.6$ and $2.0$**.
3. Calculate $R_{y,\text{old}} = y_{\max} - y_{\min}$ and check if its leading digits fall between $2.4$ and $3.0$.

### Step 2: Proportional Scaling Formula
If $R_y$ is in the Danger Zone ($2.4 \to 3.0$), adjust $R_x$. Since gradient $m \approx \frac{R_y}{R_x}$ is constant (the intercept $c$ cancels out):

$$\frac{R_{y,\text{new}}}{R_{x,\text{new}}} = \frac{R_{y,\text{old}}}{R_{x,\text{old}}} \implies \mathbf{R_{x,\text{new}} = R_{x,\text{old}} \times \left( \frac{R_{y,\text{new}}}{R_{y,\text{old}}} \right)}$$

* **Normal adjustment (Expand):** Choose a safe $R_{y,\text{new}}$ with leading digits $\geq 3.1$ and expand $R_x$.
* **If $R_x$ is already at the physical or specified max (Shrink):** Choose a safe $R_{y,\text{new}}$ with leading digits below $2.4$ (aim for $\approx 2.1 \to 2.3$) and shrink $R_x$.

### Step 3: Complete the Table
Once your extreme points guarantee safe ranges for both axes, fill in your 4 to 5 intermediate readings evenly.

---

## 6. Critical Practical Warnings

> [!WARNING]
> ### 1. Transformed Graph Axes (e.g. $1/V$, $L^2$, $\sqrt{h}$)
> Always calculate $R$ using the **actual plotted values**, not the raw apparatus readings:
> * If the axis is $1/V$, then $R = \left|\frac{1}{V_{\min}} - \frac{1}{V_{\max}}\right|$.
> * If the axis is $L^2$, then $R = |L_{\max}^2 - L_{\min}^2|$.
> Run the danger zone check and calibration formula on these transformed numbers.

> [!WARNING]
> ### 2. Don't Lose the "Range" Mark
> When shrinking $R_x$ to drop $R_y$ below $2.4$, be careful not to make $R_x$ too small, or you will fail the mark scheme's minimum range requirement (e.g. $\Delta L \geq 70\text{ cm}$). Only shrink it by the small amount needed to hit leading digits $\approx 2.2$.

> [!WARNING]
> ### 3. Re-Check the New $R_x$
> After calculating $R_{x,\text{new}}$, quickly verify that its own leading digits haven't landed between $1.6$ and $2.0$.


>[!danger]
>Do not start or end your x-axis with your min and max values e.g. if you need to plat values from 6.5, ...., 45.6 do not start your graph with 6.5. start it with a multiple of $s$ like 5 in that case


