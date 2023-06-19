import React from 'react'

function Reviews({reviews}){

    return(
    <div>
        <h1>Reviews</h1>
        <p>{reviews.difficulty}</p>
        <p>{reviews.description}</p>
    </div>
    )
}

export default Reviews