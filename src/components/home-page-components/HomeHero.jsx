import { useState } from "react";
import heroImgData from "./home-hero.json";

export default function HomeHero() {

    const [heroImageNum, setHeroImageNum] = useState(1);

    return (
        <>
            <section className="relative w-full h-[560px] sm:h-[720px] flex items-center mb-[195px]">
                <img src={heroImgData[heroImageNum - 1].hero_images.desktop_preview} className="w-full h-full hidden custom-lg:inline-block" />
                <img src={heroImgData[heroImageNum - 1].hero_images.tablet_preview} className="w-full h-full hidden sm:inline-block custom-lg:hidden" />
                <img src={heroImgData[heroImageNum - 1].hero_images.mobile_preview} className="w-full h-full inline-block sm:hidden" />
                <div className="absolute top-0 w-full h-full bg-black bg-opacity-35"></div>

                <div className="absolute top-[50%] -translate-y-[50%] left-7 custom-lg:left-40 text-white">
                    <p className="w-[350px] sm:w-[540px] font-bold text-7xl sm:text-8xl leading-[80px]">{heroImgData[heroImageNum - 1].name}</p>
                    <p className="w-[350px] sm:w-[445px]">{heroImgData[heroImageNum - 1].description}</p>
                    <button className="mt-10 w-[252px] h-[72px] flex justify-center items-center bg-theme-very-dark-blue text-theme-very-light-grey font-bold text-lg leading-[25px] hover:bg-theme-dark-grey">
                        See Our Portfolio
                        <i className="las la-arrow-right ml-4 text-3xl"></i>
                    </button>
                </div>

                <div className="absolute bottom-0 -left-20 w-80 h-20 hidden custom-lg:flex">
                    <button onClick={() => setHeroImageNum(1)}
                        className={`w-20 h-20 font-bold ${heroImageNum == 1 ? 'bg-black text-white' : 'bg-white hover:bg-theme-very-light-grey text-theme-medium-grey'}`}>
                        01
                    </button>
                    <button onClick={() => setHeroImageNum(2)}
                        className={`w-20 h-20 font-bold ${heroImageNum == 2 ? 'bg-black text-white' : 'bg-white hover:bg-theme-very-light-grey text-theme-medium-grey'}`}>
                        02
                    </button>
                    <button onClick={() => setHeroImageNum(3)}
                        className={`w-20 h-20 font-bold ${heroImageNum == 3 ? 'bg-black text-white' : 'bg-white hover:bg-theme-very-light-grey text-theme-medium-grey'}`}>
                        03
                    </button>
                    <button onClick={() => setHeroImageNum(4)}
                        className={`w-20 h-20 font-bold ${heroImageNum == 4 ? 'bg-black text-white' : 'bg-white hover:bg-theme-very-light-grey text-theme-medium-grey'}`}>
                        04
                    </button>
                </div>

            </section>
        </>
    );
}