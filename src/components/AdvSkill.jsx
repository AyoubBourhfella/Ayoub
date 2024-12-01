import React from 'react'

const AdvanceSkills = ({ skill }) => {

  return (
    <div className='flex hover:scale-105 hover:border-primary transition-all flex-col items-center gap-5 justify-between flex-1 p-2 bg-[#4f566d]/20 rounded-lg border-white/10 border-2'>
      <img src={skill.icon} alt={skill.name} className='w-20 h-20' />
      <h1 className='text-white text-xl ml-2'>{skill.name}</h1>
      <p className='text-white/40 font-Menlo_r text-base p-2 w-11/12 mx-auto text-center'>
        {skill.description}
      </p>
    </div>
  )
}

export default AdvanceSkills