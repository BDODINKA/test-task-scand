import React from 'react';
import {Wrapper} from "@/components/common/wrapper/Wrapper";
import {Author} from "@/components/common/author/Author";
import {Category} from "@/components/common/category/Category";
import Image from "next/image";
import style from "@/styles/SectionPreview/sectionPreview.module.scss";
import Bg from "@/assets/Bg.png"

export const SectionPreview = () => {
    return (
        <Wrapper className={style.wrapper}>
            <Image
                src={Bg}
                alt={''}
                className={style.img}
            />
            <div className={style.content}>
                <Category
                    title={'Category'}
                    date={'November'}
                />
                <p className={style.text}>Pitch termsheet backing validation focus release.</p>
                <Author
                    ava={''}
                    className={style.author}
                    children={'cacascas'}
                />
            </div>
        </Wrapper>
    );
};
