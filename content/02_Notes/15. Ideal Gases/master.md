# 15. Ideal Gases

An ultimate, comprehensive revision note covering Chapter 15 of the Cambridge (CIE) 9702 A Level Physics syllabus. This note synthesizes the syllabus requirements, derivation steps, essential mark scheme phrasing, and examiner tips to ensure top marks.

---

## 1. The Mole & Amount of Substance (15.1)

Before diving into the macroscopic and microscopic behaviors of gases, we must define how we quantify the gas particles themselves.

> [!concept] The Mole & Avogadro's Constant
> *   **Amount of substance** is an **SI base quantity**, and its base unit is the **mole (mol)**.
> *   The mole is a unit of *substance*, not a unit of mass.
> *   **One mole** of any substance is defined as the amount containing a number of particles equal to the **Avogadro constant ($N_A$)**.
> *   The Avogadro constant ($N_A$) is defined as exactly **$6.02 \times 10^{23} \text{ mol}^{-1}$** (the number of atoms in exactly 12 g of carbon-12).

### Key Equations for Moles
You can calculate the number of moles ($n$) using either the number of molecules ($N$) or the mass of the substance ($m$):

$$ n = \frac{N}{N_A} $$
$$ n = \frac{m}{M_r} $$

*Where:*
*   $N$ = total number of molecules
*   $N_A$ = Avogadro's constant ($6.02 \times 10^{23} \text{ mol}^{-1}$)
*   $m$ = total mass of the substance (g or kg)
*   $M_r$ = molar mass (mass of one mole of the substance in g mol⁻¹ or kg mol⁻¹)

> [!tip] Converting mass to particles (Standard Exam Question)
> In many past papers, you are given the mass of an ideal gas and asked to find the number of molecules. 
> 1. Find the mass of one molecule: $m_{\text{molecule}} = \text{nucleon number} \times \text{atomic mass unit } (u)$. Note: $1 \text{ u} = 1.66 \times 10^{-27} \text{ kg}$.
> 2. Total number of molecules $N = \frac{\text{Total Mass}}{m_{\text{molecule}}}$.

---

## 2. The Ideal Gas Equation of State (15.2)

### What is an Ideal Gas?
An ideal gas is a theoretical gas that perfectly obeys the gas laws under all conditions. 

> [!concept] Ideal Gas Definition
> An **ideal gas** is one that obeys the equation of state $pV \propto T$ (or $pV = \text{constant} \times T$) at all pressures, volumes, and temperatures, where $T$ is the **thermodynamic temperature**.

### Equations of State
There are two main forms of the ideal gas equation. You must be comfortable switching between them:

**1. Macroscopic Form (Using Moles)**
$$ pV = nRT $$
*Where:*
*   $p$ = pressure ($\text{Pa}$)
*   $V$ = volume ($\text{m}^3$)
*   $n$ = amount of substance ($\text{mol}$)
*   $R$ = molar gas constant ($8.31 \text{ J K}^{-1} \text{ mol}^{-1}$)
*   $T$ = thermodynamic temperature ($\text{K}$)

**2. Microscopic Form (Using Molecules)**
$$ pV = NkT $$
*Where:*
*   $N$ = total number of molecules
*   $k$ = Boltzmann constant ($1.38 \times 10^{-23} \text{ J K}^{-1}$)

### The Boltzmann Constant ($k$)
The Boltzmann constant bridges the gap between the macroscopic ideal gas equation and the microscopic kinetic theory. It is essentially the gas constant *per molecule*.
$$ k = \frac{R}{N_A} $$

> [!warning] Temperature Units!
> In ALL gas equations ($pV=nRT$, $pV=NkT$, $E_k = \frac{3}{2}kT$), the temperature $T$ **MUST** be in Kelvin (K). 
> $T (\text{in K}) = \theta (\text{in } ^\circ\text{C}) + 273.15$

---

## 3. Kinetic Theory of Gases (15.3)

The kinetic theory links the macroscopic properties of a gas (pressure, volume, temperature) to the microscopic motion of its molecules.

