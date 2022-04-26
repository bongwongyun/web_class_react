import React from 'react'
import TMDBList from '../includes/TMDBList'

function TMDBCont(props) {
  return (
    <section className="TMDB__cont">
      <div className="container">
        <div className="TMDB__inner">
            <TMDBList lists={props.lists} />
        </div>
      </div>
    </section>
  )
}

export default TMDBCont