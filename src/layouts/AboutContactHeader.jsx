export default function AboutContactHeader(props) {
    return (
        <>
            <section className="relative w-full h-[529px] sm:h-[720px]">
                <div className="relative w-full sm:w-[573px] custom-md:w-[635px] h-auto sm:h-full">
                    <img src={props.desktopImg} className="h-full hidden custom-md:inline-block" />
                    <img src={props.tabletImg} className="h-full hidden sm:inline-block custom-md:hidden" />
                    <img src={props.mobileImg} className="w-full inline-block sm:hidden" />
                    <div className="absolute top-0 w-full h-full bg-black bg-opacity-35"></div>
                </div>
                <div className="absolute bottom-0 right-[calc(100%-350px)] sm:right-0 w-[350px] sm:w-[572px] custom-md:w-[619.5px] h-[360px] sm:h-[431px] custom-md:h-[503px] flex flex-col justify-center sm:justify-end items-center bg-white px-4">
                    <span className="absolute -top-20 right-0 hidden sm:inline-block font-bold text-[170px] custom-md:text-[250px] leading-[200px] text-theme-very-light-grey">
                        {props.sectionHead}
                    </span>
                    <div className="w-full sm:w-[446px] h-[283px] flex flex-col justify-between">
                        <h1 className="font-bold text-5xl sm:text-7xl text-theme-very-dark-blue">
                            {props.sectionSub}
                        </h1>
                        <p className="font-medium text-lg text-theme-dark-grey">
                            {props.descrip}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}