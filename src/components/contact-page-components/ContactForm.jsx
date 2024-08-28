import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if name and message are empty
        if (!name.trim() || !message.trim()) {
            setError('Please enter your name and message.');
            return;
        }

        // Check if email is valid
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // If all fields are valid, you can proceed with form submission
        // For demonstration purposes, let's just log the data
        console.log({ name, email, message });

        // Clearing error and input fields after successful submission
        setError('');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <section className="mt-40 w-full h-[492px] custom-lg:h-[352px] flex flex-col custom-lg:flex-row justify-between">
                <h2 className="font-bold text-6xl sm:text-7xl text-theme-very-dark-blue">
                    Connect <br />with Us
                </h2>
                <div className="relative w-full custom-lg:w-[730px] h-[346px] custom-lg:h-full">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full h-[262px] flex flex-col justify-between font-bold text-lg text-theme-light-grey">
                            {/** Name text box */}
                            {/** Email text box */}
                            {/** Message text box */}
                            {/** View Functioning Boxes on Full Site: https://arch-studio-website-green.vercel.app/ */}
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button
                            type="submit"
                            className="absolute bottom-0 right-0 w-20 h-20 grid place-items-center bg-theme-very-dark-blue"
                        >
                            <i className="las la-arrow-right text-3xl text-white"></i>
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
