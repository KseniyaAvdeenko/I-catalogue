import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

interface IPageContentProps{
    pageContent: string|null
    containerClassName: string
}
const PageContent: React.FC<IPageContentProps> = ({containerClassName, pageContent}) => {
    return pageContent ?(
       <MarkdownPreview source={pageContent} className={containerClassName}/>
    ): (<div></div>);
};

export default PageContent;
