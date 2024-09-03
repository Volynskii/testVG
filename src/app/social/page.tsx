import SectionBox from "@/components/boxes/section";
import ArticleHeader from "@/components/articleHeader";
import ContentBox from "@/components/boxes/content";
import SocialBox from "@/components/boxes/pages/social";
import styles from './social.module.scss';

const Page = async () => {
    return (
        <>
            <ContentBox>
                <SectionBox>
                    <ArticleHeader text="СОЦИАЛЬНЫЕ СЕТИ" href="/" />
                    <SocialBox>
                        {[1,2,3,4].map((it) => (
                            <div className={`${styles.list} ${styles.vk}`}>
                                <p>ВКОНТАКТЕ</p>
                                <ul>
                                    {
                                        Array.from({length: 10}).map(()=> 
                                            <li>
                                                <a href={'https://vk.com/smotrim'} target={'_blank'}>СМОТРИМ</a>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        ))}
                    </SocialBox>
                </SectionBox>
            </ContentBox>
        </>
    );
}

export default Page;
