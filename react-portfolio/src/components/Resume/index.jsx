import React from 'react'

const Resume = () => {
  return (
    <div className='resumé'> 
        <h1>Resumé</h1>
        <div className='image'>
            <img src={`${process.env.PUBLIC_URL}/resumé.png`} alt="resumé" />
        </div>
    </div>
  )
}

export default Resume