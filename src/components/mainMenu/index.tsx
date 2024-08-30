import React from 'react';
import styleBig from "@/components/mainMenu/MainMenuBig.module.scss";
import styleSmall from "@/components/mainMenu/MainMenuSmall.module.scss";
import Link from "next/link";

interface MainMenuProps {
    size: "BIG" | "SMALL";
    data: {
        title?: string;
        channels: {
            href: string;
            name: string;
        }[];
    }[];
}

// TODO: data затипизировать, когда будет точно известно, какие данные будут

const MainMenu: React.FC<MainMenuProps> = ({ size, data }) => {
    const SIZES = {
        SMALL: styleSmall,
        BIG: styleBig
    };

    const styles = SIZES[size];

    return (
        <div className={styles.content}>
            {data.map(({title, channels }, index) => (
                <div key={index} className={styles.type}>
                    {title && (
                        <h2 className={styles.title}>{title}</h2>
                    )}
                    <ul className={styles.list}>
                        {channels.map(({ href, name }: { href: string, name: string }) => (
                            <li key={href} className={styles.item}>
                                <Link href={href}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};


export default MainMenu;
