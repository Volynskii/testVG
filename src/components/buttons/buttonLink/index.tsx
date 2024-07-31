"use client";

import styles from './ButtonLink.module.scss';
import Link from "next/link";

const ButtonLink = ({text, href}) => {
    console.log('href2', href)
    return (
        <button className={styles.button}>
           <Link href={href}>
               {text}
           </Link>
        </button>
    );
};

export default ButtonLink;