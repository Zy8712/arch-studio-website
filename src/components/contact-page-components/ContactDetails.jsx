export default function ContactDetails() {
    return (
        <>
            <section className="my-[200px] w-full h-[207px] flex">
                <div className="w-1/3 h-full">
                    <h2 className="font-bold text-7xl text-theme-very-dark-blue">
                        Contact Details
                    </h2>
                </div>

                <div className="w-1/3 h-full flex flex-col justify-between">
                    <div className="h-[124px] flex flex-col justify-between">
                        <p className="font-bold text-lg text-theme-dark-grey">Main Office</p>
                        <div className="w-full flex flex-col font-medium text-lg text-theme-dark-grey">
                            <p>Main: archone@mail.com</p>
                            <p>Address: 1892 Chenoweth Drive TN</p>
                            <p>Phone: 123-456-3451</p>
                        </div>
                    </div>

                    <div className="flex items-center font-bold text-lg text-theme-very-dark-blue">
                        View on Map
                        <i className="las la-arrow-right ml-4 text-2xl"></i>
                    </div>
                </div>

                <div className="w-1/3 h-full flex flex-col justify-between">
                    <div className="h-[124px] flex flex-col justify-between">
                        <p className="font-bold text-lg text-theme-dark-grey">Main Office</p>
                        <div className="w-full flex flex-col font-medium text-lg text-theme-dark-grey">
                            <p>Main: archtwo@mail.com</p>
                            <p>Address: 3399 Wines Lane TX</p>
                            <p>Phone: 832-123-4321</p>
                        </div>
                    </div>

                    <div className="flex items-center font-bold text-lg text-theme-very-dark-blue">
                        View on Map
                        <i className="las la-arrow-right ml-4 text-2xl"></i>
                    </div>
                </div>
            </section>
        </>
    );
}