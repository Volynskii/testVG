import SectionBox from "@/components/boxes/section";
import Divider from "@/components/divider";
import MainMenu from "@/components/mainMenu";
import DividerBox from "@/components/boxes/divider";
import NewsInfo from "@/components/newsInfo";
import Button from "@/components/button";
import InfoHeader from "@/components/infoHeader";
import Promo from "@/components/promo";
import MainBox from "@/components/boxes/main";

export default function Home() {
    return (
        <>
            {/*<MainBox>*/}
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
                <InfoHeader text={"ПРЕСС-ЦЕНТР"}/>
                <NewsInfo/>
                <NewsInfo/>
                <Button text={'Показать больше'}/>
            </SectionBox>
            {/*</MainBox>*/}
        </>
    );
}
