---
title: Significant Figures Masterclass — CIE A Level Physics 9702 Paper 4
subject: Physics 9702d
paper: "4"
type: masterclass
scope: 2020–2025 (Paper 4 variants 41/42/43/44, M/J, O/N, F/M)
sources: past papers, mark schemes, examiner reports
tags:
  - physics/9702
  - paper4
  - exam-technique
  - significant-figures
  - rounding
created: 2026-09-15
---

# Significant Figures Masterclass — 9702 Paper 4

> [!abstract] What this note is
> A rules-first guide to significant figures (SF) on **9702 Paper 4**, built by reading the **past papers, mark schemes and Examiner Reports for 2020–2025**. Every rule below is traceable to something Cambridge actually wrote or actually penalised. The SF marks on this paper are the cheapest marks in the whole A Level — and the most frequently thrown away.

---

## 1. The three sentences that govern everything

These appear, near-verbatim, in the **Key messages / General comments** of essentially *every* Paper 4 Examiner Report from 2020 to 2025. Learn them; they are the examiner's own words.

> [!quote] Examiner Report, standard Key Message (2020–2025, all variants)
> "Answers to numerical questions should be given to an **appropriate number of significant figures**; the **precision of the data provided in the question is generally indicative** of the appropriate number of significant figures for an answer.
>
> When performing intermediate calculations within a question, candidates should take care to avoid **premature rounding**; as a general rule, any intermediate calculated values should always carry **at least one more significant figure** than will be used in the final answer.
>
> Candidates should be made aware that **giving answers to an inappropriate number of significant figures**, or that are inaccurate as a result of **rounding intermediate values prematurely**, can both lead to **full credit not being awarded**."

Condensed into three working rules:

| # | Rule | Applies to |
|---|---|---|
| **R1** | **Final answer SF = SF of the data in the question** (the *least precise* relevant datum) | Every numerical answer |
| **R2** | **Carry ≥ 1 extra SF (ideally all calculator digits) through every intermediate step** | Every multi-stage calculation |
| **R3** | **An explicit instruction in the question overrides R1** — give *exactly* that many SF | ~1–3 questions per paper |

> [!tip] The 3-SF default
> Across 2020–2025 Paper 4, **3 SF is correct far more often than anything else.** The data booklet constants ($G = 6.67\times10^{-11}$, $k = 1.38\times10^{-23}$, $h = 6.63\times10^{-34}$, $c = 3.00\times10^{8}$, $N_A = 6.02\times10^{23}$, $u = 1.66\times10^{-27}$) are all quoted to 3 SF, and question data overwhelmingly follows. The March 2023 report put it flatly: *"In this paper, three significant figures were required several times."* **If you cannot decide, 3 SF is the best bet — but decide properly first.**

---

## 2. Rule 1 — How many SF to *give as your answer*

### 2.1 The mechanism

Look at the **numerical data supplied in that question part** (and any data carried in from an earlier part). Count the SF of each. **Your answer carries the SF of the least precise one.**

> [!quote] Examiner Report, Nov 2020 P43, Q1(b)
> "As the data were provided to three significant figures, an answer was expected to three significant figures."

> [!quote] Examiner Report, Nov 2025 P42, Q2(c)(i)
> "Some candidates did not notice that the data provided in the question was given to three significant figures and that therefore three significant figures should be given in the answer."

> [!quote] Examiner Report, Nov 2024 P42, Q1(b)(i)
> "Some did not appreciate that the precision of the data provided in the question warranted a three significant figure answer."

### 2.2 Counting SF in the data — the traps

| Written value | SF | Note |
|---|---|---|
| `3.34 × 10⁻²⁷` | 3 | Standard form makes SF unambiguous — **this is why examiners use it** |
| `9300 m s⁻¹` | 2 (treat as 2) | *Trailing zeros with no decimal point are ambiguous.* Nov 2023 P43 gave `9300 m s⁻¹` **and** `3.34 × 10⁻²⁷ kg` — the report says **3 SF** was required, taken from the 3-SF datum |
| `0.0086` | 2 | Leading zeros never count |
| `4.18 J g⁻¹ °C⁻¹` | 3 | |
| `26.4 °C` | 3 | |
| `0.0 °C`, `208 g` | — | Careful: `208` is 3 SF; `0.0` is a stated zero, not a precision limit |
| `2.700 × 10³` | **4** | Explicit trailing zeros in standard form **do** count — see §6 |
| `50 Hz`, `40 turns`, `n = 2` | exact/defined | **Do not** let counted or defining values cap your SF |
| Value read from a graph | 2, sometimes 3 | See §7.2 |

