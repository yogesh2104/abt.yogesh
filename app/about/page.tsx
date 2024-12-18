// import BuyMeACoffee from '@/components/buyme-coffee';
import { WritingEffect } from '@/components/WritingEffect';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'abtyogesh || about',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

const AboutPage=()=>{
    return(
        <>
            <div className="w-full">
                <WritingEffect words={siteConfig.personalData.aboutMe}/>
            </div>
        </>
    )
}

export default AboutPage