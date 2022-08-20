import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { setJokes } from '../store/actions/jokesActions'


const NumberJokes = ()=> {
  const [jokesNumber, setjokesNumber] = useState(2)
  const dispatch = useDispatch()

  const onChangeHandler = (e)=>{
    setjokesNumber(e.target.value)
  }
  const onClickHandler = (e)=>{
    dispatch(setJokes(jokesNumber))
  }
  return <>
    <label>Insert a number:</label>
    <input 
      value={jokesNumber} 
      onChange={onChangeHandler}
      type="number"
    />
    <button onClick={onClickHandler}>Get Jokes</button>
  </>
}

export default NumberJokes