import React from 'react';
import styles from './ArticleHeadline.module.scss';
import classNames from 'classnames';

const ArticleHeadline = ({ text, type }) => {
    const headlineClass = classNames(styles.headline, {
        [styles.mgTB]: type === 'mgTB'
    });

    return (
        <h2 className={headlineClass}>{text}</h2>
    );
};

export default ArticleHeadline;
