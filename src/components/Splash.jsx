import React from 'react'
import GridLoader from "react-spinners/GridLoader";

const Splash = () => {
  return (
    <div className='h-screen w-screen bg-dark flex flex-col items-center justify-center'>
        <GridLoader className='mx-auto block' color='#1fab9d'/>
    </div>
  )
}

export default Splash