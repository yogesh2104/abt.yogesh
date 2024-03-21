"use client"
import WritingEffect from "@/components/WritingEffect";


const AboutPage=()=>{

    const aboutMe=`
    I'm Yogesh Singh on the web. I'am a 23 y/o belonging to the Homo sapiens 🤣, a brother, a son, a friend, a self taugh web developer 
    
    and programmer.I have completed MCA(Master of Computer Application) I had already started programming back when I was in Second year 
   
    of BSc because first year pass in sports😁. I started web development mostly in frontend development at that time, I used only HTML 
    
    and CSS and simple javascript. If you want to know more about which programming I know they are - Python(❤), Javascript and framework 
    
    - ReactJs,NextJs,Tailwind CSS, "MERN Stack(Learning)".Things I do other than dev and programming. Apart from that, I enjoy playing cricket (🏏). 
    
    Touching grass is important. Sometimes listening soft music and seeing clouds passing 😳. I also play mobile games and like BattleRoyal game.
    
    Apart from this, I don't have much to do other than overthinking and staring at my phone screen.I like making friends (be it online or irl 
    
    though I'm somewhat introverted!). So, in case you want to talk about anything leave messages I'll get back to you once I'm active. All my 
    
    social links are listed [here](/links). That's pretty much everything about me.`
  
    // const convertMarkDown=new showdown.Converter({metadata:true})
    // const htmlText=convertMarkDown.makeHtml(aboutMe)


    return(
        <>
            <div className="w-full">
                <div className="relative z-50 lg:mt-[-70px]">
                    <div className="flex justify-center my-5 lg:py-8">
                        <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
                            Skills
                        </span>
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        </div>
                    </div>
                    <div className="container break-normal mb-5">
                        {/* <WritingEffect text={htmlText}/> */}
                    </div>

                    <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
                    <div className="flex justify-center -translate-y-[1px]">
                        <div className="w-3/4"><div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" /></div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default AboutPage