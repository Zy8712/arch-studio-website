import about_leaders_data from "./about-leaders.json";

export default function AboutLeaders() {
    return (
        <>
            <section className="w-full h-[1786px] custom-md:h-[950px] custom-lg:h-[861px] flex flex-col custom-lg:flex-row justify-between">
                <div className="w-auto h-auto custom-lg:h-full text-center custom-md:text-left">
                    <h2 className="font-bold text-7xl text-theme-very-dark-blue">The <br />Leaders</h2>
                </div>
                <div className="w-full custom-lg:w-[730px] h-[1607px] custom-md:h-[783px] custom-lg:h-full flex flex-col custom-md:flex-row flex-nowrap custom-md:flex-wrap justify-around custom-lg:justify-between items-center custom-md:items-start">
                    {about_leaders_data.map((leader, index) => (
                        <div className="w-[350px] h-[399px] flex flex-col">
                            <img src={leader.profile_image} className="w-full" />
                            <p className="font-bold text-[32px] leading-[40px] text-theme-very-dark-blue">
                                {leader.name}
                            </p>
                            <span className="font-medium text-lg text-theme-very-dark-blue opacity-75">
                                {leader.role}
                            </span>
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
}








































































{/** True Leader: Bryaaaaan */}