"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[7366],{58028:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=o(74848),r=o(28453);const s={sidebar_position:14},i="Research on Closed-Loop Systems and FSMs for Sensor Integration",a={id:"project-4/iot/Closed_Loop_FSM_Sensor_Integration",title:"Research on Closed-Loop Systems and FSMs for Sensor Integration",description:"Author: Sohil Nagpal",source:"@site/docs/project-4/iot/Closed_Loop_FSM_Sensor_Integration.md",sourceDirName:"project-4/iot",slug:"/project-4/iot/Closed_Loop_FSM_Sensor_Integration",permalink:"/redback-documentation/docs/project-4/iot/Closed_Loop_FSM_Sensor_Integration",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/project-4/iot/Closed_Loop_FSM_Sensor_Integration.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Implementing HiveMQ and MQTT in Sensor Data Collection",permalink:"/redback-documentation/docs/project-4/iot/HiveMQ_MQTT_Implementation_Guide"},next:{title:"FSM and Closed-loop Integration",permalink:"/redback-documentation/docs/project-4/iot/FSM_and_closed_loop_integration"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Closed-Loop Systems",id:"understanding-closed-loop-systems",level:2},{value:"Application in Sensor Integration",id:"application-in-sensor-integration",level:3},{value:"Finite State Machines (FSMs) Overview",id:"finite-state-machines-fsms-overview",level:2},{value:"FSMs in Our Project",id:"fsms-in-our-project",level:3},{value:"Implementing Closed-Loop Systems and FSMs",id:"implementing-closed-loop-systems-and-fsms",level:2},{value:"Using Arduino Code from Previous Example",id:"using-arduino-code-from-previous-example",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"research-on-closed-loop-systems-and-fsms-for-sensor-integration",children:"Research on Closed-Loop Systems and FSMs for Sensor Integration"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Author:"})," Sohil Nagpal"]})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"This report explores the application of closed-loop systems and Finite State Machines (FSMs) to enhance the integration and functionality of multiple sensors\u2014specifically heart rate monitors, accelerometers, and GPS\u2014within our project. We discuss how these methods can lead to more accurate data collection and improved system performance."}),"\n",(0,t.jsx)(n.h2,{id:"understanding-closed-loop-systems",children:"Understanding Closed-Loop Systems"}),"\n",(0,t.jsx)(n.p,{children:"Closed-loop systems, or feedback control systems, utilize feedback to control the state of a system based on its output. In the context of sensor integration, closed-loop systems can adjust the sensitivity or sampling rate of sensors based on real-time data, enhancing the system's adaptability and accuracy."}),"\n",(0,t.jsx)(n.h3,{id:"application-in-sensor-integration",children:"Application in Sensor Integration"}),"\n",(0,t.jsx)(n.p,{children:"For instance, if the heart rate sensor detects an anomaly in readings, the system could automatically increase the sampling rate for more detailed data, while simultaneously adjusting the accelerometer to monitor for unusual movements, enhancing the detection of potential emergencies."}),"\n",(0,t.jsx)(n.h2,{id:"finite-state-machines-fsms-overview",children:"Finite State Machines (FSMs) Overview"}),"\n",(0,t.jsx)(n.p,{children:"A Finite State Machine is a computational model consisting of a limited number of states. It's a powerful tool for managing complex logic in systems that need to handle multiple sensor inputs efficiently."}),"\n",(0,t.jsx)(n.h3,{id:"fsms-in-our-project",children:"FSMs in Our Project"}),"\n",(0,t.jsx)(n.p,{children:"In our sensor setup, an FSM could manage states such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Initialization"}),": Setting up sensor parameters and calibrating."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Collection"}),": Regular monitoring and data recording."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Anomaly Detection"}),": Identifying unusual readings and responding appropriately."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Error Handling"}),": Managing sensor errors or failures."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Power Saving"}),": Reducing power consumption when sensors are not needed."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implementing-closed-loop-systems-and-fsms",children:"Implementing Closed-Loop Systems and FSMs"}),"\n",(0,t.jsx)(n.h3,{id:"using-arduino-code-from-previous-example",children:"Using Arduino Code from Previous Example"}),"\n",(0,t.jsx)(n.p,{children:"Let's enhance the Arduino setup to include basic FSM and closed-loop behavior. Below is a revised version of your sensor code that incorporates these concepts:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include "DFRobot_BloodOxygen_S.h"\r\n\r\n// Define the I2C address for the MAX30102 sensor\r\n#define I2C_ADDRESS 0x57\r\nDFRobot_BloodOxygen_S_I2C MAX30102(&Wire, I2C_ADDRESS);\r\n\r\nenum State { INIT, COLLECT_DATA, CHECK_DATA, ERROR };\r\nState currentState = INIT;\r\n\r\nvoid setup() {\r\n  Serial.begin(115200);\r\n}\r\n\r\nvoid loop() {\r\n  switch (currentState) {\r\n    case INIT:\r\n      if (MAX30102.begin() == true) {\r\n        currentState = COLLECT_DATA;\r\n        Serial.println("Sensor initialized.");\r\n      } else {\r\n        Serial.println("Sensor failed to initialize.");\r\n        currentState = ERROR;\r\n      }\r\n      break;\r\n    case COLLECT_DATA:\r\n      MAX30102.sensorStartCollect();\r\n      currentState = CHECK_DATA;\r\n      break;\r\n    case CHECK_DATA:\r\n      if (checkSensorData()) {\r\n        Serial.println("Data is within expected range.");\r\n        delay(1000); // Data collection interval\r\n      } else {\r\n        Serial.println("Data out of range, adjusting parameters...");\r\n        adjustSensorSettings();\r\n      }\r\n      break;\r\n    case ERROR:\r\n      handleSensorError();\r\n      break;\r\n  }\r\n}\r\n\r\nbool checkSensorData() {\r\n  // Logic to check if data is within an expected range\r\n  return true;\r\n}\r\n\r\nvoid adjustSensorSettings() {\r\n  // Adjust settings based on data feedback\r\n}\r\n\r\nvoid handleSensorError() {\r\n  // Handle errors and attempt to reset sensors\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Integrating closed-loop systems and FSMs with multiple sensors in our project allows for more dynamic and responsive management of sensor data. This approach not only improves the accuracy and reliability of the data collected but also enhances the system's ability to adapt to different conditions and detect anomalies more effectively."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);