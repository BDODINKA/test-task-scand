import React, {FC} from 'react';
import style from '@/styles/Wrapper/wrapper.module.scss';

export const Wrapper: FC<{ className?: string, children: React.ReactNode }> = ({className, children}) => {
    const finalClass = className ? `${style.wrapper} ${className}` : style.wrapper
    return (
        <section className={finalClass}>
            {children}
        </section>
    );
};
