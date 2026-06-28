My apologies! To render properly as callouts in Obsidian, they need the blockquote `> ` prefix. Here is the corrected and properly formatted extraction using standard Obsidian callout syntax:

# Topic 2: Communication

## Subtopic 2.1: Networks including the Internet

### Concept 2.1.1: LAN vs WAN Characteristics

> [!question] Question: 9618_w25_qp_12 (Q5.a) & 9618_s23_qp_12 (Q1.b) & 9618_w21_qp_11 (Q8.a)
> Describe the characteristics of a LAN (Local Area Network). [2/3]

> [!success]- Mark Scheme
> 1 mark for each bullet point (max 3):
> • Covers a small geographical area / within one building
> • Normally privately owned / dedicated infrastructure // not controlled by external organisations
> • Can use wired or wireless communication
> • No leasing external infrastructure / transmission media // does not use internet to transmit within the building

> [!question] Question: 9618_w24_qp_13 (Q9.a)
> Describe the characteristics of a WAN (Wide Area Network). [2]

> [!success]- Mark Scheme
> 1 mark for each bullet point (max 2):
> • A WAN covers a large geographical area
> • External/public infrastructure is used
> • Non-dedicated hardware

> [!question] Question: 9618_s25_qp_12 (Q6.a) & 9618_s23_qp_13 (Q2.a)
> State the ways that a WAN is different to a LAN. [2]

> [!success]- Mark Scheme
> 1 mark each to max 2:
> • In a WAN devices can connect over a larger geographical area, in a LAN devices connect over a smaller geographical area
> • A WAN may use non-dedicated hardware, the hardware in a LAN is usually dedicated
> • A WAN uses external / not company owned transmission media // the transmission media for a LAN is usually company owned
> • LAN connections between devices are usually physical, whereas the WAN connections are often virtual
> • A LAN has a high data transfer rate, whereas a WAN has a low data transfer rate
> • The ownership of a LAN is private; the ownership of a WAN can be private or public
> • LAN is usually more secure than a WAN because protection is easier to implement

> [!question] Question: 9618_s23_qp_12 (Q1.a)
> Give two benefits of connecting computers to a LAN. [2]

> [!success]- Mark Scheme
> 1 mark each to max 2:
> • Allows the sharing of files/data // Allows communication between the devices
> • Allows the sharing of resources e.g. hardware / software (applications)
> • Allows central management // by example, backup, security, etc.


### Concept 2.1.2: Network Models (Client-Server, Peer-to-Peer)

> [!question] Question: 9618_s25_qp_13 (Q3.c) & 9618_s24_qp_11 (Q5.a)
> A system allows users to interact over the internet using a web browser/application. Explain the reasons why the statement ‘This system uses a client-server model’ is correct / Describe the roles of the different devices in this model. [4]

> [!success]- Mark Scheme
> 1 mark each to max 4:
> • Identification of server in the scenario (e.g. A webserver stores all the data)
> • Description of server role: Receives requests, processes the requests, updates data, sends the results back
> • Identification of client in the scenario (e.g. The player’s web browser is the client / smartphone app)
> • Description of client role: Sends request over the internet to the web server, waits and outputs the response to the user

> [!question] Question: 9618_s21_qp_11 (Q4.a)
> Describe the key features of a peer-to-peer network. [2]

> [!success]- Mark Scheme
> 1 mark per bullet point to max 2:
> • All computers are of equal status
> • Each computer provides access to resources and data // data is distributed
> • Computers can communicate and share resources
> • Each computer is responsible for its own security

> [!question] Question: 9618_s21_qp_11 (Q4.b)
> Describe two drawbacks of using a peer-to-peer network. [4]

> [!success]- Mark Scheme
> 1 mark per bullet point to max 2 per drawback (max 4 overall):
> • Reduced security // no central management of security
> • … only as secure as the weakest computer on the network
> • … each computer is at risk from viruses from other computers
> • No central management of backup
> • ... if the data from one computer is not backed up it is lost to all of them
> • No central management of files/software
> • … consistency may be difficult to maintain
> • … each computer may have different software from the others
> • Individual computers may respond slower
> • … because they are being accessed by other computers
> • In order to share files etc. all the computers involved need to be switched on
> • ... so the files etc. may not be always available


### Concept 2.1.3: Thin-Client vs Thick-Client

> [!question] Question: 9618_s24_qp_12 (Q3.b)
> Users use software that operates as a thin-client. Identify two characteristics of a thin-client and describe how each characteristic will be used in the software. [4]

