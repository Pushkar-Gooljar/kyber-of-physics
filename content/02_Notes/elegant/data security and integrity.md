# Topic 6.1: Data Security

## 6.1.1 Definitions of Security, Privacy and Integrity

> [!question] Question: 9618_w23_qp_12 (Q5.a)
> State the meaning of privacy of data.
> **[1]**
> 
> > [!success]- Mark Scheme
> > *1 mark for:*
> > • Ensuring data can only be accessed by / disclosed to authorised persons
> > *OR*
> > • Ensuring data cannot be accessed by / disclosed to unauthorised persons

> [!question] Question: 9618_w23_qp_12 (Q5.b)
> State the meaning of integrity of data.
> **[1]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 1)*
> > • Ensuring the accuracy / completeness / consistency of data (during / after processing)
> > • Ensuring the data is up to date

> [!question] Question: 9618_w21_qp_11 (Q2.a)
> Explain the difference between data security and data integrity.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point*
> > • security is protecting data from loss / corruption 
> > • integrity is ensuring the consistency / accuracy of the data 

> [!question] Question: 9618_s21_qp_12 (Q8.a)
> Describe the difference between the security and privacy of data.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point*
> > • Security protects data against loss 
> > • Privacy protects data against unauthorised access 

## 6.1.2 System Security Measures (Authentication, Firewall, Anti-Virus)

> [!question] Question: 9618_w25_qp_12 (Q5.e)
> Identify one threat to computer and data security posed by networks and the internet. Describe the threat and give a method of prevention.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for correct threat, 1 mark for corresponding description, 1 mark for correct method of prevention. Examples:*
> > • **Malware / Virus:** Malicious code that can alter/delete files. **Prevention:** Anti-virus // Anti-malware // Firewall
> > • **Spyware:** Records keystrokes which are sent to a third party. **Prevention:** Anti-spyware // Firewall // Anti-malware
> > • **Hacking:** Gaining unauthorised access to a computer network / device. **Prevention:** Authentication // Firewall
> > • **Phishing:** Emails supposedly from reputable companies are sent to trick people into revealing personal information. **Prevention:** Use a spam filter // Do not open emails from unknown sources
> > • **Pharming:** Users are directed to a bogus website that looks legitimate to obtain personal information. **Prevention:** Use a VPN // Anti-malware // Do not open links or download attachments