> [!warning] The "least precise" test is about *relevant* data
> Exact integers (number of turns, number of moles stated as a count, factors of 2, percentages used as exact fractions) are **not** precision limits. In Nov 2022 P42 Q6(b)(ii) the *40 turns* did not reduce the answer to 1 SF — the question demanded 3 SF.

### 2.3 The two failure modes, and which one is fatal

| Failure | Example from 2020–25 | Penalty |
|---|---|---|
| **Too few SF** (rounding a 3-SF answer to 2 or 1) | `0.017` given where `0.0170` / 3 SF required (Jun 2021 P41 Q1(b)(ii)); `0.40 s` given where 2 SF was wrong (Jun 2025 P41); `0.04 m` where 2 SF needed (Nov 2023 P43) | **Final A mark lost.** This is the dominant error. |
| **Inventing SF you don't have** | "Some candidates invented an incorrect third significant figure, having only calculated the answer to two (usually by adding a zero as the third significant figure)" — Jun 2021 P41 Q1(b)(ii) | **Mark lost** — and it exposes a wrong calculation |

> [!danger] Too many SF is *usually* tolerated; too few is *not*
> The mark scheme general guidance says examiners credit an answer that **rounds** to the mark-scheme value. So writing `334.6` when the scheme says `335` is normally safe. Writing `335` when the scheme says `334.6` (because the question demanded more precision) is not, and writing `330` or `3 × 10²` is dead. **When genuinely unsure, err on the side of one extra SF, never one fewer.** The exception is an explicit "to three significant figures" instruction (§4) and measured values (§7.1).

---

## 3. Rule 2 — How many SF to use *in the working*

### 3.1 The rule

**Never round inside a calculation.** Keep the full calculator value in memory (`ANS`, or store to a variable). If you must write an intermediate value down, write it to **at least one more SF than your final answer** — in practice **4 SF when the answer is 3 SF**.

> [!quote] Examiner Report, March 2023 P42, Key messages
> "In a multistage calculation candidates need to work to **at least one more significant figure than the data**, so intermediary calculated values needed to have at least **4 significant figures** in these questions."

> [!quote] Examiner Report, March 2023 P42, Q8(b)(iv)
> "Premature rounding of intermediate values leads to incorrect answers in the final significant figure, and this was a common problem in this question. The data justifies a 3 significant figure answer, and candidates who used a value of decay constant prematurely rounded to 3 significant figures often arrived at an answer that was not quite correct to the expected precision."

> [!quote] Examiner Report, Nov 2025 P44, Q(radioactivity)
> "Some gave insufficient significant figures in their final answers or **made premature rounding errors**."

### 3.2 Why writing it down is still worth it

> [!quote] Examiner Report, standard Key Message (2020–2025)
> "...working should be shown, so that partial credit may be awarded even when the final answer is incorrect. **Incorrect answers that are not supported by working cannot be awarded any credit.**"

This creates the optimal strategy:

> [!success] The Paper 4 calculation protocol
> 1. Write the **starting equation** in symbols → this is almost always the **C1** mark.
> 2. Write the **substitution** with the given data → often a second **C1**.
> 3. Do the arithmetic **in one unbroken calculator chain** (use `ANS`).
> 4. If you must record an intermediate, record **4 SF minimum**.
> 5. Round **once**, at the very end, to the SF set by §2 or §4.
> 6. Add the **unit**. (A missing/incorrect unit normally forfeits the final calculation mark — mark scheme general guidance.)

### 3.3 Why precision matters even when you're wrong

> [!quote] Examiner Report, Jun 2023 P4x, Q3
> "A common misunderstanding was that the amplitude will decrease by 18%; this led to an incorrect answer (of 0.67) that is quite close to the correct answer... Both of these answers round to 0.7 when expressed to **one significant figure**. In the absence of any working, there is no way of knowing whether it came from the correct method or the incorrect method."

