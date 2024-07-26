import styles from './InfoBox.module.scss';

const InfoBox = ({children}) => {
    return (
        <div className={styles.infoBox}>
            {children}
        </div>
    );
};

export default InfoBox;