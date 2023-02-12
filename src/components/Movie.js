import React from 'react'

const Movie = (props) => {
    return (
        <div className='movie'>
            <img src={props.img} alt='' />
            <a href={props.link} ><p>{props.title}</p></a>
            <p>{props.year}</p>
    


        </div>
    )
}

export default Movie