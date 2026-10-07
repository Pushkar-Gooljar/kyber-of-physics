---
title: 12 Motion in a Circle
tags: [9702, physics, A2]
---
Here is the note written using standard **CIE 9702 Physics** and **9709 Maths** notation and terminology.

---

# Graph Scale Derivation (CIE 9702 / 9709)

### Definitions
* $N$ = total number of large squares on the axis (usually $8$ or $12$).
* $R$ = range of data to be plotted ($R = x_{\text{max}} - x_{\text{min}}$).
* $s$ = value represented by $1$ large square.

---

### The Two Graph Rules (9702 Mark Scheme)

1. **Points must fit on the grid:**
   $$\text{Total axis range} \ge \text{Data range}$$
   $$N \times s \ge R \implies s \ge \frac{R}{N}$$

2. **Points must occupy at least half the grid (50% rule):**
   $$\text{Squares used} \ge \frac{N}{2}$$
   $$\frac{R}{s} \ge \frac{N}{2} \implies s \le \frac{2R}{N}$$

Combining both gives the acceptable range for the scale $s$:
$$\frac{R}{N} \le s \le \frac{2R}{N}$$

---

### Standard Scales Rule
The mark scheme requires **sensible scales**:
$$s \text{ must be } 1 \times 10^n, \quad 2 \times 10^n, \quad \text{or} \quad 5 \times 10^n$$
*(Awkward scales like $3, 7, 6,$ or $2.5$ lose marks).*

---

### Derivation of the "Danger Zone"

We want to find when **no** standard scale $s$ can satisfy $\frac{R}{N} \le s \le \frac{2R}{N}$.

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

### Summary for Exam Planning (9702 P3 / P5)

If your range $R$ falls in this interval, you cannot choose a standard scale that obeys both marking points.

* **For $N = 8$ squares:**
  $$16 \times 10^n < R < 20 \times 10^n$$
  *(Avoid ranges whose leading digits are between $1.6$ and $2.0$)*

* **For $N = 12$ squares:**
  $$24 \times 10^n < R < 30 \times 10^n$$
  *(Avoid ranges whose leading digits are between $2.4$ and $3.0$)*