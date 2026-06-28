Here is a comprehensive extraction of key question-and-answer pairs from the provided past paper materials for **Topic 3: Hardware**. The questions have been logically grouped by concept and formatted for your Obsidian vault.

# Topic 3.1: Computers and their Components

## 3.1.2 Embedded Systems

> [!question] Question: 9618_w23_qp_12 (Q1.c.i) & 9618_s24_qp_11 (Q2.a)
> Identify the characteristics and features of an embedded system.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 2:*
> > • Dedicated to a single task / performs specific tasks only / limited number of functions
> > • Built into a larger system / integrated into a larger system
> > • An embedded system must contain a processor, memory and an I/O capability // Dedicated hardware
> > • Only a dedicated microprocessor is required due to limited processing requirements

> [!question] Question: 9618_w24_qp_12 (Q2.a)
> Describe the drawbacks of using embedded systems in electronic devices.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 3):*
> > • It is difficult to change / update the firmware by the user
> > • Errors cannot be fixed easily // Troubleshooting / fault-finding / repairing is a specialist task / expensive
> > • Functionality cannot be changed/extended easily // Cannot be easily adapted for another task
> > • Faulty / outdated devices are often thrown away rather than repaired...
> > • … leading to e-waste

> [!question] Question: 9618_s21_qp_11 (Q5.b)
> An embedded system in a washing machine makes use of both Random Access Memory (RAM) and Read Only Memory (ROM). 
> State the purpose of RAM and ROM within the washing machine’s embedded system.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for RAM, 1 mark for ROM:*
> > **RAM:**
> > • Stores the choices/wash program the user has entered // stores the data read from the sensors // stores the time left in the program 
> > **ROM:**
> > • Stores the start-up instructions (for the washing cycles) / firmware

## 3.1.3 Hardware Device Operations

> [!question] Question: 9618_w25_qp_11 (Q10.a)
> Explain how a physical model is printed using a 3D printer.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point, max 3 marks:*
> > **Generic mark points:**
> > • Additive manufacturing
> > • Uses a digital file created from 3D modelling software or Computer Aided Design (CAD) software
> > • The printer builds up the model one layer at a time (from the bottom up)
> > • The material is fused / cured together layer by layer
> > **Specific mark points (e.g.):**
> > • Fused Deposition Modelling (FDM) // Material is heated and pushed through a nozzle / extruder
> > • Stereolithography (SLA) // Photosensitive liquid resin is exposed to a UV-laser beam

> [!question] Question: 9618_w24_qp_11 (Q3.d.i)
> Describe the principal operation of an optical disc reader/writer.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 4):*
> > • The disc is spun at high speed
> > • A laser is shone onto the disc to read / write
> > • … using an optical head to move it into position
> > • … it follows the spiral track from the centre outwards
> > • When writing, the laser burns pits to represent the data
> > • When reading, the laser reflects from pits and lands
> > • The reflection from a pit and a land is different
> > • ... the differences are interpreted as 1 or 0 by a light sensor

> [!question] Question: 9618_s24_qp_11 (Q2.c.ii)
> Complete the following statements about the principal operation of solid state (flash) memory.
> 1. The two types of logic gate that can be used to create solid state devices are...
> 2. The type of gate that can retain electrons without power is...
> 3. The type of gate that allows or stops current from passing through is...
> **[3]**
> 
> > [!success]- Mark Scheme
> > 1. NAND / NOR
> > 2. Floating (gate)
> > 3. Control (gate)

> [!question] Question: 9618_w25_qp_12 (Q8.b.i)
> Explain how a touchscreen converts the point of touch to a selection from a menu.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point, max 4 marks:*
> > **Methods to determine point of touch (Max 2):**
> > • Resistive // two layers of material make contact and complete a circuit
> > • Capacitive // contact with the screen creates a change in electrical charge
> > • Infrared // the IR beams are broken by the pointing device
> > • Acoustic pulse // the acoustic wave is absorbed by the pointing device
> > **Selection from the menu (Max 2):**
> > • The point of touch is used by the microprocessor to determine the x and y coordinates
> > • The menu item corresponding to the coordinate position is recognised and the item is selected

## 3.1.4 Buffers

> [!question] Question: 9618_w24_qp_11 (Q3.d.ii) & 9618_w24_qp_13 (Q2.b)
> Explain the use of a buffer when a computer is transferring data to a peripheral device (e.g., optical disc, hard disk, printer).
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 4):*
> > • The computer and the peripheral device transmit and receive at different speeds // The computer processor transfers data much faster than the peripheral can receive
> > • A buffer acts as a temporary storage area for the data
> > • … so that the computer can transfer data to the buffer at the higher speed
> > • ... and is not held up waiting for data to transfer // so the CPU can carry on with other processing tasks
> > • … and so that data is smoothly transferred to the peripheral from the buffer at its slower rate
> > • When the buffer is empty/full an interrupt is sent to the computer requesting more data or stopping further data being sent

