import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import PortCont from "../includes/PortCont";
import Title from "../layout/Title";
import Loading from '../basics/Loading';
import { gsap } from "gsap";
import axios from "axios";

// function Portfolio() {
//     return (
//         <>
//         <Header />
//         <ConContacts>
//             <Title title={["Portfolio", "site"]}/>
//             <PortCont/>
//             <ConContact/>
//         </ConContacts>
//         <Footer />
//     </>
//     )
// }

class Portfolio extends React.Component {
    state = {
        isLoading: true,
        ports: [],
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
            gsap.to(".port__inner", 
            {duration:0.8,
            x:0,
            y:0,
            opacity:1,
            delay:1.6,
            ease: "back.out"
            })
        },10)
    }
    getPorts = async () => {
        const {data:{data:{ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json")
        this.setState({data:ports})
        // console.log(ports)
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
            this.getPorts()
        }, 2000);
    }
    render(){
        const {isLoading, ports} = this.state;
        console.log(ports)
        return (
            <>
            {isLoading ? (
                <Loading />
                ) : (
                <>
                <Header  />
                <ConContacts>
                    <Title title={["Portfolio", "site"]}/>
                    <PortCont/>
                    <ConContact/>
                </ConContacts>
                <Footer />
                </>
                )}
            </>
        )
    }
}
export default Portfolio;