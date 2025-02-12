import Heading from "./common/Heading";
import Image from "next/image";
import Description from "./common/Description";
import { PROJECT_DATA } from "../utils/helper";

interface ProjectItem {
    image: string;
    description: string;
}

const TheProject = () => {
    return (
        <div className="bg-dark-blue md:py-[70px] lg:py-[65px] -mt-[1px]" id="project">
            <div className="container mx-auto relative z-10 max-sm:px-4 max-lg:px-8">
                <div className="lg:flex-row flex flex-col xl:gap-[109px] md:gap-[53px] gap-10">
                    <div className='lg:max-w-[550px] max-lg:mx-auto max-lg:w-full about flex flex-col justify-center'>
                        <Heading styleClass="pb-5" text="THE PROJECT" />
                        {PROJECT_DATA.map((obj: ProjectItem, index) => (
                            <div key={index} className="flex gap-5 pb-2 items-start">
                                <Image
                                    src={obj.image}
                                    alt="about-icon"
                                    width={29}
                                    height={29}
                                    className="max-w-[29px]" />
                                <Description
                                    styleClass={`${index === 0 ? "max-w-[260px] xl:max-w-[456px] sm:max-w-[621px]" : "xl:max-w-[456px] sm:max-w-[621px] max-w-[254px]"
                                        }`}
                                    description={obj.description}
                                />                    </div>
                        ))}
                    </div>
                    <div className="image flex max-lg:justify-center">
                        <Image src="/assets/images/webp/project-image.webp"
                            alt="project-image"
                            width={471}
                            height={626}
                            className="max-xl:w-full max-w-[471px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheProject