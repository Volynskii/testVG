import styles from './Footer.module.scss';
import Image from "next/image";
import logo from '../../../public/images/mocks/logo-karusel.svg';
import {firstLine, secondLine, thirdLine} from "@/mocks/footer/pictures";

const Footer = () => {
    return (
        <>
        <footer className={styles.holder}>
            <div className={styles.footerChannels}>
            <div className={styles.channels}>
                <div className={styles.content}>

                    <ul className={styles.channelsList}>
                        {firstLine.map((logoItem, index)=> (
                            <li key={index} className={styles.item}>
                                <div className={styles.link}>
                                    <Image src={logoItem} alt={'picture'}/>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <ul className={styles.channelsList}>
                        {secondLine.map((logoItem,index)=> (
                            <li key={index} className={styles.item}>
                                <div className={styles.link}>
                                    <Image src={logoItem} alt={'picture'}/>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <ul className={styles.channelsList}>
                        {thirdLine.map((logoItem,index)=> (
                            <li key={index} className={styles.item}>
                                <div className={styles.link}>
                                    <Image src={logo} alt={'picture'}/>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
            </div>



            <div className={styles.footerNavigation}>
                <div className={styles.navigation}>
                    <div className={styles.content}>
                        {[1,2].map((item,index) => (
                            <div key={index} className={styles.type}>
                                <div className={styles.list}>
                                    {[1,2,3].map((it,index) => (
                                        <div key={index} className={styles.item}>
                                            <div className={styles.link}>

                                                технологии

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className={styles.footerInfo}>
                <p>© 2024 Сетевое издание “Государственный Интернет-Канал “Россия”. Учредитель:
                    Федеральное государственное унитарное предприятие “Всероссийская государственная телевизионная и
                    радиовещательная компания” (ВГТРК). Свидетельство о регистрации СМИ ЭЛ № ФС 77-59166 от 22.08.2014.
                    Выдано Федеральной службой по надзору в сфере связи, информационных технологий и массовых
                    коммуникаций.</p>
                <p>
                    Главный редактор: Филипповский А. А. Адрес электронной почты редакции: info@vgtrk.com, телефон редакции:
                    +7(495)232-63-33. Для детей старше 16 лет. Все права на любые материалы, опубликованные на сайте,
                    защищены в соответствии с российским и международным законодательством об интеллектуальной
                    собственности. Любое использование текстовых, фото, аудио и видеоматериалов возможно только с
                    согласия
                    правообладателя (ВГТРК).</p>
            </div>


        </footer>
        </>
    );
};

export default Footer;