import Hero from '../components/ui/Hero/Hero';
import Collection from "../components/sections/Collection";
import Benefits from "../components/sections/Benefits";
import SelectionProcess from "../components/sections/SelectionProcess";

export default function Home() {
    return (
        <main className="bg-white">
            <section >
                <Hero 
                    imageMobile="/image-hero-coffeepress-mobile.jpg"
                    imageTablet="/image-hero-coffeepress-tablet.jpg"
                    imageDesktop="/image-hero-coffeepress-desktop.jpg"
                    title="Great coffee made simple."
                    description="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
                    btn="Create your plan"
                    />
                <Collection />
                <Benefits />
                <SelectionProcess />
            </section>
        </main>
    )
}