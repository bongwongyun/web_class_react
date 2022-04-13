import React from 'react';
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";

function Script() {
    return (
        <>
        <Header />
        
        <Contents>
            <section className="Script__Cont">
                <div className="Script__inner">
                    <div>script</div>
                </div>
            </section>
        </Contents>
        <Footer />
    </>
    )
}
export default Script;