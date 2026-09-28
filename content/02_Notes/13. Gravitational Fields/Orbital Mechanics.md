# The Core Mathematics
The foundation of all orbital mechanics is equating centripetal force to gravitational force.

$$
\text{Gravitational Force Provides Centripetal Acceleration}
$$
$$
\mathrm{F_{\text{Gravitational}}}=\mathrm{F_{\text{Centripetal}}}
$$
$$
\frac{GMm}{r^2}=\frac{mv^2}{r}=mr\omega^2
$$
Key derivations:
1. **Orbital Velocity ($v$)**
$$
v=\sqrt{ \frac{GM}{r} }
$$
2. **Angular Velocity ($\omega$)**
$$
\omega=\sqrt{ \frac{Gm}{r^3} }
$$
3. **Kepler's Third Law (Period $T$)**
$$
T^2=\left( \frac{4\pi^2}{GM} \right)r^3 \implies T^2 \propto r^3
$$
# Geostationary Orbits
A satellite that remains above the exact same point on the Earth. It requires these conditions:
1. Its period $T$ must be exactly 24 hours.
2. It must orbit from west to East.
3. It must be in an equatorial orbit.

>[!tip] Generalised Conditions
>For a satellite orbiting above a planet
>1. The orbital period must equal the period of rotation of the planet.
>2. The satellite must orbit in the same direction as the planet's rotation
>3. The orbit must be equatorial

>[!todo]
>1. What if planet is stationary 
>2. What happens if orbit is not equatorial

# Energies In Orbit
## Energy Formulae
### Gravitational Potential Energy ($E_{p}$)
$$
E_{p}=\phi \times m
$$
$$
E_{p}=-\frac{GM}{r}\times m
$$
$$
E_{p}=-\frac{GMm}{r}
$$
>[!warning]
>Gravitational Potential Energy is always negative. 
### Kinetic Energy ($E_{k}$)
$$
\frac{mv^2}{r}=\frac{GMm}{r^2}
$$
$$
mv^2=\frac{GMm}{r}
$$
$$
\frac{1}{2}mv^2=\frac{GMm}{2r}
$$
$$
E_{k}=\frac{GMm}{2r}
$$
>[!warning]
>Kinetic Energy is always positive

### Total Energy ($E_{T}$)
$$
E_{T}=E_{P}+E_{k}
$$
$$
E_{T}=-\frac{GMm}{r}+\frac{GMm}{2r}
$$
$$
E_{T}=-\frac{2GMm}{2r}+\frac{GMm}{2r}
$$
$$
E_{T}=-\frac{GMm}{2r}
$$
>[!warning] 
>Total Energy is always negative 

## Energy Ratio
$$
E_{T} : E_{p} : E_{k}
$$
$$
-\frac{GMm}{2r}:-\frac{GMm}{r}:{\frac{GMm}{2r}}
$$
$$
-\frac{1}{2}\left( \frac{GMm}{r} \right):-\left( \frac{GMm}{r} \right):{\frac{1}{2}\left( \frac{GMm}{r} \right)}
$$
$$
-\frac{1}{2}:-1:{\frac{1}{2}}
$$
$$
1:2:-1
$$
>[!important]
>The same ratio is applicable for energy changes:
>$$\Delta E_{T}:\Delta E_{P}:\Delta E_{K}$$
>$$1:2:-1$$


>[!warning]
>This ratio is only applicable when comparing old and new stable orbits. 
>For example, if a satellite is in an orbit $A$ and you fire thrusters or start experiencing drag and finally settles in an orbit $B$, this ratio is only applicable to comparing the energies in orbit $A$ and $B$ not in the time in between.


## Scenarios
### 1. Thrusters are fired (mass assumed to be constant)

Since mass is constant, $GMm$ is constant. Therefore,
$$
E_{T}=-\frac{GMm}{2r} \implies E_{T} \propto-\frac{1}{2r}
$$
- When thrusters are fired kinetic energy increases and total energy increases (becomes less negative)
- For the expression $-\frac{1}{2r}$ to become less negative, $r$ must increase.
- Therefore, orbital radius increases.

### 2. Atmospheric Drag
When a satellite experiences resistive forces, total energy decreases (becomes more negative).
Since,
$$
E_{T} \propto-\frac{1}{2r}
$$
For total energy to become more negative, $r$ must decreases. Therefore orbital radius decreases.
Since gravitational potential energy is given by,
$$
E_{p}=-\frac{GMm}{r}
$$
When radius decreases, gravitational potential energy decreases (becomes more negative)
Since kinetic energy is given by,
$$
E_{K}=\frac{GMm}{2r}
$$
When radius decreases, kinetic energy increases (becomes more positive)

# Binary Star Systems
Two stars ($M_{A}$ and $M_{B}$) orbiting a common centre of mass $P$.
![A binary star system|500](binary-star-system.svg)
>[!important]
>- According to Newton's third law, the gravitational force between the two stars is the same. (star A exerts a force on B, B exerts an equal and opposite force on A)
>- Since in circular orbit gravitational force provides centripetal force and the gravitational force is the same, centripetal force is the same. 
>- They have the same angular frequency $\omega$ and orbital period $T$.
>- They remain opposite to each other, with a straight line passing through $P$ joining their centres.

$$
\text{Centripetal Force on A} = \text{Centripetal Force on B}
$$
$$
M_{A}r_{A}\omega^2=M_{B}r_{B}\omega^2
$$
$$
M_{A}r_{A}=M_{B}r_{B}
$$
$$
\frac{M_{A}}{M_{B}}=\frac{r_{B}}{r_{A}}
$$
# Escape Velocity 
>[!info] Definition
>Minimum speed an object needs at a point in a gravitational field to escape to infinity, coming to rest with zero total energy.



$$
\Delta E_{K}=\Delta E_{P}
$$
Gravitational Potential Energy is defined as zero at infinity
$$
\frac{1}{2}mv^2=0-\left( -\frac{GMm}{r} \right)
$$
$$
\frac{1}{2}mv^2=\frac{GMm}{r}
$$
$$
\frac{1}{2}v^2=\frac{GM}{r}
$$
$$
v=\sqrt{ \frac{2GM}{r} }
$$
In terms of gravitational potential ($\phi$)
$$
v=\sqrt{ 2\times \frac{GM}{r} }
$$
$$
v=\sqrt{ -2\phi }
$$
