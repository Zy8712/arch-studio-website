import about_leaders_data from "./about-leaders.json";

export default function AboutLeaders() {
    return (
        <>
            <section className="w-full h-[861px] flex justify-between border-black border-2 border-solid">
                <div className="w-full h-full">
                    <h2 className="font-bold text-7xl text-theme-very-dark-blue">The <br />Leaders</h2>
                </div>
                <div className="w-[730px] min-w-[730px] h-full flex flex-wrap justify-between border-black border-solid border-2">
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