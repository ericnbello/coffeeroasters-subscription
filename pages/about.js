import Hero from '../components/ui/Hero/Hero';
import Commitment from "../components/sections/Commitment";
import Quality from "../components/sections/Quality";
import Headquarters from "../components/sections/Headquarters";

export default function About() {
    return (
        <main className="bg-lightCream">
            <section className='p-6'>
                <Hero 
                    imageMobile="/image-hero-whitecup-mobile.jpg"
                    imageTablet="/image-hero-whitecup-tablet.jpg"
                    imageDesktop="/image-hero-whitecup-desktop.jpg"
                    title="About us"
                    titleStyle='font-fraunces text-3xl md:text-5xl font-bold w-full md:w-3/4 lg:w-2/3 md:py-10'
                    description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
                    coffee from around the world. We have since been dedicated to bring the perfect cup - from 
                    bean to brew - in every shipment."
                    // btn=""
                    btnUrl=""
                />
                <Commitment />
                <Quality />
                <Headquarters />
            </section>
        </main>
    )
}