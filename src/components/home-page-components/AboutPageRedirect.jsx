import { Link, Route, useLocation } from 'wouter';

export default function AboutPageRedirect() {
    return (
        <>
            <section className="w-full h-[560px] my-[200px] bg-[url('/images/home/mobile/image-small-team.jpg')] sm:bg-[url('/images/home/tablet/image-small-team.jpg')] custom-md:bg-[url('/images/home/desktop/image-small-team.jpg')] bg-cover custom-md:bg-cover bg-no-repeat">
                <div className="w-full h-full pl-8 sm:pl-24 custom-md:pl-[190px] flex items-center bg-black bg-opacity-50">
                    <div className="">
                        <h2 className="text-white font-bold text-5xl sm:text-[72px] leading-[52px] sm:leading-[64px]">
                            Small team,<br />
                            big ideas
                        </h2>

                        <Link to="/about">
                            <button className="mt-[27px] w-[187px] h-[72px] flex justify-center items-center bg-theme-very-dark-blue text-theme-very-light-grey font-bold text-lg leading-[25px] hover:bg-theme-dark-grey">
                                About Us
                                <i className="las la-arrow-right ml-4 text-3xl"></i>
                            </button>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}