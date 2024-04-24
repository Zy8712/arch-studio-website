export default function ContactLocations() {
    return (
        <>
            <div className="w-full h-[367px] sm:h-[560px] flex justify-center">
                <img src="/images/contact/desktop/image-map.png" alt="" className="h-full hidden custom-lg:inline-block" />
                <img src="/images/contact/tablet/image-map.png" alt="" className="h-full hidden sm:inline-block custom-lg:hidden" />
                <img src="/images/contact/mobile/image-map.png" alt="" className="h-full inline-block sm:hidden" />
            </div>
        </>
    );
}