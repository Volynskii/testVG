import styles from './Button.module.scss';

interface ButtonProps {
    onClick: () => void;
    text: string;
};

const Button: React.FC<ButtonProps> = ({text, onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {text}
        </button>
    );
};

export default Button;