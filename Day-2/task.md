// OS- Task
Objective: OS Module aur FS Module dono ka use karke ek system report generate karni hai.

Requirements
systemReport.js file banao.
os module ka use karke ye details nikalo:
Hostname
Platform
Architecture
OS Type
OS Version
Uptime (hours mein)
Total RAM (GB)
Free RAM (GB)
Used RAM (GB)
CPU Count
Report ko ek formatted string mein convert karo.
fs.writeFile() ka use karke report.txt file banao.
fs.readFile() se report dobara read karke console par print karo.
Agar reports folder exist nahi karta to fs.mkdir() se create karo aur report us folder ke andar save karo.
Save hone ke baad console mein message print karo:

Expected output:
========= SYSTEM REPORT =========

Hostname      : DESKTOP-ABC123
Platform      : win32
Architecture  : x64
OS Type       : Windows_NT
Version       : Windows 11 Pro
Uptime        : 5.42 Hours

Memory
--------------------------
Total RAM     : 16 GB
Free RAM      : 7.20 GB
Used RAM      : 8.80 GB

CPU
--------------------------
CPU Count     : 4

=================================
Generated Successfully