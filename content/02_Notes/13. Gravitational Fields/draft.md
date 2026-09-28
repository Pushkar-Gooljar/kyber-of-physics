Here is a comprehensive, Obsidian-formatted note compiling the tricky and catching points from your JSON file. I have grouped the questions by their underlying physics concepts and provided expert tutor breakdowns to help you understand exactly *why* examiners look for specific phrasing and where students typically fall into traps.

***

# 🌌 A-Level Physics: Gravitational Fields – Tricky Questions & Examiner Traps

## 1. Core Definitions & Assumptions

### 1.1 The Definition of Gravitational Field
**Paper:** 9702_s20_qp_41 (Q1a)
**Context:** Standard definitions question.
**Question:** State what is meant by a gravitational force.
> **Mark Scheme:**
> • Force acting between two masses OR force on mass due to another mass.

**Expert Tutor Explanation:** 
While this seems incredibly basic, many students lose marks by defining a *field* instead of a *force*, or by defining gravitational *field strength* (force per unit mass). Always pay strict attention to the exact noun used in the prompt. Force = push/pull between masses. Field = region of space. Field Strength = force per unit mass.

### 1.2 Assumptions in Newton's Law of Gravitation
**Paper:** 9702_s19_qp_42 (Q1c.ii)
**Context:** Two small spheres attached to a rod and thread are attracting each other. 
**Question:** Suggest why the total force between the spheres may not be equal to the force calculated using Newton’s law of gravitation.
> **Mark Scheme:**
> • Law applies only to point masses / spheres are not point masses.
> • Radii of spheres not small compared with separation.
> • Spheres may not be uniform.
> • Spheres may be charged / electrostatic force present.
> 
> **Examiner Report:** Many candidates missed the fact that the question was asking about the force *between the spheres*, not about other forces that may be exerted on each sphere individually. Common responses that were not awarded credit referred to air resistance, torsion in the thread, and gravitational attraction to the Earth.

**Expert Tutor Explanation:** 
This is a classic "read the question carefully" trap. The question asks why the *formula* $F = GMm/r^2$ might fail to calculate the exact force *between these two specific spheres*. It is not asking for a free-body diagram of all forces acting on the objects. Newton's law inherently assumes **point masses**. If the objects are close enough that their radii are comparable to their separation, they cannot be modeled as point masses. 

### 1.3 Gravitational Perturbations (Isolated Systems)
**Paper:** 9702_w16_qp_42 (Q1c)
**Context:** Proxima Centauri is the nearest star to the Sun. You have just calculated the very small gravitational force ($2.0 \times 10^{16}$ N) it exerts on the Sun.
**Question:** Suggest quantitatively why it may be assumed that the Sun is isolated in space from other stars.
> **Mark Scheme:**
> • Force (of $2 \times 10^{16}$ N) would have little effect on the (large) mass of the Sun.
> • Would cause an acceleration of the Sun of $1.0 \times 10^{-14} \text{ m s}^{-2}$ (which is very small/negligible).
> *OR*
> • Many stars all around the Sun, so the net effect of forces/fields is zero.
> 
> **Examiner Report:** Very few answers were based on the answer obtained in the previous part. It was expected that candidates would realise that, although the force is very large, the large mass of the Sun would mean any acceleration would be very small.

**Expert Tutor Explanation:** 
The keyword here is **quantitatively**. You must use numbers. A force of $10^{16}$ N sounds massive in everyday terms, but in astrophysics, $a = F/m$ is what matters. Because the Sun's mass is $\approx 10^{30}$ kg, the resulting acceleration is practically zero. Always let the equations do the talking when asked to explain something "quantitatively."

---

## 2. Superposition & Vector Nature of Fields

### 2.1 Zero Field Points
**Paper:** 9702_s22_qp_43 (Q1b.ii)
**Context:** The Earth and Moon can both be considered point masses. Point X is on the line between them where the resultant field is zero.
**Question:** Explain why there is a point X on the line between the centres of the Earth and the Moon where the resultant gravitational field strength due to the Earth and the Moon is zero.
> **Mark Scheme:**
> • Fields (due to Earth and the Moon) have equal magnitudes.
> • Fields (due to Earth and the Moon) are in opposite directions.
> 
> **Examiner Report:** This explanation proved challenging for many candidates, particularly those who referred to *forces* rather than *fields*. Some candidates who did mention fields could not gain full credit because they did not say that the directions were opposite.

