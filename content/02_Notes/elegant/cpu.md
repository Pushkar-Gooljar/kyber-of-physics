## 4.1.1 The Stored Program Concept & Basic Von Neumann Model

> [!question] Question: 9618_w22_qp_11 (Q5.a)
> State what is meant by the stored program concept in the Von Neumann model of a computer system.
> **[1]**
> 
> > [!success]- Mark Scheme
> > Instructions and data are stored in the same memory space / in main memory.

## 4.1.2 Purpose and Role of Registers

> [!question] Question: 9618_w25_qp_11 (Q6.a)
> The processor uses several registers, including the Accumulator (ACC) and the Current Instruction Register (CIR).
> Complete the table by describing the role of each register.
> **[2]**
> 
> > [!success]- Mark Scheme
> > **ACC (Accumulator):**
> > • stores the intermediate results of arithmetic and logical operations 
> > • // holds the result of a calculation 
> > 
> > **CIR (Current Instruction Register):**
> > • holds the instruction currently being decoded and/or executed

> [!question] Question: 9618_w24_qp_12 (Q3.a)
> The computer is designed using the Von Neumann model for a computer system. 
> Complete the table by describing the purpose of each of the given registers:
> • Program Counter (PC)
> • Memory Address Register (MAR)
> • Memory Data Register (MDR)
> • Index Register (IX)
> **[4]**
> 
> > [!success]- Mark Scheme
> > • **Program Counter (PC):** Stores the address of the next instruction to be fetched/executed.
> > • **Memory Address Register (MAR):** Stores the address of the memory location where data will be read from/written to.
> > • **Memory Data Register (MDR):** Stores the data read from the address in the MAR // stores the data to be written to the address in the MAR.
> > • **Index Register (IX):** Stores a number that will be added to the operand, to form the address of the data.

> [!question] Question: 9618_w22_qp_13 (Q4.a.i)
> A Central Processing Unit (CPU) contains several special purpose registers and other components.
> State the roles of the following registers:
> • Memory Address Register (MAR)
> • Memory Data Register (MDR)
> **[2]**
> 
> > [!success]- Mark Scheme
> > • **MAR:** holds the address in memory from which data will be read / to which data will be written.
> > • **MDR:** holds the data/instructions which has been read from or is to be written to the address in the MAR.

> [!question] Question: 9618_w22_qp_11 (Q5.b.i)
> State the role of the following registers:
> • Program Counter (PC)
> • Index Register (IX)
> • Status Register (SR)
> **[3]**
> 
> > [!success]- Mark Scheme
> > • **Program Counter (PC):** to store the address / location / memory location of the next instruction to be fetched.
> > • **Index Register (IX):** to store a value that is added to an address to give another address.
> > • **Status Register (SR):** to store flags which are set by events // from the results of arithmetic and logic operations and interrupt flags.

> [!question] Question: 9618_w25_qp_12 (Q3.a.ii)
> Registers such as the Accumulator (ACC) and the Index Register (IX) are used in the CPU.
> Identify two special purpose registers used in the CPU. Do **not** include the ACC or IX in your answers.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point, max 2 marks*
> > • Program Counter (PC)
> > • Memory Data Register (MDR)
> > • Memory Address Register (MAR)
> > • Current Instruction Register (CIR)
> > • Status Register

> [!question] Question: 9618_w23_qp_11 (Q5.a)
> The Memory Data Register (MDR), Index Register (IX) and the Accumulator (ACC) are examples of special purpose registers.
> Identify two other special purpose registers and state their role in the CPU.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for identification of the register and 1 mark for role (max 2 for each register)*
> > • **Program Counter (PC):** stores the address where the next instruction is to be read from.
> > • **Memory Address Register (MAR):** stores the address of the memory location (or an I/O component) currently being read from or written to.
> > • **Current Instruction Register (CIR):** holds the instruction currently being decoded and/or executed.
> > • **Status Register:** Contains bits which can be referenced individually and set or cleared depending on the operation e.g. overflow, underflow.

## 4.1.3 Purpose and Roles of ALU, CU, System Clock, and IAS

> [!question] Question: 9618_w24_qp_11 (Q3.a)
> State the purpose of the system clock and the Control Unit (CU) in a CPU.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for system clock and 1 mark for Control Unit*
> > **System clock:**
> > • To synchronise operations
> > • ... by creating and transmitting timing signals on the control bus
> > 
> > **Control Unit:**
> > • Sends/receives control signals along control bus
> > • Reads an instruction from the contents of the memory location whose address is stored in PC
> > • Coordinates/synchronises the activity of other components in the CPU
> > • Manages the execution of instructions
> > • Controls communication between the components in the CPU

