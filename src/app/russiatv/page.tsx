import SectionBox from "@/components/boxes/section";
import ContentBox from "@/components/boxes/content";
import styles from './russiaTv.module.scss'


const Page = async () => {

    const { container, containerInner, top, title, videoContainer, textLive, info, label, name, iframe}= styles;

    return (
        <>
            <SectionBox>
                <ContentBox>
                    <div className={container}>


                        <div className={containerInner}>
                            <div className={top}>
                                <div className={title}>
                                    <p className={label}>телеканал</p>
                                    <p className={name}>Россия 1</p>
                                </div>

                                <div className={info}>
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


                        <div className={containerInner}>
                            <div className={textLive}>прямой эфир</div>
                            <div className={videoContainer}>
                                <iframe className={iframe}>

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
