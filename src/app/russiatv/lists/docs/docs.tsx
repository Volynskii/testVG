import styles from './docs.module.scss';


const DocsList = ({ documents }) => (
    <div className={styles.docs}>
        <div className={styles.container}>
        <h3 className={styles.headline}>Документы</h3>
        <div className={styles.list}>
            {documents.map((doc, index) => (
                <p className={styles.paragraph} key={index}>
                    <a className={styles.anchor} href={doc.href} target="_blank" rel="noopener noreferrer">
                        {doc.text}
                    </a>
                </p>
            ))}
        </div>
        </div>
    </div>
);


export default DocsList;