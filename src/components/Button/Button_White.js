import React from 'react'

const Button_White = ({title}) => {
  return (
    <div className='w-[250px] h-[68px] rounded-2xl border border-[#3B7ACC] text-white uppercase flex items-center justify-center'>
        <span className='font-bold text-[20px] text-[#2F62A3] leading-[72px]'>{title}</span>
    </div>
  )
}

export default Button_White