import NewsInfo from "@/components/newsInfo";
import Button from "@/components/button";

const Info = ({data, children}) => {

    const { info } = data;

    return (
        <>
            {children}
            {info.map(({ date, headline }, index) => (
                <NewsInfo
                    key={index}
                    date={date}
                    headline={headline}
                    isLast={index === info.length - 1}
                />
            ))}
            <Button text={'Показать больше'}/>
        </>
    );
};

export default Info;
