import React, {FC} from 'react';
import style from "@/styles/Input/input.module.scss"

export const Input: FC<HTMLInputElement> = ({...rest}) => {
    return (
        <input type="email" {...rest} className={style.input}/>
    );
};

