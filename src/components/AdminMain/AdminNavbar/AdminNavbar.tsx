import React from 'react';
import styles from './AdminNavbar.module.sass'
import ContactsForm from "./Contacts/ContactsForm";
import NavLinksForm from "./NavLinks/NavLinksForm";


const AdminNavbar = React.forwardRef<HTMLElement, {}>((props, ref) => {
    return (
        <main ref={ref} className={styles.AdminNavbar}>
            <ContactsForm/>
            <NavLinksForm/>
        </main>
    );
})

export default AdminNavbar;
