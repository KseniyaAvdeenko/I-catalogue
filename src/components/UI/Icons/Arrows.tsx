import React from 'react';
interface IArrowProps{
     strokeColor: string;
     clickHandler: React.MouseEventHandler<SVGSVGElement>;
     classname: string
}

export const ArrowLeft: React.FC<IArrowProps> = ({strokeColor, clickHandler, classname}) => {
    return (
        <svg width="7" height="13" viewBox="0 0 6 10"
             fill="none" xmlns="http://www.w3.org/2000/svg"
             onClick={clickHandler} className={classname}
        >
            <path d="M5 1L1.25 4.75L5 8.5"
                  stroke={strokeColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};


export const ArrowRight: React.FC<IArrowProps> = ({strokeColor, clickHandler, classname}) => {
    return (
        <svg width="7" height="13" viewBox="0 0 6 10"
             fill="none" xmlns="http://www.w3.org/2000/svg"
             onClick={clickHandler} className={classname}
        >
            <path d="M1 8.5L4.75 4.75L1 1"
                  stroke={strokeColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};