import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { LOGIN_BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className=''>
     {/**1.Gpt seacrh bar
    *  2.Gpt Movie suggestions
     */}  
       <div className="absolute -z-10 opacity-80">
        <img
          alt="backgroundImage"
          src={LOGIN_BG_URL}
        />
      </div>
     <GptSearchBar /> 
     <GptMovieSuggestions/>



    </div>
  )
}

export default GptSearch