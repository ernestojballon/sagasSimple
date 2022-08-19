import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { setJokes } from '../store/actions/jokesActions'


const NumberJokes = ()=> {
  const [jokesNumber, setjokesNumber] = useState(0)
  const dispatch = useDispatch()
  // const jokes = useSelector((state) => state.jokes)

  // useEffect(() => {
  //   console.log('Jokes are:',jokes)
  // }, )
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