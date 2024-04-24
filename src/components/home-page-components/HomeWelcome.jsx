export default function HomeWelcome() {
    return (
        <>
            <section className="w-full h-[475px] sm:h-[568px] flex">
                <div className="relative w-full h-full flex flex-col justify-end items-center">
                    <span className="absolute -top-20 left-0 hidden sm:inline-block font-bold text-[170px] custom-md:text-[250px] leading-[200px] text-theme-very-light-grey">Welcome</span>
                    <div className="w-full custom-md:w-[446px] h-full sm:h-[411px] custom-md:h-[483px] flex flex-col justify-between px-5">
                        <h1 className="font-bold text-6xl sm:text-7xl">Welcome to Arch Studio</h1>
                        <div className="w-full font-medium text-lg leading-6 text-theme-dark-grey">
                            <p>
                                We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
                            </p>
                            <p className="my-[18px]">
                                Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
                            </p>
                            <p>
                                We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                            </p>
                        </div>
                    </div>
                </div>

                <img src="/images/home/desktop/image-welcome.jpg" className="h-full hidden custom-lg:inline-block" />
            </section>
        </>
    );
}