"use client";

import { useState } from "react";
import NewsInfo from "@/components/newsInfo";
import ButtonLink from "@/components/buttons/buttonLink";

const Info = ({ data, children, href }) => {
    console.log('href!', href)
    const { info } = data;
    const NEWS_LIMIT = 2;
    const NEWS_LIMIT_INCREMENTOR = 2;

    const [infoList, setInfoList] = useState(info.slice(0, NEWS_LIMIT));

    const handleShowMore = () => {
        setInfoList((prevList) => {
            const newLimit = prevList.length + NEWS_LIMIT_INCREMENTOR;
            return info.slice(0, newLimit);
        });
    };

    return (
        <>
            {children}
            {infoList.map(({ date, headline }, index) => (
                <NewsInfo
                    key={index}
                    date={date}
                    headline={headline}
                    isLast={index === infoList.length - 1}
                />
            ))}
            <ButtonLink text="Показать больше" href={href}/>
            {/*<Button text="Показать больше" onClick={handleShowMore} />*/}
        </>
    );
};

export default Info;
