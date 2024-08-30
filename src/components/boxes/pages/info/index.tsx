import React from 'react';
import styles from './InfoBox.module.scss';

interface InfoBoxProps {
    children?: React.ReactNode;
};

const InfoBox: React.FC<InfoBoxProps> = ({children}) => {
    return (
        <div className={styles.infoBox}>
            {children}
        </div>
    );
};

export default InfoBox;