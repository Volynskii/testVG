"use client";

import React from 'react';
import styles from './ButtonLink.module.scss';
import Link from "next/link";

interface ButtonLinkProps {
    text: string;
    href: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({text, href}) => {

    return (
        <button className={styles.button}>
           <Link className={styles.text} href={href}>
               {text}
           </Link>
        </button>
    );
};

export default ButtonLink;