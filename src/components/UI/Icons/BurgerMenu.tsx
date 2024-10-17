import React from 'react';

interface IBurgerMenuProps {
    iconColor: string;
    classname: string;
    openBurgerMenu: React.MouseEventHandler<SVGSVGElement>
}

const BurgerMenu: React.FC<IBurgerMenuProps> = ({
                                                    iconColor,
                                                    classname,
                                                    openBurgerMenu
                                                }) => {


    return (
        <svg onClick={openBurgerMenu} className={classname} width="28" height="19" viewBox="0 0 14 10" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M1.09375 1.34375H12.9062M1.09375 5H12.9062M1.09375 8.65625H12.9062" stroke={iconColor}
                  strokeWidth="1.6875" strokeMiterlimit="10" strokeLinecap="round"/>
        </svg>
    );
};

export default BurgerMenu;
