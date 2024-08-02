

export const ProjectData=[
    {
        id:1,
        name:"Noter",
        description:"This is Notion clone. Noter serves as the collaborative workspace where enhanced and more efficient work takes place.",
        tools: ['NextJs', 'Convex', 'Clerk'],
        role: 'Full Stack Developer',
        code: 'https://github.com/yogesh2104/noter',
        demo: 'https://noter-steel.vercel.app/',
        image: '/project/noter.png',
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
      id:1,
      name:"Eldora UI",
      description:"Actively contribute in Eldora UI. This is a collection of re-usable components that you can copy and paste into your web apps.",
      role: 'Open Source Project Mantainer',
      code: 'https://github.com/yogesh2104/eldoraui',
      demo: 'www.eldoraui.site',
      image: '/project/eldoraui.png',
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
        id:2,
        name:"PromptForAi",
        description:" PromptForAi Is the place you can Discover AI Prompt and Share AI Prompts.",
        tools: ['NextJs', 'MongoDB', 'NextAuth'],
        role: 'Full Stack Developer',
        code: 'https://github.com/yogesh2104/promptForAI',
        demo: 'https://prompt-for-ai.vercel.app/',
        image: '/project/promtForAi.png',
        content: () => {
          return (
            <p>
              PromptForAi Is the place you can Discover AI Prompt and Share AI Prompts. You can create new prompt and you can either share or save as draft. Also you can Search other people prompt. To build this project I have to use NextJs with edge runtime environment and for authentication use NextAuth(only login with Google provider) and database I have MongoDB Atlas and hosted on vercel.
            </p>
          );
        },
    },
    {
        id:3,
        name:"Smart Health Advisor",
        description:"Smart Health Advisor this is Revolutionary software predicts diseases based on symptoms, enhancing early detection and healthcare efficiency.",
        tools: ['NextJs', 'Shadcn UI', 'Django','Python'],
        role: 'Frontend Developer',
        code: 'https://github.com/saurabhsharma104/Smart-Health-Advisor',
        demo: 'https://smart-health-advisor.vercel.app/',
        image: '/project/health.png',
        content: () => {
          return (
            <p>
              Smart Health Advisor this is Revolutionary software predicts diseases based on symptoms, enhancing early detection and healthcare efficiency. In this project my role was frontend developer to build this project I have to use NextJs with Shadcn UI.
            </p>
          );
        },
    },
    {
        id:4,
        name:"Coding InterView",
        description:"This is simple static web page which is simplified version of coding-interview-university github repo.",
        tools: ['HTML', 'CSS', 'Bootstrap'],
        role: 'Frontend Developer',
        code: 'https://github.com/yogesh2104/CodingInterView',
        demo: 'https://yogesh2104.github.io/CodingInterView/',
        image: '/project/iViewer.png',
        content: () => {
          return (
            <p>
              This is simple static web page which is simplified version of coding-interview-university github repo.
            </p>
          );
        },
    },
]