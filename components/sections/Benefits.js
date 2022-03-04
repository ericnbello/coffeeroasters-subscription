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
            <div className="flex flex-col justify-start bg-darkGreyBlue text-lightCream h-96 p-16 mx-5 z-0 gap-10 relative rounded-lg">
                <div className="flex justify-center">
                    <h2 className="font-fraunces text-4xl">Why choose us?</h2>
                </div>
                <div className="flex justify-center">
                    <p className="font-barlow text-xl">
                        A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-5 px-10 z-10 relative -mt-32">
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
        <div className="flex flex-col items-center md:flex-row md:justify-evenly lg:flex-col p-6 bg-darkCyan text-lightCream">
            <div>
                <img
                    src={icon}
                    alt="coffeeroasters-benefit"
                    className="flex justify-center"
                />
            </div>
            <div className="flex flex-col justify-start">
                <h1 className="font-fraunces text-center md:text-left lg:text-center font-bold text-xl px-2 py-5">
                {title}
                </h1>
                <p className="font-barlow text-center md:text-left lg:text-center text-sm px-2 py-5">{description}</p>
            </div>
        </div>
    );
  };