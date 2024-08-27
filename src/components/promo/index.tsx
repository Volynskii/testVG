"use client";

import React, { useRef, useState } from 'react';
import styles from './Promo.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

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
    const swiperRef = useRef<any>(null); // Создание рефа для Swiper
    const [currentSlide, setCurrentSlide] = useState(1); // Хранение текущего слайда

    return (
        <div className={styles.content}>
            <div className={styles.slider}>
                <ul className={styles.list}>
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)} // Обновление текущего слайда
                    >
                        {pictures.map((picture, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.item}>
                                    <div className={styles.preview}>
                                        <div className={styles.picture}>
                                            <div className={styles.link}>
                                                <Image
                                                    src={picture}
                                                    width={1260}
                                                    height={708}
                                                    alt={`picture-${index}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ul>
            </div>

            <div className={styles.control}>
                <div className={styles.navigation}>
                    <a
                        className={styles.prev}
                        onClick={() => swiperRef.current?.slidePrev()}
                    ></a>
                    <a
                        className={styles.next}
                        onClick={() => swiperRef.current?.slideNext()}
                    ></a>
                </div>

                <div className={styles.pagination}>
                    <div className={styles.fraction}>{`${currentSlide}/${pictures.length}`}</div>
                    <div className={styles.progress}>

                        {/* Генерация навигации по слайдам */}
                        {pictures.map((_, index) => (
                            <div
                                key={index}
                                className={classNames(styles.thumb, {
                                    [styles.thumbPassed]: index < currentSlide,  // Применение стиля thumbPassed для предыдущих слайдов
                                    [styles.thumb]: true  // Применение базового стиля для всех слайдов
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
