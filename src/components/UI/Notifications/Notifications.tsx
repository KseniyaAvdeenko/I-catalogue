import React from 'react';
import styles from './Notifications.module.sass'

interface INotificationsProps {
    errorNotifications: string[];
    successNotifications: string[];
    setErrorNtFs: Function;
    setSuccessNtFs: Function;
}

const Notifications: React.FC<INotificationsProps> = ({
                                                          errorNotifications,
                                                          successNotifications,
                                                          setSuccessNtFs,
                                                          setErrorNtFs
                                                      }) => {
    const removeErrorNtf = (ntf: string) => setErrorNtFs(errorNotifications.filter(el=> el!== ntf))

    const removeSuccessNtf = (ntf: string) => setSuccessNtFs(successNotifications.filter(el=>el !== ntf))

    return (
        <div className={styles.notifications}>
            {errorNotifications && errorNotifications.map(ntf => (
                <div key={ntf} className={styles.errorNtf} onClick={() => removeErrorNtf(ntf)}>{ntf}</div>
            ))}
            {successNotifications && successNotifications.map(ntf => (
                <div key={ntf} className={styles.successNtf} onClick={() => removeSuccessNtf(ntf)}>{ntf}</div>
            ))}
        </div>
    );
};

export default Notifications;