> [!question] Question: 9618_s25_qp_13 (Q2.a.i)
> The processor has a Control Unit (CU) and system clock.
> Explain how the CU and the system clock work together.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 2*
> > • The control unit synchronises the actions of the processor
> > • by sending a command / signal on each timing signal produced by the system clock
> > • using / along the control bus

> [!question] Question: 9618_s23_qp_13 (Q7.b)
> The computer has a Control Unit (CU), system clock and control bus.
> Explain how the CU, system clock and control bus operate to transfer data between the components of the computer system.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 4*
> > • The system clock gives out timing signals 
> > • … which are sent on the control bus
> > • …to synchronise the other system components 
> > • The Control Unit initiates data transfer 
> > • …by generating signals that are sent on the control bus to other components

> [!question] Question: 9618_w22_qp_11 (Q5.b.iii)
> Describe the purpose of the Control Unit (CU) in a CPU.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 2):*
> > • to coordinate / synchronise the actions of other components in the CPU
> > • to send / receive control signals along the control bus
> > • to manage the execution of instructions (in sequence)
> > • to control the communication between the components of the CPU

> [!question] Question: 9618_w22_qp_13 (Q4.b)
> A computer system contains a system clock. Describe the purpose of the system clock.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 2):*
> > • synchronise operations 
> > • ... by creating timing signals
> > • to keep track of the date and time / timestamp files 
> > • to process operations in the correct order / sequence

> [!question] Question: 9618_s21_qp_12 (Q5.a)
> Complete the following descriptions of internal components of a computer by writing the missing terms.
> 
> The ________ transmits the signals to coordinate events based on the electronic pulses of the ________.
> The ________ carries data to the components, while the ________ carries the address where data needs to be written to or read from.
> The ________ performs mathematical operations and logical comparisons.
> **[5]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each term correctly inserted:*
> > • The **control unit/bus** transmits the signals to coordinate events based on the pulses of the **(system) clock**. 
> > • The **data bus** carries data to components, while the **address bus** carries the address where data is being written to or read from. 
> > • The **arithmetic logic unit/ALU** performs mathematical operations and logical comparisons. 

> [!question] Question: 9618_w23_qp_11 (Q5.b)
> Describe what is meant by the Immediate Access Store (IAS) in a computer system.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 2)*
> > • Immediate Access Store holds all the data / instructions / programs currently in use 
> > • Immediate Access Store is volatile memory
> > • Immediate Access Store has fast access times

## 4.1.4 System Buses (Address, Data, Control)

> [!question] Question: 9618_s25_qp_11 (Q6.a.iii)
> The programmer is considering two computers. The two computers have different bus widths.
> Explain how different bus widths affect the performance of a computer.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 2*
> > • Wider data bus means more data can be transferred between components at a time
> > • there is less delay / latency when fetching data for a running process
> > • Wider address bus means larger memory addresses can be used
> > • allowing more memory locations to be accessed directly
> > • so less likely to run out of memory

> [!question] Question: 9618_s23_qp_12 (Q5.a)
> The laptop is designed using the Von Neumann model for a computer system.
> Identify two types of signal that a control bus can transfer.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 2*
> > Examples: 
> > • Interrupt 
> > • Timing 
> > • Read 
> > • Write 

> [!question] Question: 9618_w22_qp_11 (Q5.b.ii)
> Tick (✓) one box in each row to identify the system bus used by each CPU component.
> | CPU Component | Data bus | Address bus | Control bus |
> | :--- | :--- | :--- | :--- |
> | System clock | | | |
> | Memory Address Register (MAR) | | | |
> **[1]**
> 
> > [!success]- Mark Scheme
> > • System clock: **Control bus** (✓)
> > • Memory Address Register (MAR): **Address bus** (✓)

## 4.1.5 CPU Performance Factors

> [!question] Question: 9618_w25_qp_11 (Q6.b)
> Increasing the number of cores in a processor can affect the performance of a computer.
> Describe the drawbacks of increasing the number of cores in a processor.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point, max 2 marks*
> > • Latency may be increased
> > • … because the cores must communicate with one another
> > • There is a potential for dead-lock situations 
> > • … where one core may wait for information from other cores which in turn are waiting for the first one
> > • Not all software is designed to use multi-cores
> > • ... so some of the additional cores would be idle
> > • Increased heat generation
> > • ... which could cause damage to other components

