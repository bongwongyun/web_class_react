import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import MainContents from "../includes/MainContents";
import Loading from '../basics/Loading';
import { gsap } from "gsap";

// function Main() {
//     return (
//         <>
//         <Header  />
//         <ConContacts>
//             <MainContents />
//             <ConContact/>
//         </ConContacts>
//         <Footer />
//         </>
//     )
// }
class Main extends React.Component {
    state = {
        isLoading : true,
    }
    getSite = () => {
        setTimeout(()=> {
            gsap.to("#header", 
            {duration:0.8,
            top:0,
            })
            gsap.to("#footer", 
            {duration:0.8,
            bottom:0,
            })
            gsap.to(".main__inner > div:nth-child(1)", 
            {duration:1.2,
            opacity:1,
            y:0,
            delay:0.4,
            ease: "back.out"
            })
            gsap.to(".main__inner > div:nth-child(2)", 
            {duration:1.4,
            opacity:1,
            y:0,
            delay:0.8,
            ease: "back.out"
            })
            gsap.to(".main__inner > div:nth-child(3)", 
            {duration:1.6,
            opacity:1,
            y:0,
            delay:1.2,
            ease: "back.out"
            })
            gsap.to(".main__inner > div:nth-child(4)", 
            {duration:1.8,
            opacity:1,
            y:0,
            delay:1.6,
            ease: "back.out"
            })
        },1000)
    }
    // mainAnimation = () => {
    //     gsap.set("main__inner", {opacity:0})
    // }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading:false})
            this.getSite();
        },3000)
    }
    render(){
        const {isLoading} = this.state;
        return (
            <>
            {isLoading ? (
                <Loading />
                ) : (
                <>
                <Header  />
                <ConContacts>
                    <MainContents />
                    <ConContact/>
                </ConContacts>
                <Footer />
                </>
                )}
            </>
        )
    }
}
//state (함수 설정)

export default Main;