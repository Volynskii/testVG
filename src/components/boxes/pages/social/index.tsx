import styles from './SocialBox.module.scss';

interface SocialBoxProps {
    children: React.ReactNode;
}
const SocialBox: React.FC<SocialBoxProps> = ({children}) => {
    return (
        <div className={styles.socialBox}>
            {children}
        </div>
    );
};

export default SocialBox;