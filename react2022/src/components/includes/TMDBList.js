import React from 'react'
import TMDBItem from './TMDBItem'

function TMDBList(props) {
    // console.log(props.lists.data.items)
  return (
    <div className='youtube__list'>
        <ul>
            {props.results.map((video, index) => (
                <TMDBItem key={index} video={video}/>
            ))}
        </ul>
    </div>
  )
}

export default TMDBList