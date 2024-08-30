import styles from './content.module.scss';

interface ContentBoxProps {
    children: React.ReactNode;
}
const ContentBox: React.FC<ContentBoxProps> = ({children}) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
};

export default ContentBox;