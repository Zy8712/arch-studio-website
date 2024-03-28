export default function PageLayout(props){
    return(
        <>
            <div className="w-full h-full min-h-screen flex flex-col items-center pb-[200px] border-2 border-black border-solid">
                <div className="w-full max-w-[1110px] h-full min-h-screen border-blue-500 border-2 border-solid">
                    {props.children}
                </div>
            </div>
        </>
    );
}