Over-rounding destroys the evidence that you did the right physics. **An answer given to too few SF cannot earn error-carried-forward credit either.**

---

## 4. Rule 3 — When the question *tells* you

Roughly one to three parts per paper carry an explicit instruction. **This is a free mark and it is routinely thrown away.**

Real wordings, 2020–2025:

| Paper | Question | Wording |
|---|---|---|
| F/M 2020 P42 | Q(ultrasound) | "Calculate, **to three significant figures**, the fraction of the ultrasound intensity that is..." |
| M/J 2021 P42 | Q(a.c.) | "Determine *k* **to two significant figures**." |
| O/N 2022 P42 | Q6(b)(ii) | "Determine, **to three significant figures**, the flux density *B*..." |
| O/N 2023 P43 | Q(kinetic theory) | "Determine, **to three significant figures**, the temperature of the surface of the star." |
| M/J 2025 P41/43 | Q(thermal) | "Determine a value, **to three significant figures**, for the specific latent heat of fusion of water." |
| M/J 2025 P42 | Q3(b)(v) | "Use the first law of thermodynamics to determine, **to three significant figures**, a value for the specific heat capacity..." |
| M/J 2025 P44 | Q(c)(i) | "Determine a value, **to three significant figures**, for the radius *R* of the Earth." |
| O/N 2025 P41/43 | Q(potential) | "Calculate, **to two significant figures**, *V* when *x* = 30 pm." |

> [!failure] What examiners saw
> - *"many candidates **ignored the instruction** to calculate their answer to three significant figures. Answers of 0.017 m s⁻² were common"* (Jun 2021 P41)
> - *"a significant number **ignored the instruction** to give the answer to two significant figures and could therefore not be awarded full credit"* (Jun 2021 P42)
> - *"Some candidates **ignored the instruction** to give their answer to three significant figures."* (Nov 2022 P42)
> - *"not all candidates gave values to three significant figures **as required by the question**"* (Jun 2022 P42, table-completion)

> [!tip] Habit to build
> **Circle or underline the SF instruction the moment you read it**, and write the target in the margin (`→3sf`). When the instruction says "to three significant figures", give **exactly three** — `0.0170`, not `0.017` and not `0.01703`.

> [!note] It also applies to tables
> Jun 2022 P42 asked for a completed table of values to 3 SF. Every cell must comply, not just the last one.

---

## 5. How the marking actually works

From the mark scheme **General Marking Principles** (unchanged 2020–2025):

> [!quote] Mark scheme, Annotation / marking guidance
> **SF** — "Indicates that the correct answer is seen in the working but the final answer is incorrect **as it is expressed to too few significant figures**."
>
> "For questions in which the number of significant figures required is **not stated**, credit should be awarded for correct answers when **rounded by the examiner to the number of significant figures given in the mark scheme**. This may not apply to **measured values**."
>
> "Correct answers to calculations should be given full credit even if there is no working or incorrect working, **unless the question states 'show your working'**."
>
> "For answers given in standard form (e.g. $a \times 10^n$) in which the convention of restricting the coefficient $a$ to a value between 1 and 10 is **not** followed, credit may still be awarded if the answer can be converted to the answer given in the mark scheme."
>
> "Unless a separate mark is given for a unit, a **missing or incorrect unit will normally mean that the final calculation mark is not awarded**."

### What this means in mark-code terms

```
C1  method / starting equation      ← survives an SF error
C1  correct substitution            ← survives an SF error
A1  correct final answer            ← KILLED by an SF error  ("SF" annotation)
```

> [!important] The single most useful consequence
> An SF error costs you **the A mark only** — provided your working is on the page. **Always write the equation and the substitution.** A bare wrong number scores zero; a wrong number with correct working scores the C marks.

> [!note] Standard form is your friend
> `1.70 × 10⁻²` is unambiguously 3 SF. `0.017` is unambiguously 2. When precision is being judged, **write the answer in standard form** and the SF count cannot be misread.

---

## 6. "Show that…" questions — the hidden 4-SF trap

