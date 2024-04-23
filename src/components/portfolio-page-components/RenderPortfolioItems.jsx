import PortfolioItems from "./portfolio-items.json";

export default function RenderPortfolioItems() {
    return (
        <>
            <div className="w-full h-full flex justify-center custom-lg:justify-between flex-wrap gap-y-8 px-8 md:px-0">
                {PortfolioItems.map((image, index) => (

                    <div className="group relative w-full custom-lg:w-[350px] min-w-[311px] max-w-[573px] md:min-w-min md:max-w-none h-full bg-theme-light-grey overflow-hidden rounded-lg">
                        <img key={index} src={image.images.desktop_preview} alt={`Image ${index}`} className="h-full opacity-90 hidden custom-lg:inline-block" />
                        <img key={index} src={image.images.tablet_preview} alt={`Image ${index}`} className="w-full opacity-90 hidden md:inline-block custom-lg:hidden" ></img>
                        <img key={index} src={image.images.mobile_preview} alt={`Image ${index}`} className="w-full opacity-90 inline-block md:hidden" ></img>
                        
                        <div className="absolute top-0 w-full h-full bg-black bg-opacity-20 group-hover:bg-opacity-0"></div>
                        <div className="absolute bottom-10 left-8 flex flex-col text-white">
                            <p className="text-[32px] leading-[40px] font-bold">{image.name}</p>
                            <span className="text-lg font-medium">{image.date}</span>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}