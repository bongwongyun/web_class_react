import React from 'react';
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";

function Reference() {
    return (
        <>
        <Header />
        <Contents>
            <section className="Reference__Cont">
                <div className="Reference__inner">
                    <div>Reference</div>
                </div>
            </section>
        </Contents>
        <Footer />
    </>
    )
}
export default Reference;