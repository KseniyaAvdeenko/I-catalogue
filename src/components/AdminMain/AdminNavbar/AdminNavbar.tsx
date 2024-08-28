import React from 'react';
import styles from './AdminNavbar.module.sass'
import ContactsForm from "./Contacts/ContactsForm";
import NavLinks from "./NavLinks/NavLinks";


const AdminNavbar = React.forwardRef<HTMLElement, {}>((props, ref) => {
    return (
        <main ref={ref} className={styles.AdminNavbar}>
            <ContactsForm/>
            <NavLinks/>
        </main>
    );
})

export default AdminNavbar;