> [!question] Question: 9618_s25_qp_11 (Q7.b) & 9618_s23_qp_13 (Q6.a) & 9618_w22_qp_12 (Q6.a.i)
> Explain how a digital signature can make sure the data has not been changed during transmission and ensures the email/document is authentic.
> **[5]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 5*
> > • The sender hashes the document / message
> > • to produce a digest
> > • The sender encrypts the digest (using their private key) to create the digital signature
> > • The message and the signature are sent to the receiver
> > • The receiver decrypts the signature (using the sender's public key) to reproduce the digest
> > • The receiver uses the same hashing algorithm on the document received to produce a second digest
> > • The receiver compares this digest with the one from the digital signature
> > • If both of the receiver’s digests are the same the document has not changed / is authentic

> [!question] Question: 9618_s25_qp_12 (Q5.c.i)
> Identify two methods a Database Management System (DBMS) can use to protect the data in a table from unauthorised access. Explain how each method protects the data.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for method, 1 mark for matching explanation (max 4)*
> > • **Access rights:** appropriate permissions for the table are needed to read or edit the data
> > • **A password:** prevents users without the password from accessing the database/table
> > • **Encrypting the database:** stops users without the decryption key from decoding / understanding the data
> > • **Views:** users can be given a view to the database that does not include the restricted data/table

> [!question] Question: 9618_s24_qp_11 (Q5.c.i) & 9618_w22_qp_12 (Q6.a.ii)
> Explain how a firewall can help protect data on a computer/network.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 3:*
> > • Monitors/compares all incoming and outgoing transmissions/traffic 
> > • ... against set criteria / rules / an allow list / deny list of IP addresses
> > • Blocks all transmissions that do not meet rules 
> > • Blocks data entering from specific ports 
> > • Blocks unauthorised/unknown internal software transmitting data 

> [!question] Question: 9618_s24_qp_12 (Q3.a.i)
> Authentication methods can help to protect a server against hackers. Identify one other security measure that helps to protect the server from hackers. Describe how the security measure works.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for security measure, 1 mark each to max 2 for how it works:*
> > • **Firewall:** Checks incoming connections against criteria. Blocks data from entering specific ports / Blocks data that does not meet whitelist/blacklist.
> > *OR*
> > • **Proxy server:** Prevents devices accessing the web server directly. Intercepts any requests. Forwards the request using its own IP address. Screens returning data before sending it to the user.

> [!question] Question: 9618_w23_qp_13 (Q3.a.iii)
> State how the following security measures can be used to protect computer systems: Firewall, Encryption, Passwords.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark each for firewall, encryption and passwords.*
> > • **Firewall:** Monitors incoming and outgoing traffic and rejects any traffic that does not meet the set rules
> > • **Encryption:** Ensures that if data is intercepted / obtained it cannot be understood without the decryption key
> > • **Passwords:** Ensures only users with the correct password can access the resources // prevents unauthorised access

> [!question] Question: 9618_s23_qp_13 (Q6.b)
> Identify and describe two types of software that can be installed on a computer to prevent threats over a network.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark each for identification and appropriate description of 2 pieces of software, max 4*
> > • **Antivirus:** scans the computer for viruses and checks against a stored database of viruses, that needs to be updated regularly and then deletes / quarantines them // compares downloaded files to a database of known viruses and prevents the download continuing 
> > • **Antispyware:** scans the computer for spyware and checks against a stored database of viruses, deletes/quarantines them // compares downloaded files to a database of known spyware and prevents download. 
> > • **Firewall:** monitors incoming and outgoing traffic and compares it to criteria that are set by the user such as through a whitelist/blacklist/identifying allowed/blocked IP addresses. 
> > • **Antimalware:** scans the computer for viruses/malware and checks against a stored database, deletes/quarantines them.

> [!question] Question: 9618_w22_qp_11 (Q2)
> Match each security feature to its most appropriate description:
> • firewall
> • pharming
> • anti-virus software
> • encryption
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each correct match.*
> > • **firewall:** accepts or rejects incoming and outgoing packets based on criteria
> > • **pharming:** redirects a user to a false website
> > • **anti-virus software:** scans files on the hard drive for malicious software
> > • **encryption:** converts data to an alternative form

> [!question] Question: 9618_w21_qp_12 (Q1)
> Indicate whether the following measures keep data secure (Data Security) or protect the integrity of data (Data Integrity).
> Measures: Firewall, Double entry, Presence check, Access rights, Password.
> **[5]**
> 
> > [!success]- Mark Scheme
> > *1 mark for 3 correct lines from Data Security, 1 mark for 2 correct lines from Data Integrity*
> > • **Firewall:** Data Security
> > • **Double entry:** Data Integrity
> > • **Presence check:** Data Integrity
> > • **Access rights:** Data Security
> > • **Password:** Data Security

## 6.1.3 Network and Internet Threats (Malware, Hacking, Phishing)

> [!question] Question: 9618_w25_qp_11 (Q8.a)
> Viruses and pharming are examples of malware. Explain what is meant by a virus and pharming.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each correct explanation*
> > • **Virus:** Malicious program/software that replicates/copies itself and deletes/alters files/data stored on a computer
> > • **Pharming:** Malicious code/software installed on a computer which redirects user to a fake website to obtain personal data

> [!question] Question: 9618_w23_qp_12 (Q5.c)
> Describe the following threats to a computer system: Phishing email and Spyware.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point.*
> > **Phishing email (max 2):**
> > • The email pretends to be from an official body 
> > • ... persuading individuals to disclose private information // by example such as bank details
> > • ... or requesting authentication by redirecting to an unofficial/unauthorised website // inviting a user to click a link
> > 
> > **Spyware (max 2):**
> > • Malware downloaded without the user’s knowledge
> > • ... which secretly records the user’s actions / keystrokes on the computer
> > • ... and sends logs of the actions to a third party

> [!question] Question: 9618_w23_qp_13 (Q8.b)
> State one difference and one similarity between pharming and phishing.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for difference, 1 mark for similarity*
> > **Difference:**
> > • Pharming is malicious code that redirects to a fake website. Phishing uses an email to prompt user action.
> > • Pharming is automatic. Phishing requires user action.
> > 
> > **Similarity:**
> > • Both try to obtain financial or personal information
> > • Both are a false representation of an official organisation, e.g. a bank
> > • Both make use of fake websites

> [!question] Question: 9618_w23_qp_13 (Q8.c)
> Explain how the data security risks of malware can be restricted.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 3).*
> > • Download programs from reputable websites / sources (as these are less likely to contain malware)
> > • Backup / archive computer systems (so they can be restored in case of data loss)
> > • Install and run anti-malware program (so regular scans can be made, malware quarantined, definitions updated)
> > • Using a firewall to block unused ports (so malware cannot enter system)
> > • Deny administrator privileges to everyday users (so malware cannot be downloaded by everyday users)
> > • Avoid the use of / access to removable devices (so malware cannot be installed from these devices)

