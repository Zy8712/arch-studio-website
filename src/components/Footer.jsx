import { Link, Route, useLocation } from 'wouter';

export default function Footer() {
    return (
        <>
            <footer className="w-full h-[200px] flex justify-center">
                <div className="relative w-full max-w-[1110px] h-full flex">

                    <div className="w-[984px] h-full bg-theme-very-light-grey flex items-center">

                        <div className="w-[200px] h-full grid place-items-center bg-theme-very-dark-blue">
                            <img src="/images/logo.svg" alt="" className="h-10 filter invert    " />
                        </div>

                        <div className="w-[313px] h-6 ml-[65px] flex justify-between text-lg font-bold text-theme-medium-grey">
                            <Link to="/portfolio">
                                Portfolio
                            </Link>
                            <Link to="/about">
                                About Us
                            </Link>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </div>

                    </div>

                    <button className="absolute right-0 top-[50%] -translate-y-[50%] w-[252px] h-[72px] flex justify-center items-center bg-theme-very-dark-blue text-theme-very-light-grey font-bold text-lg leading-[25px] hover:bg-theme-dark-grey">
                        See Our Portfolio
                        <i className="las la-arrow-right ml-4 text-3xl"></i>
                    </button>

                </div>
            </footer>
        </>
    );
}