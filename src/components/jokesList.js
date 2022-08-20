import React from 'react'
import {useSelector} from 'react-redux'

const JokesList = () => {
  const jokes = useSelector((state) => state.jokesState.jokes)
  
  return (
    <div>
      {!jokes.length 
          ? 
              <div>No Jokes to Display</div>
          :  
          <div> 
            {jokes.map((joke, index) => {
                return (
                    <div key={index}>
                        <p>{joke.joke}</p>
                    </div>
                )
            })}
          </div>
      }
    </div>
  )
}

export default JokesList