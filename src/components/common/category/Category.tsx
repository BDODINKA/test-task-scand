import React, {FC} from 'react';
import {Title} from "@/components/common/title/Title";
import style from "@/styles/Category/category.module.scss";

export const Category: FC<{ title: string, date: string }> = ({title, date}) => {
    return (
        <div className={style.wrapper}>
            <Title size={"md-h4"}>{title}</Title>
            <p className={style.text}>{date}</p>
        </div>
    );
};
