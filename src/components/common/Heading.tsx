interface HeadingProps {
    styleClass?: string;
    text: string;
}

const Heading: React.FC<HeadingProps> = ({ styleClass, text }) => {
    return (
        <h2 className={`${styleClass} relative z-10 md:text-5xl text-4xl leading-custom-8xl md:leading-custom-10xl font-black bg-gradient-to-t to-deep-blue via-purple from-orange bg-clip-text text-transparent tracking-[2px] sm:tracking-[3px] top-0 -translate-x-0.5`}>
            {text}
            <span className="absolute inset-0 text-white font-black text-transparent tracking-[2px] sm:tracking-[3px] top-0 translate-x-[1px] translate-y-[1px]">
                {text}
            </span>
        </h2>
    );
};

export default Heading;


