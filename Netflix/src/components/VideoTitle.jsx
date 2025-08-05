import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video '>
        <h1 className='text-4xl font-bold' >{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-gray-500 p-4 px-12 text-xl text-white font-bold bg-opacity-50 rounded-lg '>Play</button>
            <button className=' ml-2 bg-white border border-black-900 outline-2 py-4 px-10 text-xl font-bold  text-black bg-opacity-50 rounded-lg '> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle