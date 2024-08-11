"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[9889],{63587:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var i=o(74848),r=o(28453);const n={sidebar_position:3},a="Security for Flutter Applications",c={id:"cybersecurity/research/flutter-security",title:"Security for Flutter Applications",description:"Research piece",source:"@site/docs/cybersecurity/research/flutter-security.md",sourceDirName:"cybersecurity/research",slug:"/cybersecurity/research/flutter-security",permalink:"/redback-documentation/docs/cybersecurity/research/flutter-security",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/research/flutter-security.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SIEMs and Google Chronicle",permalink:"/redback-documentation/docs/cybersecurity/research/siems-google-chronical"},next:{title:"Authenticate features and encryption",permalink:"/redback-documentation/docs/cybersecurity/research/authenticate-features"}},s={},l=[{value:"Code Obfuscation",id:"code-obfuscation",level:2},{value:"Rooting or Jailbreaking protection",id:"rooting-or-jailbreaking-protection",level:2},{value:"How to Secure flutter application code:",id:"how-to-secure-flutter-application-code",level:2},{value:"Note",id:"note",level:2},{value:"References",id:"references",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"security-for-flutter-applications",children:"Security for Flutter Applications"}),"\n",(0,i.jsx)(t.p,{children:"Research piece"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Author:"})," Adam Josevski"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"code-obfuscation",children:"Code Obfuscation"}),"\n",(0,i.jsx)(t.p,{children:"Code obfuscation happens when you alter the app\u2019s binary using encryption. Code Obfuscation hides sensitive information shown in the code and means the attacker cannot reverse engineer the mobile application. If the attacker is able to reverse engineer redback operations mobile apps, the attacker can see sensitive information such as API keys, classes, function names, and all strings values [1]. Code Obfuscation can be used on Android, iOS, and MacOS and to secure flutter mobile apps using obfuscation. Implementing code obfuscation can be found within Flutter documentation [2]."}),"\n",(0,i.jsx)(t.h2,{id:"rooting-or-jailbreaking-protection",children:"Rooting or Jailbreaking protection"}),"\n",(0,i.jsxs)(t.p,{children:["Rooting android devices and jailbreaking or iOS devices is a serious security issue mobile developers must be aware of and must detect this issue to act accordingly. Rooting and jailbreaking devices will allow the attacker to implement malware in the application to export client\u2019s critical data [1].\r\nAn extensive guide on how to implement rooting and jailbreaking protection in mobile development applications can be followed here: ",(0,i.jsx)(t.a,{href:"https://pub.dev/packages/flutter_jailbreak_detection",children:"https://pub.dev/packages/flutter_jailbreak_detection"}),". This guide also states that there is a plugin called RootBeer that detects vulnerable mobile applications that can be rooted by attacker. In addition, another plugin called DTTJailbreakDetection is used to check whether iOS devices can be jail broken."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-secure-flutter-application-code",children:"How to Secure flutter application code:"}),"\n",(0,i.jsxs)(t.p,{children:["We also want to restrict network traffic to make sure redback operations domain is not communicating with any other domains. From the GitHub links provided by redback operation I can see the developers have not implemented ways to restrict network traffic for iOS and android. Therefore, I recommend following ",(0,i.jsx)(t.a,{href:"https://www.codeplayon.com/2021/12/how-to-secure-flutter-application-code/",children:"https://www.codeplayon.com/2021/12/how-to-secure-flutter-application-code/"})," . This will make the flutter applications secure and restrict malicious activity on the network. I will also highly recommend using SSL or TLS encryption, this will protect data transferred between the mobile application and the relevant server [1]."]}),"\n",(0,i.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,i.jsx)(t.p,{children:"Please note, that I will create a presentation to elaborate further, and I will recommend further changes. This document is to show the mobile developers of Redback Operations on how to implement critical security measures in flutter applications."}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.p,{children:["[1] AB. Satyaprakash (2022, February, 2). 5 steps to secure your next Flutter app [Website]. Available: ",(0,i.jsx)(t.a,{href:"https://medium.com/nerd-for-tech/5-steps-to-secure-your-next-flutter-app-549def2428b3",children:"https://medium.com/nerd-for-tech/5-steps-to-secure-your-next-flutter-app-549def2428b3"})]}),"\n",(0,i.jsxs)(t.p,{children:["[2] Flutter (n.d). Obfuscating Dart code [Website]. Available: ",(0,i.jsx)(t.a,{href:"https://docs.flutter.dev/deployment/obfuscate",children:"https://docs.flutter.dev/deployment/obfuscate"})]}),"\n",(0,i.jsxs)(t.p,{children:["[3] appmire.be (n.d). flutter_jailbreak_detection 1.8.0 [Website]. Available: flutter_jailbreak_detection: ",(0,i.jsx)(t.a,{href:"https://pub.dev/packages/flutter_jailbreak_detection",children:"https://pub.dev/packages/flutter_jailbreak_detection"})]}),"\n",(0,i.jsxs)(t.p,{children:["[4] Codeplayon (2021, December. 2). How to secure flutter application code [Website]. Available: ",(0,i.jsx)(t.a,{href:"https://www.codeplayon.com/2021/12/how-to-secure-flutter-application-code/",children:"https://www.codeplayon.com/2021/12/how-to-secure-flutter-application-code/"})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>c});var i=o(96540);const r={},n=i.createContext(r);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);