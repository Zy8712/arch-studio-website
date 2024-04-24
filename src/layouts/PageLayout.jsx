export default function PageLayout(props){
    return(
        <>
            <div className="w-full h-full min-h-screen flex flex-col items-center pb-28 sm:pb-[200px] px-0 md:px-[97.5px] custom-lg:px-0">
                <div className="w-full custom-lg:max-w-[1110px] h-full min-h-screen">
                    {props.children}
                </div>
            </div>
        </>
    );
}