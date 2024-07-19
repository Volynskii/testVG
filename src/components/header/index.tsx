import React from 'react';
import Image from "next/image";
import logo from '@/../public/images/logo-russia-colored.svg';
import styles from './Header.module.scss';
import MainBox from "@/components/boxes/main";


const Header = () => {
    return (
        <header className={styles.header}>
            <MainBox>
        <div className={styles.wrapper}>

            <ul className={styles.languageSwitcher}>
                <li><span>RUS</span></li>
                <li><span>ENG</span></li>
            </ul>


             <Image src={logo}/>


        </div>
            </MainBox>
        </header>
    );
};

export default Header;
