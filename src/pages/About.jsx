import PageLayout from "../layouts/PageLayout";
import AboutContactHeader from "../layouts/AboutContactHeader";
import AboutHistory from "../components/about-page-components/AboutHistory";
import AboutLeaders from "../components/about-page-components/AboutLeaders";

export default function About(){
    return(
        <>
            <PageLayout>
                <AboutContactHeader 
                    sectionHead="About"
                    sectionSub="Your team of professionals"
                    descrip="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
                    desktopImg="/images/about/desktop/image-hero.jpg"
                    tabletImg="/images/about/tablet/image-hero.jpg"
                    mobileImg="/images/about/mobile/image-hero.jpg"
                />
                <AboutHistory />
                <AboutLeaders />

            </PageLayout>
        </>
    );
}