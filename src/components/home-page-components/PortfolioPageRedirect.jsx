import { Link } from 'wouter';

export default function PortfolioPageRedirect() {
    const imageSet = ["image-del-sol.jpg", "image-228b.jpg", "image-prototype.jpg"];
    const imagePathDesktop = "/images/portfolio/desktop/";
    const imagePathTablet = "/images/portfolio/tablet/";
    const imagePathMobile = "/images/portfolio/mobile/";

    return (
        <>
            <section className="w-full h-[955px] custom-md:h-[696px] flex flex-col justify-between">
                <div className="w-full flex justify-between">
                    <h2 className="font-bold text-[72px] leading-[64px]">Featured</h2>
                    <Link to="/portfolio"  className="w-[169px] h-[72px] hidden custom-md:flex justify-center items-center bg-theme-very-dark-blue text-theme-very-light-grey font-bold text-lg leading-[25px] hover:bg-theme-dark-grey">
                        See All
                        <i className="las la-arrow-right ml-4 text-3xl"></i>
                    </Link>
                </div>

                <div className="w-full h-[840px] custom-md:h-[560px] flex flex-col custom-md:flex-row justify-between">
                    {imageSet.map((image, index) => (
                        <div className="group relative w-full custom-md:w-[350px] h-[240px] custom-md:h-full bg-theme-light-grey overflow-hidden rounded-lg">
                            <img key={index} src={imagePathDesktop + image} alt={`Image ${index}`} className="w-full h-full hidden custom-md:inline-block opacity-90" />
                            <img key={index} src={imagePathTablet + image} alt={`Image ${index}`} className="w-full h-full hidden custom-sm:inline-block custom-md:hidden opacity-90" />
                            <img key={index} src={imagePathMobile + image} alt={`Image ${index}`} className="w-full h-full inline-block custom-sm:hidden opacity-90" />

                            <span className="absolute -top-11 -right-6 text-[250px] font-bold text-theme-very-light-grey opacity-50">{index + 1}</span>
                            <div className="absolute top-0 w-full h-full bg-black bg-opacity-20 group-hover:bg-opacity-0"></div>
                            <div className="absolute bottom-10 left-8 flex flex-col text-white">
                                <p className="text-[32px] leading-[40px] font-bold">Testing</p>
                                <span className="text-lg font-medium">View All Projects</span>
                            </div>
                        </div>
                    ))}
                    <Link to="/portfolio"  className="w-full h-[72px] flex custom-md:hidden justify-center items-center bg-theme-very-dark-blue text-theme-very-light-grey font-bold text-lg leading-[25px] rounded-lg hover:bg-theme-dark-grey">
                        See All
                        <i className="las la-arrow-right ml-4 text-3xl"></i>
                    </Link>
                </div>
            </section>
        </>
    );
}
