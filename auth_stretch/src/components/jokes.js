import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

const Jokes = () => {
    const [jokes, setJokes] = useState('')
  
    useEffect(() => {
      axiosWithAuth()
        .get('/api/jokes')
        .then(res => {
          console.log('jokes res', res);
        })
        .catch(err => {
          console.log('could not get jokes', err)
        })
    }, [])

    return(
        <>
            <h1>Here is a list of Dad Jokes!!!</h1>
        </>
    )
};

export default Jokes;