> [!question] Question: 9618_w25_qp_12 (Q3.c)
> A student buys a new computer. 
> Old Computer: 1.8 GHz dual core, 16 MB cache.
> New Computer: 2.3 GHz dual core, 32 MB cache.
> Explain why increasing the clock speed and increasing the cache memory will improve the performance of the computer.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point, max 2 marks for each*
> > **Clock Speed:**
> > • Processor can perform more F-E cycles per second
> > • ... so more instructions / data can be processed each second
> > 
> > **Cache Memory:**
> > • Can store more of the most frequently used instructions
> > • … which reduces the need to access slower RAM

> [!question] Question: 9618_s25_qp_13 (Q2.b)
> The computer has cache memory.
> Describe one benefit of the computer using cache memory.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each*
> > • Using cache memory improves system performance
> > • because cache is fast access memory close to the CPU
> > • which stores frequently used instructions / data
> > • so that they can be accessed faster than from RAM

> [!question] Question: 9618_w24_qp_11 (Q3.b.i)
> The number of cores in the processor affects the performance of the computer system.
> Identify one other feature of a processor that can affect the performance of a computer system and state why it affects the performance.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for the feature, 1 mark max for the matching reason*
> > • **Feature:** clock speed
> > • Higher clock speed means that more F-E cycles are executed per second // Higher clock speed results in more throughput
> > *OR*
> > • **Feature:** bus width
> > • Larger bus width means that more data transferred at the same time

> [!question] Question: 9618_w23_qp_11 (Q5.c.i & c.ii)
> A computer has a single 2.1GHz CPU.
> (i) Describe how increasing the clock speed to 4GHz can increase the performance of the computer. **[1]**
> (ii) A second computer has a CPU with two 2.1GHz cores. Explain why the second computer does not always run twice as fast as the computer with one 2.1GHz CPU. **[5]**
> 
> > [!success]- Mark Scheme
> > **(i) (max 1):**
> > • The CPU can now perform nearly twice as many F-E cycles per second
> > • Instead of 2.1 billion F-E cycles per second, the CPU can now perform 4 billion FE cycles per second
> > 
> > **(ii) (max 5):**
> > • Multiple cores introduce additional overheads 
> > • …because of the need for communication between cores
> > • Software may not be designed for multiple cores…
> > • …so one of the cores will be left idle
> > • Memory access speed may not match speed of cores…
> > • …so causing delay 
> > • The two computers may have more differences than just the cores
> > • …one may have more RAM which allows faster multitasking
> > • ...one may have a GPU
> > • ...etc.

> [!question] Question: 9618_s23_qp_12 (Q5.b)
> Describe two ways the hardware of a laptop can be upgraded to improve the performance and explain how each upgrade improves the performance.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for description; 1 mark for corresponding explanation. Examples:*
> > • **Increase number of cores**
> > • Each core can independently carry out a process at the same time // so that more instructions are performed in parallel
> > 
> > • **Increase RAM capacity**
> > • ... allowing more applications to reside in memory at the same time, saving disk access times 
> > 
> > • **Increase cache memory**
> > • More data can be stored in fast access so less time is spent accessing from RAM 
> > 
> > • **Increase clock speed**
> > • More Fetch-Decode-Execute (FDE) cycles can run each second / per unit time 

> [!question] Question: 9618_w22_qp_11 (Q7.d)
> Explain the reasons why increasing the amount of cache memory can improve the performance of a CPU.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 2):*
> > • cache is fast access memory (close to the CPU)
> > • cache stores frequently used instructions / data
> > • ... more cache means more instructions / data can be transferred faster
> > • ... less swapping between RAM and cache 
> > • prevents the CPU idling while waiting for data

> [!question] Question: 9618_w22_qp_13 (Q4.c)
> Upgrading secondary storage to solid state typically improves the performance of computer systems.
> Identify **one other** upgrade to the hardware and explain why it improves the performance of a computer system.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for identification of a correct upgrade; 1 mark for a corresponding explanation. Examples:*
> > • **increase quantity of RAM**
> > • ... so allowing more applications to reside in memory at the same time, saving disk access times
> > • **increase the size of cache memory**
> > • ... so that the CPU can continue working without waiting for data
> > • **increase clock speed**
> > • ... so that more instructions are performed in a time period
> > • **increase the number of processors / cores**
> > • ... so that more instructions are performed in parallel

