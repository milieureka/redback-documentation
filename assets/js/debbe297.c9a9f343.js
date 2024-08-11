"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[8935],{38353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(74848),r=n(28453);const o={sidebar_position:4},a="Authenticate features and encryption",s={id:"cybersecurity/research/authenticate-features",title:"Authenticate features and encryption",description:"Research Piece",source:"@site/docs/cybersecurity/research/authenticate-features.md",sourceDirName:"cybersecurity/research",slug:"/cybersecurity/research/authenticate-features",permalink:"/redback-documentation/docs/cybersecurity/research/authenticate-features",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/research/authenticate-features.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Security for Flutter Applications",permalink:"/redback-documentation/docs/cybersecurity/research/flutter-security"},next:{title:"Jenkins and Snyk \u2013 a SAST plugin",permalink:"/redback-documentation/docs/cybersecurity/research/jenkins-and-snyk"}},c={},l=[{value:"Flow chart for mongoDb",id:"flow-chart-for-mongodb",level:2},{value:"TLS encryption:",id:"tls-encryption",level:2},{value:"Encryption at rest:",id:"encryption-at-rest",level:2},{value:"Client-side encryption:",id:"client-side-encryption",level:2},{value:"Rotation of encryption keys:",id:"rotation-of-encryption-keys",level:2},{value:"Authentication in Mongo DB:",id:"authentication-in-mongo-db",level:2},{value:"Summary:",id:"summary",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"authenticate-features-and-encryption",children:"Authenticate features and encryption"}),"\n",(0,i.jsx)(t.p,{children:"Research Piece"}),"\n",(0,i.jsx)(t.h2,{id:"flow-chart-for-mongodb",children:"Flow chart for mongoDb"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Authenticate",src:n(30323).A+"",width:"451",height:"261"})}),"\n",(0,i.jsx)(t.h2,{id:"tls-encryption",children:"TLS encryption:"}),"\n",(0,i.jsx)(t.p,{children:"By creating a set of certificates for the servers, MongoDB Atlas performs encryption in transit from application client to server and throughout intra-cluster interactions. Once TLS enabled clients pass access and authentication controls, MongoDB Atlas uses Let's Encrypt verified certificates to authenticate them."}),"\n",(0,i.jsx)(t.h2,{id:"encryption-at-rest",children:"Encryption at rest:"}),"\n",(0,i.jsx)(t.p,{children:"MongoDB encryption at rest is an Enterprise feature that requires the MongoDB Atlas Enterprise\r\nbinaries. Encryption at rest is a security layer that ensures that written data or storage are only visible once decrypted by a trusted process or application. Every node in your MongoDB Atlas cluster comes with built-in encryption at rest for discs. However, the Wired Tiger storage engine can also enable Encryption at Rest."}),"\n",(0,i.jsx)(t.p,{children:"The WiredTiger storage engine enables the encryption of server data files (collections and indexes) as they are written to disc. This protects your server from a variety of threats. They will not be able to open your data files or backups with another mongod binary to access the data since they do not have the protected certificate key that encrypted the data. At the Operating System level, no other software installed on the server may open the files or intercept the data. Unlike direct disc encryption, which allows the operating system to read the encrypted database. Briefly, only the MongoDB Server has access to an AES-256 master key, which should be kept in a secure location."}),"\n",(0,i.jsx)(t.h2,{id:"client-side-encryption",children:"Client-side encryption:"}),"\n",(0,i.jsx)(t.p,{children:"A feature called MongoDB Client-Side Field Level Encryption was introduced with MongoDB version 4.2. This new framework enables MongoDB Clients like drivers and shell to encrypt and decode fields locally using secure keys stored in a secure repository (KMS). This adds an additional degree of protection by ensuring that sensitive data is never sent over the wire or to database clients who lack the necessary key to decrypt the data. This capability is available to any Atlas cluster running version 4.2 or higher. Field Level Encryption can be done manually or automatically, and we can store our\r\nkeys with any one or more of the following providers:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Amazon web service"}),"\n",(0,i.jsx)(t.li,{children:"Azure key vault"}),"\n",(0,i.jsx)(t.li,{children:"Google cloud platform"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"rotation-of-encryption-keys",children:"Rotation of encryption keys:"}),"\n",(0,i.jsx)(t.p,{children:"A regular key rotation is one of the best practices for handling encryption keys. Because there is a potential that our keys will be compromised at some point, this is a significant consideration for database managers. As a result, rotating them will allow us to prevent the possibility of a compromised key. Built-in guidelines to rotate the appropriate keys depending on the exact provider you're using for MongoDB Atlas encryption at rest and Client-Side Field Level encryption."}),"\n",(0,i.jsx)(t.h2,{id:"authentication-in-mongo-db",children:"Authentication in Mongo DB:"}),"\n",(0,i.jsx)(t.p,{children:"The default behavior is without authentication so you will have to connect to the server using the mongo shell, then there you create a user admin, from there you create mongod configuration file to enable authenticate feature. Then connect to server and authenticate as the user admin and then after doing that you can finally create additional users as per need. A link to a tutorial is given below."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://medium.com/mongoaudit/how-to-enable-authentication-on-mongodb-b9e8a924efac",children:"How to Enable Authentication on MongoDB | by Stampery Inc. | Mongoaudit \u2014 the mongoaudit guides | Medium"})}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary:"}),"\n",(0,i.jsx)(t.p,{children:"MongoDB is a general-purpose corporate database with numerous levels of industry-standard\r\nencryption to meet your individual data security requirements. MongoDB Atlas makes it much easier to use and deploy those data security capabilities because they're built-in and ready to use in minutes or less. Through the research report we gathered the encryption and authentication for user accounts and data security."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"TLS encryption"}),"\n",(0,i.jsx)(t.li,{children:"Encryption at rest"}),"\n",(0,i.jsx)(t.li,{children:"Client-rest encryption"}),"\n",(0,i.jsx)(t.li,{children:"Rotation of encryption keys"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Each method is discussed in the report to showcase key features, recommendations or limitations for the final decision. The report concludes with the flowchart of all the encryption methods for th field data. Moreover, demonstrates the procedures to enable authentication and encryption of all the user data and company data."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},30323:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/authenticate-tls-a8768fa88080070af13d031c57630b1e.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);