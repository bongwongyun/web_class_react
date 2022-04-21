import React from "react";
import axios from "axios";
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../includes/ReferCont";
import Loading from '../basics/Loading';
import { gsap } from "gsap";

class Reference extends React.Component {
    state = {
        isLoading:true,
        refers:[],
    }
    mainAnimation = () => {
        setTimeout(() => {
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
        }, 10);
    }

    getRefers = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
        this.setState({refers:htmlRefer, isLoading:false})
        this.mainAnimation()
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            this.getRefers()
        }, 2000);
    }

    render() {
        const {isLoading,refers} =this.state;
        console.log(refers)
        return (
            <>
            {isLoading ? (
                <Loading color="light"/>
                ) : (
                <>
                <Header color="light"/>
                <ConContacts>
                    <Title title={["HTML", "REFERENCE"]}/>
                    <section className="refer__cont">
                        <div className="container">
                            <div className="refer__inner">
                                <h2>CSS</h2>
                                <ul className="refer__list">
                                    {refers.map((refer) => (
                                    <ReferCont
                                        key={refer.id}
                                        id={refer.id}
                                        title={refer.title}
                                        desc={refer.desc}
                                        use={refer.use}
                                        desc2={refer.desc2}
                                        element={refer.element}
                                        tag={refer.tag}
                                        version={refer.version}
                                        view={refer.view}
                                        image={refer.image}
                                        link={refer.link}
                                        Definition={refer.Definition}
                                        Accessibility={refer.Accessibility}
                                        mdn={refer.mdn}
                                        w3c={refer.w3c}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
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