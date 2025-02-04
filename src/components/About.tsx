import Heading from "./common/Heading";
import Image from "next/image";
import Description from "./common/Description";
import { ABOUT_DATA } from "../utils/helper";


const About = () => {
    return (
        <div className='bg-dark-blue relative xl:py-[210px] md:pt-24 pt-16 xl:flex items-center justify-center max-w-[1920px] mx-auto' >
            <div className="container mx-auto relative z-10">
                <div className='xl:max-w-[550px] max-xl:mx-auto max-xl:w-full'>
                    <Heading styleClass="pb-5" text="About Us" />
                    {ABOUT_DATA.map((obj, index) => (
                        <div key={index} className="flex gap-5 pb-2">
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
            <div className="xl:absolute xl:right-0 xl:bottom-[2%]">
                <Image src="/assets/images/webp/about-image.webp"
                    alt="about-image"
                    width={954}
                    height={690}
                    className="max-xl:w-full max-w-[954px]" />
            </div>
        </div>

    )
}

export default About