import PageLayout from "../layouts/PageLayout";
import AboutContactHeader from "../layouts/AboutContactHeader";
import ContactDetails from "../components/contact-page-components/ContactDetails";
import ContactLocations from "../components/contact-page-components/ContactLocations";
import ContactForm from "../components/contact-page-components/ContactForm";

export default function Contact() {
    return (
        <>
            <PageLayout>
                <AboutContactHeader
                    sectionHead="Contact"
                    sectionSub="Tell us about your project"
                    descrip="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
                    desktopImg="/images/contact/desktop/image-hero.jpg"
                    tabletImg="/images/contact/tablet/image-hero.jpg"
                    mobileImg="/images/contact/mobile/image-hero.jpg"
                />

                <ContactDetails />

                <ContactLocations />

                <ContactForm />

            </PageLayout>
        </>
    );
}