**Expert Tutor Explanation:** 
Gravitational field strength ($g$) is a **vector**. For a resultant vector to be zero, two conditions must absolutely be met: equal magnitude *and* opposite direction. Furthermore, the question asks about *field strength*, so talking about a "balanced force" is technically answering the wrong question, as force requires a test mass to be placed there.

### 2.2 Vector Directions Inside a Sphere
**Paper:** 9702_w23_qp_41 (Q1b.ii)
**Context:** Point P is inside a uniform sphere. A graph is shown plotting $g$ against displacement $x$ from the centre.
**Question:** Explain why, at the surface of the sphere, $g$ always has the opposite sign to $x$.
> **Mark Scheme:**
> • Gravitational force is (always) attractive OR gravitational force (always) acts towards the centre of the sphere.
> • Force is in opposite direction to displacement OR at a point to the right of the centre, force acts to the left.

**Expert Tutor Explanation:** 
Displacement ($x$) is a vector pointing *outward* from the center. Gravity is an attractive force, so its field ($g$) points *inward* toward the center. Therefore, their vectors are anti-parallel (opposite signs). This justifies the negative sign in $g = -GM/x^2$ when defining vectors.

---

## 3. Circular Motion & Orbital Dynamics

### 3.1 Forces in Binary Star Systems
**Paper:** 9702_s16_qp_42 (Q1a.i) & 9702_s20_qp_41 (Q1c.ii)
**Context:** A binary star system consists of two stars orbiting a common center of mass (point P). 
**Question (s16):** Explain why the centripetal force acting on both stars has the same magnitude.
**Question (s20):** By considering the forces acting on the two stars, show that the ratio of the masses $M_1 / M_2 = (d-x)/x$.
> **Mark Scheme (s16):**
> • Gravitational force provides the centripetal force.
> • Same gravitational force (by Newton III).
> 
> **Examiner Report (s16):** Many answers did not make any reference to gravitational force, but instead were based solely on equal angular speeds. Where gravitational force was discussed, many candidates gave the incorrect impression that there are two forces (gravitational and centripetal) acting on each star.
> 
> **Mark Scheme (s20):**
> • Gravitational forces are equal OR centripetal force about P is the same.
> • $M_1 x \omega^2 = M_2 (d - x) \omega^2$

**Expert Tutor Explanation:** 
There is a massive misconception that "centripetal force" is a magical, independent force. It is not. Centripetal force is simply the *name given to the resultant force* when an object moves in a circle. In a binary star system, the *only* force acting on Star A is the gravitational pull from Star B, and vice versa. By Newton's Third Law, these pulls are equal and opposite. Since $F_{grav} = F_{centripetal}$, the centripetal forces must be identical. When proving equations for binary systems, always start by equating $m_1 r_1 \omega^2 = m_2 r_2 \omega^2$.

### 3.2 Explaining Circular Orbits
**Paper:** 9702_m22_qp_42 (Q1b)
**Context:** A moon is in a circular orbit around a planet.
**Question:** Explain why the path of the moon is circular.
> **Mark Scheme:**
> • Gravitational force provides the centripetal force.
> • Force has constant magnitude.
> • Force is perpendicular to velocity / direction of motion.
> 
> **Examiner Report:** Only stronger candidates answered fully correctly. It was common to see responses in which gravitational and centripetal forces were discussed as being different forces that somehow balance each other out. Only a few candidates recognised that the force had to have a constant magnitude.