A *show that* question gives you the target value, usually to **more** SF than normal. To "show" it you must **produce more precision than the target**, which means **every input you use must carry at least as many SF as the target**.

> [!example] M/J 2025 Paper 42, Q3(b) — the exemplar
> **Given:** $V_0 = 3.612\times10^{-3}\ \mathrm{m^3}$, $\rho_0 = 2.700\times10^{3}\ \mathrm{kg\,m^{-3}}$ (**4 SF**), $\rho_{500} = 2.620\times10^{3}\ \mathrm{kg\,m^{-3}}$ (**4 SF**).
>
> **(b)(i)** Calculate the mass. → $m = 2.700\times10^{3} \times 3.612\times10^{-3} = \mathbf{9.752\ kg}$ **(4 SF)**
>
> **(b)(ii)** *Show that* the volume at 500 °C is $3.722\times10^{-3}\ \mathrm{m^3}$ **(4 SF)**.
> $$V = \frac{9.752}{2.620\times10^{3}} = 3.7221\times10^{-3}\ \mathrm{m^3}\ \checkmark$$

> [!failure] What went wrong for candidates
> - *"a significant minority gave an answer to only **two** significant figures when the data justified **four**"* — i.e. they wrote `m = 9.8 kg` in (b)(i).
> - *"candidates needed to appreciate that the volume to be shown was to four significant figures, and that therefore **to correctly 'show' this volume, the mass used also had to be given to at least four significant figures**."*
>
> Check it: $9.8 / 2620 = 3.740\times10^{-3}$ — **not** $3.722\times10^{-3}$. The show-that fails, and the rounded mass then poisons (b)(iii) and (b)(v).

> [!success] The show-that rule
> **Count the SF in the target value. Work to at least that many — preferably one more — in every step leading to it.** Then present your result to *more* SF than the target, and state that it agrees.

> [!warning] "Show that" and "show your working"
> These parts are the one place where a correct answer **without working scores nothing**. The number is already printed; the marks are for the derivation.

---

## 7. Special cases

### 7.1 Measured values

The mark scheme carves out an exception: the round-to-the-scheme rule *"may not apply to **measured values**."* Where a question effectively asks you to state a reading or an experimentally determined quantity, the SF must reflect the **precision of the measuring instrument / the data given**, and an over-precise answer can be penalised.

### 7.2 Values read off a graph

A graph reading is typically good to **2 SF, sometimes 3**. This caps the precision of anything derived from it.

> [!quote] Examiner Report, Nov 2025 P44, Q(SHM graph)
> "Many otherwise correct numerical answers had **insufficient significant figures** to gain credit."

> [!quote] Examiner Report, Jun 2025 P4x, Q(radioactivity graph)
> "Stronger candidates were able to derive a numerical value for the half-life, or for the activity at some fixed time, and could include an **appropriate number of significant figures and the correct unit**."

Practical guidance:
- Read the graph as precisely as the gridlines allow, then **carry full precision** through the algebra.
- Present the final answer to **2 SF** (3 SF only if the scale genuinely supports it and other data is 3 SF).
- **Do not** let a graph reading silently truncate to 1 SF. *"Weaker candidates were not able to recognise that the precise value of the capacitance was not exactly 0.5 C, and so they gave their answer to only one significant figure instead of the required minimum of two."* (Jun 2025 P42)

### 7.3 Sign, unit and SF are three separate hurdles

Examiner reports repeatedly list them together as compound failures:

> [!quote] Jun 2025 P42, Q3(b)(v)
> "Achieving full credit in this question required evidence of correct application of the first law of thermodynamics, correct substitution of data, an answer calculated to the **correct number of significant figures**, and an answer given with **correct unit**."

> [!quote] March 2023 P42, Q7(b)
> "...realising that the **sign** of the answer must be negative, and that the data requires a **3 significant figure** answer."

Quantities that must be **negative**: gravitational potential $\varphi$, gravitational PE, electron energy levels, $\Delta U$ when internal energy falls, work done *by* a system on its surroundings.

> [!tip] Final-answer triage (5 seconds per calculation)
> **S-U-S**: **S**ign correct? • **U**nit present and right? • **S**ignificant figures matched?

