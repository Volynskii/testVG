import SectionBox from "@/components/boxes/section";
import Info from "@/app/lists/info";
import {infoData} from "@/mocks/home/info";
import ArticleHeader from "@/components/articleHeader";
import React from "react";
import Content from "@/components/boxes/content";
import PressCenter from "@/app/news/lists/pressCenter";


const Page = async () => {
    return (
        <>
            {/* Пресс-центр с заголовком и новостями */}
            <SectionBox>
                <Info data={infoData}>
                    <Content>
                    <ArticleHeader text="ПРЕСС-ЦЕНТР" href="/" />
                    </Content>
                </Info>
            </SectionBox>

           <PressCenter/>
        </>
    )
}

export default Page;
