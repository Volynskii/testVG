import React from 'react';
import styles from './DividerBox.module.scss';

interface DividerBoxProps {
    children: React.ReactNode
};

const DividerBox: React.FC<DividerBoxProps> = ({children}) => {
    return (
        <div className={styles.holder}>
            {children}
        </div>
    );
};

export default DividerBox;