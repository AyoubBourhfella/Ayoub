import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Work = ({work}) => {
  return (
    <div className='flex relative text-center hover:scale-105 hover:border-primary transition-all flex-col items-center gap-5 justify-between flex-1 p-2 bg-[#4f566d]/20 rounded-lg border-white/10 border-2'>
      <img src={work.image} alt={work.title} className='w-full object-top aspect-video object-cover rounded-lg' />
      <h1 className='text-white text-xl ml-2 font-monaco font-bold'>{work.title}</h1>
      <p className='text-white/40 font-Menlo_r text-base p-2 w-11/12 mx-auto text-center'>
        {work.description}
      </p>
      <a href={work.link} target="_blank" className='bg-primary w-1/2 text-xl flex items-center justify-center gap-2 text-white font-bold px-5 py-2 rounded-lg hover:bg-white hover:text-primary transition-all'>
        View <FaArrowUpRightFromSquare/>
      </a>
      {!work.availble  && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden  bg-black/20 rounded-lg flex items-center justify-center">
          <p className='bg-white w-full py-2 text-primary rotate-45 text-sm font-monaco'>Not available yet </p>
        </div>
      )}
    </div>
  )
}

export default Work