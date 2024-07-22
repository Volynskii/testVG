import React from 'react';
import styles from './ArticleHeader.module.scss';
import Link from "next/link";

const ArticleHeader = ({text, href}) => {
    return (
      <header>
          <h1 className={styles.title}>
              <Link className={styles.link} href={href}>
                  {text}
              </Link>
          </h1>
      </header>
    );
};

export default ArticleHeader;