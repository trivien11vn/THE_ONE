import React from 'react'

const Button_Blue = ({title}) => {
  return (
    <div className='w-[250px] h-[68px] rounded-2xl bg-[#3B7ACC] text-white uppercase flex items-center justify-center'>
        <span className='font-bold text-[20px] leading-[72px]'>{title}</span>
    </div>
  )
}

export default Button_Blue