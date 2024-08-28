import { Link, useLocation } from 'wouter';
import C from './home-page-components/HomeShared';

export default function Footer() {
    const [location] = useLocation();

    return (
        <>
            <footer className="relative w-full h-[443px] custom-md:h-[200px] flex justify-center">
                <div className="relative w-full max-w-[1110px] h-full flex flex-col custom-md:flex-row justify-end custom-md:justify-normal">

                    <div className="relative w-full custom-md:w-[984px] h-[383px] custom-md:h-full bg-theme-very-light-grey flex flex-col custom-md:flex-row items-center">
                        <div className="absolute -top-[60px] left-[50%] -translate-x-[50%] custom-md:top-auto custom-md:left-auto custom-md:translate-x-0 custom-md:relative w-[120px] custom-md:w-[200px] h-[120px] custom-md:h-[200px] grid place-items-center bg-theme-very-dark-blue">
                            <img src="/images/logo.svg" alt="" className="h-10 filter invert    " />
                        </div>

                        <div className="mt-24 custom-md:mt-0 w-[80px] custom-md:w-[313px] h-[139px] custom-md:h-6 custom-md:ml-[65px] flex flex-col custom-md:flex-row justify-between items-center text-lg font-bold text-theme-medium-grey">
                            <Link to="/portfolio" className={`relative h-full ${location === "/portfolio" ? 'text-theme-very-dark-blue' : 'text-theme-medium-grey hover:text-theme-very-dark-blue'}`}>
                                Portfolio
                                <div className={`absolute -bottom-4 left-[50%] -translate-x-[50%] w-6 h-1 ${location === "/portfolio" ? 'inline-block' : 'hidden' } bg-theme-very-dark-blue`}></div>
                            </Link>
                            <Link to="/about" className={`relative h-full ${location === "/about" ? 'text-theme-very-dark-blue' : 'text-theme-medium-grey hover:text-theme-very-dark-blue'}`}>
                                About Us
                                <div className={`absolute -bottom-4 left-[50%] -translate-x-[50%] w-6 h-1 ${location === "/about" ? 'inline-block' : 'hidden' } bg-theme-very-dark-blue`}></div>
                            </Link>
                            <Link to="/contact" className={`relative h-full ${location === "/contact" ? 'text-theme-very-dark-blue' : 'text-theme-medium-grey hover:text-theme-very-dark-blue'}`}>
                                Contact
                                <div className={`absolute -bottom-4 left-[50%] -translate-x-[50%] w-6 h-1 ${location === "/contact" ? 'inline-block' : 'hidden' } bg-theme-very-dark-blue`}></div>
                            </Link>
                        </div>
                    </div>

                    <Link to="/portfolio" className="absolute bottom-[27px] top-auto custom-md:top-[50%] custom-md:-translate-y-[50%] right-[50%] translate-x-[50%] custom-md:right-0 custom-md:translate-x-0  w-[252px] h-[72px] flex justify-center items-center bg-theme-very-dark-blue text-theme-very-light-grey font-bold text-lg leading-[25px] hover:bg-theme-dark-grey">
                        See Our Portfolio
                        <i className="las la-arrow-right ml-4 text-3xl"></i>
                    </Link>

                </div>

                <C />
            </footer>
        </>
    );
}