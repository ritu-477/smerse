"use client"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Heading from "./common/Heading";
import Image from "next/image";
import Description from "./common/Description";
import { ABOUT_DATA } from "../utils/helper";

interface AboutItem {
    image: string;
    description: string;
}

const About = () => {
    
    return (
        <div className="bg-dark-blue" id="project">
            <div className='bg-dark-blue relative xl:py-[210px] md:pt-24 pt-[60px] xl:flex items-center justify-center max-w-[1440px] mx-auto' >
                <div className="container mx-auto relative z-10 max-md:px-4 max-lg:px-8">
                    <div className='xl:max-w-[550px] max-xl:mx-auto max-xl:w-full about'>
                        <Heading styleClass="pb-7" text="About Us" />
                        {ABOUT_DATA.map((obj: AboutItem, index) => (
                            <div key={index} className="flex gap-5 lg:pb-2 pb-3 items-start">
                                <Image
                                    src={obj.image}
                                    alt="about-icon"
                                    width={29}
                                    height={29}
                                    className="max-w-[29px]" />
                                <Description styleClass="xl:max-w-[455px]" description={obj.description} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xl:absolute xl:right-0 xl:bottom-[2%] image">
                    <Image src="/assets/images/webp/about-image.webp"
                        alt="about-image"
                        width={954}
                        height={690}
                        className="max-xl:w-full max-w-[954px]" />
                </div>
            </div>
       </div>
    )
}

export default About