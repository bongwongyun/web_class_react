import React from 'react'

function TMDBItem(props) {
    return (
        <li>
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
            <p className='title'>{props.video.snippet.title}</p>
        </li>
    )
}

function TMDBList(props) {
    // console.log(props.lists.data.items)
  return (
    <div className='TMDB__list'>
        <ul>
            {props.lists.data.items.map((list,index) => (
                <TMDBItem key={index} video={list}/>
            ))}
        </ul>
    </div>
  )
}

export default TMDBList