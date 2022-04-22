import React from 'react'
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import Footer from "../layout/Footer";
import ReferCont from "../includes/ReferCont";
import { gsap } from "gsap";

// function Referencedetail(props) {
//     console.log(props)
//     return (
//         <div>Referencedetail</div>
//     )
// }
class Referencedetail extends React.Component {
    componentDidMount(){
        const {location, tistory} = this.props
        if (location.state === undefined) {
            tistory.push("/reference")
        }
        document.querySelector("body").style.background="#000";
        this.mainAnimation()
    }
    mainAnimation = () => {
        setTimeout(()=> {
            gsap.to("#header", 
            {duration:0.8,
            top:0,
            delay:0.8,
            })
            gsap.to("#footer", 
            {duration:0.8,
            bottom:0,
            delay:0.8,
            })
            gsap.to(".refer__inner", 
            {duration:0.8,
            x:0,
            y:0,
            opacity:1,
            delay:1.6,
            ease: "back.out"
            })
        },10)
    }

    render(){
        const {location} = this.props
        console.log(location.state)
        if (location.state === undefined) {
            return <div>잘못된 페이지입니다!!</div>
        } else {
            return (
                <>
                    <Header />
                    <ConContacts>
                    <section className="refer__cont">
                            <div className="container">
                                <div className="refer__inner">
                                    <div className="refer__table">
                                        <h2>{location.state.title}</h2>
                                        <p>{location.state.desc}</p>
                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th>특징</th>
                                                        <th>설명</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>요소</th>
                                                        <td>{location.state.element}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>닫는 태그</th>
                                                        <td>{location.state.tag}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>버전</th>
                                                        <td>{location.state.version}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>시각적 표현</th>
                                                        <td>{location.state.view}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>사용성</th>
                                                        <td>{location.state.use}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ConContacts>
                    <Footer />
                </>
            )
        }
    }
}

export default Referencedetail