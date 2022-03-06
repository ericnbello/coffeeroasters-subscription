export default function Quality() {
    return (
        <section className="px-6 py-24">
            <div className="flex flex-col-reverse lg:relative lg:max-w-[1200px] w-full">
                <div className="flex flex-col justify-start bg-[url(/bg-quality-mobile.png)] md:bg-[url(/bg-quality-tablet.png)] lg:bg-[url(/bg-quality-desktop.png)] text-lightCream h-[30rem] md:h-[35rem] lg:h-[30rem] p-16 z-0 gap-10 relative lg:static rounded-lg -mt-20 lg:mt-0 w-full lg:-mr-20">
                    <div className="flex justify-center lg:justify-start mt-16 lg:mt-0">
                        <h2 className="font-fraunces font-bold text-2xl md:text-4xl">Uncompromising quality</h2>
                    </div>
                    <div className="flex justify-center lg:justify-start lg:w-2/3">
                        <p className="font-barlow text-lg md:text-xl text-center lg:text-left w-full md:w-2/3">
                            Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                        </p>
                    </div>
                </div>
                <div className="z-10 relative lg:absolute lg:right-5 lg:-top-24 flex justify-center items-center px-6 min-w-[400px]">
                    <img className="flex md:hidden rounded-lg" src="/image-quality-mobile.jpg" />
                    <img className="hidden md:flex lg:hidden rounded-lg" src="/image-quality-tablet.jpg" />
                    <img className="hidden lg:flex rounded-lg" src="/image-quality-desktop.jpg" />
                </div>
            </div>
        </section>
    )
}