### 7.4 Error carried forward (ECF)

ECF is applied generously across Paper 4 — *"It was possible to obtain credit here from an incorrect answer to (b)(i) through the standard error carried forward principle"* (Jun 2023 P4x) — **but the ECF answer must itself be to the right SF**: *"Some candidates did not appreciate that the data still demands a three significant figure answer."*

### 7.5 Standard form conventions

Keep the coefficient between 1 and 10. Deviating is usually forgiven ("credit may still be awarded if the answer can be converted"), but there is no upside. And `× 10ⁿ` must never be dropped — Nov 2020 P42 records candidates who *"omitted the power of ten for the radius"* after a graph read.

---

## 8. Worked examples from real 2020–2025 papers

### Example A — SF set by the data (M/J 2025 P41, thermal)

> **Q** Ice cube: $m_{ice} = 37.0\ \mathrm{g}$ at $0.0\ \mathrm{^\circ C}$. Water: $m_w = 208\ \mathrm{g}$ at $26.4\ \mathrm{^\circ C}$. Final temperature $10.3\ \mathrm{^\circ C}$. $c_w = 4.18\ \mathrm{J\,g^{-1}\,^\circ C^{-1}}$.
> *Determine a value, to three significant figures, for the specific latent heat of fusion.*

**Data audit:** 37.0 (3), 208 (3), 26.4 (3), 10.3 (3), 4.18 (3) → **3 SF**, and the question says so explicitly.

$$\Delta\theta_{\text{water}} = 26.4 - 10.3 = 16.1\ \mathrm{^\circ C} \qquad \Delta\theta_{\text{melt-water}} = 10.3 - 0.0 = 10.3\ \mathrm{^\circ C}$$
$$(37.0\,L) + (37.0 \times 4.18 \times 10.3) = 208 \times 4.18 \times 16.1$$
$$L = \mathbf{335\ J\,g^{-1}}$$

**Mark allocation:** C1 (water temperature drop) · C1 (full energy balance) · A1 (**335**, 3 SF, with unit).
Write `335`, not `335.4` and emphatically not `340` or `3 × 10²`.

---

### Example B — the premature-rounding trap (F/M 2023 P42, Q8)

> **Q** $0.874\ \mathrm{kg}$ of Pu-238, $5.59\ \mathrm{MeV}$ per decay, $t_{1/2} = 87.7$ years. The probe functions until power falls to **65.3%** of initial. Find the time in years.

$$\lambda = \frac{\ln 2}{87.7} = 7.9036\times10^{-3}\ \mathrm{yr^{-1}} \quad \text{(carry 5 SF)}$$
$$0.653 = e^{-\lambda t} \;\Rightarrow\; t = \frac{-\ln 0.653}{\lambda} = \mathbf{53.9\ years}$$

**Better still, never compute $\lambda$ separately:**
$$t = \frac{-\ln(0.653) \times 87.7}{\ln 2}$$
one unbroken calculator chain — no intermediate to round.

> [!warning] Where candidates lost it
> The report flags decay constants *"prematurely rounded to 3 significant figures"* in this question. Round $\lambda$ to 1 SF ($0.008$) and you get $53.3$ — a wrong final digit and a lost A mark. This is exactly what R2 protects against.

---

### Example C — an explicit 2 SF instruction (M/J 2021 P42, a.c.)

> **Q** $V = 240\sin kt$, supply frequency $50\ \mathrm{Hz}$. *Determine $k$ to two significant figures.*

$$k = 2\pi f = 2\pi \times 50 = 314.159... \;\Rightarrow\; k = \mathbf{3.1\times10^{2}\ rad\,s^{-1}}$$

> [!failure] "a significant number ignored the instruction to give the answer to two significant figures and could therefore not be awarded full credit."
> Note that $50\ \mathrm{Hz}$ and $2\pi$ would suggest more precision — **the explicit instruction wins (R3).** Writing `314` here loses the mark.

---

### Example D — show-that forcing 4 SF (M/J 2025 P42, Q3)

