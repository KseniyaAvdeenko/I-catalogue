import React, {useEffect, useState} from 'react';
import styles from './Site.module.sass'
import {useAppSelector} from "../../hooks/redux";
import {IHeading} from "../../interface/IPagesSettings";
import Heading from "../../components/UI/Heading/Heading";
import ProductList from "../../components/SiteComponents/ProductList/ProductList";
import {IProdReadOnly} from "../../interface/IProduct";
import ModalPopUp from "../../components/SiteComponents/ModalPopup/ModalPopUp";
import Loader from "../../components/UI/Loader/Loader";
import {setPageTitle} from "../../hooks/getTitle";


interface IMainPageProps {
    formData: { [key: string]: string | number; };
    getFormInputs: Function;
    setFormData: Function
}

const Main:React.FC<IMainPageProps> = ({formData, setFormData, getFormInputs}) => {
    const {mainPageSettings, isLoading} = useAppSelector(state => state.mainPageSettingsReducer)
    const [mainPageStyles, setMainPageStyles] = useState<{ background: string; prodCardBg: string;}>({
        background: '',
        prodCardBg: ''
    })
    const [mainPageHeading, setMainPageHeading] = useState<IHeading>({
        blockHeadingType: 'h1',
        headingContent: '',
        headingFontColor: '',
        headingFontSize: 48,
        headingFontWeight: 900,
        id: 0
    })

    const [modalVisibility, setModalVisibility] = useState<boolean>(false)
    const [modalData, setModalData] = useState<IProdReadOnly | null>(null)

    useEffect(() => {
        if (mainPageSettings) {
            setMainPageStyles({
                ...mainPageStyles,
                prodCardBg: mainPageSettings.prodCardBg,
                background: mainPageSettings.background
            })
            setMainPageHeading(mainPageSettings.headingSettings)
            setPageTitle(mainPageSettings.title)
        }
    }, [mainPageSettings]);

    function payClickHandle(prod: IProdReadOnly) {
        setModalVisibility(true);
        setModalData(prod)
    }

    return mainPageSettings ? (
        <main className={[styles.page__container].join(' ')}
              style={{background: mainPageStyles.background, position: 'relative'}}>
            <Heading pageHeading={mainPageHeading} headingContent={mainPageHeading.headingContent}/>
            <ProductList
                prodCardBg={mainPageStyles.prodCardBg}
                payClickHandle={payClickHandle}
                cardBorder={mainPageSettings.cardBorder}
                cardBorderColor={mainPageSettings.cardBorderColor}
                cardBorderWidth={mainPageSettings.cardBorderWidth}
            />
            <ModalPopUp
                isModalOpen={modalVisibility}
                onClose={()=> setModalVisibility(false)}
                data={modalData}
                formData={formData}
                setFormData={setFormData}
                getFormInputs={getFormInputs}
            />
        </main>
    ):(<main className={styles.page__container} style={{alignItems: 'center', justifyContent: 'center'}}>{isLoading && (<Loader/>)}</main>)
};

export default Main;
