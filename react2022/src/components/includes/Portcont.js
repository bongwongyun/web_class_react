import React from "react";

function PortInfo({id, category, image, link, title}){
    return (
        <article className="port__item">
            <figure className="img">
                <a href={link}><img src={image} alt={`port0${id}`} /></a>
            </figure>
            <div className="text">
                <h3>{category}</h3>
                <p>{title}</p>
            </div>
        </article>
    )
}
function PortCont(props){
    return(
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                    {props.port.map((port) => (
                        <PortInfo
                            key={port.id}
                            id={port.id}
                            category={port.category}
                            image={port.image}
                            link={port.link}
                            title={port.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
// function PortCont() {
//     return (
//         <section className='port__cont'>
//             <div className="container">
//                 <div className="port__inner">
//                     <article className="port__item">
//                         <figure className="img">
//                             <a href="/"><img src="/img/port01@2x.jpg" alt="port01" /></a>
//                         </figure>
//                         <div className="text">
//                             <h3>Portfolio title</h3>
//                             <p>Portfolio text</p>
//                         </div>
//                     </article>
//                     <article className="port__item">
//                         <figure className="img">
//                             <a href="/"><img src="/img/port02@2x.jpg" alt="port01" /></a>
//                         </figure>
//                         <div className="text">
//                             <h3>Portfolio title</h3>
//                             <p>Portfolio text</p>
//                         </div>
//                     </article>
//                     <article className="port__item">
//                         <figure className="img">
//                             <a href="/"><img src="/img/port03@2x.jpg" alt="port01" /></a>
//                         </figure>
//                         <div className="text">
//                             <h3>Portfolio title</h3>
//                             <p>Portfolio text</p>
//                         </div>
//                     </article>
//                     <article className="port__item">
//                         <figure className="img">
//                             <a href="/"><img src="/img/port04@2x.jpg" alt="port01" /></a>
//                         </figure>
//                         <div className="text">
//                             <h3>Portfolio title</h3>
//                             <p>Portfolio text</p>
//                         </div>
//                     </article>
//                     <article className="port__item">
//                         <figure className="img">
//                             <a href="/"><img src="/img/port01@2x.jpg" alt="port01" /></a>
//                         </figure>
//                         <div className="text">
//                             <h3>Portfolio title</h3>
//                             <p>Portfolio text</p>
//                         </div>
//                     </article>
//                     <article className="port__item">
//                         <figure className="img">
//                             <a href="/"><img src="/img/port02@2x.jpg" alt="port01" /></a>
//                         </figure>
//                         <div className="text">
//                             <h3>Portfolio title</h3>
//                             <p>Portfolio text</p>
//                         </div>
//                     </article>
//                 </div>
//             </div>
//             </section>
//     )
// }

export default PortCont;