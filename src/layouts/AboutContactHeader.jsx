export default function AboutContactHeader(props) {
    return (
        <>
            <section className="relative w-full h-[720px] border-black border-2 border-solid">
                <div className="relative w-[635px] h-full">
                    <img src={props.desktopImg} className="h-full" />
                    <div className="absolute top-0 w-full h-full bg-black bg-opacity-35"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-[619.5px] h-[503px] flex flex-col justify-end items-center bg-white">
                    <span className="absolute -top-20 right-0 font-bold text-[250px] leading-[200px] text-theme-very-light-grey">
                        {props.sectionHead}
                    </span>
                    <div className="w-[446px] h-[283px] flex flex-col justify-between">
                        <h1 className="font-bold text-7xl text-theme-very-dark-blue">
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