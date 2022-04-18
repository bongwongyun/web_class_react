import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import MainContents from "../includes/MainContents";

function Main() {
    return (
        <>
            <Header  />
            <ConContacts>
                <MainContents />
                <ConContact/>
            </ConContacts>
            <Footer />
        </>
    )
}
export default Main;