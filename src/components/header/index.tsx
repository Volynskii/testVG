import React from 'react';
import Image from "next/image";
import logo from '@/../public/images/logo-russia-colored.svg';
import styles from './Header.module.scss';


const Header = () => {
    return (
        <header className={styles.header}>
        <div className={styles.wrapper}>

            <ul className={styles.languageSwitcher}>
                <li><span>RUS</span></li>
                <li><span>ENG</span></li>
            </ul>


             <Image src={logo}/>


        </div>
        </header>
    );
};

export default Header;
