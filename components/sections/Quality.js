export default function Quality() {
    return (
        <section className="p-6">
            <div className="z-10 relative flex justify-center">
                <img className="flex md:hidden rounded-lg" src="/image-quality-mobile.jpg" />
                <img className="hidden md:flex lg:hidden rounded-lg" src="/image-quality-tablet.jpg" />
                <img className="hidden lg:flex rounded-lg" src="/image-quality-desktop.jpg" />
            </div>
            <div className="z-0 absolute flex flex-col text-center p-6 gap-10 bg-darkGreyBlue text-lightCream -mt-20 left-5 rounded-lg h-max-1/6">
                <h2 className="font-fraunces font-bold text-3xl my-auto">Uncompromising quality</h2>
                <p className="font-barlow">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>
        </section>
    )
}