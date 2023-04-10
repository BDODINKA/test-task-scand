import React, {FC} from 'react';

import {Button} from "@/components/common/button/Button";
import Link from "next/link";
import style from "@/styles/Header/header.module.scss";
import {Logo} from "@/components/common/logo/Logo";


export const Header: FC = () => {

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <Logo/>
                <nav className={style.nav_items}>
                    <Link href={'#'} className={style.nav_item}>Product</Link>
                    <Link href={'#'} className={style.nav_item}>Services</Link>
                    <Link href={'#'} className={style.nav_item}>About</Link>
                    <Button fill={'transparent'} children={'Log In'}/>
                </nav>

            </div>
        </header>

    )
        ;
};
