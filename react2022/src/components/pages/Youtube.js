import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";

function Youtube() {
    return (
        <>
        <Header />
        <ConContacts>
            <section className="Youtube__Cont">
                <div className="Youtube__inner">
                    <div>Youtube</div>
                </div>
            </section>
            <ConContact/>
        </ConContacts>
        <Footer />
    </>
    )
}
export default Youtube;