import { InputField } from 'components'
import React from 'react'
import { FaExchangeAlt } from 'react-icons/fa'

const SearchFlight = () => {
    return (
        <div className='w-full my-[24px] flex flex-col gap-8 relative'>
            <div className='w-main mx-auto flex flex-col gap-8'>
                <div className='flex items-end'>
                    <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
                    <span className='font-extrabold text-[56px] leading-[64px]'>SEARCH YOUR FLIGHT!</span>
                </div>
                <div className="w-full bg-[#3B7ACC] flex flex-col items-center gap-8 px-16 py-8">
                    {/* Tab Selection */}
                    <div className="flex gap-16 items-center">
                        <button className="bg-[#F08921] border-2 border-white rounded-xl px-6 py-3 text-white text-lg font-bold">
                            One-way/ Round Trip
                        </button>
                        <button className="bg-white border-2 border-white rounded-xl px-16 py-3 text-[#272727] text-lg font-normal">
                            Multi-city
                        </button>
                    </div>

                    {/* Search Form */}
                    <div className="w-full flex justify-between relative">
                        {/* Location Inputs */}
                        <div className="w-[24%]">
                            <InputField titleColor='#fff' title={'Location 1'} />
                        </div>
                        <div className='border border-[#FFFCF7] absolute top-[60%] left-[23%] transform -translate-y-1/2 cursor-pointer bg-[#F08921] flex items-center justify-center p-2 rounded-md'>
                            <FaExchangeAlt className="text-white" />
                        </div>

                        <div className="w-[24%]">
                            <InputField titleColor='#fff' title={'Location 2'} />
                        </div>

                        {/* Date Inputs */}
                        <div className='w-[24%]'>
                            <InputField titleColor='#fff' title={'Date of Departure'} placeholder='DD/MM/YYYY' />
                        </div>

                        <div className='w-[24%]'>
                            <InputField titleColor='#fff' title={'Round-trip'} placeholder='DD/MM/YYYY' checkbox />
                        </div>
                    </div>

                    <div className='w-full flex justify-between'>
                        <div className='w-[49%]'>
                            <InputField titleColor='#fff' title={'Class of Passenger'} />
                        </div>
                        <div className='w-[49%]'>
                            <InputField titleColor='#fff' title={'Number of Passenger'} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-[18%] py-2 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[90%]'>
                        <span className='font-semibold text-[16px] leading-[22px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[12px] leading-[22px]'>From 000,000,000 Currency</span>
                    </div>
                    <div className='w-[18%] py-2 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[90%]'>
                        <span className='font-semibold text-[16px] leading-[22px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[12px] leading-[22px]'>From 000,000,000 Currency</span>
                    </div>
                    <div className='w-[18%] py-2 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[130%] shadow-xl shadow-blue-300'>
                        <span className='font-semibold text-[16px] leading-[22px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[12px] leading-[22px]'>From 000,000,000 Currency</span>
                    </div>
                    <div className='w-[18%] py-2 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[90%]'>
                        <span className='font-semibold text-[16px] leading-[22px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[12px] leading-[22px]'>From 000,000,000 Currency</span>
                    </div>
                    <div className='w-[18%] py-2 border border-[#3B7ACC] rounded-2xl flex flex-col gap-2 items-center justify-center h-[90%]'>
                        <span className='font-semibold text-[16px] leading-[22px]'>26th - 27th Sep 2023</span>
                        <span className='font-light text-[12px] leading-[22px]'>From 000,000,000 Currency</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFlight