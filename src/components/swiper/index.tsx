
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { type Swiper as SwiperRef } from 'swiper'

interface SwiperComponentProps {
    content: React.ReactNode[];
    styles?: {
        [key: string]: string;
    };
    config?: {
        delay?: number;
        disableOnInteraction?: boolean;
    };
    onSlideChange?: (swiper: any) => void;
    getSwiperRef?: (ref: SwiperRef) => void;
};


    /**
     * Компонент Swiper, который может принимать контент (массив React-элементов), 
     * стили (объект с css-классами) и конфигурацию (объект с настройками autoplay).
     * 
     * Если не передать функцию getNumberPage, то компонент не будет отображаться.
     * 
     * @param {React.ReactNode[]} content - Массив React-элементов, которые будут отображаться на слайдах
     * @param {{[key: string]: string}} [styles] - Объект с css-классами, которые могут быть использованы в Swiper
     * @param {{delay?: number, disableOnInteraction?: boolean}} [config] - Объект с настройками Swiper
     * @param {(number: number) => void} [getNumberPage] - Функция, которая будет вызвана, когда пользователь перейдет на другой слайд
     * @param {(ref: any) => void} [getSwiperRef] - Функция, которая будет вызвана, когда Swiper будет инициализирован
     * 
     * @returns {React.ReactElement} - React-элемент Swiper
     */
const SwiperComponent: React.FC<SwiperComponentProps> = ({content, styles, config, onSlideChange, getSwiperRef}) => {

    if (!onSlideChange || !getSwiperRef) return <></>;

    return <>
        <Swiper
            style={styles}
            loop={true}
            autoplay={config}
            modules={[Autoplay, Navigation]}
            onSwiper={getSwiperRef}
            onSlideChange={onSlideChange} // Обновление текущего слайда
        >
            {
                content.map((el: React.ReactNode, index: number) => <SwiperSlide key={index}> {el} </SwiperSlide>)
            }
        </Swiper>
    </>;
};

export default SwiperComponent;