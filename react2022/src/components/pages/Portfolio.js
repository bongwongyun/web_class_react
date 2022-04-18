import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import PortCont from "../includes/PortCont";
import Title from "../layout/Title";

function Portfolio() {
    return (
        <>
        <Header />
        <ConContacts>
            <Title title={["Portfolio", "site"]}/>
            <PortCont/>
            <ConContact/>
        </ConContacts>
        <Footer />
    </>
    )
}
export default Portfolio;