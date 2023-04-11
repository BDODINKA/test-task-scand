import React, {FC} from 'react';
import {ILinkList} from "@/interface/ILinkList";
import {Title} from "@/components/common/title/Title";
import Link from "next/link";
import style from "@/styles/LinkList/linkList.module.scss";

export const LinkList: FC<{ link: ILinkList[], children?: React.ReactNode }> = ({link, children}) => {
    return (
        <ul className={style.list_items}>
            {link.map((el) =>
                <li key={el.title} className={style.list_item}>
                    {el.href
                        ? <Link
                            href={el.href}
                            children={el.title}
                            className={style.item_link}
                        />
                        : <Title
                            size={'md-h3'}
                            children={el.title}
                        />}
                    {el.hiring && children}
                </li>
            )}
        </ul>
    );
};
