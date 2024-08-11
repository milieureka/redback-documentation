"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[3678],{4788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(74848),r=n(28453);const i={sidebar_position:12},a="Guide to Exporting Sensor Data from Serial Monitor to CSV",s={id:"project-4/iot/Export_Sensor_Data_to_CSV_Guide",title:"Guide to Exporting Sensor Data from Serial Monitor to CSV",description:"Author: Sohil Nagpal",source:"@site/docs/project-4/iot/Export_Sensor_Data_to_CSV_Guide.md",sourceDirName:"project-4/iot",slug:"/project-4/iot/Export_Sensor_Data_to_CSV_Guide",permalink:"/redback-documentation/docs/project-4/iot/Export_Sensor_Data_to_CSV_Guide",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/project-4/iot/Export_Sensor_Data_to_CSV_Guide.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Understanding Oximeter Sensor Technology",permalink:"/redback-documentation/docs/project-4/iot/Oximeter_Sensor_Technology_Documentation"},next:{title:"Setup Guide Accelerometer Sensor",permalink:"/redback-documentation/docs/project-4/iot/setup-accelerometer"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Arduino Setup",id:"arduino-setup",level:2},{value:"Sensor Code",id:"sensor-code",level:3},{value:"Python Script for Data Collection",id:"python-script-for-data-collection",level:2},{value:"Setup and Execution",id:"setup-and-execution",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"guide-to-exporting-sensor-data-from-serial-monitor-to-csv",children:"Guide to Exporting Sensor Data from Serial Monitor to CSV"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Author:"})," Sohil Nagpal"]})}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"This guide provides step-by-step instructions on how to collect data from the MAX30102 sensor using an Arduino and export this data to a CSV file through the serial monitor. This process is essential for further analysis and visualization of the sensor data."}),"\n",(0,o.jsx)(t.h2,{id:"arduino-setup",children:"Arduino Setup"}),"\n",(0,o.jsx)(t.h3,{id:"sensor-code",children:"Sensor Code"}),"\n",(0,o.jsx)(t.p,{children:"Below is the Arduino code required to initialize the MAX30102 sensor and send its data (heart rate and oxygen saturation) to the serial monitor."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:'#include "DFRobot_BloodOxygen_S.h"\r\n\r\n// Define the I2C address for the MAX30102 sensor\r\n#define I2C_ADDRESS 0x57\r\n\r\n// Create an instance of the DFRobot_BloodOxygen_S_I2C class for I2C communication\r\nDFRobot_BloodOxygen_S_I2C MAX30102(&Wire, I2C_ADDRESS);\r\n\r\nvoid setup() {\r\n  // Initialize serial communication at a baud rate of 115200\r\n  Serial.begin(115200);\r\n\r\n  // Attempt to initialize the MAX30102 sensor\r\n  while (false == MAX30102.begin()) {\r\n    Serial.println("init fail!");\r\n    delay(1000);\r\n  }\r\n\r\n  Serial.println("init success!");\r\n  Serial.println("start measuring...");\r\n  MAX30102.sensorStartCollect();\r\n}\r\n\r\nvoid loop() {\r\n  // Retrieve the heartbeat and SPO2 data from the sensor\r\n  MAX30102.getHeartbeatSPO2();\r\n  \r\n  // Print the SPO2 value to the serial monitor\r\n  Serial.print("SPO2 is : ");\r\n  Serial.print(MAX30102._sHeartbeatSPO2.SPO2);\r\n  Serial.println("%");\r\n\r\n  // The sensor updates the data every 4 seconds, so delay for 4 seconds before the next read\r\n  delay(4000);\r\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"python-script-for-data-collection",children:"Python Script for Data Collection"}),"\n",(0,o.jsx)(t.h3,{id:"setup-and-execution",children:"Setup and Execution"}),"\n",(0,o.jsx)(t.p,{children:"Here's a Python script that sets up a serial connection to read the data from the serial port and saves it to a CSV file for later analysis."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'# Save this as collect_data.py\r\n\r\nimport serial\r\nimport time\r\n\r\n# Setup your serial port and baud rate. Replace \'/dev/tty.usbmodemXXXX\' with your actual device port\r\nserial_port = \'/dev/tty.usbmodemXXXX\'\r\nbaud_rate = 115200\r\n\r\ntry:\r\n    ser = serial.Serial(serial_port, baud_rate)\r\n    time.sleep(2)  # Allow time for serial connection to initialize\r\n    print("Connected to Arduino. Collecting data...")\r\n\r\n    with open("output.csv", "w") as file:\r\n        while True:\r\n            data = ser.readline().decode().strip()  # read data from serial and decode it\r\n            file.write(data + "\\n")  # write data to CSV file\r\n            print(data)  # print data to console\r\n\r\nexcept serial.SerialException:\r\n    print(f"Failed to connect on {serial_port}")\r\nexcept KeyboardInterrupt:\r\n    print("Interrupted by user, stopping data collection.")\r\nfinally:\r\n    ser.close()  # Ensure serial connection is closed on exit\n'})}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"This guide provides a comprehensive method to capture sensor data from the MAX30102 and export it to a CSV file using Arduino and Python. This setup is ideal for those who need to collect and analyze physiological data for health monitoring or research purposes."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);