import PageLayout from "../layouts/PageLayout";
import HomeHero from "../components/home-page-components/HomeHero";
import HomeWelcome from "../components/home-page-components/HomeWelcome";
import AboutPageRedirect from "../components/home-page-components/AboutPageRedirect";
import PortfolioPageRedirect from "../components/home-page-components/PortfolioPageRedirect";

export default function Home() {
    return (
        <>
            <PageLayout>
                <HomeHero />
                <HomeWelcome />
                <AboutPageRedirect />
                <PortfolioPageRedirect />
            </PageLayout>
        </>
    );
}