> [!question] Question: 9618_w21_qp_11 (Q2.c)
> Give two similarities and one difference between spyware and a virus.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark per similarity to max 2:*
> > • Both are pieces of malicious software 
> > • Both are downloaded / installed/run without the user's knowledge 
> > • Both can pretend to be / are embedded in other legitimate software when downloaded // both try to avoid the firewall 
> > • Both run in the background 
> > 
> > *1 mark for difference:*
> > • Virus can damage computer data; spyware only records / accesses data 
> > • Virus does not send data out of the computer; spyware sends recorded data to third party 
> > • Virus replicates itself; spyware does not replicate itself

> [!question] Question: 9618_s21_qp_12 (Q8.c)
> Identify two threats to data that are posed by networks and the internet.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark per correct answer to max 2:*
> > • Malware // viruses // spyware // by example 
> > • Hacking 
> > • Phishing 
> > • Pharming 

## 6.1.4 Data Protection Measures (Encryption, Access Rights)

> [!question] Question: 9618_s25_qp_11 (Q7.a) & 9618_w24_qp_12 (Q4.c) & 9618_s24_qp_12 (Q3.a.ii)
> Identify and describe one method of restricting the risks posed by an unauthorised person intercepting data whilst it is being transferred across the internet (e.g. email transfer). 
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for the security method, 2 marks for explanation:*
> > **Method:** Encryption
> > **Description/Explanation:**
> > • Data/File contents are encoded/scrambled/converted to cipher text using a key
> > • If intercepted, the data cannot be understood...
> > • ...without being decrypted using a decryption key

> [!question] Question: 9618_s25_qp_13 (Q3.b)
> Identify one method of keeping files secure during electronic data transmission, and one method of keeping files secure on the computer. State how each method protects the data. (Methods must be different).
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for method and 1 mark for corresponding description*
> > **During transmission (e.g.):**
> > • Encryption // by example such as VPN
> > • Jumble / encode data so it cannot be decrypted/understood without the key 
> > 
> > **On computer (e.g.):**
> > • Firewall / proxy: Filter incoming transmissions and stop any that could be attempting unauthorised access
> > • Anti-malware: Find and delete or quarantine any malware that could delete the data / files
> > • Encryption: Jumble / encode data so it cannot be decrypted / understood without the key
> > • Physical method // by example: For example, the computer storing the data cannot be accessed without the key to the room

> [!question] Question: 9618_w23_qp_12 (Q2.b)
> Authentication is one method a Database Management System (DBMS) can use to improve the security of a database. Describe other methods that a DBMS can use to improve the security of a database.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 4). Max 2 if no descriptions.*
> > • **Backup / recovery procedures:** automatically takes copies of the database and store off site on a regular basis so that the data can be recovered if lost.
> > • **Use of access rights:** some users are given different access permissions to different tables (read/write, read only, full access, etc.)
> > • **Views:** different users are able to see different parts of the database (only see what users need to see).
> > • **Record and table locking:** prevents simultaneous access to data so updates are not lost // data is not overwritten.
> > • **Encryption:** the data is turned into ciphertext so it cannot be understood without a decryption key.

> [!question] Question: 9618_w21_qp_11 (Q5.b)
> Describe the ways in which access rights can be used to protect the data in a database from unauthorised access.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point (max 3)*
> > • Access rights give managers / individuals access to different elements 
> > • … by having different accounts / logins 
> > • … which have different access rights e.g. read only // no access / read / write 
> > • Specific views can be assigned to different levels of users
> > • … e.g. managers can only see the data for their own shop(s) 

> [!question] Question: 9618_s21_qp_12 (Q8.b)
> Each employee has a username and password to allow them to log onto a computer. An employee’s access rights are set to either read-only, or read and write.
> Identify one other software-based measure that could be used to restrict the access to the data on the computers.
> **[1]**
> 
> > [!success]- Mark Scheme
> > *1 mark for a correct answer:*
> > • Two factor authentication 
> > • Biometric passwords 
> > • Firewall 
> > *(Note: Key Card Access also accepted in MS).*

