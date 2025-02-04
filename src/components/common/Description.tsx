interface DescriptionProps {
    styleClass?: string;
    description: string;
}

const Description: React.FC<DescriptionProps> = ({ styleClass, description }) => {
    return (
        <p className={`${styleClass} lg:text-base text-sm text-white font-normal tracking-[6%]`}>
            {description}
        </p>
    );
};

export default Description;
