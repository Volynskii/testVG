import React from 'react';
import styles from './AboutBox.module.scss';

interface AboutBoxProps {
    children: React.ReactNode
};

const AboutBox: React.FC<AboutBoxProps> = ({children}) => {
    return (
        <div className={styles.aboutBox}>
            {children}
        </div>
    );
};

export default AboutBox;