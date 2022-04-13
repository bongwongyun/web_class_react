import React from 'react';
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";

function Contact() {
    return (
        <>
        <Header />
        <Contents>
            <section className="Contact__Cont">
                <div className="Contact__inner">
                    <div>Contact</div>
                </div>
            </section>
        </Contents>
        <Footer />
    </>
    )
}
export default Contact;