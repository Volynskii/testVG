import styles from './MainBox.module.scss';


const MainBox = ({children}) => {
    return (
        <>
            <section className={styles.holder}>
                {children}
            </section>
        </>
    );
};

export default MainBox;