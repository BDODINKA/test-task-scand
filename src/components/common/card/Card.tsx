import React, {FC} from 'react';
import {Category} from "@/components/common/category/Category";
import {Author} from "@/components/common/author/Author";
import Image from "next/image";
import {ICard} from "@/interface/ICard";
import style from "@/styles/Card/card.module.scss";

export const Card: FC<ICard> = ({title, id, img, date, text, authorName, authorAva}) => {
    return (
        <div className={style.wrapper} key={id}>
            <Image
                src={img}
                alt={'image'}
                className={style.img}
            />
            <div className={style.content}>
                <Category
                    title={title}
                    date={date}
                />
                <p className={style.text}>{text}</p>
            </div>
            <Author
                ava={authorAva}
                children={authorName}
            />
        </div>
    );
};