> [!success]- Mark Scheme
> 1 mark for characteristic, 1 mark for description of application (max 4):
> • Data is not stored on the client computer -> Files/data are stored on the server and not permanently stored on the users' computers
> • Client computer is reliant on access to server -> Users cannot perform tasks if their device cannot access the server / the server ‘goes down’
> • Client computer heavily reliant on network/internet connection -> The software will not operate without network/internet access
> • Client computer requires few local resources/memory -> Users can use devices with low resources and the software will still function
> • Client computer performs minimal functions/processes -> The software transmits requests, the server responds and sends the response to the user

> [!question] Question: 9618_s23_qp_12 (Q1.e)
> Describe what is meant by a thick‑client model. [2]

> [!success]- Mark Scheme
> 1 mark each:
> • The server performs minimal / some processing for the client
> • The clients also do most of their own processing/work independently // most of the resources are installed locally

> [!question] Question: 9618_s23_qp_13 (Q2.c)
> Describe the role of the different computers in a thin-client client-server model. [2]

> [!success]- Mark Scheme
> 1 mark each to max 2:
> • Server performs all processes required by the task and/or data storage
> • Clients only send requests to the server and display the returned results


### Concept 2.1.4: Network Topologies (Bus, Star, Mesh, Hybrid)

> [!question] Question: 9618_w25_qp_12 (Q5.b) & 9618_s23_qp_12 (Q1.c) & 9618_w22_qp_12 (Q10.a)
> Draw a diagram to show how devices are connected in a star topology (Computers, server, switch). [2]

> [!success]- Mark Scheme
> 1 mark per bullet point, max 2:
> • All computers directly connected to switch and no other connections
> • Switch connected directly to server

> [!question] Question: 9618_w25_qp_12 (Q5.c) & 9618_s24_qp_13 (Q5.b)
> Describe how packets are transmitted between two hosts using a star topology. [2/3]

> [!success]- Mark Scheme
> 1 mark per bullet point, max 3:
> • The sending device sends the packets to the switch/central device
> • The switch checks the destination address on each packet
> • … and sends them only to the intended receiver/forwards directly to that device

> [!question] Question: 9618_s24_qp_11 (Q8.a)
> Identify the topology (Bus, Star, Mesh) each statement describes. [5]

> [!success]- Mark Scheme
> 1 mark for each correct row:
> • All devices connect to one central device -> Star
> • All devices connect to a central cable -> Bus
> • Multiple paths for the packets to travel along -> Mesh
> • Robust against damage because if any line fails, the rest of the network retains full functionality -> Star, Mesh
> • Most likely to lose data through collisions -> Bus

> [!question] Question: 9618_w23_qp_11 (Q2.d)
> Explain one advantage of implementing a star topology instead of a bus topology in a new classroom. [2]

> [!success]- Mark Scheme
> 1 mark for each advantage and 1 mark for valid corresponding expansion:
> • Star topology is more resilient to faults
> • …because there is no single cable and leads to less disruption to teaching
> • Higher performance as fewer collisions
> • ...because each device in the classroom is only connected to the switch
> • Easier to add new nodes
> • …because each device in the classroom connects directly to the switch
> • Easier to fault find compared to bus topology

> [!question] Question: 9618_s23_qp_13 (Q2.b.i)
> Describe what is meant by a mesh topology. [2]

> [!success]- Mark Scheme
> 1 mark each to max 2:
> • All computers are connected to at least one other device
> • There are multiple routes between devices
> • The computers can act as relays, passing packets on towards the final destination

> [!question] Question: 9618_s23_qp_13 (Q2.b.ii)
> Give two advantages of using a mesh topology instead of a bus topology. [2]

> [!success]- Mark Scheme
> 1 mark each to max 2:
> • If one line goes down there are more routes available
> • Improved security as not using one main line
> • No/fewer collisions
> • New nodes can be added without interruption or interfering with other nodes
> • More secure because data is sent over a dedicated connection


### Concept 2.1.5: Networking Hardware (Switch, Router, NIC, WAP, etc.)

> [!question] Question: 9618_s25_qp_12 (Q6.e)
> Describe the role of a switch in a network. [3]

> [!success]- Mark Scheme
> 1 mark each to max 3:
> • To store the MAC addresses of devices connected to it
> • To receive packets from devices
> • To forward packets directly to the intended recipient
> • To provide a central point of connection for the network
> • To enable connected devices to communicate

