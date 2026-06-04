# Gravitational Field

## Definition
>[!info] Definition: Gravitational Field
>Force per unit mass

## Gravitational Field as a Field of Force
- A **Gravitational Field** is an example of a [[9702-P4_definition_bank#Field of Force|Field of Force]].
- It is a region of space where a mass experiences a force.

## Nature of the Force
- Gravitational forces are always attractive.
- The force always acts towards the centre of mass of the mass creating the field.

## Representing Gravitational Fields

### Gravitational Field Lines
- A gravitational field can be represented by using **Gravitational Field Lines.**
- A gravitational field line is an arrow showing the direction of gravitational force acting on a test mass.
- The density (number of field lines per unit area) of field lines represents the strength of the gravitational field; The closer the field lines the stronger the field.

### Types of Gravitational Fields 
>[!concept] Radial Field
>- Field lines point towards the centre of a point mass or uniform sphere.
>  
>![Gravitational field around the Earth|300](cognito-earth-gravitational-field.png)
>
>>[!important] Spacing of Field Lines
>>As the distance from the centre of the point mass increases, the separation of the field lines increases, and line density decreases, indicating that the strength of the gravitational field decreases.


>[!concept] Uniform Field
>- Field lines are parallel to each other and equally spaced
>  
>![Gravitational field near the Earth's surface|300](cognito-earth-surface-gravitational-field.png)

### Why is gravitational field considered to be uniform near earth's surface

>[!important]
>- At surface, gravitational field lines are radial.
>- Height/change in height above surface is very much smaller than Earth's radius ($h \ll R$).
>- field lines are approximately parallel.
>- Field strength is represented by the density of field lines.
>- Since field lines are parallel and equally spaced, density and therefore field strength is constant.

# Gravitational force between point masses

## Point Mass Approximation
> [!info] The Point Mass Approximation
> For a point outside a uniform sphere (like a planet), the mass of the sphere can be considered to be completely concentrated as a **point mass at its centre**. 
> *Condition:* This is only valid if the sphere has uniform density (or spherical symmetry) and the distance $r$ is greater than the radius of the sphere.
## Newton's Law of Gravitation 
>[!info] Newton's Law of Gravitation
>- The gravitational force of **attraction** between two **point masses** is **directly proportional** to the product of their masses 
>- and inversely proportional to the square of their separation.

![Representation of $M, m, r, F$|400](newton-law-of-gravitation.svg)

>[!math] Derivation
>
>$$
>\large
>\begin{align}
>F &\propto \frac{Mm}{r^2} \\ \\
>F &= \frac{GMm}{r^2}
>\end{align}
>$$
>
>Where $G$ is the Gravitational Constant, $G=6.67 \times 10^{-11} \space \mathrm{Nm^2kg^{-2}}$


# Circular Orbits
## Satellites
>[!concept] Satellites
>A satellite is a mass that orbits (moves in circular motion) around a larger mass.
>
>![The Earth is a satellite orbiting the Sun and the Moon is a satellite orbiting the Earth.|300](earth-orbiting-sun.png)

>[!important] How does a satellite stay in orbit?
>- The gravitational force between the satellite and the mass which it orbits provides the centripetal force needed to keep the satellite moving in circular motion around the mass.

## Gravitational Force as Centripetal Force
![A satellite of mass $m$ orbiting a mass of mass $M$|300](satellite-orbiting-mass.svg)

### Orbital Velocity
> [!math] Derivation of Orbital Velocity ($v$)
> - Explicitly state that:
> $$
> \large
> \text{Gravitational Force} \space (F_{g})\space \text{provides} \space\text{Centripetal Force}\space(F_{c})
> $$
> 
> - Equate **Gravitational Force** and **Centripetal Force**:
> $$
> \large
> \begin{align}
> F_{g} &= F_{c} \\
> \frac{GMm}{r^2} &= \frac{mv^2}{r}
> \end{align}
> $$
> 
> - Simplify and make $v$ subject:
> $$
> \large
> \begin{align}
> \frac{GMm}{r^2} &= \frac{mv^2}{r} \qquad \left( \times \frac{r}{m} \right) \\
> \frac{GM}{r} &= v^2  \\ \\
> v &= \sqrt{ \frac{GM}{r} }
> \end{align}
> $$

### Orbital Period
> [!math] Derivation of Orbital Period ($T$)
> - Explicitly state that:
> $$
> \large
> \text{Gravitational Force} \space (F_{g})\space \text{provides} \space\text{Centripetal Force}\space(F_{c})
> $$
> 
> - Equate **Gravitational Force** and **Centripetal Force**:
> $$
> \large
> \begin{align}
> F_{g} &= F_{c} \\
> \frac{GMm}{r^2} &= mr\omega^2
> \end{align}
> $$
> 
> - Simplify:
> $$
> \large
> \begin{align}
> \frac{GMm}{r^2} &= mr\omega^2 \qquad \left( \times \frac{1}{mr} \right) \\
> \frac{GM}{r^3} &= \omega^2
> \end{align}
> $$
> 
> - Substitute $\omega=\frac{2\pi}{T}$:
> $$
> \large
> \begin{align}
> \frac{GM}{r^3} &= \left( \frac{2\pi}{T} \right)^2
> \end{align}
> $$
> 
> - Simplify and make $T$ subject:
> $$
> \large
> \begin{align}
> \frac{GM}{r^3} &=\frac{4\pi^2}{T^2} \\
> T^2 &=\frac{4\pi^2r^3}{GM} \\
> T &= \sqrt{ \frac{4\pi^2r^3}{GM} } \\ \\
> T &= 2\pi \sqrt{ \frac{r^3}{GM} }
> \end{align}
> $$

>[!info] Kepler's Third Law of Planetary Motion
>$$\large T^2 \propto r^3$$

## Geostationary Orbit
>[!concept] Geostationary Orbit
>A geostationary orbit is one in which the orbiting satellite is always above the same point on Earth.
>
>![A telecommunications satellite orbiting the Earth|400](https://cdn.savemyexams.com/cdn-cgi/image/f=auto,width=1920/https://cdn.savemyexams.com/uploads/2020/10/13.1.2.6-Geostationary-orbit-satellite.png)


>[!info] Conditions for Geostationary Orbit
>- Orbital period of exactly 24 hours.
>- Orbits from **West for East.**
>- Orbits **directly above** the Equator.

## Binary Star System
![Two stars, A and B orbiting a common centre of gravity.|400](binary-star-system.svg)

>[!concept] Newton's Third Law Pair
>- According to Newton's Third Law, **Star A** exerts a force on **Star B**, and **Star B** exerts an equal and opposite force on **Star A**.
>- **Star A** experiences a force of magnitude $F$ towards the centre of **Star B**.
>- **Star B** experiences a force of magnitude $F$ towards the centre of **Star A**.
>

>[!concept] Centripetal Force
>- The gravitational force between the two stars provides the centripetal force for **each** star.
>- Since the centripetal force of each star is equal to the gravitational force between them, their centripetal forces are equal in magnitude.

>[!concept] Barycentre
>- The two stars orbit around their common centre of gravity, known as the **barycentre**

>[!info] Conditions for a Binary Star System
>- Same orbital period.
>- Same angular velocity.
>- Orbit in the same direction (clockwise or anticlockwise).
>- Always opposite to each other across the barycentre.

### Mathematical Descriptions of a Binary Star System

Since centripetal force of each star is equal:
$$
\large
\begin{align}
F_{c_{A}} &= F_{c_{B}} \\
m_{1}r_{1}\omega^2 &= m_{2}r_{2}\omega^2 \qquad \left( \times \frac{1}{\omega^2} \right) \\
m_{1}r_{1} &= m_{2}r_{2} \\ \\
\frac{m_{1}}{m_{2}} &=\frac{r_{2}}{r_{1}}
\end{align}
$$
Taking mass and orbital radius of the other star to be constant, the mass of star is inversely proportional to orbital radius:
$$
\large
\begin{align}
m_{1} &= \frac{m_{2}r_{2}}{r_{1}} \\
m_{1} &\propto \frac{1}{r_{1}}
\end{align}
$$
Hence, the barycentre will be closer to the more massive star

>[!danger] 
>- When using centripetal force equations, the radius is the distance from the star to the barycentre, **not** the distance between the stars.

Since gravitational force provides centripetal force

$$
\large
\begin{align}
\text{Gravitational Force} \space (F_{g}) \space &\text{provides Centripetal Force} \space (F_{c}) \\ \\
F_{g} &= F_{c} 
\end{align}
$$

$$
\large
\begin{align}
\frac{Gm_{1}m_{2}}{(r_{1}+r_{2})^2} &= m_{1}r_{1}\omega^2 \\
\frac{Gm_{2}}{(r_{1}+r_{2})^2} &= r_{1}\times\left( \frac{2\pi}{T} \right)^2 \\
\frac{Gm_{2}}{(r_{1}+r_{2})^2} &= r_{1} \times \frac{4\pi^2}{T^2} \\
T &=2\pi(r_{1}+r_{2})\sqrt{ \frac{r_{1}}{Gm_{2}} }
\end{align}
$$
Let $R = r_{1}+r_{2}$
$$
r_{2} = R-r_{1}
$$
$$
m_{1}r_{1}=m_{2}(R-r_{1})

$$
$$
m_{1}r_{1} = m_{2}R -m_{2}r_{1}
$$
$$
r_{1}(m_{1}+m_{2})=Rm_{2}
$$
$$
r_{1}=\frac{Rm_{2}}{m_{1}+m_{2}}
$$

# Gravitational Potential
>[!info] Definition: Gravitational Potential at a Point
>Work done per unit mass in bringing a small test mass from infinity to the point

>[!math] Gravitational Potential at a Point ($\phi$)
>$$\large \phi = -\frac{GM}{r}$$
>
>**SI Unit:** $\mathrm{Jkg^{-1}}$
>
>>[!important]
>>- Gravitational potential is **always negative**
>>- Gravitational potential is zero at infinity ($-\frac{GM}{\infty}=0$)


> [!math] Derivation of Gravitational Potential
> Recall that work done is defined as:
> $$ \large W = F \times d $$
> 
> Gravitational potential ($\phi$) is defined as the work done per unit mass:
> 
> $$
> \large
> \begin{aligned}
> \phi &= \frac{F \times d}{m} \\
> &= \frac{GMm}{r^2} \times \frac{r}{m} \\
> &= \frac{GM}{r}
> \end{aligned}
> $$
> 
> Since $\phi = 0$ at infinity, the potential is defined as:
> 
> $$ \large\phi = -\frac{GM}{r} $$

>[!important] Why is Gravitational Potential Always negative?
>- Gravitational Potential is defined as zero at infinity.
>- Gravitational force is always **attractive**.
>- Work is done **on** a mass to move it to infinity.
>- Therefore potential must be negative at all points closer than infinity.
>  
>  ![Work done to bring mass to infinity|300](gravitational-potential-increases-to-zero.svg)

# Gravitational Potential Energy
>[!info] Definition 
>$$\large\text{Gravitational Potential Energy} = \text{Gravitational Potential} \times \text{mass}$$


> [!math] Derivation of Gravitational Potential Energy ($E_{p}$)
> $$
> \large
> \begin{aligned}
> E_{p} &= \phi \times m \\
> E_{p} &= -\frac{GM}{r} \times m \\
> E_{p} &= -\frac{GMm}{r}
> \end{aligned}
> $$

> [!math] Derivation of Change in Gravitational Potential Energy ($\Delta E_{p}$)
> $$
> \large
> \begin{aligned}
> \Delta E_{p} &= \Delta \phi \times m \\
> \Delta E_{p} &= \left( -\frac{GM}{r_{final}} - \left( -\frac{GM}{r_{initial}} \right) \right) \times m \\
> \Delta E_{P} &= \left( \frac{GM}{r_{initial}} - \frac{GM}{r_{final}} \right) \times m \\
> \Delta E_{p} &= GM \left( \frac{1}{r_{initial}} - \frac{1}{r_{final}} \right) \times m
> \end{aligned}
> $$

