import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export default function NavBar() {

    const [location] = useLocation();

    // Split the URL by '/' and get the last part
    const [mobileMenuActive, toggleMobileMenu] = useState(false);

    function mobileMenuPressed(){
        toggleMobileMenu(!mobileMenuActive);
    }

    return (
        <>
            <div className="w-full h-24 sm:h-[152px] flex justify-center items-center bg-white px-12 md:px-[97.5px]">
                <div className="relative w-full max-w-[1110px] flex">
                    <nav className="w-full max-w-[687px] flex justify-between items-center">
                        <Link to="/">
                            <img src="/images/logo.svg" alt="" className="h-10" />
                        </Link>

                        <div className="w-[426.65px] h-6 hidden md:flex justify-between text-lg font-bold text-theme-medium-grey">
                            <Link to="/portfolio" className={`relative h-full ${location === "/portfolio" ? 'text-theme-very-dark-blue' : 'text-theme-medium-grey hover:text-theme-very-dark-blue'}`}>
                                Portfolio
                                <div className={`absolute -bottom-4 left-[50%] -translate-x-[50%] w-6 h-1 ${location === "/portfolio" ? 'inline-block' : 'hidden'} bg-theme-very-dark-blue`}></div>
                            </Link>
                            <Link to="/about" className={`relative h-full ${location === "/about" ? 'text-theme-very-dark-blue' : 'text-theme-medium-grey hover:text-theme-very-dark-blue'}`}>
                                About Us
                                <div className={`absolute -bottom-4 left-[50%] -translate-x-[50%] w-6 h-1 ${location === "/about" ? 'inline-block' : 'hidden'} bg-theme-very-dark-blue`}></div>
                            </Link>
                            <Link to="/contact" className={`relative h-full ${location === "/contact" ? 'text-theme-very-dark-blue' : 'text-theme-medium-grey hover:text-theme-very-dark-blue'}`}>
                                Contact
                                <div className={`absolute -bottom-4 left-[50%] -translate-x-[50%] w-6 h-1 ${location === "/contact" ? 'inline-block' : 'hidden'} bg-theme-very-dark-blue`}></div>
                            </Link>
                        </div>

                        <button onClick={mobileMenuPressed} className="relative w-8 h-8 inline-block md:hidden">
                            <img src="/images/icons/icon-hamburger.svg" alt="" className={`${mobileMenuActive ? 'hidden' : 'inline'}`} />
                            <img src="/images/icons/icon-close.svg" alt="" className={`${mobileMenuActive ? 'inline' : 'hidden'}`} />
                            <div className={`absolute z-50 top-[calc(100%+32px)] sm:top-[calc(100%+60px)] right-0 w-[343px] h-[235px] ${mobileMenuActive ? 'block' : 'hidden'} bg-theme-very-light-grey p-12`}>
                                <div className='w-full h-full flex flex-col justify-between items-start'>
                                    <Link to="/portfolio" className="text-[32px] leading-8 font-bold">
                                        Portfolio
                                    </Link>

                                    <Link to="/about" className="text-[32px] leading-8 font-bold">
                                        About Us
                                    </Link>

                                    <Link to="/contact" className="text-[32px] leading-8 font-bold">
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </button>

                        <div className="hidden">

                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}