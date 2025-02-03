import React from "react";
import Heading from "./common/Heading";
import Image from "next/image";
import Description from "./common/Description";
import { ABOUT_DATA } from "../utils/helper"; 

const About: React.FC = () => {
    return (
        <div className="py-11 bg-dark-blue">
            <div className="container">
                <div className="lg:flex-row flex flex-col">
                    <div className="flex flex-col justify-center">
                        <Heading styleClass="pb-5" text="About Us" />
                        {ABOUT_DATA.map((obj, index) => (
                            <div key={index} className="flex gap-5 pb-2">
                                <Image
                                    src={obj.image}
                                    alt="about-icon"
                                    width={29}
                                    height={29}
                                    className="max-w-[29px]" />
                                <Description styleClass="lg:max-w-[450px]" description={obj.description} />
                            </div>
                        ))}
                    </div>
                    <div className="flex max-lg:justify-center max-lg:items-center">
                        <Image src="/assets/images/webp/about-image.png"
                            alt="about-image"
                            width={954}
                            height={690}
                            className="max-xl:w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
