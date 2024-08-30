import { IDocument } from '@/types';
import styles from './docs.module.scss';

interface DocsListProps {
    documents: IDocument[];
};

const DocsList: React.FC<DocsListProps> = ({ documents }) => {

    const { docs, container, headline, list, paragraph, anchor} = styles;

    return (
        <div className={docs}>
            <div className={container}>
            <h3 className={headline}>Документы</h3>
            <div className={list}>
                {documents.map((doc: IDocument, index: number) => (
                    <p className={paragraph} key={index}>
                        <a className={anchor} href={doc.href} target="_blank" rel="noopener noreferrer">
                            {doc.text}
                        </a>
                    </p>
                ))}
            </div>
            </div>
        </div>
    )
};


export default DocsList;