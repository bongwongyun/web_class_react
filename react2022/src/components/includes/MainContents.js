import React from "react";
import {Link} from "react-router-dom";
//함수형 컨퍼넌트 * 클래스 컨퍼넌트 --> 리액트 훅
function Maininfo({text}) {
    return <div>{text}</div>
}
const Maintext = [
    {text:"WE"},
    {text:"Are"},
    {text:"THE"},
    {text:"World"},
]
function MainContents() {
    return (
        <section className="main__Cont">
            <div className="main__inner">
                {Maintext.map(txt => (
                    <Maininfo text={txt.text} key={txt.text}/>
                ))}
            </div>
        </section>
    )
}
export default MainContents;