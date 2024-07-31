import React from 'react';
import styles from './Promo.module.scss';
import Image from "next/image";

const Promo = () => {

    return (
        <div className={styles.content}>
           <div className={styles.slider}>
               <ul className={styles.list}>
                   {[1,2].map((item,index) => (
                       <div key={index} className={styles.item}>
                           <div className={styles.preview}>
                               <div className={styles.picture}>
                                   <div className={styles.link}>
                                       <Image src={'https://cdnapi.smotrim.ru/api/v1/pictures/5067058/hd/redirect'}
                                              width={1260} height={708} alt={'picture'}
                                       />
                                   </div>
                               </div>
                           </div>
                       </div>
                   ))}
               </ul>
           </div>
        </div>
    );
};

export default Promo;