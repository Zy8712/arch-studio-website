export default function ContactForm() {
    return (
        <>
            <section className="mt-40 w-full h-[352px] flex justify-between border-black border-2 border-solid">
                <h2 className="font-bold text-7xl text-theme-very-dark-blue">
                    Connect <br />with Us
                </h2>
                <div className="relative w-[730px] h-full">
                    <div className="w-full h-[262px] flex flex-col justify-between font-bold text-lg text-theme-light-grey">
                        <input type="name" placeholder="Name" className="w-full h-11 ps-4 border-b-[1px] border-b-theme-very-dark-blue" />
                        <input type="email" placeholder="Email" className="w-full h-11 ps-4 border-b-[1px] border-b-theme-very-dark-blue" />
                        <textarea className="w-full h-[92px] ps-4 border-b-[1px] border-b-theme-very-dark-blue" rows={4} placeholder="Message">
                        </textarea>
                    </div>
                    <button className="absolute bottom-0 right-0 w-20 h-20 grid place-items-center bg-theme-very-dark-blue">
                        <i className="las la-arrow-right text-3xl text-white"></i>
                    </button>
                </div>

            </section>
        </>
    );
}