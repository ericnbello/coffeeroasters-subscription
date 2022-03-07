export default function Commitment() {
    return (
        <section className="px-6">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-row justify-center w-full md:w-1/2 md:justify-start">
                    <img className="flex md:hidden rounded-lg" src="/image-commitment-mobile.jpg" />
                    <img className="hidden md:flex lg:hidden rounded-lg" src="/image-commitment-tablet.jpg" />
                    <img className="hidden lg:flex rounded-lg" src="/image-commitment-desktop.jpg" />
                </div>
                <div className="flex flex-col text-center w-full md:w-1/2 md:text-left justify-center py-6 pt-10 gap-10">
                    <h2 className="font-fraunces font-bold text-3xl">Our Commitment</h2>
                    <p className="font-barlow">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                </div>
            </div>
        </section>
    )
}