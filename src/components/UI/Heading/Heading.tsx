import React from 'react';
import {IHeading} from "../../../interface/IPagesSettings";

const Heading: React.FC<{pageHeading: IHeading, headingContent: string }> = ({pageHeading, headingContent})=> {
    const Heading = pageHeading.blockHeadingType
    return (<Heading style={{
                margin: '5rem 0 5rem',
                textAlign: 'center',
                fontSize: pageHeading.headingFontSize,
                color: pageHeading.headingFontColor,
                fontWeight: pageHeading.headingFontWeight
            }}>{headingContent}</Heading>)
}

export default Heading;
