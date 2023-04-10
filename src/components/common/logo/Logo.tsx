import React from 'react';
import Image from "next/image";
import Logotype from "@/assets/Logo.svg";

export const Logo = () => {
    return (
        <Image src={Logotype} alt={'Logo'}/>
    );
};

