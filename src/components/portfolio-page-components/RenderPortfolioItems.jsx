import PortfolioItems from "./portfolio-items.json";

export default function RenderPortfolioItems() {
    return (
        <>
            <div className="w-full h-full flex justify-between flex-wrap gap-y-8">
                {PortfolioItems.map((image, index) => (
                    <div className="group relative w-[350px] h-full bg-theme-light-grey overflow-hidden rounded-lg">
                        <img key={index} src={image.images.desktop_preview} alt={`Image ${index}`} className="h-full opacity-90" />
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