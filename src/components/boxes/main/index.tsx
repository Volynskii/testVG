import styles from './MainBox.module.scss';


const MainBox = ({children}) => {
    return (
        <>
            <main className={styles.holder}>
                {children}
            </main>
        </>
    );
};

export default MainBox;