Fully worked in §6. The chain is: `9.752 kg` (4 SF) → `3.722 × 10⁻³ m³` shown → `W = pΔV = 1.01×10⁵ × 0.110×10⁻³ = 11.1 J` → `c = 4.38×10⁶ / (9.752 × 500) = 898 J kg⁻¹ °C⁻¹` (3 SF, as instructed).

> [!note] Notice the SF change mid-question
> (b)(i) and (b)(ii) demand **4 SF** because the densities are 4 SF and the show-that target is 4 SF. (b)(v) demands **3 SF** because the question says so. **SF requirements are set part-by-part, not once per question.**

---

### Example E — 3 SF from 3 SF data (O/N 2023 P43, kinetic theory)

> **Q** r.m.s. speed $9300\ \mathrm{m\,s^{-1}}$; mass of a molecule $3.34\times10^{-27}\ \mathrm{kg}$. *Determine, to three significant figures, the temperature of the star's surface.*

$$\tfrac{3}{2}kT = \tfrac{1}{2}m\langle c^2\rangle \;\Rightarrow\; T = \frac{m\langle c^2\rangle}{3k} = \frac{3.34\times10^{-27} \times 9300^2}{3 \times 1.38\times10^{-23}}$$

> [!failure] "Some candidates lost credit through not quoting their final answer to the required three significant figures. A small number of candidates did not square the r.m.s. speed."

---

## 9. Catalogue of SF errors, 2020–2025

Ranked by how often the Examiner Reports mention them.

| Rank | Error | Typical report wording | Topics where it bites hardest |
|---|---|---|---|
| 1 | **Answer given to too few SF (usually 1 or 2 where 3 was needed)** | "gave their final answer to only one significant figure" | Gravitation, thermal, SHM, magnetic flux, photons |
| 2 | **Ignoring an explicit "to N significant figures" instruction** | "ignored the instruction to give the answer to two significant figures" | Anywhere — a free mark lost |
| 3 | **Premature rounding of intermediates** | "Premature rounding of intermediate values leads to incorrect answers in the final significant figure" | Radioactivity ($\lambda$), multi-stage energy problems, escape velocity |
| 4 | **Show-that failing because an input was rounded** | "the mass used also had to be given to at least four significant figures" | Thermodynamics, mechanics chains |
| 5 | **Insufficient SF on graph-derived values** | "otherwise correct numerical answers had insufficient significant figures" | SHM energy graphs, decay curves |
| 6 | **Inventing a digit** (padding a 2-SF result with a zero) | "invented an incorrect third significant figure... by adding a zero" | Gravitational field strength |
| 7 | **SF error compounding with a missing unit or wrong sign** | "required... correct number of significant figures, and an answer given with correct unit" | Thermodynamics, potentials, energy levels |

### Topic hot-spots
Gravitation (field strength, potential, escape speed) · Thermal physics & first law · Ideal gases & kinetic theory · SHM (period, $\omega$, energies) · Capacitance · Magnetic flux density · Photon energy & energy levels · Radioactive decay · Astrophysics (Stefan–Boltzmann, Wien, luminosity, red shift) · Ultrasound intensity coefficients.

---

## 10. The exam-room checklist

> [!checklist] Before you start a calculation
> - [ ] Read the whole part. **Does it say "to N significant figures"?** Underline it, write `→Nsf`.
> - [ ] Is it a **"show that"**? Count the SF of the target. Work to that many *at minimum*.
> - [ ] Scan the data. What is the **lowest SF count** among the relevant numbers?
> - [ ] Ignore exact counts (turns, integers, defined values) when setting SF.

> [!checklist] While calculating
> - [ ] Write the **equation in symbols** (C1).
> - [ ] Write the **substitution** (C1).
> - [ ] Use one unbroken calculator chain / `ANS`. **Do not retype rounded numbers.**
> - [ ] If an intermediate must be written: **4 SF minimum**.

> [!checklist] Before moving on
> - [ ] **Sign** — should this be negative? (potential, PE, energy levels, $\Delta U$)
> - [ ] **Unit** — present, correct, consistent with any prefix conversions?
> - [ ] **SF** — matches the instruction, or matches the data?
> - [ ] **Standard form** if precision could be misread (`1.70 × 10⁻²`, not `0.017`).
> - [ ] **Plausibility** — *"It was not uncommon to see incorrect answers giving the mass of a molecule of the order of 10²⁶ kg."* (Jun 2023 P4x)

