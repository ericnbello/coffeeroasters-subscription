export default function SelectionProcess() {
    const steps = [
        {
            title: 'Pick your coffee',
            description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        },
        {
            title: 'Choose the frequency',
            description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        },
        {
            title: 'Receive and enjoy!',
            description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
        }
    ]

    return (
        <section className="p-20">
            <div className="flex flex-col">
                <h2 className="flex justify-center md:justify-start font-fraunces font-bold text-2xl pb-16">How it works</h2>
                {/* <img className="hidden md:flex" src={} /> */}
            </div>
            <div className="flex flex-col md:flex-row pb-3">
                {steps.map((step, id) => (
                    <StepCard
                        title={step.title}
                        description={step.description}
                        number={`${id + 1}`}
                    />
                ))}
            </div>
            <div className="flex justify-center md:justify-start pt-6 pb-20">
                <a className='text-center text-lightCream font-fraunces font-bold rounded-sm bg-darkCyan p-3 hover:bg-lightCyan w-2/3 md:w-1/4' href="/pricing">Create your plan</a>
            </div>
        </section>
    )
}

const StepCard = ({ title, description, number }) => {
    return (
        <div className="w-full pb-10">
            <div className="flex flex-col justify-evenly text-center md:text-left md:w-2/3 lg:w-3/4">
                <h2 className="font-fraunces text-6xl font-bold text-paleOrange">{number.length === 1 ? "0" + number : number}</h2>
                <h3 className="font-fraunces font-bold text-2xl py-5">
                {title}
                </h3>
                <p className="font-barlow text-sm">{description}</p>
            </div>
        </div>
    );
  };