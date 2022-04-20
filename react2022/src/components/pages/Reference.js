import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../includes/ReferCont";
import Loading from '../basics/Loading';
import { gsap } from "gsap";
import axios from "axios";

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
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
            gsap.to(".cont__title strong", 
            {duration:0.8,
            x:0,
            y:0,
            opacity:1,
            delay:0.8,
            ease: "back.out"
            })
            gsap.to(".cont__title em", 
            {duration:0.8,
            x:0,
            y:0,
            opacity:1,
            delay:0.8,
            ease: "back.out"
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
    getSite  = async () => {
        const {
            data : {
                data:{refer},
            },
        } = await axios.get("https://raw.githubusercontent.com/bongwongyun/web_class_react/master/react2022/src/assets/json/Refaerence.json");

        this.setState({refers:refer,isLoading:false})
        console.log(refer)
        setTimeout(()=> {
            // console.log("두번쨰 시작")
            this.setState({isLoading:false})
            this.mainAnimation();
        }, 1600)
    }
    componentDidMount() {
        setTimeout(() => {
            // console.log("첫번쨰 시작")
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background="#fff"
            this.getSite ()
        }, 2000);
    }
    render(){
        const {isLoading, refers} = this.state;
        console.log(refers)
        return (
            <>
            {isLoading ? (
                <Loading color="light"/>
                ) : (
                <>
                <Header color="light"/>
                <ConContacts>
                    <Title title={["HTML", "REFERENCE"]} color="light"/>
                    <ReferCont refer={refers} color="light"/>
                    <ConContact/>
                </ConContacts>
                <Footer color="light"/>
                </>
                )}
            </>
        )
    }
}
// function Reference() {
//     return (
//         <>
//         <Header />
//         <ConContacts>
//           <Title title={["HTML","REFERENCE"]}/>
//                 <ReferCont color="light" />

//             <ConContact/>
//         </ConContacts>
//         <Footer />
//     </>
//     )
// }
export default Reference;