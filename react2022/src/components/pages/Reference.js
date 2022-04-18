import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../includes/ReferCont";

function Reference() {
    return (
        <>
        <Header />
        <ConContacts>
          <Title title={["HTML","REFERENCE"]}/>
                <ReferCont color="light" />

            <ConContact/>
        </ConContacts>
        <Footer />
    </>
    )
}
export default Reference;