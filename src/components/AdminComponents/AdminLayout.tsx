import React from 'react';
import AdminHeader from "./AdminHeader/AdminHeader";
import AdminFooter from "./AdminFooter/AdminFooter";
import Notifications from "../UI/Notifications/Notifications";

interface IAdminLayoutProps {
    children: React.ReactNode
    setErrorNtFs:Function;
    setSuccessNtFs:Function;
    errorNtfs: string[]
    successNtfs: string[]
}

const AdminLayout: React.FC<IAdminLayoutProps> = ({children, setSuccessNtFs, setErrorNtFs, successNtfs, errorNtfs}) => {
    return (
        <div style={{
            width: '100%',
            position: 'relative',
            height: '100vh',
            display: 'flex',
            flexDirection: "column",
            justifyContent:"space-between"
        }}>
            <AdminHeader></AdminHeader>
            <Notifications setErrorNtFs={setErrorNtFs}
                           setSuccessNtFs={setSuccessNtFs}
                           errorNotifications={errorNtfs}
                           successNotifications={successNtfs}
            />
            {children}
            <AdminFooter/>
        </div>
    );
};

export default AdminLayout;

