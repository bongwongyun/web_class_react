import React from 'react'
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeList from "../includes/YoutubeList"
import YoutubeSearch from "../includes/YoutubeSearch"
import Loading from '../basics/Loading';
import { useEffect, useState } from 'react';
import { gsap } from "gsap";


function Youtube() {
    const mainAnimation = () => {
        setTimeout(()=> {
            document.getElementById("loading").classList.remove("loading__active")
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
            gsap.to(".youtube__search", 
            {duration:0.8,
            x:0,
            y:0,
            opacity:1,
            delay:1.6,
            ease: "back.out"
            })
            gsap.to(".youtube__list", 
            {duration:0.8,
            x:0,
            y:0,
            opacity:1,
            delay:1.6,
            ease: "back.out"
            })
        }, 2000)
    }
    const [videos, setVideos] = useState([]);
    const scarch = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=t${query}&key=AIzaSyAfrK9u6-9jUwLoDj89yDJHqI3Ly7862o4&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items)
            ,mainAnimation())
            .catch(error => console.log('error', error));
    }

    useEffect(()=> {
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=theweekend&key=AIzaSyAfrK9u6-9jUwLoDj89yDJHqI3Ly7862o4&type=video", requestOptions)
          .then(response => response.json())
          .then(result => setVideos(result.items),
          mainAnimation())
          .catch(error => console.log('error', error));
    }, []);

    return (
      <>
      <Loading color="light"/>
          <Header color="light" />
          <ConContacts>
              <Title title={["youtube","site"]} color="light"/>
               <section className='youtube__cont'>
                   <div className="container">
                       <div className="youtube__inner">
                       <YoutubeSearch onSearch={scarch} />
                        <YoutubeList videos={videos} />
                       </div>
                   </div>
               </section>
              <ConContact />
          </ConContacts>
          <Footer color="light" />
      </>
    )
  }
  export default Youtube;