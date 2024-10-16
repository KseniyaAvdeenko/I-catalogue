import React from 'react';
import styles from './Preview.module.sass';
import PreviewIcon from '../../../assets/img/previewIcon.svg'

interface IPreviewButtonProps {
    getPreviewVisibility: React.MouseEventHandler<HTMLDivElement>
}

const PreviewButton: React.FC<IPreviewButtonProps> = ({getPreviewVisibility}) => {
    return (
        <div className={styles.previewButton} onClick={getPreviewVisibility}>
            <img src={PreviewIcon} alt="preview icon"/>
        </div>
    );
};

export default PreviewButton;
