import Content from "@/components/boxes/content";
import SectionBox from "@/components/boxes/section";
import AboutBox from "@/components/boxes/pages/about";
import AboutArticle from "@/app/about/lists/article/article";
import DocsList from "@/app/about/lists/docs/docs";
import { documents } from "@/mocks/documentsMock";


const Page = async () => {
    return (
        <>
            <AboutBox>
                <Content>
                    <SectionBox>
                        <AboutArticle/>
                        <DocsList documents={documents}/>
                    </SectionBox>
                </Content>
            </AboutBox>
        </>
    )
}

export default Page;