> [!question] Question: 9618_s24_qp_12 (Q3.c.i) & 9618_w23_qp_11 (Q2.a) & 9618_w21_qp_12 (Q3.b.ii) & 9618_w22_qp_12 (Q10.b.ii)
> Describe the role and function of a router in a network / in the transmission of data through the internet. [3]

> [!success]- Mark Scheme
> 1 mark each to max 3:
> • Receives packets from devices / internet / external network
> • Analyses the destination IP address of each packet
> • Forwards the packet towards its destination // sends packets onto local network or external network
> • ...using the routing table
> • Maintains / updates the routing table
> • Allocates private IP addresses to devices on LAN
> • Finds the most efficient route to the destination
> • Changes the packet format for transmission over the next network / performs protocol conversion (acts as gateway)
> • Acts as a firewall
> • Maintains table of MAC and IP addresses

> [!question] Question: 9618_w23_qp_11 (Q2.b)
> Write the purpose of each of these hardware devices: Wireless Access Point (WAP), Bridge. [2]

> [!success]- Mark Scheme
> 1 mark for each device's purpose:
> Wireless Access Point (WAP):
> • To allow connection of devices (to the central device) using radio signals / Wi-Fi
> • To allow wireless enabled devices to connect to a wired network
> Bridge:
> • To connect two LANs / segments with the same protocol
> • To transmit data between two networks with the same protocol

> [!question] Question: 9618_w21_qp_11 (Q8.b)
> A classroom has 30 computers. Each computer has a network interface card (NIC). Identify two possible devices that can be used to physically connect the 30 computers to the rest of the network. [2]

> [!success]- Mark Scheme
> 1 mark per item:
> • Router
> • Switch
> • Hub

> [!question] Question: 9618_w21_qp_11 (Q8.c)
> Describe the functions of a Wireless Network Interface Card (WNIC). [4]

> [!success]- Mark Scheme
> 1 mark per bullet point to max 4:
> • Provide interface to wireless network
> • … as an antenna
> • Receives analogue radio waves
> • … convert them to digital / binary
> • Checks incoming transmissions for correct MAC / IP address
> • … ignore transmissions not intended for it
> • Encrypts / encodes the data
> • Decrypts / decodes the data
> • Takes digital/binary input and converts to analogue waves
> • … sends the radio waves via the antenna


### Concept 2.1.6: Transmission Media (Copper, Fibre-Optic, Wireless)

> [!question] Question: 9618_w24_qp_13 (Q9.b)
> Copper cable can be used to transmit data in a network. Identify and describe two other transmission media that can be used to transfer data in the WAN. [4]

> [!success]- Mark Scheme
> 1 mark for correct media, 1 mark for matching description (max 4):
> • Fibre optic
> • Transmits data as pulses of light
> • Radio waves / microwaves
> • Transmits electromagnetic waves on different frequencies

> [!question] Question: 9618_s23_qp_13 (Q2.d)
> Explain the benefits of allowing users to connect to a network using both wired and wireless connections. [4]

> [!success]- Mark Scheme
> 1 mark each to max 4:
> • Some devices might only have one sort of connection available
> • Wired provides better performance / faster connection / higher bandwidth for the user's device
> • ... for example, enabling faster access to large databases
> • There will be less interference if connecting via a cable
> • Users can transmit private/confidential data securely over wired
> • Wireless connection means that users can use their devices in different rooms/sites/outside more freely // devices can be portable
> • Wireless connection enables users to bring multiple devices // bring their own devices

> [!question] Question: 9618_w22_qp_13 (Q7.b)
> Give one advantage and two disadvantages of transmitting data using satellites instead of copper cables. [3]

> [!success]- Mark Scheme
> 1 mark for a correct advantage:
> • not fixed to a single location
> • allows access in remote / rural areas
> 1 mark for each correct disadvantage (max 2):
> • high latency / lag / slow to connect
> • more expensive than wired methods, as need extra equipment
> • signal is affected by bad weather
> • the transmission speed is slower than fixed line broadband
> • direct line of sight needed


### Concept 2.1.7: Cloud Computing (Public, Private)

> [!question] Question: 9618_w25_qp_12 (Q8.a.i) & 9618_s21_qp_12 (Q5.c.i)
> Give two benefits of storing data using cloud computing. [2]