## 3.1.5 Memory Types

> [!question] Question: 9618_w25_qp_11 (Q6.c) & 9618_w24_qp_13 (Q2.a)
> State the differences between Dynamic RAM (DRAM) and Static RAM (SRAM).
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point, max 3 marks:*
> > • DRAM requires constant refreshing/recharging, but SRAM does not need to be refreshed
> > • DRAM stores each bit as charge using a capacitor, SRAM uses a flip-flop to store each bit
> > • DRAM has slower access times than SRAM
> > • DRAM has a higher storage/bit/data density (higher capacity per chip) than SRAM
> > • DRAM is less expensive to manufacture than SRAM
> > • DRAM is typically used in main memory, whereas SRAM is used in CPU cache

> [!question] Question: 9618_w24_qp_12 (Q2.c)
> Give two differences between Erasable Programmable ROM (EPROM) and Electrically Erasable Programmable ROM (EEPROM).
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 2):*
> > • EPROM uses ultraviolet (UV) light to erase data whilst EEPROM uses an electrical signal to do this
> > • EPROM has to be physically removed from the circuit board when changing the data, whilst EEPROM remains in the circuit
> > • EPROM erases all the data at once, EEPROM can erase parts of the data (byte-by-byte)

## 3.1.6 Monitoring and Control Systems

> [!question] Question: 9618_w25_qp_11 (Q9)
> Describe the differences between a monitoring system and a control system.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point, max 3 marks:*
> > • Monitoring systems only report/warn and do not take any action, whereas control systems act autonomously to change the environment if values are out of range
> > • Control systems use actuators to perform actions; monitoring systems do not have any actuators
> > • Control systems make use of feedback loops; monitoring systems do not
> > • The output from a monitoring system does not affect the subsequent input, whereas the output from a control system directly affects the next input reading.

> [!question] Question: 9618_w23_qp_11 (Q9.a)
> Explain the importance of feedback in a control system.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 3):*
> > • It ensures that the system operates within the set criteria / given constraints
> > • ... by enabling the system's output to directly affect subsequent system inputs
> > • ... thus allowing conditions to be automatically adjusted without human intervention

---

# Topic 3.2: Logic Gates and Logic Circuits

## 3.2.1 Logic Gates

> [!question] Question: 9618_s24_qp_12 (Q1.a)
> Describe the operation of the NAND, NOR, and XOR logic gates.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each correct answer:*
> > • **NAND:** The output is 0 only when both inputs are 1, otherwise the output is 1.
> > • **NOR:** The output is 1 only when both inputs are 0, otherwise the output is 0.
> > • **XOR:** The output is 1 when the inputs are different (one is 1 and the other is 0), otherwise the output is 0.

## 3.2.4 Constructing Logic Expressions

> [!question] Question: 9618_w25_qp_11 (Q3.b)
> Write the logic expression for the following truth table.
> 
> | R | S | T | Q |
> |---|---|---|---|
> | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 1 |
> | 0 | 1 | 0 | 0 |
> | 0 | 1 | 1 | 0 |
> | 1 | 0 | 0 | 0 |
> | 1 | 0 | 1 | 0 |
> | 1 | 1 | 0 | 1 |
> | 1 | 1 | 1 | 0 |
> 
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark per correct term, max 2 marks:*
> > • First correct term: `(NOT R AND NOT S AND T)`
> > • Second correct term: `(R AND S AND NOT T)`
> > • Full expression: `Q = (NOT R AND NOT S AND T) OR (R AND S AND NOT T)`

> [!question] Question: 9618_w24_qp_11 (Q5.b)
> A security system operates according to the following logic parameters:
> `E` = Security system is switched on (1 = On)
> `A` = External daylight level (1 = Low)
> `B` = Front Door (1 = Open)
> `C` = Person detected (1 = Detected)
> `D` = Back Door (1 = Open)
> 
> The floodlight turns on (`X = 1`) if:
> • the security system is switched on AND the external daylight level is low AND a person is detected.
> 
> The audio alarm turns on (`Y = 1`) if:
> • the security system is switched on AND (one or more doors are open, OR a person is detected).
> 
> Write the logic expressions for X and Y.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each correct expression:*
> > • `X = E AND A AND C`
> > • `Y = E AND (B OR D OR C)`

