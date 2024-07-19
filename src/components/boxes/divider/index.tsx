import React from 'react';
import styles from './DividerBox.module.scss';

const DividerBox = ({children}) => {
    return (
        <div className={styles.holder}>
            {children}
        </div>
    );
};

export default DividerBox;