> [!success]- Mark Scheme
> 1 mark per bullet point, max 2:
> • Cloud storage can be free of charge for a limited amount
> • There is no need for personal separate (high capacity) storage devices // saves storage on existing devices
> • The data can be accessed from any computer with an internet connection
> • Cloud data services usually include in-built data backup and disaster recovery services
> • It is easier to share data / collaborate with colleagues
> • Cloud storage capacity can be quickly and easily increased if needed / scalable
> • Security could be better (managed by professionals)

> [!question] Question: 9618_w25_qp_12 (Q8.a.ii) & 9618_s21_qp_12 (Q5.c.ii)
> Give two drawbacks of using cloud computing. [2]

> [!success]- Mark Scheme
> 1 mark per bullet point, max 2:
> • The storage/cloud can only be accessed with an internet connection
> • There may be no backups // possibly no control over backups // reliance on third party for backups
> • Uploading / downloading data could take a long time
> • Potential issues with the cloud storage company impacting access e.g. downtime or technical problems
> • Potential compatibility/access issues if wanting to move the data
> • Limited storage availability without paying extra / can be more expensive in the long term
> • Security may not be strong / no direct control over security

> [!question] Question: 9618_s24_qp_13 (Q5.a.i)
> Define the term private cloud. [1]

> [!success]- Mark Scheme
> 1 mark for:
> • Dedicated/bespoke services/storage on a remote server only available to the specific company

> [!question] Question: 9618_s24_qp_13 (Q5.a.ii)
> Describe the benefits to a company of using private cloud storage instead of public cloud storage. [3]

> [!success]- Mark Scheme
> 1 mark each to max 3:
> • Not reliant on a third party
> • … gives greater control over security/privacy
> • … gives greater control over backup
> • Storage can be tailored/scalable to company requirements
> • e.g. controlling the amount of storage accessible/ facilitating the sharing of specific files

> [!question] Question: 9618_w23_qp_13 (Q3.a.i)
> A company sells online courses stored on a public cloud. Explain why the company uses a public cloud to store these courses. [2]

> [!success]- Mark Scheme
> 1 mark for each bullet point (max 2):
> • Courses must be available to anyone who wishes to follow them
> • Courses must be available on the internet
> • Company is willing to share infrastructure with other companies (public)
> • …which is more economic for the company

> [!question] Question: 9618_w23_qp_13 (Q3.a.ii)
> Describe two disadvantages of storing data on a public cloud compared to storing data on a server in a Local Area Network (LAN). [4]

> [!success]- Mark Scheme
> 1 mark for each bullet point (max 2 for each disadvantage):
> • There could be a possible loss of control unlike the LAN
> • …because the data is stored on a remote infrastructure / someone else’s infrastructure
> • …reliance on external agency to complete tasks, e.g. backups, security
> • Requires reliable internet connection
> • …to ensure access to the remote data, more likely with LAN
> • Increased recurring costs
> • ...as cloud provider charges must be paid, whereas costs for LAN are once only.


### Concept 2.1.8: Ethernet and CSMA/CD

> [!question] Question: 9618_s23_qp_12 (Q1.d)
> Computers can be connected using Ethernet. Describe what is meant by Ethernet. [3]

> [!success]- Mark Scheme
> 1 mark each to max 3:
> • A protocol (suite)
> • For data transmission over standard / universal wired / cabled network connections
> • Uses Carrier Sense Multiple Access / Collision Detection (CSMA/CD)
> • Data is transmitted in frames
> • … each frame has a source and destination (IP/MAC) address
> • ... and error checking data (so damaged frames can be resent)

> [!question] Question: 9618_w25_qp_12 (Q5.d) & 9618_w22_qp_11 (Q8) & 9618_w23_qp_12 (Q7.c)
> Ethernet is used to transmit and receive data between devices on a network. Describe how collisions are detected and managed on this network using Carrier Sense Multiple Access/Collision Detection (CSMA/CD). [3/4]

> [!success]- Mark Scheme
> 1 mark per bullet point, max 4 marks:
> • The workstations listen to the communication channel / monitor the channel
> • ... and send data only when there is no data being transmitted / the line is quiet/idle
> • If a collision is detected, transmission is aborted / stopped
> • …and a jamming signal is transmitted
> • The workstation calculates a random wait time / back-off time before trying to re-transmit
> • The data is retransmitted after that random wait time
> • The random time is increased if there are multiple collisions

> [!question] Question: 9618_s24_qp_13 (Q5.c.ii)
> Identify two drawbacks of using CSMA/CD. [2]