---

## 11. Drill set

Build the reflex with these, taken from the papers analysed. Do them **without rounding anything until the last line.**

1. **F/M 2020 P42** — intensity reflection coefficient $\alpha = \dfrac{(Z_1-Z_2)^2}{(Z_1+Z_2)^2}$, *to three significant figures*. (A squared-difference over squared-sum is savagely sensitive to rounding — never round $Z_1 \pm Z_2$.)
2. **M/J 2021 P42** — $k$ from $V = 240\sin kt$, $f = 50\ \mathrm{Hz}$, *to two significant figures*.
3. **M/J 2021 P41 Q1(b)** — gravitational field strength at two radii, then the difference, all *to three significant figures*. (Subtracting two nearly equal numbers: **carry every digit**, or the difference loses all its precision.)
4. **O/N 2022 P42 Q6(b)(ii)** — flux density $B$, *to three significant figures*, remembering the 40-turn factor.
5. **F/M 2023 P42 Q8(b)** — the full Pu-238 chain: $N_0 \to A_0 \to P_0 \to t$. Four stages; round only at the end of each *reported* answer.
6. **O/N 2023 P43** — star surface temperature from r.m.s. speed, *to three significant figures*.
7. **M/J 2025 P42 Q3(b)** — the aluminium block, all five parts. **The 4-SF discipline in (b)(i)–(ii) is the whole question.**
8. **M/J 2025 P41 Q(c)** — specific latent heat of fusion, *to three significant figures*.
9. **M/J 2025 P44 Q(c)(i)** — radius of Earth from $GM = 3.99\times10^{14}$, *to three significant figures*.
10. **O/N 2025 P41 Q(b)(ii)** — potential $V$ at $x = 30\ \mathrm{pm}$, *to two significant figures*. (Watch the pm → m conversion **and** the 2-SF instruction.)

> [!tip] Self-marking rule
> Mark yourself **wrong** if the physics is right but the SF is not. That is exactly what the examiner does.

---

## 12. One-page summary

```
DEFAULT           → 3 SF (data booklet constants are 3 SF; most data is 3 SF)
DATA RULE         → final answer SF = SF of the least precise relevant datum
INSTRUCTION       → "to N significant figures" OVERRIDES everything; give exactly N
WORKING           → full calculator precision; if written, ≥ 4 SF
SHOW THAT         → match the target's SF in every input (often 4 SF)
GRAPH READING     → 2 SF typical; never let it collapse to 1 SF
EXACT VALUES      → counts, integers, defined values do NOT cap your SF
STANDARD FORM     → use it whenever SF could be misread
PENALTY           → SF error kills the A mark only — SO ALWAYS SHOW WORKING
ALSO CHECK        → sign (φ, PE, energy levels) and unit, every single time
```

---

## Appendix — Evidence base

**Papers analysed (2020–2025 only):**

- **Question papers** (`9702-P4`): F/M 2020, 2023, 2024, 2025 (P42); M/J 2021 (41/42/43), 2023 (42), 2024 (42), 2025 (41/42/43/44); O/N 2020 (42/43), 2022 (42), 2023 (43), 2024 (41/42/43), 2025 (41/42/43/44).
- **Mark schemes** (`9702-MS4`): every variant, F/M + M/J + O/N, 2020 through 2025 (44 documents).
- **Examiner reports** (`9702-ER-Paperwise/4`): every available variant, F/M + M/J + O/N, 2020 through 2025 (40 documents).

**Method:** full text extraction from all mark schemes and examiner reports in the 2020–2025 window, followed by exhaustive search on `significant figure`, `s.f.`, `SF`, `rounding` and `precision`; every hit was read in context and classified. Question papers were then searched for explicit SF instructions and the corresponding mark scheme answers cross-checked. All quotations in this note are verbatim from those documents. All worked arithmetic was recomputed and verified against the published mark schemes.

**Reliability note:** examiner-report comments are attributed to the paper and question part they appear under. Where a report references a question without naming the topic explicitly, the topic has been recovered from the matching question paper.
