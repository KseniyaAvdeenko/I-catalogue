import React from 'react';
import {IHeading} from "../../../interface/IPagesSettings";
import Heading from "./Heading";

const DetailedProdHeading: React.FC<{ pageHeading: IHeading, prodName: string }> = ({pageHeading, prodName}) => {
    let headingContent = pageHeading.headingContent
    if (headingContent.split(' ').find(el => el === '*')) {
        headingContent = headingContent.replaceAll('*', prodName)
        return (<Heading pageHeading={pageHeading} headingContent={headingContent}/>)
    } else {
        return (<Heading pageHeading={pageHeading} headingContent={pageHeading.headingContent}/>)
    }
}

export default DetailedProdHeading;