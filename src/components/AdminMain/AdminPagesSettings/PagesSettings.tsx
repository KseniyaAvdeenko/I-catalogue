import React from 'react';
import  styles from './AdminPageSettings.module.sass'
import Markdown from "react-markdown";
import MarkdownEditor from '@uiw/react-markdown-editor';


const PagesSettings = React.forwardRef<HTMLElement, {}>(({}, ref) => {
    return (
        <main ref={ref} className={styles.AdminMain}>
            {/*<MarkdownEditor*/}
            {/*    value={value}*/}
            {/*    height="200px"*/}
            {/*    onChange={(value, viewUpdate) => setValue(value)}*/}
            {/*/>*/}
        </main>
    );
})

export default PagesSettings;
