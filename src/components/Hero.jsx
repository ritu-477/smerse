import React from 'react'
import Image from "next/image";
import Header from './common/Header'
import CustomButton from './common/CustomButton';


const Hero = () => {
    return (
        <>
            <div className='lg:bg-hero-bg sm:bg-hero-tab-bg bg-hero-mobile-bg bg-cover bg-no-repeat bg-center lg:pb-[105px] pb-[85px] relative'>
                <Image className='absolute sm:block hidden right-0 lg:-bottom-[60px] -bottom-[45px] max-lg:w-[149px] max-lg:h-[154px]' alt='hero-right-ellipse' src="/assets/images/webp/hero-ellipse.webp" width={164} height={164} />
                <Image className='absolute lg:block hidden left-0 top-0' src="/assets/images/webp/hero-left-ellipse.webp" alt='hero-left-ellipse' width={164} height={164} />
                <Header />
                <div className='container' id='home'>
                    <div className='flex flex-col items-center'>
                        <Image src="/assets/images/webp/hero-logo.webp" alt='hero-logo' width={404} height={241} className='lg:max-w-[404px] md:max-w-[360px] sm::max-w-[300px] max-w-[256px] lg:pt-[52px] pt-[79px] md:pb-8 pb-[108px]' />
                        <div className="relative">
                            <h1 className="pt-8 md:text-8xl text-[40px] leading-[48px] font-black md:leading-custom-12xl text-white tracking-[6px] relative z-10 max-md:text-[40px] max-md:pt-10">
                                SMERSE
                            </h1>
                            <span className="absolute inset-0 md:text-8xl text-[40px] leading-[48px] font-black md:leading-custom-12xl max-md:text-[40px] bg-gradient-to-b from-deep-blue via-purple to-orange bg-clip-text text-transparent tracking-[6px] top-[23.5%] -translate-x-0.5 max-md:top-[46%] max-md:left-[0.5px]">
                                SMERSE
                            </span>
                        </div>
                        <p className='md:text-4xl sm:text-2xl text-xl md:leading-custom-9xl font-semibold text-white max-w-[637px] text-center md:pt-[10px] md:pb-11 pt-7 pb-[82px]'>FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE
                        </p>
                        <CustomButton title='Get Started' styleClass='md:!py-4 md:!px-7 !pt-3 !pb-[13px] !px-[22px]' />
                    </div>
                </div>
            </div>
            <div className='w-full h-10 shadow-custom-xl bg-gradient-to-b from-deep-blue via-purple to-orange'></div>
        </>
    )
}

export default Hero
