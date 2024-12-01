import React from 'react'

const Skill = ({skill}) => {
    
  return (
    <div className='flex flex-col hover:scale-105 hover:border-primary transition-all md:w-[30%] w-full p-2 bg-[#4f566d]/20 rounded-lg border-white/10 border-2 '>
        <div className="flex flex-row items-center justify-start p-2 w-11/12 mx-auto">
            <img src={skill.icon} alt={skill.name} className='w-7 h-7' /> 
            <h1 className='text-gray text-xl ml-2 lowercase'>{skill.name}.{skill.extenstion}</h1>
        </div>
        <div className={`w-11/12 my-1 h-1 mx-auto rounded-full  `} style={{backgroundColor: skill.color}} >

        </div>

    </div>
  )
}

export default Skill