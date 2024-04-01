import { Link, Route, useLocation } from 'wouter';

export default function AboutPageRedirect() {
    return (
        <>
            <section className="w-full h-[560px] my-[200px] bg-[url('/images/home/desktop/image-small-team.jpg')] border-black border-2 border-solid">
                <div className="w-full h-full pl-[190px] flex items-center bg-black bg-opacity-50">
                    <div className="">
                        <h2 className="text-white font-bold text-[72px] leading-[64px]">
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