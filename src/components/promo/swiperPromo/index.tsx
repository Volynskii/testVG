import SwiperComponent from "@/components/swiper";
import Image from "next/image";
import { type Swiper as SwiperRef } from 'swiper';

interface SwiperPromoProps {
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
    swiperRef: React.MutableRefObject<SwiperRef>;
    pictures: string[];
    styles: {
        [key: string]: string;
    };
}
export const SwiperPromo: React.FC<SwiperPromoProps> = ({setCurrentSlide, swiperRef, pictures, styles})=> {

    const getNumberPage = (swiper: {realIndex: number}) => {
        setCurrentSlide(swiper.realIndex + 1)
    }

    const getSwiperRef = (ref: SwiperRef) => swiperRef.current = ref;

    const contentOfSLides: React.ReactNode[] = pictures.map((slide: string, index: number) => <div key={index} className={styles[0]}>
        <div className={styles[1]}>
            <div className={styles[2]}>
                <div className={styles[3]}>
                    <Image
                        src={slide}
                        width={1260}
                        height={708}
                        alt={'picture'}
                    />
                </div>
            </div>
        </div>
    </div>);

    return <SwiperComponent 
        content={contentOfSLides} 
        config={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        onSlideChange={getNumberPage}
        getSwiperRef={getSwiperRef}
    />
};