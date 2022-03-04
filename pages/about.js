import Hero from '../components/ui/Hero/Hero';
import Commitment from "../components/sections/Commitment";
import Benefits from "../components/sections/Benefits";
import SelectionProcess from "../components/sections/SelectionProcess";

export default function About() {
    return (
        <main className="bg-white">
            <section >
                <Hero 
                    imageMobile="/image-hero-whitecup-mobile.jpg"
                    imageTablet="/image-hero-whitecup-tablet.jpg"
                    imageDesktop="/image-hero-whitecup-desktop.jpg"
                    title="About us"
                    description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
                    coffee from around the world. We have since been dedicated to bring the perfect cup - from 
                    bean to brew - in every shipment."
                    // btn=""
                />
                <Commitment />
            </section>
        </main>
    )
}