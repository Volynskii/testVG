import React from 'react';
import styles from './SectionBox.module.scss';

const SectionBox = ({children}) => {
    return (
        <section className={styles.sectionBox}>
            {children}
        </section>
    );
};

export default SectionBox;