![Gas molecules move about randomly at high speeds](https://cdn.savemyexams.com/cdn-cgi/image/f=auto,width=3840/https://cdn.savemyexams.com/uploads/2021/05/15.1-Gas-molecules-in-a-box_2.png)

### The Basic Assumptions
You will be asked to recall these frequently. Memorize them perfectly.

> [!info] Assumptions of the Kinetic Theory of Ideal Gases
> 1. Molecules are in **continuous, random motion**.
> 2. The **volume** of the molecules is **negligible** compared to the volume of the containing vessel.
> 3. All collisions (between molecules and with the walls) are **perfectly elastic** (no loss of kinetic energy).
> 4. There are **no intermolecular forces** of attraction or repulsion (except during collisions).
> 5. The **time of a collision** is **negligible** compared to the time between collisions.
> 6. There is a very large number of molecules (allowing statistical averages to be used).

### How Molecules Exert Pressure
*A classic 3-4 mark qualitative past paper question.*
*   Molecules collide with the walls of the container.
*   The momentum of the molecule changes during the collision ($\Delta p = -2mc$).
*   By Newton's second law, this rate of change of momentum causes a **force** on the molecule by the wall.
*   By Newton's third law, the molecule exerts an equal and opposite **force on the wall**.
*   Many molecules exerting forces across the area of the wall leads to an average **pressure** ($p = \frac{F}{A}$).

### The Derivation of $pV = \frac{1}{3}Nm\langle c^2\rangle$
You must be able to derive this equation from first principles.

![Single molecule in a box](https://cdn.savemyexams.com/cdn-cgi/image/f=auto,width=3840/https://cdn.savemyexams.com/uploads/2021/04/15.2-Single-molecule-in-box.png)

> [!math] Deriving the Kinetic Theory Equation
> **Step 1: Change in Momentum of a single molecule**
> Consider a molecule of mass $m$ moving with velocity $c_x$ colliding perpendicularly with a wall. It rebounds elastically.
> *   Initial momentum = $m c_x$
> *   Final momentum = $-m c_x$
> *   Change in momentum $\Delta p = \text{final} - \text{initial} = -m c_x - m c_x = -2mc_x$
> 
> **Step 2: Time between collisions**
> The molecule travels to the opposite wall and back, a total distance of $2L$, before hitting the original wall again.
> *   Time $\Delta t = \frac{\text{distance}}{\text{speed}} = \frac{2L}{c_x}$
> 
> **Step 3: Force exerted by one molecule**
> From Newton's Second Law, force is the rate of change of momentum.
> *   $F = \frac{\Delta p}{\Delta t} = \frac{2mc_x}{2L / c_x} = \frac{m c_x^2}{L}$
> 
> **Step 4: Pressure exerted by one molecule**
> Pressure is force over area. The area of the wall is $L^2$.
> *   $p = \frac{F}{A} = \frac{m c_x^2 / L}{L^2} = \frac{m c_x^2}{L^3} = \frac{m c_x^2}{V}$ 
> *(where $V$ is the volume of the cubic box)*
> 
> **Step 5: Extending to $N$ molecules and 3 Dimensions**
> For $N$ molecules, the total pressure is the sum of all individual pressures, using the average squared speed in the $x$-direction $\langle c_x^2 \rangle$:
> *   $p = \frac{N m \langle c_x^2 \rangle}{V}$
> 
> Molecules move in 3D space: $c^2 = c_x^2 + c_y^2 + c_z^2$. 
> Since motion is random, the average speed in all directions is equal: $\langle c_x^2 \rangle = \langle c_y^2 \rangle = \langle c_z^2 \rangle$.
> Therefore, $\langle c^2 \rangle = 3\langle c_x^2 \rangle \implies \langle c_x^2 \rangle = \frac{1}{3}\langle c^2 \rangle$.
> 
> **Step 6: Final Equation**
> Substitute $\frac{1}{3}\langle c^2 \rangle$ for $\langle c_x^2 \rangle$:
> *   $p = \frac{1}{3} \frac{Nm}{V} \langle c^2 \rangle$  or  **$pV = \frac{1}{3}Nm\langle c^2\rangle$**

*(Note: Since Density $\rho = \frac{\text{Total Mass}}{Volume} = \frac{Nm}{V}$, the equation can also be written as **$p = \frac{1}{3}\rho\langle c^2\rangle$**)*

### Root-Mean-Square (r.m.s.) Speed
Because molecules move in different directions with different speeds, taking a simple average velocity would yield zero (as velocity is a vector). Instead, we use the **mean square speed** $\langle c^2 \rangle$.

> [!concept] Mean vs. R.M.S. Speed
> *   **$\langle c^2 \rangle$** is the **mean-square speed**. It is the average of the *squares* of the speeds of all particles.
> *   **$c_{\text{r.m.s.}}$** is the **root-mean-square speed**. It is the square root of the mean-square speed.
> *   $c_{\text{r.m.s.}} = \sqrt{\langle c^2 \rangle}$
> 
> *Exam Trap:* Mean speed is NOT the same as r.m.s. speed. Never use simple average speed in kinetic theory formulas!

---

## 4. Kinetic Energy and Temperature (15.3.4)

One of the most profound conclusions of the kinetic theory is that the macroscopic temperature of a gas is a direct measure of the microscopic average kinetic energy of its molecules.

> [!math] Deducing Average Translational Kinetic Energy
> We equate the macroscopic ideal gas equation with our newly derived microscopic kinetic theory equation.
> 1. $pV = NkT$
> 2. $pV = \frac{1}{3}Nm\langle c^2 \rangle$
> 
> Equating the two:
> $$ \frac{1}{3}Nm\langle c^2 \rangle = NkT $$
> 
> Cancel $N$ from both sides:
> $$ \frac{1}{3}m\langle c^2 \rangle = kT $$
> 
> We want the formula to look like kinetic energy ($E_k = \frac{1}{2}mv^2$). Multiply both sides by $\frac{3}{2}$:
> $$ \frac{1}{2}m\langle c^2 \rangle = \frac{3}{2}kT $$
> 
> Therefore, the average translational kinetic energy of a single molecule is:
> $$ E_k = \frac{3}{2}kT $$

*This equation proves that the average kinetic energy of gas molecules is directly proportional to the thermodynamic temperature ($E_k \propto T$).*

### Internal Energy of an Ideal Gas
This is an incredibly frequent exam topic, combining Thermodynamics (Chapter 14) and Ideal Gases.

**Internal energy** is defined as the sum of the random distribution of kinetic and potential energies of the molecules in a system. 
For an **ideal gas**:
1. We assumed there are **no intermolecular forces**.
2. Therefore, there is **no potential energy**.
3. Thus, the internal energy is **solely the kinetic energy** of the particles.

> [!info] The Golden Rule of Internal Energy for Ideal Gases
> For an ideal gas, **Internal Energy ($U$) is directly proportional to Thermodynamic Temperature ($T$)**. 
> $$ U = N \times E_k = \frac{3}{2}NkT = \frac{3}{2}nRT $$
> If temperature remains constant (isothermal change), internal energy change ($\Delta U$) is ZERO. 

---

## 5. Must-Know Past Paper Archetypes & Examiner Tips

Here are the specific traps, tricks, and highly-tested scenarios based on decades of CIE 9702 mark schemes.

### 1. Escape Velocity from Planets (e.g., The Moon/Mars)
**Scenario:** You calculate the $c_{r.m.s.}$ of a gas (like Hydrogen) at a given temperature, and it is *lower* than the planet's escape velocity. Yet, the gas still escapes. Why?
**Mark Scheme Answer:** 
> "There is a distribution of molecular speeds (around the r.m.s. value), so some molecules will have speeds greater than the escape speed."

### 2. Isotope Mixing/Comparison
**Scenario:** Two different gases (e.g., Nitrogen and Oxygen, or $^3\text{He}$ and $^4\text{He}$) are in thermal equilibrium (same temperature).
**Key deductions:**
*   Because they are at the same $T$, their **average translational kinetic energy ($E_k$) is exactly the same**! ($E_k = \frac{3}{2}kT$).
*   However, because their masses ($m$) are different, their r.m.s. speeds must be different.
*   Since $\frac{1}{2}m\langle c^2 \rangle = \text{constant}$, $c_{r.m.s.} \propto \frac{1}{\sqrt{m}}$. The heavier gas moves slower.

### 3. Explaining $p \propto T$ at constant Volume
**Scenario:** Explain why pressure increases when temperature increases at a constant volume using kinetic theory.
**Mark Scheme Answer:**
*   Increased temperature means molecules have higher average kinetic energy / move faster.
*   Molecules hit the walls more frequently (increased rate of collisions).
*   Change in momentum per collision is greater.
*   Therefore, rate of change of momentum is greater, leading to a larger force.
*   Since $p = F/A$ and $A$ is constant, pressure increases.

### 4. Working with Graphs
If given a graph of $pV$ against $T$ (in Kelvin):
*   The graph will be a straight line passing through the origin (since $pV = nRT$).
*   The gradient of the line is equal to $nR$ (or $Nk$).

### 5. Heating a gas at Constant Volume vs. Constant Pressure
*   **Constant Volume (Isochoric):** No work is done ($W = p\Delta V = 0$). All thermal energy supplied ($q$) goes entirely into increasing internal energy ($\Delta U$). Therefore, it takes less energy to heat a gas by $1\text{K}$.
*   **Constant Pressure (Isobaric):** Gas expands and does work on the surroundings ($W$ is negative). By First Law ($\Delta U = q + W$), the heat supplied $q$ must be larger to both increase the internal energy and do the work of expansion. Therefore, specific heat capacity at constant pressure is greater than at constant volume.

> [!tip] Ultimate Exam Checklist for Gas Calculations
> - [ ] Did I convert temperature to Kelvin? (e.g. $27^\circ\text{C} \rightarrow 300\text{K}$)
> - [ ] Did I convert Volume to $\text{m}^3$? (e.g. $1 \text{ cm}^3 = 10^{-6} \text{ m}^3$)
> - [ ] Am I using the mass of *one molecule* ($m$) or the mass of *one mole* ($M_r$)?
> - [ ] Am I calculating the total Internal Energy ($N \times \frac{3}{2}kT$) or just the average KE of a single molecule ($\frac{3}{2}kT$)?