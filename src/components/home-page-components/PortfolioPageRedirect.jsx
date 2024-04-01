export default function PortfolioPageRedirect() {
    const imageSet = ["image-del-sol.jpg", "image-228b.jpg", "image-prototype.jpg"];
    const imagePath = "/images/portfolio/desktop/";

    return (
        <>
            <section className="w-full h-[696px] flex flex-col justify-between border-black border-2 border-solid">
                <div className="w-full flex justify-between">
                    <h2 className="font-bold text-[72px] leading-[64px]">Featured</h2>
                    <button className="w-[169px] h-[72px] flex justify-center items-center bg-theme-very-dark-blue text-theme-very-light-grey font-bold text-lg leading-[25px] hover:bg-theme-dark-grey">
                        See All
                        <i className="las la-arrow-right ml-4 text-3xl"></i>
                    </button>
                </div>

                <div className="w-full h-[560px] flex justify-between">
                    {imageSet.map((image, index) => (
                        <div className="group relative w-[350px] h-full bg-theme-light-grey overflow-hidden rounded-lg">
                            <img key={index} src={imagePath + image} alt={`Image ${index}`} className="h-full opacity-90" />
                            <span className="absolute -top-11 -right-6 text-[250px] font-bold text-theme-very-light-grey opacity-50">{index + 1}</span>
                            <div className="absolute top-0 w-full h-full bg-black bg-opacity-20 group-hover:bg-opacity-0"></div>
                            <div className="absolute bottom-10 left-8 flex flex-col text-white">
                                <p className="text-[32px] leading-[40px] font-bold">Testing</p>
                                <span className="text-lg font-medium">View All Projects</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
