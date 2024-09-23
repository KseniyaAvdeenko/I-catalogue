import React from 'react';

const EmailIcon: React.FC<{ fontSize: number, color: string }> = ({color, fontSize}) => {
    return (
        <svg width={fontSize + 4} height={fontSize} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.4444 2.11111V9.88889C15.4444 10.1836 15.3274 10.4662 15.119 10.6746C14.9106 10.8829 14.628 11 14.3333 11H2.11111C1.81643 11 1.53381 10.8829 1.32544 10.6746C1.11706 10.4662 1 10.1836 1 9.88889V2.11111M15.4444 2.11111C15.4444 1.81643 15.3274 1.53381 15.119 1.32544C14.9106 1.11706 14.628 1 14.3333 1H2.11111C1.81643 1 1.53381 1.11706 1.32544 1.32544C1.11706 1.53381 1 1.81643 1 2.11111M15.4444 2.11111L8.85445 6.67333C8.66867 6.80188 8.44813 6.87074 8.22222 6.87074C7.99632 6.87074 7.77577 6.80188 7.59 6.67333L1 2.11111"
                stroke={color} strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default EmailIcon;