> [!success]- Mark Scheme
> 1 mark each to max 2:
> • Random time increased each time so can result in infinite waiting
> • May be constant jamming signal so nothing ever sends
> • Certain nodes cannot be prioritised
> • High power consumption
> • Only suitable for short distance network // limited distance
> • Not scalable // more nodes means exponentially longer waiting times


### Concept 2.1.9: Bit Streaming

> [!question] Question: 9618_s24_qp_11 (Q2.e.i)
> State what is meant by bit streaming. [1]

> [!success]- Mark Scheme
> 1 mark for:
> • Continuous ordered flow of bits over a communication path

> [!question] Question: 9618_s25_qp_11 (Q2.a) & 9618_w24_qp_13 (Q9.c)
> Explain how bit streaming is used / how data is transferred using real‑time bit streaming (e.g. in a live video conference). [4]

> [!success]- Mark Scheme
> 1 mark each to max 4:
> • Video/audio is transmitted continuously
> • as a series of bits
> • The video is uploaded to a media server
> • The users download from the media server
> • On download, the media server sends the data to a buffer on the user's device
> • Buffer is used when there is a difference in speed between transmission and receipt
> • Buffer stores data from server until the receiving device can process/receive it
> • Recipient views the bit stream from the buffer

> [!question] Question: 9618_s24_qp_11 (Q2.e.ii)
> Give two differences between real-time and on-demand bit streaming. [2]

> [!success]- Mark Scheme
> 1 mark each to max 2:
> • Real-time is direct from source whereas on-demand is pre-recorded/downloaded to view later
> • Real-time cannot be re-watched, on-demand can be paused, re-watched, rewound etc.
> • Real-time plays continually, on-demand downloads sections/blocks and cannot play until the next section is downloaded


### Concept 2.1.10: Internet vs World Wide Web

> [!question] Question: 9618_s21_qp_11 (Q4.d)
> Melinda sends emails from her webmail account (email account accessed through a website). Explain whether Melinda is using the internet, or the World Wide Web (WWW), or both. [3]

> [!success]- Mark Scheme
> 1 mark for identifying that she is using both.
> 1 mark per bullet point for justification:
> • using internet because she is sending data on the infrastructure
> • using WWW because accessing a website (that is stored on a web server operated by the webmail) that is part of the WWW

> [!question] Question: 9618_w25_qp_11 (Q7.c)
> A user types a Uniform Resource Locator (URL) into the address bar of a web browser to access a web page. Explain how the web browser uses the URL to access the web page. [4]

> [!success]- Mark Scheme
> 1 mark per bullet point, max 4 marks:
> • The browser checks its cache for the URL
> • The browser parses the URL and splits it into its component parts
> • The browser finds the IP address for the domain name by querying a DNS server
> • The browser receives the matching IP address from the DNS server
> • The browser creates connection with the web server with the matching IP address
> • A request for the resource is sent to the web server with that IP address
> • The browser renders and displays the result
> • The IP address is stored in the browser cache for future use


### Concept 2.1.11: Internet Hardware (Modems, PSTN)

> [!question] Question: 9618_s25_qp_11 (Q2.c)
> Complete the table by stating how modems and dedicated lines are used when data is transmitted over the internet. [2]

> [!success]- Mark Scheme
> 1 mark each:
> modems:
> • Converts digital data into analogue for transmission down phone lines // Converts analogue data into digital after transmission down phone lines
> dedicated lines:
> • Used to provide a direct / private connection which therefore provides faster transmission

> [!question] Question: 9618_s25_qp_12 (Q6.b)
> Smartphones use the cell phone network to connect to the WAN. Explain how data is transmitted using the cell phone network. [4]

> [!success]- Mark Scheme
> 1 mark each to max 4:
> • Land is split into cells designed for maximum line of sight
> • Each cell has a tower with an antenna which receives and transmits data
> • Data is transmitted between the tower and the phone
> • Data transmission is wireless using low power radio signals/frequencies
> • Multiple devices can communicate simultaneously with the same tower

> [!question] Question: 9618_s24_qp_12 (Q3.c.ii)
> Describe the role of the PSTN (Public Switched Telephone Network) in the transmission of data through the internet. [2]

> [!success]- Mark Scheme
> 1 mark each to max 2:
> • The PSTN consists of many different types of communication lines
> • … therefore the digital data may need to be converted into a different form/analogue signal
> • Data is transmitted in both directions at the same time // duplex data transmission
> • Using a PSTN the communication passes through different switching centres/ISPs


### Concept 2.1.12: IP Addressing (IPv4, IPv6, Subnetting, Public/Private, Static/Dynamic)

