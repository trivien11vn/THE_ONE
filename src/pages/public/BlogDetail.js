import React from 'react'
import image8 from '../../assets/image_8.jpg'
const BlogDetail = () => {
  return (
    <div className='w-full my-[24px] flex flex-col gap-8 relative'>
      <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
      <div className='w-main mx-auto flex flex-col gap-8'>
          <div className='w-[860px] font-extrabold text-[56px] leading-[64px]'>BLOG'S TITLE NAME HERE</div>
          <img className='w-full h-[530px] object-cover' src={image8}/>
          <div className='flex justify-between'>
            <div className='w-[70%]'></div>
            <div className='w-[25%]'></div>
          </div>
      </div>
    </div>
  )
}

export default BlogDetail