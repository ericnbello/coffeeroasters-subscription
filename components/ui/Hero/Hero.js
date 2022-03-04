import s from './Hero.module.css';

export default function Hero({imageDesktop, imageTablet, imageMobile, title, description, btn}) {
    return (
        <section className='flex'>
            <div className="flex justify-evenly w-full p-6">
                <div className='z-10 flex flex-col z-10 absolute left-auto top-auto text-center md:text-left text-lightCream px-10 py-10 w-2/3'>
                    <h1 className='font-fraunces text-6xl font-bold w-full md:w-1/2 py-10'>{title}</h1>
                    <p className='font-barlow md:w-1/2'>{description}</p>
                    <a className='font-fraunces text-sm font-bold rounded-sm bg-darkCyan p-2 hover:bg-lightCyan text-center md:w-1/5' href="/pricing">{btn}</a>
                </div>
                <div className='z-0 justify-center relative'>
                    <img class="flex md:hidden w-full" src={imageMobile}/>
                    <img class="hidden md:flex lg:hidden w-full" src={imageTablet}/>
                    <img class="hidden md:hidden lg:flex w-full" src={imageDesktop}/>
                </div>
            </div>
        </section>
    )
}