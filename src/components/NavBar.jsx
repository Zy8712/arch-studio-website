import { Link, Route, useLocation } from 'wouter';

export default function NavBar() {

    const [location] = useLocation();

    // Split the URL by '/' and get the last part
    const parts = location.split('/');
    const currentPage = parts[parts.length - 1];

    return (
        <>
            <div className="w-full h-[152px] flex justify-center items-center bg-white px-12 md:px-[97.5px]">
                <div className="relative w-full max-w-[1110px] flex">
                    <nav className="w-full max-w-[687px] flex justify-between items-center">
                        <Link to="/">
                            <img src="/images/logo.svg" alt="" className="h-10" />
                        </Link>

                        <div className="w-[426.65px] h-6 hidden md:flex justify-between text-lg font-bold text-theme-medium-grey">
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

                        <button className="inline-block md:hidden">
                            <img src="/images/icons/icon-hamburger.svg" alt="" className='' />
                            <img src="/images/icons/icon-close.svg" alt="" className='hidden' />
                        </button>
                        
                        <div className="hidden">

                        </div>
                    </nav>

                    {/** to be fixed later massive issues with constant shifting and inability to lock down item */}
                    {/**<div className="absolute top-2 -left-56 rotate-90 h-6 flex justify-between items-center">
                        <div className="w-[168px] h-[1px] mr-6 bg-theme-light-grey"></div>
                        <span className="text-lg font-medium text-theme-light-grey uppercase tracking-[18px] leading-6">{currentPage}</span>
    </div>*/}
                </div>
            </div>
        </>
    );
}