> [!question] Question: 9618_w25_qp_11 (Q7.a) & 9618_w23_qp_12 (Q7.d) & 9618_s21_qp_12 (Q5.d)
> Describe the following types of IP address: Static, Dynamic, Public, Private. [4]

> [!success]- Mark Scheme
> 1 mark for each correct description/match:
> • Static: an IP address that is fixed / doesn’t change each time a device re-joins a LAN / connects to the network
> • Dynamic: an IP address that may be refreshed / changed / a new one is reallocated each time a device connects to the internet or network
> • Public: an IP address assigned to a device to allow direct access / to be visible to any device on the internet
> • Private: an IP address used for internal LAN communication only / only visible to devices within the Local Area Network (LAN)

> [!question] Question: 9618_w24_qp_13 (Q9.d.i)
> State the purpose of a public IP address and a private IP address for a router. [2]

> [!success]- Mark Scheme
> 1 mark for public IP address and 1 mark for private IP address:
> Public IP address:
> • So that the router is visible to the Internet/external network/WAN
> Private IP address:
> • So that the router is identified to computers within the LAN

> [!question] Question: 9618_s24_qp_13 (Q5.d)
> The devices in the office have static private IP addresses. State what is meant by a static private IP address. [1]

> [!success]- Mark Scheme
> 1 mark for:
> • Static means the IP for that device does not change and Private means it can only be accessed/seen/used within the LAN

> [!question] Question: 9618_s25_qp_12 (Q6.c) & 9618_s23_qp_11 (Q4.d.i) & 9618_s24_qp_11 (Q8.b.ii)
> Identify and describe the differences between an IPv4 address and an IPv6 address. [5/6]

> [!success]- Mark Scheme
> 1 mark per point:
> • IPv4 has 4 groups of digits whilst IPv6 has 8 groups
> • IPv4 groups are represented in 8 bits each // IPv4 is 32 bits in total
> • IPv4 numbers are separated by full stops (.)
> • IPv4 is usually represented in denary (0-255 per group)
> • IPv6 groups are represented in 16 bits each // IPv6 is 128 bits in total
> • IPv6 numbers are separated by colons (:)
> • IPv6 is usually represented in hexadecimal (0-FFFF per group)
> • In IPv6, multiple consecutive groups of zeros can be replaced with a double colon (::)

> [!question] Question: 9618_w25_qp_11 (Q7.b)
> Consider the following IP address: `256.0.0.A`. Circle whether this IP address is IPv4, IPv6 or an invalid IP address. Justify your choice. [2]

> [!success]- Mark Scheme
> Choice: Invalid (no mark for the choice)
> 1 mark per bullet point for justification, max 2 marks:
> • It is not IPv4 because the maximum denary value should be 255, this uses 256 / contains a letter
> • It is not IPv6 because it uses a full stop to separate sections and not colon // It is not IPv6 because there are not enough groups

> [!question] Question: 9618_s23_qp_13 (Q2.e)
> An IP address in a subnetwork is divided into two parts. Identify and describe the two parts of an IP address in a subnetwork. [3]

> [!success]- Mark Scheme
> 1 mark for identification:
> • IP address is made up of a network ID and a host ID
> 1 mark each to max 2 for description:
> • Each device in a subnetwork has the same network ID // Each subnetwork has a different network ID
> • Every device in each subnetwork has a different host ID but the same network ID // the host ID uniquely identifies the device within the subnetwork

> [!question] Question: 9618_w24_qp_13 (Q9.d.ii) & 9618_s23_qp_11 (Q4.d.ii) & 9618_w23_qp_12 (Q7.b.iii)
> Describe the purpose and benefits of subnetting a network. [4]

> [!success]- Mark Scheme
> 1 mark for each use (max 2) and 1 mark for corresponding expansion (max 2):
> • To allow the network to be divided into smaller networks/logical segments
> • … which reduces traffic in some parts of the network / improves network performance / reduces congestion
> • … because traffic only travels through the parts necessary / data stays in its subnet so it does not travel as far
> • To improve the security of the LAN
> • … so that devices do not receive unintended data / so not all devices can access all segments
> • … so that a compromised device does not expose the whole network
> • To make the network management easier / easier to maintain / fault find
> • … because faults can be isolated more efficiently / only one subnetwork may need taking down while the rest continues
> • To make the network easier to expand // For better control of network growth
> • … by allowing for greater range of IP addresses to be available


