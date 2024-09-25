import React, {useEffect, useState} from 'react';
import styles from "../AdminMain.module.sass";
import {useAppDispatch} from "../../../hooks/redux";
import MDEditor from '@uiw/react-md-editor';
import {IPageSetting} from "../../../interface/IPagesSettings";
import {updatePageWithNavLink} from "../../../store/actions/pageSettingsAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";


interface IPageContentProps {
    page: IPageSetting|null
}

const PageContent: React.FC<IPageContentProps> = ({page}) => {

    const dispatch = useAppDispatch()
    const [content, setContent] = useState<string>('')
    const [markdownVisibility, setMarkdownVisibility] = useState<boolean>(false)

    useEffect(() => {
        if (page && page.content) {
            setMarkdownVisibility(true)
            setContent(page.content)
        }
    }, [page])

    const saveContent = () => {
         if (page && localStorage.access) {
            const pageRequiredFields = {headingSettings: page.headingSettings}
             dispatch(updatePageWithNavLink(decodeToken(localStorage.access), page.slug,
                    Object.assign({content: content}, pageRequiredFields)))
        }
    }

    return (
        <section className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Контент страницы {page?.navLink}</h3>
            {page && (
                <div className={styles.markdown__container} style={{display: markdownVisibility ? 'block' : 'none'}}>
                    <MDEditor
                        value={content}
                        onChange={(val) => setContent(val ?? '')}
                    />

                    <button className={styles.markdown__button} onClick={saveContent}>Сохранить</button>
                </div>)}
            {page && !page.content && !markdownVisibility && (
                <button className={styles.markdown__button} onClick={() => {
                    setMarkdownVisibility(true)
                }}> Добавить контент</button>)}
        </section>
    );
};

export default PageContent;
