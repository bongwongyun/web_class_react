import React from 'react';
import Header from "../layout/Header";
import ConContact from "../layout/ConContact";
import ConContacts from '../layout/ConContacts';
import Footer from "../layout/Footer";
import ContactCont from "../includes/ContactCont";

function Contact() {
    return (
        <>
        <Header />
        <ConContacts>
            <ContactCont />
            <ConContact />
        </ConContacts>
        <Footer />
    </>
    )
}
export default Contact;