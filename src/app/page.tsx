import SectionBox from "@/components/boxes/section";
import Divider from "@/components/divider";
import MainMenu from "@/components/mainMenu";
import DividerBox from "@/components/boxes/divider";
import NewsInfo from "@/components/newsInfo";
import Button from "@/components/button";
import InfoHeader from "@/components/infoHeader";
import Promo from "@/components/promo";
import MainBox from "@/components/boxes/main";
import Info from "@/app/lists/info";
import {infoData} from "@/mocks/home/info";
import React from "react";

export default function Home() {

    return (
        <>
            {/* Раздел с большим меню */}
            <SectionBox>
                <MainMenu size={'BIG'}/>

            {/* Разделитель */}
            <DividerBox>
                <Divider/>
            </DividerBox>

            {/* Маленькое меню вне SectionBox */}
            <MainMenu size={'SMALL'}/>
            </SectionBox>

            <SectionBox>
            <Promo/>
            </SectionBox>

            {/* Пресс-центр с заголовком и новостями */}
            <SectionBox>
            <Info data={infoData}>
                <InfoHeader text={infoData.title}/>
            </Info>
            </SectionBox>
        </>
    );
}
