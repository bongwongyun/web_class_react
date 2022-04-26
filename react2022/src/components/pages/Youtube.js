import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import Title from '../layout/Title';
import YoutubeCont from '../includes/YoutubeCont';
import YoutubeSearch from '../includes/YoutubeSearch';
// import YoutubeList from '../includes/YoutubeList';
import axios from 'axios';
import Loading from '../basics/Loading';
import { gsap } from "gsap";

class Youtube extends React.Component {
    state = {
        isLoading:true,
        lists: [],
        searchs:[]
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
            gsap.to(".youtube__inner", 
            {duration:0.8,
            x:0,
            y:0,
            opacity:1,
            delay:1.6,
            ease: "back.out"
            })
        },10)
    }

    getyoutubes = async () => {
        const lists = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=theweekend&key=AIzaSyAfrK9u6-9jUwLoDj89yDJHqI3Ly7862o4")
        this.setState({lists,isLoading:false})
        this.mainAnimation()
        console.log(lists)
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background="#fff";
            this.getyoutubes()
        }, 2000);
    }

    render(){
        const {isLoading,lists} = this.state
        return (
            <>
           {isLoading ? (
                <Loading color="light"/>
                ) : (
                <>
                <Header color="light"/>
                <ConContacts>
                    <Title title={["Youtube", "Reference"]} color="light"/>
                    {/* <YoutubeSearch /> */}
                    <YoutubeCont lists={lists}/>
                    <ConContact/>
                </ConContacts>
                <Footer color="light"/>
                </>
            )}
            </>
        )
    }
}

export default Youtube;