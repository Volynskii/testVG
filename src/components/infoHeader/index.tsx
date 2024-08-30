import React from 'react';
import styles from './infoHeader.module.scss';

interface InfoHeaderProps {
    text: string    
};

const InfoHeader: React.FC<InfoHeaderProps> = ({text}) => {
    return (
        <div className={styles.holder}>
            <h1 className={styles.h1}>
                {text}
            </h1>
        </div>
    );
};

export default InfoHeader;