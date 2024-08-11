"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[8441],{48535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(74848),r=t(28453);const s={sidebar_position:1},o="Github Org Guide",a={id:"onboarding/github/github-org-guide",title:"Github Org Guide",description:"Redback GitHub structure",source:"@site/docs/onboarding/github/github-org-guide.md",sourceDirName:"onboarding/github",slug:"/onboarding/github/github-org-guide",permalink:"/redback-documentation/docs/onboarding/github/github-org-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/onboarding/github/github-org-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Github Guides",permalink:"/redback-documentation/docs/category/github-guides"},next:{title:"Approvers Guide",permalink:"/redback-documentation/docs/onboarding/github/approvers-guide"}},l={},d=[{value:"Rationale",id:"rationale",level:2},{value:"Benefits - why are we using an org?",id:"benefits---why-are-we-using-an-org",level:3},{value:"Guiding Principles",id:"guiding-principles",level:3},{value:"Key Terms",id:"key-terms",level:2},{value:"How-to, the short version: Repository health checklist",id:"how-to-the-short-version-repository-health-checklist",level:2},{value:"How-to, the long version: Creating a new repository or checking an existing one",id:"how-to-the-long-version-creating-a-new-repository-or-checking-an-existing-one",level:2},{value:"Prerequities",id:"prerequities",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"General Settings",id:"general-settings",level:3},{value:"Collaborators and teams",id:"collaborators-and-teams",level:3},{value:"Branch Protection Rules and Code Owners",id:"branch-protection-rules-and-code-owners",level:3},{value:"Readme File",id:"readme-file",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"github-org-guide",children:"Github Org Guide"}),"\n",(0,i.jsx)(n.p,{children:"Redback GitHub structure"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Document Creation:"})," 9 March, 2024. ",(0,i.jsx)(n.strong,{children:"Last Edited:"})," 9 March, 2024. ",(0,i.jsx)(n.strong,{children:"Authors:"})," Leesa Ward."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"rationale",children:"Rationale"}),"\n",(0,i.jsx)(n.h3,{id:"benefits---why-are-we-using-an-org",children:"Benefits - why are we using an org?"}),"\n",(0,i.jsx)(n.p,{children:"Using a GitHub Organisation allows us to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Have multiple people create and manage repositories in a central location (not in personal accounts), allowing\r\nRedback to have separate repositories for each application or other codebase being developed without the tutor(s)\r\nmanaging the GitHub account having to do this or work being scattered across students\u2019 personal accounts."}),"\n",(0,i.jsx)(n.li,{children:"Through having multiple repositories, keep code appropriately separated so that students only download what\r\nthey want to work on to their machines (not huge repositories full of work they\u2019ll never touch), and can just look\r\nat pull requests and issues for what they\u2019re working on or are interested in."}),"\n",(0,i.jsx)(n.li,{children:"Easily archive repositories at the beginning or end of a trimester if work will not be continuing using that\r\nrepository, making it clear which codebases are currently active and should be used."}),"\n",(0,i.jsx)(n.li,{children:"Maintain dependencies more easily because students can be confident that any changes will only affect their\r\nproject, as well as not needlessly maintaining dependencies for sub-folders containing applications that aren\u2019t\r\nbeing worked on anymore."}),"\n",(0,i.jsx)(n.li,{children:"Onboard students more easily because they are able to locate the purpose-built repository they want to work on\r\nand (quality documentation assumed) clone and run it with minimal guidance and no confusion about where the\r\ncurrent and correct code is for their project and which instructions are relevant to them."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"guiding-principles",children:"Guiding Principles"}),"\n",(0,i.jsx)(n.p,{children:"This rationale and the following guidelines are based on the principles of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensuring our projects closely resemble how things are done in the industry."}),"\n",(0,i.jsx)(n.li,{children:"Enabling students to onboard as easily as possible."}),"\n",(0,i.jsx)(n.li,{children:"Empowering students to contribute and take ownership of their capstone project work."}),"\n",(0,i.jsx)(n.li,{children:"Facilitating easy handover and project continuity between trimesters."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"key-terms",children:"Key Terms"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Repository:"})," A Git repository is a central location for storing, managing, and tracking changes in files and directories\r\nfor code-based projects. In some contexts, you may hear or see \u2018repository\u2019 and \u2018project\u2019 used interchangeably because\r\na single project may have a single repository for its code. If a repository contains the code for a web app, mobile app,\r\ndata manipulation library, etc that is being developed by Redback, terms like \u2018app\u2019 or \u2018library\u2019 may also be\r\ninterchangeable (e.g., \u2018Go and clone the app from GitHub\u2019)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Project:"})," Redback Operations has a handful of projects running at any one time, and some projects may involve\r\nworking on more than one repository. It is strongly encouraged to be mindful about when it is appropriate to create a\r\nnew repository, striking a balance between: forking or branching from an existing one so that we don\u2019t end up with\r\nneedlessly divergent work and confusing amounts of repositories, and keeping codebases usefully siloed and not\r\nending up with a single repository that tries to do to many things"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Member:"})," Students and tutors can be added as organisation members. It is important to note that members can create\r\nrepositories within the organisation and by default are the administrators of the repositories they create."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Collaborator:"})," Students can be added to individual repositories as collaborators. This enables them to be given\r\nappropriate permissions for the work they will be doing without the ability to create or manage repositories also\r\nbeing given by default."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Team:"})," Each Redback project has a Team within the GitHub organisation that contains tutors, project leaders, and\r\nexperienced students who will be managing repos, approving pull requests, etc. Teams can also be @ mentioned in\r\nissues, pull requests, and comments to notify those staff and students that their attention is required. Assigning\r\nrepositories to a Team also simplifies managing repository permissions across trimesters \u2013 people only need to be\r\nadded to or removed from a team to have access to that Team\u2019s repositories granted or revoked. There is also a Tutors\r\nteam that should be added to every new repository with admin permissions."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-the-short-version-repository-health-checklist",children:"How-to, the short version: Repository health checklist"}),"\n",(0,i.jsx)(n.p,{children:"If you\u2019re already familiar with GitHub and the org concepts outlined above, here\u2019s the short version of the guidelines\r\nyou should ensure your Redback repository follows."}),"\n",(0,i.jsx)(n.p,{children:"If you are a leader taking on an existing repository, you should also check it at the start of the trimester to ensure these\r\nguidelines are followed."}),"\n",(0,i.jsx)(n.p,{children:"More information about each setting is detailed in the \u2018Long version\u2019 section starting on the next page."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Name"})}),(0,i.jsxs)(n.td,{children:["\u2713 Clearly but concisely says what the repo is for ",(0,i.jsx)("br",{})," \u2713 Does not include information that could change in future trimesters",(0,i.jsx)("sup",{children:"1"})," ",(0,i.jsx)("br",{})," \u2713 Does not include trimester number or year",(0,i.jsx)("sup",{children:"1"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Description"})}),(0,i.jsx)(n.td,{children:"\u2713 Is filled in with a concise description that enables new students to quickly understand which project(s), or part of a project, the repository is for"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Visibility"})}),(0,i.jsxs)(n.td,{children:["\u2713 Private for cyber security projects ",(0,i.jsx)("br",{})," \u2713 Public for all others"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Licence"})}),(0,i.jsxs)(n.td,{children:["\u2713 MIT for all open source (i.e., non-Cyber Security) projects",(0,i.jsx)("sup",{children:"2"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Permissions"})}),(0,i.jsxs)(n.td,{children:["\u2713 Tutors team has admin role ",(0,i.jsx)("br",{})," \u2713 Project team has write role ",(0,i.jsx)("br",{})," \u2713 Contributing students have write role"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Branch protection"})}),(0,i.jsxs)(n.td,{children:["\u2713 Main branch cannot be directly pushed to ",(0,i.jsx)("br",{})," \u2713 Pull request approvals are required"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"CODEOWNERS file"})}),(0,i.jsx)(n.td,{children:"\u2713 File exists in the root of the repository and designates the Tutors and project teams as the global code owners"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"README file"})}),(0,i.jsxs)(n.td,{children:["\u2713 Contains description of the project ",(0,i.jsx)("br",{})," \u2713 Contains prerequisites for running the code ",(0,i.jsx)("br",{})," \u2713 Contains clear instructions to enable students to independently set up and start working on the codebase"]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("sup",{children:"1"}),"To encourage continuity of projects across trimesters, generic non-time-specific names are encouraged. Using internal\r\ndesignations like \u2018Project 4\u2019 is also discouraged because the projects might be consolidated or split up in future trimesters.",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)("sup",{children:"2"}),"Unless there is a reason to use a different licence, such as a project dependency having licence terms that require the work using it\r\nto have another licence."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-the-long-version-creating-a-new-repository-or-checking-an-existing-one",children:"How-to, the long version: Creating a new repository or checking an existing one"}),"\n",(0,i.jsx)(n.p,{children:"If you have an existing repository that you would like to check over or update, skip ahead to the \u2018General Settings\u2019 section below."}),"\n",(0,i.jsx)(n.h3,{id:"prerequities",children:"Prerequities"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["You have at least the ",(0,i.jsx)(n.strong,{children:"Member"})," role in the GitHub Org."]}),"\n",(0,i.jsxs)(n.li,{children:["Consensus has been reached within the ",(0,i.jsx)(n.strong,{children:"Project"})," team (at university level, not GitHub level) and with project leaders that a new repository is needed."]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.strong,{children:"GitHub Team"})," exists for the Redback ",(0,i.jsx)(n.strong,{children:"Project"})," this repository will be for."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/Redback-Operations/repositories",children:"Repositories tab on the org page"})," and click the \u2018New Repository\u2019 button."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Getting Started",src:t(36680).A+"",width:"1824",height:"319"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name and description:"})," Choose a short but clear name that makes it obvious which project this repo is for and\r\nwhat code will be in it (for example, crowd-monitoring-web-app) and accompany it with a concise description."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Avoid using: ",(0,i.jsx)("br",{})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Things that may change in future trimesters such as the capstone project number (e.g., \u2018crowd-monitoring-web-app\u2019 not \u2018project-4\u2019)"}),"\n",(0,i.jsx)(n.li,{children:"The trimester or year, unless you have reason to believe your repository won\u2019t be used beyond the current trimester."}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"Put yourself in the shoes of a new student onboarding into Redback for their first capstone trimester. Would you be able quickly tell that this is the repo you will be working on?"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Visibility:"})," For Cyber Security projects, choose Private. For all other projects, choose Public."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Tick \u2018Add a readme file\u2019 and choose a gitignore template if you see fit."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Choose a licence:"})," All Redback projects except Cyber Security are open source, so our default licence is ",(0,i.jsx)(n.strong,{children:"MIT."})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Some third-party libraries have licence terms that may affect which licence you can use. For example, licence terms dictate that plugins developed for WordPress must be GPL-compatible."})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Click \u2018Create Repository\u2019 in the bottom right. You will be taken to your new repo."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"general-settings",children:"General Settings"}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:"Click the 'Settings' tab."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"General Settings",src:t(12376).A+"",width:"1752",height:"302"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Untick any features you don\u2019t intend to use, such as Wikis. You can always turn them back on later if needed, but it can be good to keep things simple at first"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pull request settings:"})," Choose the settings your team prefers here. Don\u2019t worry, you can always change these later if you find what you choose now doesn\u2019t work for your team."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Squash merging:"})," can be a good default choice because if someone has many commits to their pull request (which is very common), \u2018squash and merge\u2019 commits them all to the main branch in one clean commit. This can be much easier for people navigating the commit history as well as making it far easier to revert a change if necessary than if a merge creates multiple commits."]}),"\n",(0,i.jsxs)(n.li,{children:["Turning on \u2018",(0,i.jsx)(n.strong,{children:"Always suggest updating pull request branches"}),"\u2019 can be helpful for ensuring students keep their PR branches up-to-date with the main branch and resolve any conflicts incrementally as they go, rather than ending up withn a lot of conflicts to resolve because the main branch as diverged far from theirs."]}),"\n",(0,i.jsxs)(n.li,{children:["Turning on \u2018",(0,i.jsx)(n.strong,{children:"Allow auto-merge"}),"\u2019 can be helpful as it means you don\u2019t have to wait for students to manually merge their PR once it\u2019s approved, improving efficiency."]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"Settings in this screen are autosaved."}),"\n",(0,i.jsx)(n.h3,{id:"collaborators-and-teams",children:"Collaborators and teams"}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Still in the Settings area, click \u2018Collaborators and Teams\u2019 in the sidebar."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Next to \u2018Manage access\u2019, click \u2018Add teams.\u2019 Search for and select the Tutors team and the other relevant project team(s)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the list, update the Tutors group role to \u2018Admin\u2019 and the project team\u2019s to Write."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Manage Access",src:t(97362).A+"",width:"1324",height:"746"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ol,{start:"13",children:["\n",(0,i.jsxs)(n.li,{children:["This is also where you individually add other students who will be working on the project, as Collaborators. They will need the ",(0,i.jsx)(n.strong,{children:"Write"})," permission so they can create branches."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Ensure branch protection rules are in place (instructions below) before adding students with Write permission, to ensure they can\u2019t write directly to the main branch."})}),"\n",(0,i.jsx)(n.h3,{id:"branch-protection-rules-and-code-owners",children:"Branch Protection Rules and Code Owners"}),"\n",(0,i.jsxs)(n.ol,{start:"14",children:["\n",(0,i.jsx)(n.li,{children:"In the sidebar, click \u2018Branches\u2019 and then the \u2018Add branch protection rule\u2019 button."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Branch Protection",src:t(28568).A+"",width:"1718",height:"507"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ol,{start:"15",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the \u2018branch name pattern\u2019 field, enter \u2018main\u2019 (or the name of your primary branch if different)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Tick \u2018Require a pull request before merging\u2019 and \u2018require approvals\u2019 followed by the settings appropriate for your project."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2018Dismiss stale pull request approvals when new commits are pushed\u2019 is highly recommended. This prevents anyone from adding new code after a PR is approved, and merging that new code without it being re-reviewed."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enabling \u2018Require review from code owners\u2019 is kindly requested by the Redback mentor/tutor team. This is simply to ensure a pair of experienced eyes looks at each pull request to catch mistakes such as committing credentials, node_modules folders, Python precompile files, MacOS .DS_Store files, etc."}),"\n"]}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{start:"17",children:["\n",(0,i.jsxs)(n.li,{children:["If you turned on \u2018require review from code owners\u2019, you now need to specify who those owners are through a ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",children:"CODEOWNERS file"}),". Navigate to the main page of your repository and click \u2018add file.\u2019"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Code Owners",src:t(3765).A+"",width:"1800",height:"572"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Name the file CODEOWNERS and add global owners using the * symbol and @team-name. For example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Code Owners",src:t(19708).A+"",width:"1902",height:"330"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"When done, click \u2018commit changes\u2019 in the top right and follow the prompts. If you have any errors such as a misspelled team name or incorrect permissions for that team, an alert will be displayed."}),"\n",(0,i.jsx)(n.h3,{id:"readme-file",children:"Readme File"}),"\n",(0,i.jsxs)(n.ol,{start:"18",children:["\n",(0,i.jsxs)(n.li,{children:["Either through the GitHub web interface or after cloning the repo to your machine, enter more information in the\r\nREADME file:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A clear description of what this repository is for. It should be concise, but this is the place to provide a bit more detail than the brief description entered when you created the repo."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Instructions on how to set up the repo and start working with it. Include prerequisites (e.g., for a JavaScript project, having Node installed) and step-by-step instructions that ensure the majority of students will be able to independently set up and run the project locally."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You may not have all this information ready yet for a new repository that doesn\u2019t contain any code yet, so simply ensure you return to this step when you do."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28568:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/branch-protection-f68aa000883cb5a9009bca1e5cfa3417.png"},19708:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/codeowners-2-9991fd3834696433c1268016d6e1db54.png"},3765:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/codeowners-044da8b75a31350a59e3ad18797fa3ae.png"},12376:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/general-settings-5aa07d4458f97273cd04231be179ea7a.png"},36680:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/getting-started-bd3ce71580608bd7689bc1d42dd31a26.jpg"},97362:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/teams-f52e62672108082895b12f7d6f1d9f18.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);