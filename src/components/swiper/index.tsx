"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperComponent = ({slides, styles}) => {
    return (
        // <Swiper
        //     slidesPerView={1}
        // >
            {slides.map((slide, index) => (
                <SwiperSlide>
                <div key={index} className={styles.item}>
                    <div className={styles.preview}>
                        <div className={styles.picture}>
                            <div className={styles.link}>
                                <Image
                                    src={slide}
                                    width={1260}
                                    height={708}
                                    alt={'picture'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/*</SwiperSlide>*/}
            ))}
        </Swiper>
    );
};

export default SwiperComponent;