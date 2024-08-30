import { ReactNode } from 'react';
import styles from './button.module.scss'

interface MyComponentProps {
    children: ReactNode;
};

// TODO: make it functional
const ButtonBox: React.FC<MyComponentProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default ButtonBox;