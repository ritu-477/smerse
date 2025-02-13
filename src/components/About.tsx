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
                <div className="container mx-auto relative z-10">
                    <div className='xl:max-w-1/2 max-xl:mx-auto max-xl:w-full about'>
                        <Heading styleClass="lg:pb-7 md:pb-5 pb-[35px]" text="About Us" />
                        {ABOUT_DATA.map((obj: AboutItem, index) => (
                            <div key={index} className="flex gap-5 lg:pb-2 pb-3 items-start">
                                <Image
                                    src={obj.image}
                                    alt="about-icon"
                                    width={29}
                                    height={29}
                                    className="max-w-[29px]" />
                                <Description styleClass="xl:max-w-[511px]" description={obj.description} />
                            </div>
                        ))}
                    </div>
                    <div className="xl:w-6/12 w-full lg:pt-0 max-lg:pt-7 max-sm:pt-4 justify-center lg:justify-end flex">
                        <Image alt="about-image"
                            width={954}
                            height={690} className='max-w-[654px] w-full max-sm:min-w-[400px] max-xl:min-w-[700px] xl:hidden max-xl:block max-lg:mx-auto lg:-translate-x-1 -translate-x-5' src="/assets/images/webp/about-image.webp"/>
                    </div>
                </div>
                <div className="xl:absolute xl:right-0 xl:bottom-[2%] image xl:block hidden">
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