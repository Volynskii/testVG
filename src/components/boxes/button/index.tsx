import React, { ReactNode } from 'react';
import styles from './button.module.scss'

interface ButtonBoxProps {
    children?: ReactNode;
};

// TODO: make it functional
const ButtonBox: React.FC<ButtonBoxProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default ButtonBox;