> [!question] Question: 9618_s21_qp_12 (Q5.b)
> Describe the ways in which the following factors can affect the performance of his laptop computer.
> • Number of cores
> • Clock speed
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point to max 3 per factor. max 4 overall.*
> > **Number of cores:**
> > • Each core processes one instruction per clock pulse 
> > • More/multiple cores mean that sequences of instructions can be split between them 
> > • … and so more than one instruction is executed per clock pulse // more sequences of instructions can be run at the same time 
> > • More cores decreases the time taken to complete task 
> > 
> > **Clock speed:**
> > • Each instruction is executed on a clock pulse // one F-E cycle is run on each clock pulse 
> > • ... so the clock speed dictates the number of instructions that can be run per second 
> > • The faster the clock speed the more instructions can be run per second 

## 4.1.6 Peripheral Ports (USB, HDMI, VGA)

> [!question] Question: 9618_s25_qp_13 (Q2.c)
> The computer connects to a monitor using a High Definition Multimedia Interface (HDMI) cable that connects into an HDMI port.
> Explain how HDMI provides connection to peripheral devices.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 2*
> > • HDMI transfers both audio and video using a single cable
> > • HDMI has a high bandwidth
> > • Data is transmitted in a stream
> > • of uncompressed digital signals
> > • HDMI uses a technology called Transition-Minimized Differential Signalling (TMDS)

> [!question] Question: 9618_w24_qp_11 (Q3.b.ii)
> A solid state (flash) memory drive is automatically recognised by the computer when it is plugged into a port in the computer. 
> Identify an appropriate type of port to connect the solid state memory drive to the computer.
> Explain how this port provides an automatic connection. 
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for correct port. 2 marks for explanation*
> > **Port:** USB / Universal Serial Bus
> > **Explanation:**
> > • A voltage change occurs when the drive is plugged in
> > • The computer detects this voltage change
> > • The code of the device is transferred to computer
> > • … the OS finds the code of the device in the list of devices
> > • … and loads the appropriate device driver

> [!question] Question: 9618_w24_qp_12 (Q3.b)
> The computer has a Video Graphics Array (VGA) port and a High Definition Multimedia Interface (HDMI) port. 
> Explain the benefits of connecting the monitor to the computer using the HDMI port instead of the VGA port.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 4)*
> > • HDMI has faster transfer rates than VGA
> > • … needed due to high resolution / large number of pixels of monitor // HDMI supports the high resolution of the monitor
> > • HDMI supports video and audio transfer between computer and monitor speakers
> > • … so no separate sound cable is needed unlike VGA
> > • HDMI is digital interface therefore no data is lost in transfer to analogue and back
> > • HDMI is less prone to error/crosstalk/external interference

> [!question] Question: 9618_w23_qp_12 (Q8.c.i)
> An optical disc reader/writer is connected to the computer.
> Give the name of one port that can provide a connection for the optical disc reader/writer.
> **[1]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 1)*
> > • USB / Universal Serial Bus
> > • HDMI

> [!question] Question: 9618_w23_qp_13 (Q7.d)
> Identify one port that could be used to connect a virtual reality headset to a laptop. Justify your choice.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for naming a correct port, 2 marks for matching justification*
> > **USB**
> > • …has fast data transfer speeds for data (to the headset)
> > • …is a universal/popular cable // universal standard
> > 
> > **HDMI**
> > • …allows video and audio to be transferred (on the same cable)
> > • …convenience of HDMI as no need for two cables

> [!question] Question: 9618_s23_qp_12 (Q5.c.i)
> A printer is connected to a Universal Serial Bus (USB) port.
> Describe how data is transmitted through a USB port.
> **[1]**
> 
> > [!success]- Mark Scheme
> > *1 mark for a correct answer*
> > • 1 bit is transferred at a time 
> > • Can be synchronous or asynchronous 
> > • USB-3 is full duplex and earlier versions are half-duplex 

> [!question] Question: 9618_s23_qp_12 (Q5.c.ii)
> A monitor is connected to the laptop using a different type of port.
> Identify one other type of port that can be used to connect the monitor.
> **[1]**
> 
> > [!success]- Mark Scheme
> > *Examples:*
> > • HDMI 
> > • DisplayPort 

