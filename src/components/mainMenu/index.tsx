import React from 'react';
import styleBig from "@/components/mainMenu/MainMenuBig.module.scss";
import styleSmall from "@/components/mainMenu/MainMenuSmall.module.scss";
import Link from "next/link";

const MainMenu = ({size}) => {

    const SIZES = {
        SMALL: styleSmall,
        BIG: styleBig
    }

    const styles = SIZES[size];

    return (
       <>
           <div className={styles.content}>
               <div className={styles.type}>
                   <h2 className={styles.title}>Телевидение</h2>
                   <ul className={styles.list}>
                       <li className={styles.item}>
                           <Link href="/russiatv">Россия 1</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Россия к</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Россия 24</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Россия ртр</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Карусель</Link>
                       </li>
                   </ul>
               </div>

               <div className={styles.type}>
                   <h2 className={styles.title}>Радио</h2>
                   <ul className={styles.list}>
                       <li className={styles.item}>
                           <Link href="/russiatv">Маяк</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Радио России</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Вести FM</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Радио</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Культура</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Юность</Link>
                       </li>
                   </ul>
               </div>

               <div className={styles.type}>
                   <h2 className={styles.title}>Интернет</h2>
                   <ul className={styles.list}>
                       <li className={styles.item}>
                           <Link href="/russiatv">Смотрим</Link>
                       </li>
                       <li className={styles.item}>
                           <Link href="/russiatv">Вести.ru</Link>
                       </li>
                   </ul>
               </div>
           </div>
       </>
    );
};

export default MainMenu;