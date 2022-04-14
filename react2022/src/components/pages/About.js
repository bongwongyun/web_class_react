import React from 'react';
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";

function About() {
    return (
        <>
        <Header />
        <Contents>
            <section className="about__Cont">
                <div className="about__inner">
                    <div className="container">
                        <div className="about__01">
                            <h3>about 
                            <em>me</em></h3>
                        </div>
                    </div>
                    <div className="container">
                        <div className="about__02">
                            <img src="/img/aboutImg01.jpg" alt="" />
                            <p> 꿈을 설계하고 디자인 하다. <br /><br />
                                나는 공간을 만드는 것을 좋아한다 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 
                                단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 
                                서울에는 집이 없지만, 이곳에서는 나만의 집이 많다. 그 집은 비용도 들지 않고 언제든지 만들 수 있다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 
                                그 한구석에 나만의 꿈을 설계하고 디자인을 하며 앞으로도 살고 싶다.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="about__03">
                            <img src="/img/aboutImg02.jpg" alt="" />
                            <p> 열심히 할수록 기회는 따른다. <br /><br />
                                운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 
                                몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다. 복권에 당첨되는 사람들은 금방 돈을 허비하게 된다. 
                                단지 행운만 좋았기 때문이다. 운을 만든 사람은 돈을 날려먹거나 헛되게 쓰지 않는다. 열심히 할수록 운은 나에게 온다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Contents>
        <Footer />
    </>
    )
}
export default About;