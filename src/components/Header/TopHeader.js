import React from 'react'
import logo from '../../assets/logo.png'
import usaFlag from '../../assets/usa_flag.svg'
import dollar from '../../assets/dollar.svg'
import userImage from '../../assets/user.svg'

const TopHeader = () => {
  return (
    <div className='w-full h-[96px] bg-[#3B7ACC] flex justify-center'>
      <div className='h-full w-main flex items-center justify-between'>
        <div className='flex gap-[2px] items-center w-[135px] h-[96px] justify-start'>
          <img src={logo} className='w-[60px] h-[60px]'/>
          <div className='text-white flex flex-col text-[16px] p-2'>
            <span>Global</span>
            <span>eVISA</span>
          </div>
        </div>
        <div className='flex items-center gap-[102px]'>
          <div className='flex gap-[12px] text-white items-center h-full'>
            <span className='text-[16px] px-2 py-1'>Visa Application</span>
            <span className='text-[16px] px-2 py-1'>Flights</span>
            <span className='text-[16px] px-2 py-1'>Travel Insurance</span>
            <span className='text-[16px] px-2 py-1'>Airport Services</span>
            <span className='text-[16px] px-2 py-1'>Hotel</span>
            <span className='text-[16px] px-2 py-1'>Contact</span>
          </div>
          <div className='w-[100px] h-[40px] gap-[24px] flex items-center'>
            <div className='w-[56px] h-[40px] flex gap-[8px] items-center'>
              <div className='w-[28px] h-[20px] border-r'>
                <img src={usaFlag} className='w-[20px] h-[20px]'/>
              </div>
              <img src={dollar} className='w-[20px] h-[20px]'/>
            </div>
            <img src={userImage} className='w-[20px] h-[20px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader