import styles from './MainBox.module.scss';


interface MainrBoxProps {
    children: React.ReactNode
};

const MainBox: React.FC<MainrBoxProps> = ({children}) => {
    return (
        <>
            <main className={styles.holder}>
                {children}
            </main>
        </>
    );
};

export default MainBox;