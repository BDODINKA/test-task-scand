import React from 'react';
import style from "@/styles/Footer/footer.module.scss"
import {LinkList} from "@/components/common/linkList/LinkList";
import {ListLinkDataOne, ListLinkDataThree, ListLinkDataTwo} from "@/pages/api/mocData/ListLinkData";
import {Button} from "@/components/common/button/Button";
import {Logo} from "@/components/common/logo/Logo";

export const Footer = () => {
    return (
        <footer>
            <div className={style.wrapper}>
                <div className={style.description_items}>
                    <Logo/>
                    <p className={style.description}>{'Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.'}</p>
                    <p className={style.copyright}>{'All rights reserved.'}</p>
                </div>
                <div className={style.nav_items}>
                    <LinkList link={ListLinkDataOne}/>
                    <LinkList link={ListLinkDataTwo}>
                        <Button
                            fill={'colored'}
                            children={'Hiring!'}
                            className={style.nav_items_btn}
                        />
                    </LinkList>
                    <LinkList link={ListLinkDataThree}/>
                </div>

            </div>
        </footer>
    );
};
