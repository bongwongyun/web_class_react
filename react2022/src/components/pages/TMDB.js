import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import TMDBCont from "../includes/TMDBCont";
import Title from "../layout/Title";
import axios from 'axios';
import Loading from '../basics/Loading';
import { gsap } from "gsap";

class TMDB extends React.Component {
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
            gsap.to(".TMDB__inner", 
            {duration:0.8,
            x:0,
            y:0,
            opacity:1,
            delay:1.6,
            ease: "back.out"
            })
        },10)
    }

    getTMDBs = async () => {
        const lists = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=7f7a4782c5ffbe46d1d497f11139cca9")
        this.setState({lists,isLoading:false})
        this.mainAnimation()
        console.log(lists)
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background="#fff";
            this.getTMDBs()
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
                    <Title title={["TMDB", "SITE"]} color="light"/>
                    <TMDBCont lists={lists}/>
                    <ConContact/>
                </ConContacts>
                <Footer color="light"/>
                </>
            )}
            </>
        )
    }
}

export default TMDB;