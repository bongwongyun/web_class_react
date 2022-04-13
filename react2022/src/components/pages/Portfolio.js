import React from 'react';
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";

function Portfolio() {
    return (
        <>
        <Header />
        <Contents>
            <section className="Portfolio__Cont">
                <div className="Portfolio__inner">
                    <div>Portfolio</div>
                </div>
            </section>
        </Contents>
        <Footer />
    </>
    )
}
export default Portfolio;