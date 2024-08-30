import React from 'react';
import styles from './ArticleHeadline.module.scss';
import classNames from 'classnames';

interface ArticleHeadlineProps {
    text: string;
    type?: string;
};

const ArticleHeadline: React.FC<ArticleHeadlineProps> = ({ text, type }) => {
    const headlineClass = classNames(styles.headline, {
        [styles.mgTB]: type === 'mgTB'
    });

    return <h2 className={headlineClass}>{text}</h2>;
};

export default ArticleHeadline;
