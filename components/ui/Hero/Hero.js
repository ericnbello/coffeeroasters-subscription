import s from './Hero.module.css';
import Link from 'next/link';

export default function Hero({imageDesktop, imageTablet, imageMobile, title, titleStyle, description, btn}) {
    return (
        <section className='flex pb-24'>
            <div className="flex flex-col w-full p-6 mx-auto">
                <div className='z-10 flex flex-col gap-y-2 absolute max-w-[1200px] left-0 md:left-auto text-center md:text-left text-lightCream p-10 w-full md:w-3/4 lg:w-2/3'>
                    <div className='flex flex-col py-16 md:py-6'>
                        <h1 className={titleStyle}>{title}</h1>
                        <p className='font-barlow md:w-1/2 px-6 md:px-0'>{description}</p>
                    </div>
                    <div className="flex justify-center md:justify-start md:py-10">
                        <Link href="/pricing">
                            <a className='font-fraunces text-sm font-bold rounded-sm bg-darkCyan p-3 hover:bg-lightCyan text-center w-1/2 md:w-2/5 lg:w-1/5' href="/pricing" style={ btn ? { display:'block'} : {display : 'none'} }>{btn}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='z-0 justify-center relative w-full'>
                    <img class="flex md:hidden w-full rounded-lg" src={imageMobile}/>
                    <img class="hidden md:flex lg:hidden w-full rounded-lg" src={imageTablet}/>
                    <img class="hidden md:hidden lg:flex w-full rounded-lg" src={imageDesktop}/>
                </div>
            </div>
        </section>
    )
}