"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[1676],{6982:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(74848),o=i(28453);const s={sidebar_position:5},a="GPS Code Document",r={id:"project-4/iot/Haversine-gps-document",title:"GPS Code Document",description:"Documentation and Future Guide for Haversine and GPS_Code",source:"@site/docs/project-4/iot/Haversine-gps-document.md",sourceDirName:"project-4/iot",slug:"/project-4/iot/Haversine-gps-document",permalink:"/redback-documentation/docs/project-4/iot/Haversine-gps-document",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/project-4/iot/Haversine-gps-document.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Heart rate initializing documentation",permalink:"/redback-documentation/docs/project-4/iot/documentation -heart-sensor"},next:{title:"IMU (Accelerometer_LSM6D3) Data Collection Process",permalink:"/redback-documentation/docs/project-4/iot/IMU_accelerometer_data_collection_proccess"}},d={},c=[{value:"Haversine Formula",id:"haversine-formula",level:2},{value:"Explanation of the Code",id:"explanation-of-the-code",level:2},{value:"1. Library Inclusions and Object Initialization:",id:"1-library-inclusions-and-object-initialization",level:3},{value:"2. Conversion Function:",id:"2-conversion-function",level:3},{value:"3. Haversine Formula Function:",id:"3-haversine-formula-function",level:3},{value:"4. Setup Function:",id:"4-setup-function",level:3},{value:"5. Loop Function:",id:"5-loop-function",level:3},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"gps-code-document",children:"GPS Code Document"}),"\n",(0,t.jsx)(n.p,{children:"Documentation and Future Guide for Haversine and GPS_Code"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Author:"})," Ishaan Gupta"]})}),"\n",(0,t.jsx)(n.h2,{id:"haversine-formula",children:"Haversine Formula"}),"\n",(0,t.jsx)(n.p,{children:"The Haversine formula is used to calculate the shortest distance between two points on a sphere, given their latitude and longitude coordinates. It's commonly used in navigation and GIS (Geographic Information Systems) applications to compute distances between locations on Earth, where the Earth's surface can be approximated as a sphere."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Haversine Formula",src:i(18089).A+"",width:"559",height:"235"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0394lat"})," is the difference in latitude between the two points (in radians),"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u0394lon"})," is the difference in longitude between the two points (in radians),"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"lat1"})," and ",(0,t.jsx)(n.strong,{children:"lat2"})," are the latitudes of the two points (in radians),"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"R"})," is the radius of the Earth (mean radius = 6,371,000 meters or 6,371 kilometers),"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"a"})," is the square of half the chord length between the points,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"c"})," is the angular distance between those points in radians,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"d"})," is the distance between the two points (in the same units as the radius of the Earth)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Redback-Operations/redback-orion/blob/main/IoT_GPS/Working_gps_code.ino",children:"GitHub: Working GPS Code"})}),"\n",(0,t.jsx)(n.h2,{id:"explanation-of-the-code",children:"Explanation of the Code"}),"\n",(0,t.jsx)(n.h3,{id:"1-library-inclusions-and-object-initialization",children:"1. Library Inclusions and Object Initialization:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TinyGPSPlus gps;"}),": Creates an instance of the TinyGPS++ object for GPS data processing."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"#define EARTH_RADIUS 6371000"}),": Defines the Earth's radius in meters."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-conversion-function",children:"2. Conversion Function:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"double toRadians(double degree)"}),": Converts degrees to radians using the formula:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"radians = degrees \xd7 (\u03c0 / 180)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-haversine-formula-function",children:"3. Haversine Formula Function:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"double haversine(double lat1, double lon1, double lat2, double lon2)"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Converts the latitude and longitude differences from degrees to radians."}),"\n",(0,t.jsx)(n.li,{children:"Computes the haversine of the central angle using the differences."}),"\n",(0,t.jsxs)(n.li,{children:["Calculates the angular distance ",(0,t.jsx)(n.code,{children:"c"})," using ",(0,t.jsx)(n.code,{children:"atan2"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Returns the distance ",(0,t.jsx)(n.code,{children:"d"})," by multiplying ",(0,t.jsx)(n.code,{children:"c"})," with the Earth's radius."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-setup-function",children:"4. Setup Function:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Serial.begin(9600);"}),": Initializes serial communication for debugging."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Serial1.begin(9600);"}),": Initializes serial communication with the GPS module."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-loop-function",children:"5. Loop Function:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reads GPS data from the GPS module."}),"\n",(0,t.jsx)(n.li,{children:"Checks if the GPS data is valid and retrieves the current latitude and longitude."}),"\n",(0,t.jsx)(n.li,{children:"Calculates the distance between the current and previous coordinates every 5 seconds."}),"\n",(0,t.jsx)(n.li,{children:"Prints the previous and current coordinates and the calculated distance to the serial monitor."}),"\n",(0,t.jsx)(n.li,{children:"Updates the previous coordinates and time for the next calculation."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"The Haversine formula is a fundamental tool for calculating distances between two points on the Earth's surface using latitude and longitude. This detailed explanation and the provided Arduino code illustrate how to implement the formula in a practical project, enhancing navigation and GIS applications. By understanding the formula and the code, you can accurately compute distances between geographic locations using Arduino."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},18089:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Haversine-2f8ca5080bf8194e65008d7bba9ad1c1.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);