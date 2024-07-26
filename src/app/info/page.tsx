import SectionBox from "@/components/boxes/section";
import ArticleHeader from "@/components/articleHeader";
import ContentBox from "@/components/boxes/content";
import InfoBox from "@/components/boxes/pages/info";

const Page = async () => {

    return (
        <>
            <ContentBox>
                <SectionBox>
                    <ArticleHeader text="информация" href="/" />
                    <InfoBox>

                    </InfoBox>
                </SectionBox>
            </ContentBox>
        </>
    );
}

export default Page;
