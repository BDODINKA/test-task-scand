import React from 'react';
import {Wrapper} from "@/components/common/wrapper/Wrapper";
import {Card} from "@/components/common/card/Card";
import {mocData} from "@/pages/api/mocData/mocData";
import {Title} from "@/components/common/title/Title";
import {Button} from "@/components/common/button/Button";
import style from "@/styles/SectionCards/sectionCards.module.scss";

export const SectionCards = () => {

    return (
        <Wrapper className={style.wrapper}>
            <Title
                size={"lg-h2"}
                children={'Latest news'}
                className={style.title}
            />
            <div className={style.content}>
                {mocData.map((el) =>
                    <Card
                        id={el.id}
                        title={el.title}
                        date={el.date}
                        text={el.text}
                        img={el.img}
                        authorAva={el.authorAva}
                        authorName={el.authorName}
                    />
                )}
            </div>
            <Button
                fill={"transparent"}
                children={'Load More'}
                className={style.btn}
            />
        </Wrapper>
    );
};
