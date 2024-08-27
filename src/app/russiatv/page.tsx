import SectionBox from "@/components/boxes/section";
import ContentBox from "@/components/boxes/content";
import styles from './russiaTv.module.scss'


const Page = async () => {
    return (
        <>
            <SectionBox>
                <ContentBox>
                    <div className={styles.container}>


                        <div className={styles.containerInner}>
                            <div className={styles.top}>
                                <div className={styles.title}>
                                    <p className={styles.label}>телеканал</p>
                                    <p className={styles.name}>Россия 1</p>
                                </div>

                                <div className={styles.info}>
                                    <ul>
                                        <li>
                                            <span>Основана</span>
                                            <span>1991</span>
                                        </li>
                                        <li>
                                            <span>Вещание</span>
                                            <span>Россия, СНГ</span>
                                        </li>
                                        <li>
                                            <span>Сайт</span>
                                            <span>smotrim.ru</span>
                                        </li>

                                    </ul>
                                </div>rsc

                            </div>
                        </div>


                        <div className={styles.containerInner}>
                            <div className={styles.textLive}>прямой эфир</div>
                            <div className={styles.videoContainer}>
                                <iframe className={styles.iframe}>

                                </iframe>
                            </div>
                        </div>


                    </div>
                </ContentBox>
            </SectionBox>
        </>
    )
}

export default Page;
