import styles from './AboutBox.module.scss';

const AboutBox = ({children}) => {
    return (
        <div className={styles.aboutBox}>
            {children}
        </div>
    );
};

export default AboutBox;