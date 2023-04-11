import React from 'react';
import {Wrapper} from "@/components/common/wrapper/Wrapper";
import style from "@/styles/SectionEnterPrise/sectionEnterPrise.module.scss";
import bg from "@/assets/bgEmail.webp";
import {Title} from "@/components/common/title/Title";
import {Input} from "@/components/common/input/Input";
import {Button} from "@/components/common/button/Button";

export const SectionEnterPrise = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div
                className={style.background}
                style={{background: `url(${bg.src})no-repeat center`}}
            >
                <Title
                    size={'lg-h2'}
                    className={style.title}
                    children={'An enterprise template to ramp up your company website'}
                />
                <div className={style.content}>
                    <Input
                        placeholder={'Your email address'}
                        className={style.input}
                    />
                    <Button
                        fill={"colored"}
                        children={'Start now'}
                        className={style.btn}
                    />
                </div>
            </div>
        </Wrapper>
    );
};
