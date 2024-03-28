import { Link, Route, useLocation } from 'wouter';

export default function NavBar() {

    const [location] = useLocation();

    // Split the URL by '/' and get the last part
    const parts = location.split('/');
    const currentPage = parts[parts.length - 1];

    return (
        <>
            <div className="w-full h-[152px] flex justify-center items-center bg-white">
                <div className="relative w-full max-w-[1110px] flex">
                    <nav className="w-full max-w-[687px] flex justify-between items-center">
                        <Link to="/">
                            <img src="/images/logo.svg" alt="" className="h-10" />
                        </Link>
                        <div className="w-[426.65px] h-6 flex justify-between text-lg font-bold text-theme-medium-grey">
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
                    </nav>

                    {/** to be fixed later massive issues with constant shifting and inability to lock down item */}
                    <div className="absolute top-2 -left-56 rotate-90 h-6 flex justify-between items-center">
                        <div className="w-[168px] h-[1px] mr-6 bg-theme-light-grey"></div>
                        <span className="text-lg font-medium text-theme-light-grey uppercase tracking-[18px] leading-6">{currentPage}</span>
                    </div>
                </div>
            </div>
        </>
    );
}