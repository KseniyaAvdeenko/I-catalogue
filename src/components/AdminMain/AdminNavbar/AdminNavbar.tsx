import React from 'react';
import styles from '../AdminNavbar.module.sass'
import ContactsForm from "./Contacts/ContactsForm";
import NavLinksForm from "./NavLinks/NavLinksForm";
import SocialLinksForm from "./SocialLinks/SocialLinksForm";


const AdminNavbar = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} className={styles.AdminNavbar}>
            <ContactsForm/>
            <SocialLinksForm/>
            <NavLinksForm/>
        </div>
    );
})

export default AdminNavbar;