**Expert Tutor Explanation:** 
To guarantee a *perfectly circular* orbit (as opposed to elliptical), three things must be stated:
1. What provides the force? (Gravity).
2. What direction is it? (Perpendicular to velocity, ensuring it only changes direction, not speed).
3. Is it constant? (Yes, constant magnitude ensures the radius of curvature doesn't change).

### 3.3 Are Orbits in Equilibrium?
**Paper:** 9702_s18_qp_41 (Q1b.i)
**Context:** A planet orbits a star at a constant speed.
**Question:** Explain whether the planets are in equilibrium.
> **Mark Scheme:**
> • Velocity changes / direction of motion changes / there is an acceleration / there is a resultant force.
> • So not in equilibrium.
> 
> **Examiner Report:** Many candidates incorrectly thought that the planets were in equilibrium, either because the speed was constant, the forces on each planet and the star were equal and opposite, or because the gravitational and centripetal forces were equal.

**Expert Tutor Explanation:** 
"Equilibrium" in physics has a very strict definition: **Resultant Force = 0**. If an object is moving in a circle, it is constantly changing direction, meaning its velocity is changing, meaning it is accelerating. If it is accelerating, there *must* be a resultant force (the centripetal force). Therefore, an object in orbit is **never** in equilibrium.

### ==3.4 Weight and Normal Contact Force on a Planet's Surface==
**Paper:** 9702_w22_qp_42 (Q1c.ii) & 9702_s21_qp_42 (Q1b.iii)
**Context:** An object rests on the surface of the Earth at the Equator. 
**Question (w22):** Describe how the two forces acting on the object give rise to this centripetal acceleration.
**Question (s21):** Calculate the force per unit mass exerted on the object by the surface of the planet.
> **Mark Scheme (w22):**
> • Identification of the two forces acting on the object as gravitational force and (normal) contact force.
> • Gravitational force and normal contact force are in opposite directions, and their resultant causes the (centripetal) acceleration.
> 
> **Examiner Report (w22):** Only the most able candidates had an understanding that the two forces acting on the object are the weight downwards and the normal contact force upwards. Even some of those who did get this far often had those two forces being equal to each other, leading to a centripetal acceleration of zero. The strongest candidates realised that the contact force is slightly less than the weight, leading to a resultant force towards the centre of the Earth.
> 
> **Mark Scheme (s21):**
> • Force per unit mass = $g - a = 3.73 - 0.0171 = 3.71 \text{ N kg}^{-1}$

**Expert Tutor Explanation:** 
This is a high-level discriminator concept. If you are standing on the equator, you are moving in a circle. Therefore, you need a resultant centripetal force pointing towards the center of the Earth. 
Equation: $F_{net} = ma = F_{grav} - R$ (where R is the normal reaction force). 
Because $ma$ must be positive (pointing to the center), $F_{grav}$ MUST be greater than $R$. 
When a scale measures your "weight", it is actually measuring $R$. Therefore, $R = F_{grav} - ma$. Your apparent weight at the equator is slightly *less* than the true gravitational pull!

### ==3.5 Apparent "Weightlessness" in Orbit==
**Paper:** 9702_s15_qp_42 (Q1b)
**Context:** An astronaut in a satellite orbiting Earth reports being 'weightless'.
**Question:** Suggest what is meant by the astronaut reporting that he is 'weightless'.
> **Mark Scheme:**
> • Gravitational force provides the centripetal force / Gravitational force is 'equal' to the centripetal force.
> • 'Weight' / sensation of weight / contact force / reaction force is the difference between $F_G$ and $F_C$, which is zero.
> 
> **Examiner Report:** There were very few correct responses. Many candidates did not consider centripetal force and did not make any connection with the reasoning used in (a). The majority of answers were based on either negligible gravitational force or the influence of other stars and planets.

**Expert Tutor Explanation:** 
"Weightlessness" does **not** mean zero gravity! At the altitude of the ISS, gravity is still about 90% as strong as it is on the surface. Weightlessness means there is no **normal contact force** pushing back on you. Because both the astronaut and the space station are falling towards Earth at the exact same rate ($g = a_{centripetal}$), the floor never pushes up against the astronaut's feet. Reaction force = 0, hence the *sensation* of weightlessness.

---

## 4. Gravitational Potential & Potential Energy ($E_P$)

### 4.1 Understanding the Negative Sign in Potential Energy
**Paper:** 9702_s22_qp_42 (Q1b.ii) & 9702_s21_qp_41 (Q1c.ii)
**Context:** Moving a mass further away from a planet, or moving a comet closer to a star.
**Question:** State, with a reason, whether the change in gravitational potential energy is an increase or a decrease.
> **Mark Scheme (s22 - Comet moving closer):**
> • Gravitational force is attractive so decrease OR gravitational force does work so decrease.
> **Mark Scheme (s21 - Satellite moving further away):**
> • Separation increases so (potential energy) increases OR movement is against gravitational force so increases.
> 
> **Examiner Report (s21):** Most candidates realised that the separation had increased but were not able to say that there was also an *increase* in the gravitational potential energy. Many indicated that separation and energy are inversely proportional, forgetting that gravitational potential energy is negative. Candidates often know the equation, but they do not always realise that, because it is negative, the energy will increase as the denominator ($r$) increases.

**Expert Tutor Explanation:** 
This trips up thousands of students every year. The formula is $E_P = -GMm/r$. 
Look at the math: If $r$ increases, the fraction $GMm/r$ becomes a smaller number. BUT, because of the minus sign, a "smaller negative number" is actually a **larger** overall value (e.g., going from -100 J to -10 J is an *increase* of 90 J). 
Look at the physics: Gravity is an attractive force. If you move away from a planet, you must do work *against* gravity. Doing work on an object increases its energy. Therefore, moving further away always means $E_P$ *increases*.

### 4.2 Is $g$ equal to Acceleration of Free Fall?
**Paper:** 9702_w18_qp_42 (Q1a.ii)
**Question:** Explain why, at the surface of a planet, gravitational field strength is numerically equal to the acceleration of free fall.
> **Mark Scheme:**
> • Acceleration = $F/m$
> • Field strength = $F/m$
> • So they are equal.
> 
> **Examiner Report:** Very few candidates answered the question that was asked. Those who did were able to explain that both quantities were given by the ratio force/mass. Many gave a response asking about the effect of small changes in height above the surface, relying on memorised past mark schemes.

**Expert Tutor Explanation:** 
Don't overcomplicate this. By Newton's second law, $a = F/m$. By the definition of a gravitational field, $g = F/m$. Therefore, $a = g$. The end. Read exactly what the prompt asks!

---

## 5. Orbital Energy, Decay & Escape Velocity

### 5.1 The Counter-Intuitive Physics of Orbital Decay
**Paper:** 9702_w15_qp_41 (Q1b) & 9702_m19_qp_42 (Q1c) & 9702_w12_qp_41 (Q1b.iii)
**Context:** Small resistive forces (air friction) act on a satellite, causing its radius to slowly decrease.
**Question:** State whether total energy, radius, potential energy, and kinetic energy increase, decrease, or remain constant.
> **Mark Scheme:**
> • Total energy: decreases
> • Radius: decreases
> • Potential energy: decreases
> • Kinetic energy: **increases**
> 
> **Examiner Report (w15):** Only a small number of candidates were able to provide correct responses to all four parts. A common misunderstanding was to quote the total energy as being constant.
> **Examiner Report (m19):** Many candidates realised that the kinetic energy would increase, but did not have the correct reasoning for this assertion. A common misconception was to refer to the conservation of energy, which is incorrect given that the rockets on the satellite had been fired (or air resistance is doing work).

**Expert Tutor Explanation:** 
This is one of the most famously counter-intuitive concepts in physics. If air friction acts on a satellite, it *loses* total energy (work is done against friction). Losing total energy causes it to drop to a lower orbit ($r$ decreases). Because $r$ decreases, it falls deeper into the potential well, so $E_P$ decreases. 
However, look at the orbital velocity equation: $v^2 = GM/r$. If $r$ decreases, $v$ **must increase**. Therefore, Kinetic Energy *increases*. 
How can it lose total energy but gain KE? Because the loss in Potential Energy is *twice as large* as the gain in Kinetic Energy (this is known as the Virial Theorem). 
**Never use "Conservation of Mechanical Energy" to explain a satellite changing orbits due to rockets or friction—external work is being done!**

### ==5.2 Kinetic vs Potential in Approaches==
**Paper:** 9702_s19_qp_41 (Q1c)
**Context:** A spacecraft approaches a planet. Its speed at point B (far away) is 4100 m/s, and its speed at point A (closer) is 3700 m/s.
**Question:** By considering changes in $E_P$ and KE, determine whether the total energy of the spacecraft increases or decreases.
> **Mark Scheme:**
> • Kinetic energy decreases OR potential energy decreases.
> • Kinetic energy AND potential energy decrease, so total energy decreases.
> 
> **Examiner Report:** Many candidates incorrectly applied conservation of energy here and had one energy type increasing while the other was decreasing. They did not look at the context of the question which gave the speed of the spacecraft in the two locations. 

**Expert Tutor Explanation:** 
Always look at the data given! Normally, falling toward a planet converts PE into KE (speed increases). But here, the data tells you the speed *decreased* as it got closer. This means the spacecraft must have fired retro-rockets to slow down. Since it got closer, PE decreased. Since it slowed down, KE decreased. Both decreased, so Total Energy decreased. Don't blindly apply conservation of energy if the data tells a different story.

### 5.3 Calculating Escape Velocity (Multi-Body Systems)
**Paper:** 9702_w13_qp_41 (Q1c)
**Context:** A rock is projected from the Moon to infinity. You calculated the escape speed. The Moon orbits the Earth.
**Question:** State and explain whether the minimum speed for the rock to reach the Earth from the Moon's surface is different from the escape speed calculated.
> **Mark Scheme:**
> • Earth would attract the rock / potential at Earth's surface not zero / at Earth, potential due to Moon not zero.
> • Escape speed would be lower.
> 
> **Examiner Report:** There were some correct responses based on the fact that the Earth would attract the rock. It was rare to find an answer based on the effect of the Earth’s potential.

**Expert Tutor Explanation:** 
Normally, escape velocity assumes you are escaping one body into an empty, infinite void. But the Moon is locked in Earth's gravity well. If you shoot a rock from the Moon toward Earth, Earth's gravity will eventually "grab" it and pull it in. Therefore, you don't need enough energy to get to infinity; you only need enough energy to reach the "Lagrange point" where Earth's gravity takes over. Thus, the required speed is lower.

### 5.4 Escape Velocity vs. Kinetic Theory Distribution
**Paper:** 9702_w23_qp_42 (Q2e)
**Context:** You calculated the escape velocity of the Moon ($2400 \text{ m/s}$) and the $c_{rms}$ of Hydrogen gas at 400 K ($2200 \text{ m/s}$).
**Question:** Suggest a reason why the Moon does not have an atmosphere consisting of hydrogen.
> **Mark Scheme:**
> • r.m.s. speed is an average, so many molecules have speeds greater than the escape speed.
> *OR*
> • There is a distribution of molecular speeds, so many molecules have speeds greater than the escape speed.
> 
> **Examiner Report:** This was a challenging question. Even many of the stronger candidates missed the point that, even though the r.m.s. speed is a little less than the escape speed, there is a distribution of speeds. Over time, molecules with enough speed escape.

**Expert Tutor Explanation:** 
This is a beautiful synthesis of Astrophysics and Ideal Gases. $c_{rms}$ is an *average*. In a Maxwell-Boltzmann distribution, there is a long "tail" of particles moving much faster than the average. Because $2200 \text{ m/s}$ is so close to $2400 \text{ m/s}$, a massive chunk of the hydrogen atoms are moving faster than the escape velocity at any given moment. Once they leave, the remaining gas re-distributes, more atoms hit the escape velocity, and the atmosphere "bleeds" away into space very quickly.

### ==5.5 Independence of Mass in Orbital Mechanics==
**Paper:** 9702_s22_qp_42 (Q1c)
**Context:** A comet passes a star. A second comet passes with the exact same initial speed and position, but it is gradually losing mass as it travels. 
**Question:** Suggest, with a reason, how the path of the second comet compares.
> **Mark Scheme:**
> • Both PE and KE equations include $m$, so path is unchanged.
> 
> **Examiner Report:** The strongest candidates realised that the mass of the comet cancels out in the energy equations and so the fact that its mass is changing is immaterial to the path of the comet.

**Expert Tutor Explanation:** 
Whether looking at force ($GMm/r^2 = mv^2/r \rightarrow v^2 = GM/r$) or energy ($\frac{1}{2}mv^2 - GMm/r = E_{total} \rightarrow \frac{1}{2}v^2 - GM/r = \text{const}$), the mass of the orbiting object ($m$) completely cancels out. The trajectory through a gravitational field depends *only* on initial position, initial velocity, and the mass of the central star ($M$). 

---

## 6. Graphical Representations

### 6.1 Sketching the Variation of $g$ Between Two Masses
**Paper:** 9702_w25_qp_41 (Q3c)
**Context:** Two identical spheres, distance L apart. Sketch $g$ against distance $x$ from the first sphere.
> **Mark Scheme:**
> • Line starting at $(R, -g_0)$ and ending at $(L-R, +g_0)$.
> • Line passing through $(L/2, 0)$.
> • Curve becoming shallower from $R$ to $L/2$ and then steeper from $L/2$ to $L-R$.

**Expert Tutor Explanation:** 
Because fields are vectors, the field from the left mass points left (negative), and the field from the right mass points right (positive). At the exact midpoint ($L/2$), they cancel out, passing through zero. The curve must be an inverse-square shape, steep near the surfaces and flattening out near the zero-crossing.

### 6.2 Sketching Gravitational Potential $\phi$
**Paper:** 9702_m25_qp_42 (Q2a, b)
**Context:** Sketching potential $\phi$ for an isolated planet, and for a satellite in geostationary orbit over 24 hours.
> **Mark Scheme (Isolated Planet):**
> • Curve in negative $\phi$ region. Starts at $(R, -\phi)$ with decreasing magnitude and gradient. Passes through $(2R, -0.5\phi)$ and $(4R, -0.25\phi)$.
> **Mark Scheme (Geostationary Satellite over time):**
> • Horizontal straight line from $t=0$ to $t=24$ hours, starting at $(0, -\phi)$.

**Expert Tutor Explanation:** 
For 2(a): Potential follows $\phi = -GM/r$. It is an inverse curve, entirely in the negative quadrant. Because $\phi \propto 1/r$, doubling the distance halves the potential.
For 2(b): A geostationary satellite stays at a *constant orbital radius*. Since $r$ doesn't change, $\phi$ doesn't change. Therefore, it is a flat horizontal line over time.

---

## ==7. Miscellaneous Orbit Scenarios==

### ==7.1 Geostationary vs. Polar Orbits==
**Paper:** 9702_s23_qp_42 (Q1d.ii)
**Context:** A satellite has the exact same orbital radius and period (24 hours) as a geostationary satellite, but it is *not* geostationary.
**Question:** Suggest two ways the orbit could be different.
> **Mark Scheme:**
> • Orbit is from east to west (retrograde).
> • Orbit is not equatorial / orbit is polar.
> 
> **Examiner Report:** Some weaker candidates discussed different periods or orbital radius, despite it being stated in the question that these properties were the same.

**Expert Tutor Explanation:** 
To be strictly "geostationary", a satellite must fulfill three conditions: 
1. Period = 24 hours (implies specific radius).
2. Orbit exactly above the Equator.
3. Orbit west-to-east (same direction as Earth's rotation).
If radius and period are locked, the only ways to break geostationary status are to tilt the orbit (e.g., polar orbit) or run it backwards (east-to-west).

### ==7.2 Satellite Launch Dynamics==
**Paper:** 9702_w20_qp_42 (Q1c)
**Context:** A satellite is launched from the Equator.
**Question:** Suggest why the energy required to launch depends on whether the satellite, in its orbit, is travelling from west to east or east to west.
> **Mark Scheme:**
> • Smaller gain in energy required if orbit is west to east.
> • Satellite already moving west to east at launch (due to Earth's rotation).
> 
> **Examiner Report:** Many presumed this question was about geostationary orbits. Some candidates confused the meanings of 'orbit', 'rotation' and 'movement', or gave an incorrect direction of rotation of the Earth.

**Expert Tutor Explanation:** 
The Earth rotates from West to East (which is why the sun rises in the East). If you launch a rocket from the equator heading East, the rocket already has a "free" starting speed of $\approx 460 \text{ m/s}$ just from sitting on the launchpad. It requires much less fuel (kinetic energy) to reach orbital velocity than if you launched West, where you would have to fight against that initial momentum.


