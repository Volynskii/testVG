"use client";

import React, { useRef, useState } from 'react';
import styles from './Promo.module.scss';
import classNames from 'classnames';
import "swiper/css";
import { SwiperPromo } from './swiperPromo';

const pictures = [
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5139433/hd/redirect',
    'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect',

];

const Promo: React.FC = () => {
    
    const swiperRef = useRef<null | any>(null); // Создание рефа для Swiper
    const [currentSlide, setCurrentSlide] = useState<number>(1); // Хранение текущего слайда

    const { content, slider, list, pagination, control, navigation, thumb, progress, fraction, prev, next, thumbPassed } = styles;

    return (
        <div className={content}>
            <div className={slider}>
                <ul className={list}>
                    <SwiperPromo 
                        setCurrentSlide={setCurrentSlide} 
                        swiperRef={swiperRef} 
                        pictures={pictures} 
                        styles={styles}
                    />
                </ul>
            </div>

            <div className={control}>
                <div className={navigation}>
                    <a
                        className={prev}
                        onClick={() => swiperRef.current?.slidePrev()}
                    ></a>
                    <a
                        className={next}
                        onClick={() => swiperRef.current?.slideNext()}
                    ></a>
                </div>

                <div className={pagination}>
                    <div className={fraction}>{`${currentSlide}/${pictures.length}`}</div>
                    <div className={progress}>

                        {/* Генерация навигации по слайдам */}
                        {pictures.map((_, index) => (
                            <div
                                key={index}
                                className={classNames(thumb, {
                                    [thumbPassed]: index < currentSlide,  // Применение стиля thumbPassed для предыдущих слайдов
                                    [thumb]: true  // Применение базового стиля для всех слайдов
                                })}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promo;
