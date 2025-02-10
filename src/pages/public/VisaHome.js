import React from 'react'
import suitcaseImage from '../../assets/suitcase.png'
import { GoArrowUpRight } from 'react-icons/go'
import { TfiAngleDoubleDown } from "react-icons/tfi";
const VisaHome = () => {
  return (
    <div className='mt-[24px] full relative w-full'>
        {/* <div className='w-[1313px] h-[686p] relative'>
            <div className='flex w-[759px] h-[240px] gap-[56px]'>
                <div className='w-[80px] h-[20px] my-auto bg-[#F08921]'></div>
                <div className='flex flex-col justify-between'>
                    <span className='text-[56px] font-extrabold leading-[64px]'>FIND YOUR DESTINATION!</span>
                    <span className='text-[32px] font-[400px] leading-[36px]'>Let us apply the paperworks or eVISA for your trip.</span>
                </div>
            </div>
            <div className='w-[564px] h-[514px] top-[47px] left-[741px] absolute'>
                <img src={suitcaseImage} className='w-[564px] h-[514px] transform scale-x-[-1] absolute z-40' />
                <div className='w-[433px] h-[433px] bg-[#F08921] rounded-full absolute top-0 right-0 z-10'></div>
            </div>
        </div> */}
        <div className='h-[240px] flex items-center absolute left-0'>
            <div className='w-[80px] h-[20px] my-auto bg-[#F08921]'></div>
        </div>
        <div className='w-main mx-auto flex justify-between'>
            <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col justify-between w-[623px] h-[240px]'>
                    <span className='text-[56px] font-extrabold leading-[64px]'>FIND YOUR DESTINATION!</span>
                    <span className='text-[32px] font-[400px] leading-[36px]'>Let us apply the paperworks or eVISA for your trip.</span>
                </div>
                <div className='w-[645px] h-[180px] flex flex-col gap-[24px] mt-[20px]'>
                    <div className='flex gap-[24px]'>
                        <div className='w-[300px] h-[88px] flex flex-col gap-2'>
                            <span className='font-semibold text-[18px] leading-[24px]'>Your Nationality</span>
                            <div className='w-[300px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                        </div>
                        <div className='w-[300px] h-[88px] flex flex-col gap-2'>
                            <span className='font-semibold text-[18px] leading-[24px]'>Travelling to</span>
                            <div className='w-[300px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                        </div>
                    </div>
                    <div className='w-[645px] h-[48px] rounded-lg bg-[#3B7ACC] flex justify-center items-center text-white font-[700px] leading-[24px] text-[16px] gap-1'>
                        GET STARTED
                        <GoArrowUpRight />
                    </div>
                </div>
            </div>
            <div className='w-[564px] h-[514px] relative'>
                <img src={suitcaseImage} className='w-[564px] h-[514px] transform scale-x-[-1] z-40 absolute z-40' />
                <div className='w-[433px] h-[433px] bg-[#F08921] rounded-full z-10 absolute top-0 right-0'></div>
            </div>
        </div>
        <div className='w-[1169px] h-[78px] border border-[#7F7F7F] rounded-md mx-auto flex justify-center'>
            <div className='w-[1134px] h-full flex gap-[64px] items-center justify-center'>
                <div className='flex gap-[11px] w-[234px] h-[26px] items-center'>
                    <span className='font-bold leading-[24px] text-[16px]'>A12</span>
                    <span>Lorem Ipsum Dolar</span>
                </div>
                <div className='flex gap-[11px] w-[234px] h-[26px] items-center'>
                    <span className='font-bold leading-[24px] text-[16px]'>B12</span>
                    <span>Lorem Ipsum Dolar</span>
                </div>
                <div className='flex gap-[11px] w-[234px] h-[26px] items-center'>
                    <span className='font-bold leading-[24px] text-[16px]'>A2</span>
                    <span>Lorem Ipsum Dolar</span>
                </div>
                <div className='flex gap-[11px] w-[234px] h-[26px] items-center'>
                    <span className='font-bold leading-[24px] text-[16px]'>AB12</span>
                    <span>Lorem Ipsum Dolar</span>
                </div>
            </div>
        </div>
        <div className='w-[314px] h-[64px] rounded-[12px] mx-auto border border-[#7F7F7F] flex flex-col items-center justify-center mt-[20px]'>
            <span className='uppercase text-[#272727] text-[16px] font-bold leading-[24px]'>Scroll down to see more</span>
            <TfiAngleDoubleDown />
        </div>
        <div className='w-main mt-[20px] mx-auto'>
            <span className='font-extrabold text-[40px] leading-[52px] underline'>WHY CHOOSE US?</span>
            <div className='w-full h-[704px] flex flex-col gap-[24px]'>
                <div className='w-full h-[624px] flex flex-col gap-[24px]'>
                    <div className='flex gap-[136px]'>
                        <div className='w-[437px] h-[244px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <div className='w-[437px] h-[244px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    <div className='flex gap-[136px]'>
                        <div className='w-[437px] h-[244px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <div className='w-[437px] h-[244px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisaHome