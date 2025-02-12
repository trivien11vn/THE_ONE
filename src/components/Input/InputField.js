import React from 'react'

const InputField = ({title}) => {
  return (
    <div className='flex flex-col gap-[8px]'>
        <span className='font-semibold text-[16px] leading-[24px]'>{title}</span>
        <div className='w-full h-[40px] rounded-lg border border-[#7F7F7F] flex items-center px-4'>
            <span className='font-normal text-[14px] leading-[20px] text-[#A9A9A9]'>Enter Input</span>
        </div>
    </div>
  )
}

export default InputField