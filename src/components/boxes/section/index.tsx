import { ReactNode } from 'react';
import styles from './SectionBox.module.scss';

interface ButtonBoxProps {
    children: ReactNode;
};

const SectionBox: React.FC<ButtonBoxProps> = ({children}) => {
    return (
        <section className={styles.sectionBox}>
            {children}
        </section>
    );
};

export default SectionBox;