import styles from './button.module.scss'

const ButtonBox = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default ButtonBox;