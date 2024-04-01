import RenderPortfolioItems from "../components/portfolio-page-components/RenderPortfolioItems";
import PageLayout from "../layouts/PageLayout";

export default function Portfolio(){
    return(
        <>
            <PageLayout>
                <RenderPortfolioItems />
            </PageLayout>
        </>
    );
}