# Topic 6.2: Data Integrity

## 6.2.1 Data Validation Methods

> [!question] Question: 9618_s23_qp_12 (Q2.c.i)
> The field `RiderLevel` can only have the values: Beginner, Intermediate or Advanced. Describe two methods of validating the field `RiderLevel`.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 2:*
> > • **Presence check** to make sure that the (rider level) is entered 
> > • **Look-up / Existence check** to make sure the rider level is only Beginner, Intermediate or Advanced 
> > • **Length check** to make sure the rider level entered is either 8 or 12 characters 
> > • **Type check** to make sure the rider level is alphanumeric 

> [!question] Question: 9618_s23_qp_13 (Q4.d.i)
> The car registration number must be: 1 letter, followed by 3 numbers, followed by 2 letters (e.g., A123AA).
> One way that a registration number can be validated is by using a presence check. Describe two other ways that the car registration number can be validated.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 2:*
> > • **Length check:** the registration number must be 6 characters long 
> > • **Format check:** the registration number must be in the format letter-digit-digit-digit-letter-letter 
> > • **Type check:** the registration number must be alphanumeric

> [!question] Question: 9618_s23_qp_13 (Q4.d.iii)
> State why the car registration number might be incorrect even after it has been validated and verified.
> **[1]**
> 
> > [!success]- Mark Scheme
> > *1 mark for:*
> > The registration number on the original document might be in the correct format but may be the incorrect registration number for that car. 

> [!question] Question: 9618_w22_qp_12 (Q4.a)
> State the difference between data verification and data validation.
> **[1]**
> 
> > [!success]- Mark Scheme
> > *1 mark for:*
> > Data verification is checking if input data is the same as the original whereas data validation is checking that the data is reasonable / sensible.

> [!question] Question: 9618_w22_qp_12 (Q4.c)
> One validation method is a presence check. Describe two other validation methods that can be used to validate non-numeric data.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 2). For example:*
> > • Format check: to make sure data is in the required format // only expected characters allowed
> > • Lookup / Existence check: to make sure the data is already present in the system 
> > • Length check: to make sure the data contains the correct number of characters 
> > • Type check: to ensure that non-numeric data is entered 

> [!question] Question: 9618_w21_qp_11 (Q2.b.i)
> Describe how data validation helps to protect the integrity of the data. Give an example in your answer.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point:*
> > • validation checks that data is reasonable / sensible 
> > • example e.g. checking data is the right number / type of characters 

> [!question] Question: 9618_s21_qp_11 (Q6.a, Q6.b, Q6.c)
> State the type of validation check that each of the following algorithms performs:
> (a) `IF x < 0 OR x > 10 THEN OUTPUT "Invalid"`
> (b) `IF x = "" THEN OUTPUT "Invalid"`
> (c) `IF NOT(x = "Red" OR x = "Yellow" OR x = "Blue") THEN OUTPUT "Invalid"`
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark each:*
> > (a) Range (check)
> > (b) Presence (check)
> > (c) Existence (check) / Lookup (check)

## 6.2.2 Data Verification Methods

> [!question] Question: 9618_w25_qp_12 (Q1)
> Draw one line from each verification method to indicate whether it is used during data transfer or data entry.
> Methods: Parity byte check, Checksum, Visual check, Parity block check.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for 2 or 3 correctly connected boxes, 2 marks for all 4 correct*
> > • **Parity byte check:** Data transfer
> > • **Checksum:** Data transfer
> > • **Parity block check:** Data transfer
> > • **Visual check:** Data entry

> [!question] Question: 9618_w25_qp_12 (Q6.c.i)
> A computer system uses even parity. The least significant (rightmost) bit of each byte is the parity bit. Complete the byte by writing the missing parity bit: `0 1 0 1 1 1 0 _`
> **[1]**
> 
> > [!success]- Mark Scheme
> > *1 mark for correct answer:*
> > **0** (There are four 1s already, which is even).

> [!question] Question: 9618_w25_qp_12 (Q6.c.ii)
> The computer uses parity block check with even parity. Following transmission, one of the four bytes of data has an error in one of the bits. Identify the bit that has been altered.
> 
> Byte 1: `1 0 1 1 0 1 1 1`
> Byte 2: `0 1 1 1 0 0 0 0`
> Byte 3: `0 0 0 1 1 0 1 1`
> Byte 4: `0 1 1 1 0 1 0 0`
> Parity Byte: `1 0 1 0 0 0 0 0`
> **[1]**
> 
> > [!success]- Mark Scheme
> > *1 mark for correct answer:*
> > The error is in **Byte 2, Column 5** (the `0` in `0 1 1 1 0 0 0 0`, if reading left to right as columns 1-8).
> > *Explanation: Row 2 has three 1s (odd parity, needs to be even). Column 5 has three 1s (odd parity, needs to be even). The intersection is the incorrect bit.*

