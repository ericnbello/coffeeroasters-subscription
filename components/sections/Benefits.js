export default function Benefits() {
    const benefits = [
        {
            title: 'Best quality',
            description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
            icon: '/icon-coffee-bean.svg'
        },
        {
            title: 'Exclusive benefits',
            description: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
            icon: '/icon-gift.svg'
        },
        {
            title: 'Free shipping',
            description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
            icon: '/icon-truck.svg'
        }
    ]
    return (
        <sectiion className="mx-auto p-6">
            <div className="flex flex-col justify-start bg-darkGreyBlue text-lightCream h-[55rem] md:h-[35rem] lg:h-[30rem] p-16 mx-5 z-0 gap-10 relative rounded-lg">
                <div className="flex justify-center">
                    <h2 className="font-fraunces font-bold text-2xl md:text-4xl">Why choose us?</h2>
                </div>
                <div className="flex justify-center">
                    <p className="font-barlow text-sm md:text-lg text-center w-full md:w-2/3">
                        A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-5 px-10 z-10 relative -mt-[33rem] md:-mt-[16rem] lg:-mt-44 items-center">
                {benefits.map((benefit, i) => (
                    <BenefitCard
                        title={benefit.title}
                        description={benefit.description}
                        icon={benefit.icon}
                        number={`${i + 1}`}
                    />
                    ))}
            </div>
        </sectiion>
    )
}

const BenefitCard = ({ title, description, icon}) => {
    return (
        <div className="benefit-card flex flex-col items-center h-auto lg:min-h-[22rem] md:flex-row md:justify-between lg:flex-col p-6 px-16 pt-16 md:pt-0 lg:p-6 lg:px-16 lg:pt-16 md:w-4/5 bg-darkCyan text-lightCream rounded-lg">
            <div className="md:w-1/3 flex flex-row md:justify-center">
                <img
                    src={icon}
                    alt="coffeeroasters-benefit"
                    className="flex justify-center pt-3"
                />
            </div>
            <div className="flex flex-col justify-start w-full md:w-2/3 lg:w-full">
                <h1 className="font-fraunces text-center md:text-left lg:text-center font-bold text-xl px-2 pt-10">
                {title}
                </h1>
                <p className="font-barlow text-center md:text-left lg:text-center text-sm px-2 py-5">{description}</p>
            </div>
        </div>
    );
  };