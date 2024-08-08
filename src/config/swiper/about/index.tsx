import { Navigation } from 'swiper/modules';

export const swiperConfig = {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.prev',
        prevEl: '.next',
    },
    modules: [Navigation],
};