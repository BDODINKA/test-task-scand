import React from 'react';
import {Wrapper} from "@/components/common/wrapper/Wrapper";
import style from "@/styles/SectionEnterPrise/sectionEnterPrise.module.scss";
import bg from "@/assets/bgEmail.webp";

export const SectionEnterPrise = () => {
    return (
        <Wrapper>
            <div className={style.background} style={{background: `url(${bg.src})no-repeat`}}>
                <div className={style.content}></div>
            </div>
        </Wrapper>
    );
};
