import React from 'react';
import {IHeading} from "../../../interface/IPagesSettings";

const Heading: React.FC<{pageHeading: IHeading }> = ({pageHeading})=> {
    const Heading = pageHeading.blockHeadingType
    return (<Heading style={{
                margin: '2rem 0 4rem',
                textAlign: 'center',
                fontSize: pageHeading.headingFontSize,
                color: pageHeading.headingFontColor,
                fontWeight: pageHeading.headingFontWeight
            }}>{pageHeading.headingContent}</Heading>)
}

export default Heading;
