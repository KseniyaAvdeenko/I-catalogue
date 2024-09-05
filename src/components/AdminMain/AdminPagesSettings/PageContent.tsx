import React, {useEffect, useState} from 'react';
import styles from "../AdminMain.module.sass";
import MarkdownEditor from "@uiw/react-markdown-editor";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loadPageContentsByParams} from "../../../store/actions/pageContentAction";

interface IPageContentProps {
    pageId: number|undefined;
    pageName: string|undefined;
}

const PageContent: React.FC<IPageContentProps> = ({pageId, pageName}) => {
    console.log(pageId)
    const {pageContents, error, isLoading} = useAppSelector(state => state.pageContentReducer);
    const dispatch = useAppDispatch()

    const [markdownVisibility, setMarkdownVisibility] = useState<boolean>(false)
    const [pageContent, setPageContent] = useState<string>('')

    useEffect(()=>{
        if(pageId) dispatch(loadPageContentsByParams(pageId))
        if(pageContents && pageContents.length){
            setMarkdownVisibility(true)
            setPageContent(pageContents[0].content)
        }else{
            setMarkdownVisibility(false)
        }
    },[pageId])
    console.log(pageContents)
    return (
        <section className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Контент страницы "{pageName}"</h3>
            <div className={styles.markdown__container} style={{display: markdownVisibility ?'block':'none'}}>
                <MarkdownEditor
                    value={pageContent}
                    height="200px"
                    onChange={(value, viewUpdate) => setPageContent(value)}
                />
            </div>
            {pageContents && !pageContents.length && (<button className={styles.markdown__button}> Добавить контент</button>)}

        </section>
    );
};

export default PageContent;
