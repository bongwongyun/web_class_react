import React from 'react'
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import Footer from "../layout/Footer";
import ReferCont from "../includes/ReferCont";
import { gsap } from "gsap";

class Referencedetail extends React.Component {
    componentDidMount() {

        document.querySelector("body").style.background="#fff"
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
        return (
            <>
            <Header color="light"/>
            <ConContacts>
            <section className={`refer__cont light`}>
                <div className="container">
                    <div className="refer__inner">
                        <ReferCont />
                    </div>
                </div>
            </section>
            </ConContacts>
            <Footer color="light"/>
            </>
        )
    }
}

export default Referencedetail