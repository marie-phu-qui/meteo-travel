import React from 'react'


const Meteo = () => (
  <div className='meteo-container'>
    <p>
        Meteo
    </p>
    <form>
      <input className='user-input' type='text' name='unit' placeholder='unit'></input>
      <input className='user-input' type='text' name='city' placeholder='city'></input>
      <input className='btn' type='button' value='submit'></input>
    </form>
    <p>
      You should go :
    </p>
  </div>
)

export default Meteo