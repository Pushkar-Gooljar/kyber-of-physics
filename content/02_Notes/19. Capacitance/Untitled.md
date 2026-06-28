# 9702_w25_qp_41-Q6
when capacitors connected in parallel treat as one big cap

# 9702_s25_ms_42-Q7
![[Untitled-9.png]]

Use Fig. 7.2, Fig 7.3 and your answer in (a) to explain why the variation of Q with t is exponential in nature.
(Answer to (a): $V_{C}=V_R$)

Charge and current are both directly proportional to voltage. Since $V_{C}=V_{R}$, charge is directly proportional to current. Current is defined as the rate of change of charge. Q is proportional to the rate of change of Q, which mathematically produces an exponential variation with time.

**Explanation**
From Kirchhoff's Second Law
$$
\begin{align}
V_{C}&=V_{R} \\
V_{C}-V_{R}&=0
\end{align}
$$

From Ohm's law
$$
V_{R}=IR
$$
Current is the rate at which charge leaves the capacitor
$$
I=-\frac{dQ}{dt}
$$
Therefore
$$
V_{R}=-R{\frac{dQ}{dt}}
$$
Explanation of negative sign: imagine more charge leaves per unit time, gradient will be negative, negative sign added to make current positive. i.e. the more charge decreases per unit time the higher current will be. i.e. more negative gradient greater current.

From $Q=CV$
$$V_{C}=\frac{Q}{C}$$

$$\frac{Q}{C}-\left( -R{\frac{dQ}{dt}} \right)=0$$

$$\frac{Q}{C}+R{\frac{dQ}{dt}}=0$$

$$R{\frac{dQ}{dt}}=-\frac{Q}{C}$$

$$\frac{dQ}{dt}=-\left( \frac{1}{RC} \right)Q$$

$$\frac{1}{Q}{\frac{dQ}{dt}}=-\left( \frac{1}{RC} \right)$$

$$\frac{1}{Q}dQ=-\left( \frac{1}{RC} \right)dt$$

$$\int \frac{1}{Q}dQ= \int-\left( \frac{1}{RC} \right)dt$$

Introducing the constant of integration, $C_1$:

$$\ln Q=-\frac{t}{RC} + C_1$$

Raise both sides as powers of $e$:

$$e^{\ln Q}=e^{-\frac{t}{RC} + C_1}$$

Use exponent rules ($e^{A+B} = e^A \cdot e^B$) to separate the constant:

$$Q=e^{C_1} \cdot e^{-\frac{t}{RC}}$$

Let the constant $e^{C_1}$ be represented by a new constant, $A$:

$$Q=A e^{-\frac{t}{RC}}$$

Apply the initial condition (at time $t=0$, the charge $Q = Q_0$):

$$Q_0=A e^{-\frac{0}{RC}}$$

$$Q_0=A \cdot 1 \implies A = Q_0$$

Substitute $Q_0$ back into the equation for the final result:

$$Q=Q_0 e^{-\frac{t}{RC}}$$

# 9702_s24_qp_41-Q6

![[Untitled-10.png]]

p.d. across capacitor is proportional to charge on capacitor. Current in resistor is proportional to p.d. across resistor. Since p.d. across capacitor = p.d. across resistor, current in resistor is proportional to charge on capacitor. Current is defined as rate of change of charge. Since charge is proportional to rate of change of charge, as charge decreases, rate of change of charge decreases.

p.d. across capacitor $V_{C}$ is proportional to charge on capacitor. Current in resistor is proportional to p.d. across resistor $V_{R}$. Since $V_{C}=V_{R}$, charge on capacitor is proportional to current in resistor. Current is the rate of flow of charge. Since rate of flow of charge is proportional to charge, as charge decreases, 