import React from 'react';
import Header from "../layout/Header";
import ConContacts from "../layout/ConContacts";
import ConContact from '../layout/ConContact';
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import TMDBList from "../includes/TMDBList"
import TMDBSearch from "../includes/TMDBSearch"
import Loading from '../basics/Loading';
import { gsap } from "gsap";
import { useEffect, useState } from 'react';

function TMDB() {
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
    const [results, setVideos] = useState([]);
    const scarch = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=7f7a4782c5ffbe46d1d497f11139cca9&query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results)
            ,mainAnimation())
            .catch(error => console.log('error', error));
    }

    useEffect(()=> {
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch("https://api.themoviedb.org/3/search/movie?api_key=7f7a4782c5ffbe46d1d497f11139cca9&query=avatar", requestOptions)
          .then(response => response.json())
          .then(result => {
            setVideos(result.results)
            mainAnimation()
            console.log(result)
        })
          .catch(error => console.log('error', error));
         
    }, []);

    return (
      <>
      <Loading color="light"/>
          <Header color="light" />
          <ConContacts>
              <Title title={["TMDB","site"]} color="light"/>
               <section className='youtube__cont'>
                   <div className="container">
                       <div className="youtube__inner">
                       <TMDBSearch onSearch={scarch} />
                        <TMDBList results={results} />
                       </div>
                   </div>
               </section>
              <ConContact />
          </ConContacts>
          <Footer color="light" />
      </>
    )
  }

export default TMDB;