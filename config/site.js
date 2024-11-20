import {  Home, User,BriefcaseBusiness, Lightbulb,GraduationCap,FileQuestion, PhoneCall, Rss} from "lucide-react"

export const siteConfig = {
    personalData:{
        name:"Yogesh Singh",
        profile:"/",
        designation:"Software Developer",
        description:"My name is YOGESH SINGH. I am a professional Frontend Developer. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love MERN stacks of web development. My core skill is based on JavaScript and Python. I love to do most of the things using JavaScript.",
        skill:["Javascript","Python","NodeJs","ReactJs","NextJs","Zustand","ExpressJs","MongoDB","Docker",'GraphQL'],
        workItems : ['JavaScript', 'TypeScript', 'HTML', 'CSS','Tailwind', 'ReactJS','NextJS','Material UI','Zustand','GraphQL','NodeJS','Express', 'MongoDB', 'GitHub', 'AWS', 'IIS Server'],
        funItems :['Tailwind', 'Python', 'Django', 'Figma','Convex DB', 'FastAPI'],
        typerData:["Software Developer", "React JS Developer", "Next JS Developer","Freelancer"],
        skillDes:"I possess a diverse skill set spanning various technologies crucial for modern software development. With expertise in  responsive web design with Tailwind and Bootstrap CSS. Proficient in Django and learing ExpressJS , I craft secure and scalable web applications. Docker expertise enables streamlined application deployment. Git proficiency ensures seamless collaboration and version control. Mastery of HTML, CSS, and JavaScript allows me to create better user experiences. MongoDB facilitates efficient data management. Next.js and React empower me to build dynamic and interactive web applications. Strapi enables efficient content management, while Tailwind CSS provides rapid styling solutions. Finally, TypeScript enhances code quality and maintainability, ensuring robust software solutions.",
        email:"singhyogesh2104@gmail.com",
        phone:"+91 8850281705",
        address:"Thane, Maharashtra India 400604",
        github:"https://github.com/yogesh2104/abt.yogesh",
        linkedIn: 'https://www.linkedin.com/in/abt-yogesh',
        instagram:"https://instagram.com/im.yogesh_?igsh=ZWw2ZGp6em45aW54",
        twitter: '',
        stackOverflow: '',
        resume: "", //google drive link
        aboutMe:`
        I'm Yogesh Singh on the web. I'am a 25 y/o belonging to the Homo sapiens 🤣, a brother, a son, a friend, a self taugh web developer 
        
        and programmer.I have completed MCA(Master of Computer Application). I had already started programming back when I was in Second year 
       
        of BSc because first year pass in sports😁. I started web development mostly in frontend development at that time, I used only HTML 
        
        and CSS and simple javascript. If you want to know more about which programming I know they are - Python(❤️), Javascript and framework 
        
        - ReactJs,NextJs,Tailwind CSS, "MERN Stack(Learning)". Things I do other than dev and programming. Apart from that, I enjoy playing cricket (🏏). 
        
        Touching grass is important. Sometimes listening soft music and seeing clouds passing 😳. I also play mobile games like BattleRoyal game.
        
        Apart from this, I don't have much to do other than overthinking and staring at my phone screen.I like making friends (be it online or irl 
        
        though I'm somewhat introverted!). So, in case you want to talk about anything leave messages. I'll get back to you once I'm active. That's pretty much everything about me.`
      
    },
    educations: [
      {
        id: 1,
        year: "2020-2024",
        title:"Master of Computer Applications (MCA)",
        school:"Noida Institute Of Engineering And Technology,Greater Noida",
        location:"UP. Greater Noida",
        field:"Computer Application"
      },
      {
        id: 2,
        year:"2017 - 2020",
        title:"Bachelor of Science (B.Sc IT)",
        school:"Anand Vishwa Gurukul Sr. Night College Thane West Maharashtr",
        location:"Thane, Maharashtra",
        field:"Information Technology"
      },
      {
        id: 3,
        year: "2015 - 2017",
        title:"Higher Secondary Certificate(HSC)",
        school:"Gaynodya Vidya Mandir Junior College Thane(W),Maharashtra",
        location:"Thane, Maharashtra",
        field:"Science"
      },
      {
        id: 4,
        year: "2014 - 2015",
        title:"Secondary School Certificate(SSC)",
        school:"Gaynodya Vidya Mandir Junior College Thane(W),Maharashtra",
        location:"Thane, Maharashtra",
        field:"Regular"
      },
    ],
    experiences: [
      {
        id: 1,
        title: "Frontend Developer",
        company: "Weingenious Technocrats Private Ltd.",
        duration: "(Nov 2022 - Present)",
        location:"Surat",
        project:[
          {
            name:"Time Tracking Software(SaaS) Product(Frontend)",
            keyPoint:[
              "Developed a time-tracking and employee-monitoring SaaS product for companies and remote teams using NextJS, Material UI, GraphQL, and Redux Toolkit.",
              "Key features included time tracking with screenshots, attendance and productivity, task management, and online reports and statistics."
            ]
          },
          {
            name:"E-commerce Website for Diamond Selling",
            keyPoint:[
              "Developed an e-commerce website for diamond selling using Next.js, REST API, and Zustand.",
              "Created both the customer-facing website and the admin panel to manage products, orders, and vendors efficiently. Integrate various vendor APIs to enhance the website functionality."
            ]
          },
          {
            name:"Diamond Image Renderer Full-Stack Project",
            keyPoint:[
              "Developed a Diamond Image Renderer that displays diamond images using third-party data, customized based on vendor requirements, within an iframe on their portal using Express.js, Node.js, MongoDB, AWS S3.",
              "Implemented a feature allowing vendors to upload an Excel file containing the S3 folder name and additional data, which is then rendered in the iframe alongside the diamond images"
            ]
          }
        ],
        keyPoint:[] 
      },
      {
        id: 2,
        title: 'Salesforce developer Intern',
        company: "Cloud Analogy Private Ltd.",
        duration: "(Feb 2022 - April 2022)",
        location:"Noida",
        project:[],
        keyPoint:[
          "Worked on various Salesforce modules, including Sales Cloud, and Custom Applications",
          "Gained hands-on experience with Apex, Visualforce, and Lightning Components."
        ] // if you do not have project then add key-Point or empty array and vice versa 
      },
    ],
    projectData: [
      {
        name: "Noter",
        title: "Notion clone.",
        results: [
          { title: "Noter serves as the collaborative workspace." },
          { title: "Where enhanced and more efficient work takes place." },
        ],
        link: "https://noter-steel.vercel.app/",
        code:"https://github.com/yogesh2104/noter",
        image: '/project/noter.png',
        tools: ['NextJs', 'ConvexDB', 'Clerk Auth'],
        role: 'Full Stack Developer',
        content: () => {
          return (
            <>
              <div>
                <p>Tech Stack : Nextjs</p>
                <p>Database : Convex</p>
                <p>Authentication : Clerk</p>
                <p>CSS: Tailwind CSS</p>
              </div>
              <p>
                Noter serves as the collaborative workspace where enhanced and more efficient work takes place.
                To build this project I have to use NextJs with edge runtime environment and for authentication use Clerk(for user-management) and database I have Convex(this is backend-as-a-service.) and hosted on vercel.
              </p>
            </>
          );
        },
      },
      {
        name: "Eldora UI",
        title: "Re-Usable Components",
        results: [
          { title: "Actively contribute in Eldora UI" },
          { title: "This is a collection of re-usable components." },
          { title: "You can copy and paste into your web apps." },
        ],
        link: "www.eldoraui.site",
        code: 'https://github.com/yogesh2104/eldoraui',
        image: '/project/eldoraui.png',
        tools: [], // top five 
        role: 'Open Source Project Mantainer',
        content: () => {
          return (
            <>
            <p>
              Eldora UI is a collection of re-usable components that you can copy and paste into your web apps. It primarily features components, blocks, and templates geared towards creating landing pages and user-facing marketing materials.
            </p>
            </>
          );
        },
  
      },
      {
        name: "PromptForAi",
        title: "Discover & Share AI Prompts.",
        results: [
          { title: "Discover AI Prompt and Share AI" },
          { title: "Create new prompt" },
          { title: "Also you can Search other people prompt" },
        ],
        link: "https://prompt-for-ai.vercel.app/",
        image: '/project/promtForAi.png',
        tools: ['NextJs', 'MongoDB', 'NextAuth'],
        role: 'Full Stack Developer',
        code: 'https://github.com/yogesh2104/promptForAI',
        content: () => {
          return (
            <p>
              PromptForAi Is the place you can Discover AI Prompt and Share AI Prompts. You can create new prompt and you can either share or save as draft. Also you can Search other people prompt. To build this project I have to use NextJs with edge runtime environment and for authentication use NextAuth(only login with Google provider) and database I have MongoDB Atlas and hosted on vercel.
            </p>
          );
        },
      },
      {
          name: "Smart Health Advisor",
          title: "Predicts Diseases Based On Symptoms",
          results: [
            { title: "Discover AI Prompt and Share AI" },
            { title: "Create new prompt" },
            { title: "Also you can Search other people prompt" },
          ],
          link: "https://smart-health-advisor.vercel.app/",
          image: '/project/health.png',
          tools: ['NextJs', 'Shadcn UI', 'Django','Python'],
          role: 'Frontend Developer',
          code: 'https://github.com/saurabhsharma104/Smart-Health-Advisor',
          content: () => {
              return (
                <p>
                  Smart Health Advisor this is Revolutionary software predicts diseases based on symptoms, enhancing early detection and healthcare efficiency. In this project my role was frontend developer to build this project I have to use NextJs with Shadcn UI.
                </p>
              );
          },
      }, 
      {
          name: "Coding InterView",
          title: "Coding-Interview-University Repo.",
          results: [
            { title: "This is simple static web page" },
            { title: "Simplified version of coding-interview-university github repo." },
          ],
          link: "https://yogesh2104.github.io/CodingInterView/",
          image: '/project/iViewer.png',
          tools: ['HTML', 'CSS','Javascript', 'Bootstrap'],
          role: 'Frontend Developer',
          code: 'https://github.com/yogesh2104/CodingInterView',
          content: () => {
              return (
                <p>
                  This is simple static web page which is simplified version of coding-interview-university github repo.
                </p>
              );
          },
      },
      {
        name: "ThreeJs Diamond",
        title: "ThreeJs Diamond Customizer.",
        results: [
          { title: "This is 3D Dimaond Renderer." },
          { title: "Allow to change ring and diamond color" },
        ],
        link: "https://threejsdesign.vercel.app/",
        image: '/project/threejs.png',
        tools: ['Nextjs','Javascript', 'ThreeJS', 'Zustand', 'Tailwind CSS'],
        role: 'Frontend Developer',
        code: null,
        content: () => {
            return (
              <p>
                This is 3D Dimaond Renderer. And allow you to change ring and diamond color.
              </p>
            );
        },
      }, 
    ],
    navigationBarItem :[
      {
        title: 'Home',
        href: '/',
        icon: (<Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
      },
      {
        title: "Education",
        href: "/education",
        icon: (<GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
      },
      {
        title: 'Project',
        href: '/project',
        icon: (<Lightbulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
      },
      // {
      //   title: 'Experience',
      //   href: '/experience',
      //   icon: (<BriefcaseBusiness className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
      // },
      {
        title: 'Guest Book',
        href: '/guestbook',
        icon: (<FileQuestion className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
      },
      {
        title: 'Blog',
        href: '/blog',
        icon: (<Rss className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
      },
      {
        title: 'About',
        href: '/about',
        icon: (<User className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
      },
      {
        title: 'Contact',
        href: '/contact-us',
        icon: (<PhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
      },
  ]
};