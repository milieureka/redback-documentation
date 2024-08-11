"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[5587],{13892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(74848),s=t(28453);const r={sidebar_position:2},o="Denial of Service Incident Response Playbook",a={id:"cybersecurity/purple team/playbooks/Denial of Service Incident Response Playbook",title:"Denial of Service Incident Response Playbook",description:"Denial of Service Incident Response Playbook for Blue Team",source:"@site/docs/cybersecurity/purple team/playbooks/Denial of Service Incident Response Playbook.md",sourceDirName:"cybersecurity/purple team/playbooks",slug:"/cybersecurity/purple team/playbooks/Denial of Service Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Denial of Service Incident Response Playbook",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/purple team/playbooks/Denial of Service Incident Response Playbook.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Phishing Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Phishing Incident Response Playbook"},next:{title:"Data-Theft Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Data Theft Incident Response Playbook"}},c={},l=[{value:"1 Introduction",id:"1-introduction",level:2},{value:"1.1 Overview",id:"11-overview",level:3},{value:"1.2 Purpose",id:"12-purpose",level:3},{value:"1.3 Attack Definition",id:"13-attack-definition",level:3},{value:"1.4 Scope",id:"14-scope",level:3},{value:"2 Attack Types",id:"2-attack-types",level:2},{value:"2.1 UDP Flood",id:"21-udp-flood",level:3},{value:"2.2 TCP SYN Flood",id:"22-tcp-syn-flood",level:3},{value:"2.3 HTTP Flood",id:"23-http-flood",level:3},{value:"2.4 Ping Flood (ICMP Flood)",id:"24-ping-flood-icmp-flood",level:3},{value:"2.5 Slowloris",id:"25-slowloris",level:3},{value:"2.6 DNS Amplification",id:"26-dns-amplification",level:3},{value:"2.7 NTP Amplification",id:"27-ntp-amplification",level:3},{value:"2.8 Smurf Attack",id:"28-smurf-attack",level:3},{value:"3 Stakeholders",id:"3-stakeholders",level:2},{value:"4 Flow Diagram",id:"4-flow-diagram",level:2},{value:"5 Incident Response Stages",id:"5-incident-response-stages",level:2},{value:"5.1 Preparation",id:"51-preparation",level:3},{value:"5.2 Detection",id:"52-detection",level:3},{value:"5.3 Analysis",id:"53-analysis",level:3},{value:"5.4 Containment",id:"54-containment",level:3},{value:"5.5 Eradication",id:"55-eradication",level:3},{value:"5.6 Recovery",id:"56-recovery",level:3},{value:"5.7 Post-Incident Review",id:"57-post-incident-review",level:3},{value:"6 Terminology",id:"6-terminology",level:2}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"denial-of-service-incident-response-playbook",children:"Denial of Service Incident Response Playbook"}),"\n",(0,i.jsx)(n.p,{children:"Denial of Service Incident Response Playbook for Blue Team"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Effective Date:"})," 29 April 2024. ",(0,i.jsx)(n.strong,{children:"Last Edited:"})," 20 April 2024. ",(0,i.jsx)(n.strong,{children:"Author:"})," Pari ",(0,i.jsx)(n.strong,{children:"Document Reference:"})," DSIRP-2. ",(0,i.jsx)(n.strong,{children:"Expiry Date:"})," 29 April 2025. ",(0,i.jsx)(n.strong,{children:"Version:"})," 1.0."]})}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1 Introduction"}),"\n",(0,i.jsx)(n.h3,{id:"11-overview",children:"1.1 Overview"}),"\n",(0,i.jsx)(n.p,{children:"Denial of Service (DoS) assaults are a serious threat to the availability and integrity of online services in today's interconnected digital ecosystem. A denial-of-service (DoS) attack attempts to stop a system, network, or service from operating normally by flooding it with excessive amounts of unauthorised traffic or resource requests. These assaults have the potential to cause downtime, monetary losses, reputational harm, and even jeopardise the privacy of private data."}),"\n",(0,i.jsx)(n.h3,{id:"12-purpose",children:"1.2 Purpose"}),"\n",(0,i.jsx)(n.p,{children:"This Denial of Service (DoS) Incident Response Playbook aims to offer a thorough structure for identifying, preparing, and responding to DoS attacks. This playbook tries to protect vital assets and services from disruptive cyber threats and reduce the effect of DoS incidents on our organization's operations by providing preventive measures, detection methods, response protocols, and recovery plans."}),"\n",(0,i.jsx)(n.h3,{id:"13-attack-definition",children:"1.3 Attack Definition"}),"\n",(0,i.jsx)(n.p,{children:"An attempt to bring down a computer or network and prevent its intended users from using it is known as a Denial-of-Service (DoS) attack. DoS attacks achieve this by transmitting information that causes a crash or by overloading the target with traffic. The denial of service or resource to legitimate users, such as employees, members, or account holders, is the result of a denial-of-service attack in both cases."}),"\n",(0,i.jsx)(n.h3,{id:"14-scope",children:"1.4 Scope"}),"\n",(0,i.jsx)(n.p,{children:"This playbook includes a thorough method for handling Denial of Service (DoS) attacks in the operating environment and infrastructure of our company. From pre-incident planning and detection to mitigation, recovery, and post-event review, it covers every stage of incident handling. The principles and processes described in this playbook can be applied to mitigate related threats, such as Distributed Denial of Service (DDoS) attacks, even if the primary focus of attack is DoS."}),"\n",(0,i.jsx)(n.h2,{id:"2-attack-types",children:"2 Attack Types"}),"\n",(0,i.jsx)(n.h3,{id:"21-udp-flood",children:"2.1 UDP Flood"}),"\n",(0,i.jsx)(n.p,{children:"Attackers using UDP floods take use of UDP's intrinsic simplicity\u2014that is, its connectionless nature, in contrast to TCP. Attackers frequently target ports or services as they bombard the target system with a massive volume of UDP packets. When the target's network bandwidth is overloaded or its processing power is depleted by the flood of UDP packets, it stops responding to legitimate traffic. Because UDP does not ensure delivery or order, attackers can fake the IP addresses used to originate their attacks, making it challenging to identify their origins."}),"\n",(0,i.jsx)(n.h3,{id:"22-tcp-syn-flood",children:"2.2 TCP SYN Flood"}),"\n",(0,i.jsx)(n.p,{children:"TCP SYN Flood attacks exploit the Transmission Control Protocol's (TCP) three-way handshake protocol. TCP SYN packets are sent by attackers in large quantities; these packets form the initial stage of a TCP connection. They do not, however, send the last ACK packet to complete the handshake, which leaves the target system with a backlog of partially open connections. As a result, valid users are unable to connect to the server because the target's RAM and connection table entries are depleted."}),"\n",(0,i.jsx)(n.h3,{id:"23-http-flood",children:"2.3 HTTP Flood"}),"\n",(0,i.jsx)(n.p,{children:"The goal of HTTP flood attacks is to overload web servers with many HTTP requests. Attackers can target URLs, forms, or online application functionalities with a large volume of requests by using botnets or other automated methods. HTTP Flood assaults cause the server's performance to deteriorate, rendering it incapable of responding to valid user requests by using up the server's memory, processing power, and network bandwidth. Consequently, there is a disruption in service or downtime because of the web server becoming slow or unresponsive to authorised users."}),"\n",(0,i.jsx)(n.h3,{id:"24-ping-flood-icmp-flood",children:"2.4 Ping Flood (ICMP Flood)"}),"\n",(0,i.jsx)(n.p,{children:'Ping Flood attacks, sometimes referred to as "Ping of Death" or ICMP Flood attacks, overwhelm the target system with an endless barrage of Internet Control Message Protocol (ICMP) echo request packets. These packets, which take advantage of flaws in operating systems or network devices, are sent quickly and are usually larger than the allowed size. The target machine experiences sluggish performance or even crashes because of overusing its CPU and network resources processing these packets. Ping Flood assaults are hard to counter because they might originate from several sources at once and are reasonably easy to carry out.'}),"\n",(0,i.jsx)(n.h3,{id:"25-slowloris",children:"2.5 Slowloris"}),"\n",(0,i.jsx)(n.p,{children:'Attacks known as "slowloris" are named after the way they use server resources\u2014low and slow. Slowloris keeps a small number of connections active for a long time rather than flooding the server with requests. Attackers make sure that every connection is active by sending HTTP headers to the server very slowly. Slowloris stops authentic users from creating new connections by filling the server\'s connection slots with incomplete requests. A denial-of-service attack against authorised users attempting to access the web server may result from this resource exhaustion approach.'}),"\n",(0,i.jsx)(n.h3,{id:"26-dns-amplification",children:"2.6 DNS Amplification"}),"\n",(0,i.jsx)(n.p,{children:"DNS Amplification attacks exploit vulnerabilities in DNS servers to amplify the volume of traffic directed at the target system. Attackers send small DNS queries with a spoofed source IP address to vulnerable DNS servers, requesting large DNS responses. These responses, which are much larger than the original queries, are directed towards the victim's IP address, overwhelming its network bandwidth. DNS Amplification attacks leverage the inherent trust between DNS servers, making it difficult to trace the origin of the attack."}),"\n",(0,i.jsx)(n.h3,{id:"27-ntp-amplification",children:"2.7 NTP Amplification"}),"\n",(0,i.jsx)(n.p,{children:"NTP amplification attacks are comparable to DNS amplification attacks in that they increase the amount of traffic going to the target system by taking advantage of vulnerable Network Time Protocol (NTP) servers. Attackers make small NTP queries to NTP servers, asking huge NTP answers, using a faked source IP address. The victim's IP address is the target of these replies, which are usually significantly larger than the initial queries and interrupt services by congesting the network. Because the NTP protocol is UDP-based, NTP amplification attacks are challenging to counter."}),"\n",(0,i.jsx)(n.h3,{id:"28-smurf-attack",children:"2.8 Smurf Attack"}),"\n",(0,i.jsx)(n.p,{children:"Smurf Attacks increase the amount of traffic going towards the target system by taking advantage of IP networks' ICMP Echo Reply functionality. A lot of ICMP echo request (ping) packets are sent by attackers to IP broadcast addresses, pretending that the victim's IP address is the originating IP address. As a result, the victim's IP address triggers responses from every computer on the network, exceeding its available bandwidth and resources."}),"\n",(0,i.jsx)(n.h2,{id:"3-stakeholders",children:"3 Stakeholders"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IT Administration"}),": The IT administration oversees the organization's servers, networks, and other IT infrastructure. They are essential in identifying, assessing, and minimising a denial-of-service attack in addition to organising the response to the occurrence."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cyber Incident Response Team"}),": An organization's cyber security incident response team (CSIRT) is a specialised unit tasked with handling security incidents and breaches. Their main objective is to quickly locate, contain, and address issues to lessen their effects. CSIRTs are essential for safeguarding an organization's priceless assets, good name, and customers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"External Service Providers"}),": For a variety of IT services, companies may depend on outside vendors like internet service providers (ISPs), cloud service providers, or managed security service providers (MSSPs). By working together with these suppliers, the company can better respond to the denial-of-service attack and make use of more resources and experience."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Technical Support Team"}),": To troubleshoot and resolve technical issues associated with the DoS attack, the technical support team provides assistance. They can assist in promptly returning regular operations to normal and offer support to end customers impacted by the occurrence."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"End Users"}),": If the DoS attack prevents end users from accessing services or apps, it could influence them. Minimising the impact on the position they hold can be achieved by keeping them updated on the situation and offering advice on workarounds or substitute solutions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Senior Management/Executive Leadership"}),": In deciding how to respond to the DoS attack, senior management, or executive leadership assigns resources, sets strategic direction, and takes choices. They could also be in charge of maintaining the organization's reputation and dealing with outside stakeholders."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-flow-diagram",children:"4 Flow Diagram"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Denial of Service Incident Response Flowchart",src:t(98287).A+"",width:"578",height:"681"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Preparation (Pink)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Develop and maintain Cyber Incident Response Plan (CIRP) for DoS incidents."}),"\n",(0,i.jsx)(n.li,{children:"Identify critical assets and prioritize them."}),"\n",(0,i.jsx)(n.li,{children:"Train incident response teams and employees."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Detection (Orange)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Continuously monitor network traffic."}),"\n",(0,i.jsx)(n.li,{children:"Set up alerts for suspicious patterns."}),"\n",(0,i.jsx)(n.li,{children:"Validate incidents."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Analysis (Yellow)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Investigate attack vectors and affected systems."}),"\n",(0,i.jsx)(n.li,{children:"Collaborate with relevant teams."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Containment (Green)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Implement immediate mitigation measures."}),"\n",(0,i.jsx)(n.li,{children:"Isolate affected systems."}),"\n",(0,i.jsx)(n.li,{children:"Communicate progress."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Eradication (Blue)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Identify vulnerabilities."}),"\n",(0,i.jsx)(n.li,{children:"Patch and remediate."}),"\n",(0,i.jsx)(n.li,{children:"Verify closure of attack vector."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Recovery (Red)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gradually restore services."}),"\n",(0,i.jsx)(n.li,{children:"Validate restoration."}),"\n",(0,i.jsx)(n.li,{children:"Monitor for recurrence."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Post-Incident Review (Brown)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Conduct a thorough review."}),"\n",(0,i.jsx)(n.li,{children:"Learn from the incident."}),"\n",(0,i.jsx)(n.li,{children:"Update the CIRP."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5-incident-response-stages",children:"5 Incident Response Stages"}),"\n",(0,i.jsx)(n.h3,{id:"51-preparation",children:"5.1 Preparation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Objective"}),": Establish a robust foundation for effective incident response."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Actions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Risk Assessment: Use thorough risk assessments to find possible DoS vulnerabilities in systems, apps, and network infrastructure."}),"\n",(0,i.jsx)(n.li,{children:"Creating Cyber Incident Response Plan(CIRP): Make a thorough incident response plan for handling denial-of-service (DoS) incidents. Establish communication routes, escalation protocols, and roles and duties."}),"\n",(0,i.jsx)(n.li,{children:"Resource Allocation: Ensure that the people, equipment, and technologies required to support incident response activities are available."}),"\n",(0,i.jsx)(n.li,{children:"Training and Awareness: To improve staff members' comprehension of DoS risks, detection methods, and response protocols, offer training and awareness programmes."}),"\n",(0,i.jsx)(n.li,{children:"Form an Incident Response Team: Assign people to specific areas of handling the response to denial-of-service (DoS) situations in order to create a specialised team."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"52-detection",children:"5.2 Detection"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Objective"}),": Promptly identify and confirm the occurrence of DoS attacks."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Actions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Monitoring and Alerting: To identify indications of unusual behaviour suggestive of a denial-of-service attack, continuously monitor network traffic, system performance metrics, and security logs."}),"\n",(0,i.jsx)(n.li,{children:"Anomaly Detection: Use intrusion detection/prevention systems (IDS/IPS), network traffic analysis tools, and security information and event management (SIEM) systems to identify strange patterns or abrupt increases in traffic volume that could be signs of a denial-of-service assault."}),"\n",(0,i.jsx)(n.li,{children:"Alert Triage: Set alerts produced by monitoring systems in order of priority and look into them to see whether they point to a possible DoS assault. Correlate alerts with several data sources to validate them."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"53-analysis",children:"5.3 Analysis"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Objective"}),": Conduct in-depth analysis of the DoS attack to understand its nature, scope, and impact."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Actions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Traffic Analysis: Examine network traffic patterns to determine the nature of the traffic, source IP addresses, and services or apps that are being targeted in order to determine the characteristics of the DoS attack."}),"\n",(0,i.jsx)(n.li,{children:"Log analysis: Look through firewall logs, system logs, and other pertinent log data to find any unusual activity or attempted illegal access that may have been connected to the DoS incident."}),"\n",(0,i.jsx)(n.li,{children:"Forensic Investigation: Gather and store digital evidence connected to the DoS assault for forensic examination. Memory dumps, system snapshots, and packet captures are a few examples of this."}),"\n",(0,i.jsx)(n.li,{children:"Root produce Analysis: Find the vulnerabilities or misconfigurations that the attacker may have exploited in order to trigger the denial of service (DoS) incident."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"54-containment",children:"5.4 Containment"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Objective"}),": Limit the impact of the attack and prevent its spread."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Actions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Traffic Filtering: To stop or filter malicious traffic linked to the DoS attack, use firewall rules, access control lists (ACLs), and other network filtering techniques."}),"\n",(0,i.jsx)(n.li,{children:"Rate limitation: To reduce excessive traffic flows and avoid network congestion, use rate limitation or traffic shaping techniques."}),"\n",(0,i.jsx)(n.li,{children:"Isolation: To stop the DoS attack from spreading and lessen its effects on other infrastructure components, isolate the compromised systems or network segments."}),"\n",(0,i.jsx)(n.li,{children:"Cloud-Based Mitigation: Use content delivery networks (CDNs) or cloud-based mitigation services to reduce the amount of DoS attack traffic before it enters the network perimeter of the company."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"55-eradication",children:"5.5 Eradication"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Objective"}),": Eliminate the root cause of the attack and remove the presence of the attacker."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Actions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Patch and Update Deployment: To address vulnerabilities that the attacker exploited and stop future denial-of-service assaults, apply patches, security updates, and configuration modifications."}),"\n",(0,i.jsx)(n.li,{children:"System Hardening: To strengthen systems and lessen their vulnerability to DoS attacks, take additional security precautions. Some of them include turning off unused services, tightening access limits, and putting security best practices into practice."}),"\n",(0,i.jsx)(n.li,{children:"Network Redesign: To increase resilience and better withstand DoS assaults, think about revamping the network architecture or implementing more network security measures."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"56-recovery",children:"5.6 Recovery"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Objective"}),": Restore normal operations."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Actions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"System Restoration: Assure data integrity and uninterrupted operations by restoring impacted systems and services from backups."}),"\n",(0,i.jsx)(n.li,{children:"Service Verification: To make sure the restored systems and services are operating correctly and securely, thoroughly test and verify them."}),"\n",(0,i.jsx)(n.li,{children:"Communication with Stakeholders: Give advice on how to resume regular activities and update stakeholders on the status of the recovery efforts."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"57-post-incident-review",children:"5.7 Post-Incident Review"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Objective"}),": Conduct a comprehensive review of the DoS incident response process to learn from the incident and improve future response."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Actions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Debriefing: Conduct a debriefing session with the members of the incident response team to evaluate the success of the response efforts and pinpoint any obstacles that may have arisen."}),"\n",(0,i.jsx)(n.li,{children:"Root Cause Analysis: To determine the underlying causes of the DoS occurrence, such as security control gaps or vulnerabilities, conduct a root cause analysis."}),"\n",(0,i.jsx)(n.li,{children:"Documentation of Lessons Learned: Provide a record of the takeaways that were discovered from the DoS incident, outlining effective response tactics, areas that require development, and suggestions for improving incident response capabilities."}),"\n",(0,i.jsx)(n.li,{children:"Updates to the Incident Response Plan: To resolve identified shortcomings and integrate improvements, update the incident response plan in light of the post-event review results."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"6-terminology",children:"6 Terminology"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CIRP (Cyber Incident Response Plan)"}),": It is a documented set of procedures and guidelines for organization to follow when responding to and managing security incidents. It outlines roles, responsibilities, communication channels, and technical steps necessary to detect, analyse, contain, eradicate, and recover from incidents. It is essential to have a well-prepared CIRP for effective incident response and minimizing the impact of security threats."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CSIRT (Cyber Security Incident Response Team)"}),": It an expert group that handles cyber security incidents. They are responsible for detecting, analysing, containing, eradicating, and recovering from security incidents affecting an organization. CSIRTs play a critical role in safeguarding an organization\u2019s assets and maintaining trust with stakeholders."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"UDP (User Datagram Protocol)"}),": It is a communication protocol used for time-sensitive transmissions such as video playback or DNS lookups. It does not establish a connection before data transfer and directly send them to a target computer without checking whether they arrived as intended or indicating their order."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TCP three-way handshake"}),": It is a protocol for establishing a connection between a server and a client in a TCP/IP network. It involves three steps: client sends a SYN segment to the server, server responds with a SYN-ACK segment, client acknowledges the server\u2019s response with an ACK segment and establishing a reliable connection for data transfer."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},98287:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/dsirp1-flowchart-fe44d1bb21cd441d2df04513aa80878b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);