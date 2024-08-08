"use client";

import styles from './ButtonLink.module.scss';
import Link from "next/link";

const ButtonLink = ({text, href}) => {

    return (
        <button className={styles.button}>
           <Link className={styles.text} href={href}>
               {text}
           </Link>
        </button>
    );
};

export default ButtonLink;