import SectionBox from "@/components/boxes/section";
import Divider from "@/components/divider";
import MainMenu from "@/components/mainMenu";
import DividerBox from "@/components/boxes/divider";
import InfoHeader from "@/components/infoHeader";
import Promo from "@/components/promo";
import Info from "@/app/lists/info";
import {infoData} from "@/mocks/home/info";
import {mainMenuBigDData} from "@/mocks/home/bigMenuData";
import {mainMenuSmallDData} from "@/mocks/home/smallMenuData";

export default function Home() {


    return (
        <>
            {/* Раздел с большим меню */}
            <SectionBox>
                <MainMenu size={'BIG'} data={mainMenuBigDData}/>

            {/* Разделитель */}
            <DividerBox>
                <Divider/>
            </DividerBox>

            {/* Маленькое меню вне SectionBox */}
            <MainMenu data={mainMenuSmallDData}  size={'SMALL'}/>
            </SectionBox>

            <SectionBox>
            <Promo/>
            </SectionBox>

            {/* Пресс-центр с заголовком и новостями */}
            <SectionBox>
            <Info data={infoData} href={'/news'}>
                <InfoHeader text={infoData.title}/>
            </Info>
            </SectionBox>
        </>
    );
}
