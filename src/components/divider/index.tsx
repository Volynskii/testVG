import React from 'react';
import styles from "@/components/divider/Divider.module.scss";

interface DividerProps {
    full?: boolean;
};

const Divider: React.FC<DividerProps> = ({full}) => {

    return (
        <div className={full ? styles.dividerFull : styles.divider}>
        </div>
    );
};

export default Divider;