> [!question] Question: 9618_w22_qp_11 (Q7.e)
> State the name of a peripheral device port that provides a physical connection in the computer for each of these peripherals.
> • 3D printer
> • Monitor
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each device.*
> > • **3D printer:** USB port / COM port 
> > • **Monitor:** HDMI / VGA / USB / DisplayPort 

## 4.1.7 Fetch-Execute Cycle and Register Transfer Notation

> [!question] Question: 9618_s25_qp_13 (Q2.a.ii)
> The processor runs the Fetch-Execute (F-E) cycle.
> Write the stages of the F-E cycle using register transfer notation.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark each. Correct order required.*
> > • `MAR ← [PC]`
> > • `PC ← [PC] + 1`
> > • `MDR ← [[MAR]]`
> > • `CIR ← [MDR]`
> > *(Note: MAR ← [PC] and PC ← [PC] + 1 can be on the same line or in either order as long as they precede the memory fetch).*

> [!question] Question: 9618_w23_qp_13 (Q9.b)
> The following incomplete table contains steps of the Fetch‑Execute (F‑E) cycle and their descriptions. Complete the table by writing the missing steps using register transfer notation and the missing descriptions.
> 
> | Step | Description |
> | :--- | :--- |
> |  | The address in PC is incremented. |
> | `MDR ← [[MAR]]` |  |
> | `MAR ← [PC]` |  |
> |  | The contents of MDR are copied into CIR. |
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each correct answer*
> > • Step 1: `PC ← [PC] + 1`
> > • Desc 2: The data in the location pointed to by the MAR is copied to the MDR.
> > • Desc 3: The contents of PC are copied to the MAR.
> > • Step 4: `CIR ← [MDR]`

> [!question] Question: 9618_s23_qp_13 (Q7.c)
> Complete the table by writing the register transfer notation for each stage of the Fetch-Execute (F-E) cycle given in the table.
> • The Program Counter (PC) is incremented
> • The data in the address stored in the Memory Address Register (MAR) is copied to the Memory Data Register (MDR)
> **[2]**
> 
> > [!success]- Mark Scheme
> > • `PC ← [PC] + 1`
> > • `MDR ← [[MAR]]`

> [!question] Question: 9618_w22_qp_12 (Q7.c)
> Write the register transfer notation for each of the stages in the fetch-execute cycle described in the table.
> • Copy the address of the next instruction into the Memory Address Register.
> • Increment the Program Counter.
> • Copy the contents of the Memory Data Register into the Current Instruction Register.
> **[3]**
> 
> > [!success]- Mark Scheme
> > • `MAR ← [PC]`
> > • `PC ← [PC] + 1`
> > • `CIR ← [MDR]`

> [!question] Question: 9618_w21_qp_11 (Q6.a)
> There are two errors in the following register transfer notation for the fetch‑execute cycle.
> 1. `MAR ← [PC]`
> 2. `PC ← [PC] - 1`
> 3. `MDR ← [MAR]`
> 4. `CIR ← [MDR]`
> 
> Complete the table by identifying the line number of each error, describing the error, and writing the correct statement.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for identification of line and description of error. 1 mark for the correct statement.*
> > 
> > **Error 1:**
> > • Line number: 2
> > • Description: Program Counter should be incremented, not decremented
> > • Correct statement: `PC ← [PC] + 1`
> > 
> > **Error 2:**
> > • Line number: 3
> > • Description: It should be the contents of the address in the MAR
> > • Correct statement: `MDR ← [[MAR]]`

> [!question] Question: 9618_s21_qp_11 (Q3.a)
> Complete the following description of the role of the registers in the fetch-execute cycle by writing the missing registers.
> 
> The ________ holds the address of the next instruction to be loaded. This address is sent to the ________ . 
> The ________ holds the data fetched from this address. This data is sent to the ________ and the Control Unit decodes the instruction’s opcode. 
> The ________ is incremented.
> **[5]**
> 
> > [!success]- Mark Scheme
> > The **Program Counter** holds the address of the next instruction to be loaded. 
> > This address is sent to the **Memory Address Register**. 
> > The **Memory Data Register** holds the data fetched from this address. 
> > This data is sent to the **Current Instruction Register** and the Control Unit decodes the instruction’s opcode. 
> > The **Program Counter** is incremented.

## 4.1.8 Interrupts and Interrupt Service Routines

