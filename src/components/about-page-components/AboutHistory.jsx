
export default function AboutHistory() {
    return (
        <>
            <section className="my-[200px] w-full h-[568px] flex justify-between border-black border-2 border-solid">
                <div className="w-full h-full">
                    <div className="w-[446px] h-full flex flex-col justify-end">
                        <h2 className="font-bold text-7xl text-theme-very-dark-blue">Our <br />Heritage</h2>
                        <div className="mt-12 text-lg">
                            <p>
                                Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
                            </p>
                            <p className="my-[18px]">
                                Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.
                            </p>
                            <p>
                                Our small team of world-class professionals provides input on every project.
                            </p>
                        </div>
                    </div>
                </div>

                <img src="/images/about/desktop/image-heritage.jpg" className="h-full" />
            </section>
        </>
    );
}