> [!question] Question: 9618_s25_qp_11 (Q7.c)
> Explain how data can be verified using a checksum.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 3:*
> > • The data is put through an algorithm to create a checksum value
> > • The data and checksum are sent to the receiver 
> > • The receiver performs the same algorithm on the data
> > • if both checksums match the data is verified

> [!question] Question: 9618_s25_qp_12 (Q5.c.ii)
> Give two ways that a DBMS can support data integrity.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each to max 2:*
> > • Validation
> > • Enforce referential integrity
> > • Cascade update / delete
> > • Ensuring the database is normalised

> [!question] Question: 9618_s24_qp_11 (Q5.b)
> Complete the description of a parity check when Computer A is transmitting data to Computer B:
> 
> Computer A and Computer B agree on whether to use `(1)` parity. Computer A divides the data into groups of `(2)`. The number of 1s in each group is counted. If the agreed parity is `(3)` and the group has an even number of 1s, a parity bit of 1 is appended, otherwise a parity bit of 0 is appended.
> In a parity `(4)` check the bytes are grouped together, for example in a grid. The number of 1s in each column (bit position) is counted. A bit is assigned to each column to make the column match the parity. These parity bits are transmitted with the data as a parity `(5)`.
> **[5]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each correctly completed term:*
> > 1. **odd** or **even**
> > 2. **7-bits**
> > 3. **odd**
> > 4. **block**
> > 5. **byte**

> [!question] Question: 9618_s24_qp_13 (Q7.f.i)
> Identify and describe two methods of data verification that can be used during data transfer.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each correct method and 1 mark for corresponding description to max 4:*
> > • **Parity byte:** An additional bit is added to make the number of 1s in the byte odd or even to match the parity. If a byte with an odd number of 1 bits is received when even parity is used, there is an error. 
> > • **Parity block:** Parity is calculated horizontally and vertically. A parity byte is created from the bits produced by the vertical parity check. This is sent with the data. The parity is re-checked when received and the position of an incorrect bit can be determined. 
> > • **Checksum:** A calculation is made from the data and the result transmitted with the data. The receiver repeats the calculation and compares the result with the value received. If the two are different, there is an error.

> [!question] Question: 9618_w23_qp_13 (Q3.c)
> An administrative officer enters a tutor ID into the TUTOR table. Explain how data verification can be used when the tutor ID is entered.
> **[4]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 4).*
> > • The administrator completes a visual check / checks by eye
> > • …that the tutor identifier input matches the tutor identifier on the original document
> > • Double entry check // the administrator (or a second person) enters the number a second time
> > • …and the system compares it with the first entry

> [!question] Question: 9618_w23_qp_13 (Q8.a)
> Data verification is one method of protecting the integrity of data. Describe one other method of protecting the integrity of data.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 2):*
> > • Validation // a validation method named or described 
> > • …protects the data by ensuring that the data is reasonable / sensible and within specified bounds

> [!question] Question: 9618_s23_qp_13 (Q4.d.ii)
> Describe two ways that a car registration number can be verified when it is entered into a database.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark each:*
> > • **Visual check:** Manually compare the registration number entered with the source document 
> > • **Double entry:** Enter the registration number twice and the computer compares to check they are the same 

> [!question] Question: 9618_w22_qp_12 (Q4.b)
> A checksum can be used to detect errors during data transmission. Describe how a checksum is used.
> **[3]**
> 
> > [!success]- Mark Scheme
> > *1 mark for each bullet point (max 3):*
> > • checksum value is calculated from the data before transmission // correct description of a checksum algorithm
> > • ... this calculated value is transmitted with the data
> > • receiving computer recalculates the checksum from the received data
> > • if the checksum received and calculated match, no error has occurred // if the checksum received and calculated do not match, an error has occurred

> [!question] Question: 9618_w21_qp_11 (Q2.b.ii)
> Describe how data verification helps to protect the integrity of the data. Give an example in your answer.
> **[2]**
> 
> > [!success]- Mark Scheme
> > *1 mark per bullet point:*
> > • verification checks that data is the same as the original 
> > • by example e.g. double entry

