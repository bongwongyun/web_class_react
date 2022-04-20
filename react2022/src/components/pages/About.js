import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import AboutCont from '../includes/AboutCont';
import Title from "../layout/Title";
import Loading from '../basics/Loading';
import { gsap } from "gsap";


class About extends React.Component {
    state = {
        isLoading: true,
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
            gsap.to(".about__inner", 
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
            document.querySelector("body").style.background="#fff"
            this.getPorts()
        }, 2000);
    }
    render(){
        const {isLoading} = this.state;
        return (
            <>
            {isLoading ? (
                <Loading color="light"/>
                ) : (
                <>
                <Header color="light"/>
                <ConContacts>
                    <Title title={["About", "ME"]} color="light"/>
                    <AboutCont />
                    <ConContact/>
                </ConContacts>
                <Footer />
                </>
                )}
            </>
        )
    }
}
// function About() {
//     return (
//         <>
//         <Header color="light"/>
//         <ConContacts>
//             <section className="about__Cont">
//                 <div className="about__inner">
//                     <div className="container">
//                         <div className="about__01">
//                             <h3>about 
//                             <em>me</em></h3>
//                         </div>
//                         <div className="about__02">
//                             <img src="/img/aboutImg01.jpg" alt="" />
//                             <p> 꿈을 설계하고 디자인 하다. <br /><br />
//                                 나는 공간을 만드는 것을 좋아한다 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 
//                                 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 
//                                 서울에는 집이 없지만, 이곳에서는 나만의 집이 많다. 그 집은 비용도 들지 않고 언제든지 만들 수 있다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 
//                                 그 한구석에 나만의 꿈을 설계하고 디자인을 하며 앞으로도 살고 싶다.
//                             </p>
//                         </div>
//                         <div className="about__03">
//                             <img src="/img/aboutImg02.jpg" alt="" />
//                             <p> 열심히 할수록 기회는 따른다. <br /><br />
//                                 운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 
//                                 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다. 복권에 당첨되는 사람들은 금방 돈을 허비하게 된다. 
//                                 단지 행운만 좋았기 때문이다. 운을 만든 사람은 돈을 날려먹거나 헛되게 쓰지 않는다. 열심히 할수록 운은 나에게 온다.
//                             </p>
//                         </div>
//                         <div className="about__04">
//                             <p> 나에게 정직하다.<br /><br />
//                             정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 
//                             자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다. 
//                             다름 사람에게도 정직해야 하지만 그 무엇보다 나 자신한테 정직해야 한다.
//                             </p>
//                             <img src="/img/aboutImg03.jpg" alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <ConContact/>
//         </ConContacts>
//         <Footer color="light"/>
//     </>
//     )
// }

export default About;