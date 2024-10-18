import React, {useEffect, useState} from 'react';
import {IHeading} from "../../../interface/IPagesSettings";
import {useWindowWidth} from "../../../hooks/useWindowWidth";

const Heading: React.FC<{pageHeading: IHeading, headingContent: string }> = ({pageHeading, headingContent})=> {
    const windowWidth = useWindowWidth()
    const [fontSize, setFontSize] = useState<string>(pageHeading.headingFontSize + 'px')
    useEffect(()=>{
        if(windowWidth > 1024) setFontSize(pageHeading.headingFontSize + 'px')
        if(windowWidth < 1024) setFontSize('4.9rem');
        if(windowWidth < 840) setFontSize('4.1rem')
        if(windowWidth < 600) setFontSize('3.5rem')
    }, [windowWidth])
    const Heading = pageHeading.blockHeadingType
    return (<Heading style={{
                margin: windowWidth > 1024 ?'5rem 0': '3rem 0',
                textAlign: 'center',
                fontSize: fontSize,
                color: pageHeading.headingFontColor,
                fontWeight: pageHeading.headingFontWeight
            }}>{headingContent}</Heading>)
}

export default Heading;
