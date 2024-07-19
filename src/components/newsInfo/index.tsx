import React from 'react';
import styles from './NewsInfo.module.scss';
import Divider from "@/components/divider";

const NewsInfo = () => {
    return (
        <>
        <div className={styles.info}>
            <div className={styles.date}>13 ИЮНЯ</div>
            <div className={styles.title}>ВГТРК приглашает на целевое обучение в «МИРЭА – Российский технологический университет»</div>
        </div>
            <Divider full={true}/>
        </>
    );
};

export default NewsInfo;