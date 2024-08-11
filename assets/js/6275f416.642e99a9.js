"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[2004],{35787:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=i(74848),r=i(28453);const t={sidebar_position:2},o="Integrated Code Document",a={id:"project-4/iot/final-code-documentation-and-tips-for-futur",title:"Integrated Code Document",description:"Documentation and Future Guide for Integration and Final code",source:"@site/docs/project-4/iot/final-code-documentation-and-tips-for-futur.md",sourceDirName:"project-4/iot",slug:"/project-4/iot/final-code-documentation-and-tips-for-futur",permalink:"/redback-documentation/docs/project-4/iot/final-code-documentation-and-tips-for-futur",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/project-4/iot/final-code-documentation-and-tips-for-futur.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mongo DB and Node.js Installation Guide",permalink:"/redback-documentation/docs/project-4/iot/mongo-guide"},next:{title:"Data Parsing Implementation in Node.js for Arduino Sensor Data",permalink:"/redback-documentation/docs/project-4/iot/Data_parsing_guide_accelerometer"}},l={},d=[{value:"Schematic Diagram",id:"schematic-diagram",level:2},{value:"Code Functionality",id:"code-functionality",level:2},{value:"The code performs the following key tasks:",id:"the-code-performs-the-following-key-tasks",level:3},{value:"Necessary Libraries and Installation",id:"necessary-libraries-and-installation",level:2},{value:"Challenges Faced and Solutions",id:"challenges-faced-and-solutions",level:2},{value:"Things to Keep in Mind While Integrating Sensors",id:"things-to-keep-in-mind-while-integrating-sensors",level:2},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Data Flow Diagram",id:"data-flow-diagram",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"integrated-code-document",children:"Integrated Code Document"}),"\n",(0,s.jsx)(n.p,{children:"Documentation and Future Guide for Integration and Final code"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Author:"})," Ishaan Gupta"]})}),"\n",(0,s.jsx)(n.h1,{id:"comprehensive-documentation-of-the-multi-sensor-code",children:"Comprehensive Documentation of the Multi-Sensor Code"}),"\n",(0,s.jsx)(n.p,{children:"This document provides a detailed explanation of the multi-sensor code, including its functionality, required libraries, installation instructions, challenges addressed, and considerations for future integration."}),"\n",(0,s.jsx)(n.h2,{id:"schematic-diagram",children:"Schematic Diagram"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Schematic Diagram",src:i(1374).A+"",width:"552",height:"462"})}),"\n",(0,s.jsx)(n.h2,{id:"code-functionality",children:"Code Functionality"}),"\n",(0,s.jsx)(n.p,{children:"The code integrates an Arduino board with various sensors to create a multi-sensory data acquisition system. It captures data from the following sensors:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accelerometer (IMU):"})," Measures acceleration along the X, Y, and Z axes, enabling movement detection and safety monitoring (e.g., identifying high-acceleration events)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Blood Oxygen Sensor (MAX30102):"})," Estimates blood oxygen saturation (SpO2) using pulse oximetry."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Heart Rate Sensor (BLE):"})," Reads heart rate data from a Bluetooth Low Energy (BLE) device, typically a fitness tracker or chest strap."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GPS (TinyGPSPlus):"})," Tracks geographical location using GPS data received through a serial port (Serial1)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"the-code-performs-the-following-key-tasks",children:"The code performs the following key tasks:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initialization:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sets up serial communication (Serial and Serial1) for data output and GPS input."}),"\n",(0,s.jsxs)(n.li,{children:["Initializes the IMU, Blood Oxygen Sensor, BLE, and GPS modules using specific libraries (",(0,s.jsx)(n.code,{children:"Arduino_LSM6DS3"}),", ",(0,s.jsx)(n.code,{children:"ArduinoBLE"}),", ",(0,s.jsx)(n.code,{children:"TinyGPSPlus"}),", ",(0,s.jsx)(n.code,{children:"DFRobot_BloodOxygen_S_I2C"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"Defines constants and variables like thresholds, intervals, and sensor instances."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Continuous Loop:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Accelerometer and Kalman Filter:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Reads accelerometer data at regular intervals (INTERVAL) using ",(0,s.jsx)(n.code,{children:"IMU.readAcceleration()"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Implements a Kalman filter (KalmanFilter) to reduce noise and improve data accuracy in the X, Y, and Z readings."}),"\n",(0,s.jsxs)(n.li,{children:["Calculates total acceleration and determines direction using ",(0,s.jsx)(n.code,{children:"determineDirection()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Prints acceleration, direction, and high-acceleration alerts (",(0,s.jsx)(n.code,{children:"Serial.println()"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"BLE and Blood Oxygen Sensor:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Periodically calls ",(0,s.jsx)(n.code,{children:"discoverAndConnect()"})," to discover and connect to the BLE device (e.g., TICKR 0A5B)."]}),"\n",(0,s.jsxs)(n.li,{children:["Polls for BLE events (",(0,s.jsx)(n.code,{children:"BLE.poll()"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Checks for characteristic value updates within a BLE interval (BLE_INTERVAL). If updated, calls ",(0,s.jsx)(n.code,{children:"printData()"})," to process and print heart rate and SpO2 data."]}),"\n",(0,s.jsxs)(n.li,{children:["Reads SpO2 data from the Blood Oxygen Sensor using ",(0,s.jsx)(n.code,{children:"MAX30102.getHeartbeatSPO2()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"GPS:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Updates GPS data at intervals (GPS_INTERVAL) using ",(0,s.jsx)(n.code,{children:"updateGPS()"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Reads available GPS data from Serial1."}),"\n",(0,s.jsxs)(n.li,{children:["Parses the data using ",(0,s.jsx)(n.code,{children:"TinyGPSPlus.encode()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Checks if a valid location is obtained (",(0,s.jsx)(n.code,{children:"gps.location.isValid()"}),"). If so, calculates distance traveled using the ",(0,s.jsx)(n.code,{children:"haversine()"})," function and prints it (",(0,s.jsx)(n.code,{children:"Serial.println()"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"necessary-libraries-and-installation",children:"Necessary Libraries and Installation"}),"\n",(0,s.jsx)(n.p,{children:"The code relies on several external libraries to interact with the sensors and perform specific tasks. Here's how to install them:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arduino_LSM6DS3:"})," For the LSM6DS3 accelerometer/gyroscope."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the Arduino IDE."}),"\n",(0,s.jsx)(n.li,{children:"Go to Sketch -> Include Library -> Manage Libraries."}),"\n",(0,s.jsx)(n.li,{children:'Search for "Arduino_LSM6DS3" in the search bar.'}),"\n",(0,s.jsx)(n.li,{children:'Click on "Install" for the library.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ArduinoBLE:"})," For Bluetooth Low Energy communication."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Follow the same steps as for Arduino_LSM6DS3, but search for "ArduinoBLE".'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TinyGPSPlus:"})," For parsing GPS data."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Follow the same steps as for Arduino_LSM6DS3, but search for "TinyGPSPlus".'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DFRobot_BloodOxygen_S_I2C:"})," For the MAX30102 blood oxygen sensor."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Download the library from the provided repository."}),"\n",(0,s.jsx)(n.li,{children:"Unzip the downloaded file."}),"\n",(0,s.jsxs)(n.li,{children:["Copy the unzipped folder (usually named DFRobot_BloodOxygen_S_I2C) to your Arduino libraries folder. This is typically located at ",(0,s.jsx)(n.code,{children:"Documents/Arduino/libraries"})," on Windows or consult the Arduino IDE documentation for your specific operating system."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Arduino IDE Screenshot",src:i(71012).A+"",width:"957",height:"782"})}),"\n",(0,s.jsx)(n.h2,{id:"challenges-faced-and-solutions",children:"Challenges Faced and Solutions"}),"\n",(0,s.jsx)(n.p,{children:"The development process encountered a few challenges that were addressed through code modifications and potential hardware considerations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Overlapping Time Intervals:"})," The initial code used the same interval for all sensors, which could lead to missed readings from some sensors. This is resolved by setting different intervals based on sensor requirements:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"5 seconds for accelerometer and SpO2 (less critical for continuous monitoring)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BLE Disconnection due to Prolonged Delays:"})," Delays in processing sensor data, especially from the GPS, could cause the BLE connection to drop. Here are two approaches to address this:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Code Optimization:"})," Review the code and optimize calculations or data processing tasks to minimize delays."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Increase BLE Interval:"})," If optimization is limited, consider increasing the BLE interval (BLE_INTERVAL) to allow more time for other sensor readings. This is a trade-off between BLE data frequency and potential disconnections."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Power Supply Limitations:"})," Supplying enough power for all sensors simultaneously can be challenging. Here are some strategies:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Battery Selection:"})," Use a battery with sufficient capacity to handle the combined sensor power consumption."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Power Management Techniques:"})," Implement power management techniques in the code, such as putting unused sensors in sleep mode to reduce power draw."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"External Power Source:"})," If battery capacity is insufficient, consider using an external power supply."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Synchronization Issues:"})," With multiple sensors collecting data at different intervals, ensuring that the data is synchronized can be difficult. This can be resolved by:\r\n-",(0,s.jsx)(n.strong,{children:"Timestamping Data:"})," Implementing a system where each data reading is timestamped when collected, allowing for proper synchronization during data analysis."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"things-to-keep-in-mind-while-integrating-sensors",children:"Things to Keep in Mind While Integrating Sensors"}),"\n",(0,s.jsx)(n.p,{children:"Here are some crucial aspects to consider when integrating various sensors into your project:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sensor Compatibility:"})," Ensure compatibility between the sensors and the Arduino board in terms of voltage levels, communication protocols (I2C, SPI, etc.), and library support."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sensor Power Requirements:"})," Check the power consumption of each sensor and choose a power supply that can handle the combined load."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sensor Data Rates:"})," Consider the data rates of each sensor and ensure the Arduino can process the data efficiently without overwhelming its resources."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sensor Placement:"})," Proper sensor placement is crucial for accurate data collection. For example, the accelerometer should be securely mounted to capture valid motion data. Refer to the sensor's datasheet for recommended placement guidelines."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Calibration:"})," Some sensors may require calibration to ensure accurate readings. Follow the calibration procedures outlined in the sensor's datasheet."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Fusion:"})," While this code focuses on collecting data from individual sensors, you can explore data fusion techniques to combine information from multiple sensors for a richer understanding of the monitored system."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Baud Rate Mismatch"})," Ensure that all devices using serial communication (like GPS) are set to the correct baud rate."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Conflicts"})," Ensure that integrating the accelerometer code does not interfere with the functions or libraries used by the heart rate and GPS sensors."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Buffer Overflows"})," Serial buffers might overflow if not read frequently enough. Ensure your code is reading serial data as quickly as it is being received."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The code uses the ",(0,s.jsx)(n.code,{children:"haversine()"})," function to calculate distance between GPS coordinates. This function assumes a spherical Earth model, which may introduce slight inaccuracies for very large distances."]}),"\n",(0,s.jsx)(n.li,{children:"The Blood Oxygen Sensor readings (SpO2) obtained from this code are estimates and may not be as accurate as medical-grade pulse oximeters."}),"\n",(0,s.jsx)(n.li,{children:"Consider adding comments throughout the code to explain specific sections and functions, improving code readability and maintainability."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Data Flow Diagram",src:i(97353).A+"",width:"1282",height:"589"})}),"\n",(0,s.jsx)(n.p,{children:"Integrating multiple sensors into a single system offers both challenges and rewards. By addressing specific issues such as overlapping time intervals, BLE disconnections, and power supply management, the final system provides a robust platform for collecting and processing sensor data. This project serves as a valuable lesson in hardware integration, software optimization, and practical application of sensor technology."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},71012:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Arduino IDE Screenshot-07d4aa50c179ae4468d3786f02836636.png"},97353:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Data-Flow_diagram-f9692c3770aa427830850c5fe6240f66.png"},1374:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/schematic diagram-b16c3235ed2a691b51edb02c4ec1cbbd.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);