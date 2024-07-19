import React from 'react';
import styles from "@/components/divider/Divider.module.scss";

const Divider = ({full}) => {

    return (
        <div className={full ? styles.dividerFull : styles.divider}>
        </div>
    );
};

export default Divider;