> [!question] Question: 9618_s25_qp_12 (Q1.c)
> Explain how an interrupt from an input device will be detected and handled in the F-E cycle.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 4*
> > • At the start / end of FE cycle the interrupt register is checked
> > • The priority of any interrupts waiting is checked 
> > • if the priority of the interrupt is higher than the current process
> > • the contents of the registers are stored on the stack
> > • The relevant Interrupt Service Routine (ISR) / interrupt handler is called to process the interrupt
> > • When the ISR has finished, a further check is made for higher priority interrupts
> > • if no more interrupts of higher priority, the register contents are restored and the next FE cycle continues

> [!question] Question: 9618_w23_qp_13 (Q9.c)
> Interrupts can be caused by software programs or hardware devices.
> State one cause of a software interrupt.
> **[1]**
> 
> > [!success]- Mark Scheme
> > *Examples:*
> > • Division by zero
> > • Runtime error
> > • Out of memory bounds
> > • Program requesting an external device / input
> > • Buffer overflow

> [!question] Question: 9618_w23_qp_13 (Q9.d)
> The following statements describe the stages that the CPU performs when an interrupt is detected. There are three missing statements.
> Write the letter of the missing statements from the table in the correct place to complete the description.
> 
> 1. At the end of each Fetch‑Execute (F‑E) cycle, the processor checks if an interrupt flag is set.
> 2. ......................................................
> 3. If the interrupt priority is high enough, the processor saves the current contents of the registers.
> 4. ......................................................
> 5. When servicing of the interrupt is complete, the processor restores the registers.
> 6. ......................................................
> 
> **Options:**
> A. The address of the Interrupt Service (ISR) handling routine is loaded into the Program Counter (PC).
> B. Lower priority interrupts are re‑enabled.
> C. The device causing the interrupt transfers data to the CPU.
> D. The processor identifies the source of the interrupt and checks the priority of the interrupt.
> E. The ISR is incremented.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each letter in the correct position (2, 4 and 6)*
> > • Position 2: **D** (The processor identifies the source...)
> > • Position 4: **A** (The address of the ISR handling routine is loaded...)
> > • Position 6: **B** (Lower priority interrupts are re-enabled.)

> [!question] Question: 9618_s23_qp_11 (Q6)
> An interrupt is generated when a key is pressed on a computer keyboard.
> Explain how the computer handles this interrupt.
> **[5]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 5*
> > • An interrupt flag is raised in the (interrupt) register 
> > • At the end of the current FE cycle // at the start of the next FE cycle 
> > • The system checks the interrupt register for higher priority interrupts than current process 
> > • If true, it stores the current contents of the registers on the stack 
> > • The appropriate interrupt service routine (ISR) for the key press is called 
> > • The input data from the keyboard is processed 
> > • The contents of the registers are restored from the stack 
> > • ... and control is passed back to previous process 

> [!question] Question: 9618_w22_qp_11 (Q5.c)
> Describe the purpose of an interrupt in a computer system.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point:*
> > • to send a signal from a device or process
> > • ... seeking the attention of the processor 

> [!question] Question: 9618_w22_qp_11 (Q5.d)
> Identify two causes of a software interrupt. 
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 2). For example:*
> > • division by zero // runtime error in a program
> > • attempt to access an invalid memory location
> > • array index out of bounds
> > • stack overflow

> [!question] Question: 9618_w22_qp_13 (Q4.a.ii)
> State when interrupts are detected during the Fetch-Execute (F-E) cycle.
> **[1]**
> 
> > [!success]- Mark Scheme
> > after completion of the execute stage // before the cycle begins 

> [!question] Question: 9618_w21_qp_12 (Q7.a)
> The Operating System handles interrupts.
> Tick (✓) one box in each row to identify whether each event is an example of a hardware interrupt or a software interrupt.
> 
> | Event | Hardware interrupt | Software interrupt |
> | :--- | :--- | :--- |
> | Buffer full | | |
> | Printer is out of paper | | |
> | User has pressed a key on the keyboard | | |
> | Division by zero | | |
> | Power failure | | |
> | Stack overflow | | |
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark per pair of rows (Hardware/Software correct)*
> > • Buffer full: **Hardware** (✓)
> > • Printer is out of paper: **Hardware** (✓)
> > • User has pressed a key on the keyboard: **Hardware** (✓)
> > • Division by zero: **Software** (✓)
> > • Power failure: **Hardware** (✓)
> > • Stack overflow: **Software** (✓)

