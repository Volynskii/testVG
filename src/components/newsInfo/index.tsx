import React from 'react';
import styles from './NewsInfo.module.scss';
import Divider from "@/components/divider";

const NewsInfo = ({date, headline, isLast}) => {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.date}>{date}</div>
                <div className={styles.title}>{headline}</div>
            </div>
            {!isLast && <Divider full={true}/>}
        </>
    );
};

export default NewsInfo;
