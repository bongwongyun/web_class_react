import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import ScriptCont from "../includes/ScriptCont";
import Title from "../layout/Title";

function Script() {
    return (
        <>
        <Header />
        
        <ConContacts>
        <Title title={["script","javascript"]}/>
            <ScriptCont/>
            <ConContact/>
        </ConContacts>
        <Footer />
    </>
    )
}
export default Script;