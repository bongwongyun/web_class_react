import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";
import MainContents from "../includes/MainContents";

function Main() {
    return (
        <>
            <Header  />
            <Contents>
                <MainContents />
            </Contents>
            <Footer />
        </>
    )
}
export default Main;