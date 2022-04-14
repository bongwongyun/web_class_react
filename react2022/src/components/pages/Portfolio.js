import React from 'react';
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";
import Portcont from "../includes/Portcont";
import Contitle from '../includes/Conttitle';
import Contcontact from '../includes/Contcontact';

function Portfolio() {
    return (
        <>
        <Header />
        <Contents>
            <Contitle title={["Portfolio", "site"]}/>
            <Portcont/>
            <Contcontact/>
        </Contents>
        <Footer />
    </>
    )
}
export default Portfolio;