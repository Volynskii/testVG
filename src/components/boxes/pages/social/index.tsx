import styles from './SocialBox.module.scss';

const SocialBox = ({children}) => {
    return (
        <div className={styles.socialBox}>
            {children}
        </div>
    );
};

export default SocialBox;