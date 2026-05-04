Here is a comprehensive, atomic set of notes tailored for Obsidian, strictly following the Cambridge 9702 A-Level Physics syllabus for **20.5 Electromagnetic Induction**. 

I have structured these into distinct "atomic" notes so you can create separate files in your Obsidian vault. They utilize Obsidian's callout features and are enriched with specific phrasings required by the 9702 mark schemes.

---

# Note 1: Magnetic Flux & Flux Linkage
**Tags:** #Physics/A2 #Electromagnetism #MagneticFlux 

### Magnetic Flux ($\Phi$)
Electromagnetic induction relies on the concept of "cutting" magnetic field lines. We quantify this using magnetic flux.

> [!definition] Magnetic Flux ($\Phi$)
> The product of magnetic flux density ($B$) and the cross-sectional area ($A$) where the area is **perpendicular** to the magnetic field.

> [!formula] Equation for Magnetic Flux
> $$ \Phi = BA $$
> Where:
> *   $\Phi$ = Magnetic Flux (Unit: Weber, $\text{Wb}$)
> *   $B$ = Magnetic Flux Density (Unit: Tesla, $\text{T}$)
> *   $A$ = Cross-sectional area perpendicular to the field (Unit: $\text{m}^2$)

*Note: 1 Weber ($1\text{ Wb}$) is equivalent to $1\text{ T m}^2$.*

**What if the area is at an angle?**
If the magnetic field lines hit the area at an angle $\theta$ to the **normal** (perpendicular) of the plane:
$$ \Phi = BA \cos\theta $$

---

### Magnetic Flux Linkage
In most practical applications (like generators and transformers), wires are wound into coils with multiple turns.

> [!definition] Magnetic Flux Linkage
> The product of the magnetic flux ($\Phi$) and the number of turns ($N$) in a coil.
> $$ \text{Magnetic Flux Linkage} = N\Phi = BAN $$
> *(Unit: Weber or Weber-turns)*

> [!tip] Exam Trick
> When a question asks for "flux linkage," ensure you multiply by $N$. If it asks for just "flux," do not multiply by $N$, even if a coil is present.

***

# Note 2: Demonstrating Electromagnetic Induction
**Tags:** #Physics/A2 #Electromagnetism #Experiments

### The Core Concept
When a conductor cuts across magnetic field lines, or when the magnetic flux linking a circuit changes, an electromotive force (e.m.f.) is induced. If the circuit is closed, an induced current flows.

### Key Experiments
> [!example] Experiment 1: Moving a Magnet into a Coil
> *   Pushing the North pole of a magnet into a coil connected to a sensitive voltmeter causes a momentary deflection (e.m.f. induced).
> *   Holding the magnet stationary inside the coil results in **zero** deflection (no *change* in flux).
> *   Pulling the magnet out causes a deflection in the **opposite direction**.

> [!example] Experiment 2: A Wire in a Magnetic Field
> *   Moving a straight wire rapidly downwards through the poles of a strong U-shaped magnet induces a current.
> *   Moving it parallel to the field lines induces nothing (no field lines are cut).

### Factors Affecting the Magnitude of Induced E.M.F.
Through these experiments, we observe that the induced e.m.f. increases if we increase the **rate** at which the field lines are cut. Specifically, the magnitude increases with:
1.  **Speed:** Moving the magnet or wire faster.
2.  **Magnetic Flux Density ($B$):** Using a stronger magnet.
3.  **Turns ($N$):** Increasing the number of turns on the coil.
4.  **Area ($A$):** Using a coil with a larger cross-sectional area.

***

# Note 3: Faraday's Law of Induction
**Tags:** #Physics/A2 #Electromagnetism #FaradaysLaw

> [!important] Faraday's Law of Electromagnetic Induction (Memorize for Exams)
> The magnitude of the induced e.m.f. is **directly proportional** to the **rate of change of magnetic flux linkage**.

> [!formula] The Equation
> $$ E = - \frac{\Delta (N\Phi)}{\Delta t} $$
> Where:
> *   $E$ = Induced e.m.f. ($\text{V}$)
> *   $\Delta(N\Phi)$ = Change in magnetic flux linkage ($\text{Wb}$)
> *   $\Delta t$ = Time interval ($\text{s}$)
>
> *(Note: The negative sign is a mathematical representation of Lenz's Law).*

### Graphical Relationship (Highly Tested)
In Paper 4, you are frequently asked to relate graphs of Flux Linkage against Time to graphs of e.m.f. against Time.

> [!tip] Mathematical Relationship
> Because $E = - \frac{d(N\Phi)}{dt}$:
> The induced e.m.f. is the **negative gradient** of a flux linkage vs. time graph.
> *   If flux is constant (horizontal line) $\rightarrow$ gradient is zero $\rightarrow$ e.m.f. is $0$.
> *   If flux is changing at a constant rate (straight diagonal line) $\rightarrow$ gradient is constant $\rightarrow$ e.m.f. is a flat, non-zero line.
> *   If flux is a sine wave $\rightarrow$ e.m.f. is a negative cosine wave.

***

# Note 4: Lenz's Law & Conservation of Energy
**Tags:** #Physics/A2 #Electromagnetism #LenzsLaw

Faraday's Law gives us the *magnitude* of the induced e.m.f. Lenz's Law gives us the *direction*.

> [!important] Lenz's Law (Memorize for Exams)
> The direction of the induced e.m.f. is such as to (produce effects that) **oppose the change** that caused it.

### Link to Conservation of Energy
Lenz's Law is a direct consequence of the **Principle of Conservation of Energy**. 
*   If the induced current *assisted* the change (e.m.f. pushed a magnet into a coil faster), it would create a perpetual motion machine, creating energy out of nowhere.
*   Because it *opposes* the change, you must do **mechanical work** to push a magnet into a coil against the repulsive magnetic force. This mechanical work is what is converted into **electrical energy** in the circuit.

> [!example] Applying Lenz's Law (Falling Magnet)
> 1. A North pole of a magnet falls toward a closed coil.
> 2. The changing magnetic flux induces an e.m.f. and a current in the coil.
> 3. According to Lenz's law, the coil must repel the falling magnet to oppose the change. 
> 4. Therefore, the top of the coil becomes a **North pole**.
> 5. As the magnet passes through and falls *away* from the bottom of the coil, the bottom of the coil becomes a **North pole** to attract the South pole of the magnet back upwards, opposing its exit.

