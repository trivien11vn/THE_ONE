import React from 'react'
import suitcaseImage from '../../assets/suitcase.png'
import { GoArrowUpRight } from 'react-icons/go'
import { TfiAngleDoubleDown } from "react-icons/tfi";
import support247 from '../../assets/suuport247.svg'
import item1 from '../../assets/item1.svg'
import item2 from '../../assets/item2.svg'
import item3 from '../../assets/item3.svg'
import person1 from '../../assets/person1.jpg'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BsFillStarFill } from "react-icons/bs";

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
                <img src={suitcaseImage} className='w-[564px] h-[514px] transform scale-x-[-1] absolute z-40' />
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
        <div className='w-main mt-[40px] mx-auto flex flex-col gap-[40px]'>
            <span className='font-extrabold text-[40px] leading-[52px] underline'>WHY CHOOSE US?</span>
            <div className='w-full h-[704px] flex flex-col gap-[24px]'>
                <div className='w-full h-[624px] flex flex-col gap-[24px]'>
                    <div className='flex gap-[136px]'>
                        <div className='w-[437px] h-[244px] flex flex-col gap-[24px]'>
                            <div className='flex gap-[24px] items-center'>
                                <div className='bg-[#3B7ACC] w-[64px] min-h-[64px] rounded-full flex items-center justify-center'>
                                    <img src={support247} className='w-[32px] h-[32px] text-white'/>
                                </div>
                                <span className='font-bold text-[20px] leading-[26px]'>SUPPORT 24/7</span>
                            </div>
                            <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                        <div className='w-[437px] h-[244px] flex flex-col gap-[24px]'>
                            <div className='flex gap-[24px] items-center'>
                                <div className='bg-[#3B7ACC] w-[64px] min-h-[64px] rounded-full flex items-center justify-center'>
                                    <img src={support247} className='w-[32px] h-[32px] text-white'/>
                                </div>
                                <span className='font-bold text-[20px] leading-[26px]'>FAST & SIMPLE</span>
                            </div>
                            <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                    </div>
                    <div className='flex gap-[136px]'>
                        <div className='w-[437px] h-[244px] flex flex-col gap-[24px]'>
                            <div className='flex gap-[24px] items-center'>
                                <div className='bg-[#3B7ACC] w-[64px] min-h-[64px] rounded-full flex items-center justify-center'>
                                    <img src={support247} className='w-[32px] h-[32px] text-white'/>
                                </div>
                                <span className='font-bold text-[20px] leading-[26px]'>APPROVED ON TIME</span>
                            </div>
                            <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                        <div className='w-[437px] h-[244px] flex flex-col gap-[24px]'>
                            <div className='flex gap-[24px] items-center'>
                                 <div className='bg-[#3B7ACC] w-[64px] min-h-[64px] rounded-full flex items-center justify-center'>
                                    <img src={support247} className='w-[32px] h-[32px] text-white'/>
                                </div>
                                <span className='font-bold text-[20px] leading-[26px]'>SAFE & PRIVATE</span>
                            </div>
                            <div className='w-[64px] h-[8px] bg-[#F08921]'></div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                    </div>
                </div>
                <div className='w-[300px] h-[56px] flex bg-[#3B7ACC] rounded-md mx-auto text-white items-center justify-center gap-[22px]'>
                    <span className='uppercase text-[16px] font-bold leading-[24px]'>GET STARTED</span>
                    <GoArrowUpRight />
                </div>
            </div>
        </div>

        <div className='w-main mt-[40px] mx-auto flex flex-col gap-[40px]'>
            <span className='font-extrabold text-[40px] leading-[52px] underline'>HOW IT WORKS?</span>
            <div className='w-[1172px] h-[500px] flex gap-[40px]'>
                <div className='w-[364px] h-[500px] flex flex-col gap-[24px] items-center'>
                    <span className='font-bold text-[20px] leading-[26px] text-[#545454] w-[305px] h-[34px]'>FILL OUT ONLINE APPLICATION</span>
                    <div className='w-[160px] h-[160px] rounded-full bg-[#F08921] flex items-center justify-center'>
                        <div className='w-[88px] h-[88px] flex justify-center items-center'>
                            <img src={item1}/>
                        </div>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>
                <div className='w-[364px] h-[500px] flex flex-col gap-[24px] items-center'>
                    <span className='font-bold text-[20px] leading-[26px] text-[#545454] w-[305px] h-[34px]'>FILL OUT ONLINE APPLICATION</span>
                    <div className='w-[160px] h-[160px] rounded-full bg-[#F08921] flex items-center justify-center'>
                        <div className='w-[88px] h-[88px] flex justify-center items-center'>
                            <img src={item2}/>
                        </div>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>
                <div className='w-[364px] h-[500px] flex flex-col gap-[24px] items-center'>
                    <span className='font-bold text-[20px] leading-[26px] text-[#545454] w-[305px] h-[34px]'>FILL OUT ONLINE APPLICATION</span>
                    <div className='w-[160px] h-[160px] rounded-full bg-[#F08921] flex items-center justify-center'>
                       <div className='w-[88px] h-[88px] flex justify-center items-center'>
                            <img src={item3}/>
                        </div>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>
            </div>
            <div className='w-[300px] h-[56px] flex bg-[#3B7ACC] rounded-md mx-auto text-white items-center justify-center gap-[22px]'>
                <span className='uppercase text-[16px] font-bold leading-[24px]'>GET STARTED</span>
                <GoArrowUpRight />
            </div>
        </div>

        <div className='w-[1355px] mt-[40px] mx-auto flex flex-col gap-[40px]'>
            <span className='font-extrabold text-[40px] leading-[52px] underline'>TESTIMONIALS</span>
            <div className='flex justify-center items-center gap-[30px]'>
                <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center text-white bg-[#3B7ACC]'>
                    <SlArrowLeft />
                </div>
                <div className='w-main h-[588px] flex gap-[48px]'>
                    <div className='w-[357px] h-[586px] border border-[#D3D3D3] shadow-md rounded-lg flex flex-col p-2 items-center'>
                        <img src={person1} className='w-[325px] h-[320px]'/>
                        <div className='w-[325px] h-[218px] flex flex-col gap-[16px]'>
                            <div className='w-[325px] h-[52px] flex flex-col'>
                                <span className='font-bold text-lg leading-[24px]'>Lorem Ipsum</span>
                                <span>Job Title</span>
                            </div>
                            <div className='w-[128px] h-[22px] flex gap-[2px]'>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                            </div>
                            <span className='font-normal italic text-[12px] leading-[16px]'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </span>
                            
                        </div>
                    </div>
                    <div className='w-[357px] h-[586px] border border-[#D3D3D3] shadow-md rounded-lg flex flex-col p-2 items-center'>
                        <img src={person1} className='w-[325px] h-[320px]'/>
                        <div className='w-[325px] h-[218px] flex flex-col gap-[16px]'>
                            <div className='w-[325px] h-[52px] flex flex-col'>
                                <span className='font-bold text-lg leading-[24px]'>Lorem Ipsum</span>
                                <span>Job Title</span>
                            </div>
                            <div className='w-[128px] h-[22px] flex gap-[2px]'>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                            </div>
                            <span className='font-normal italic text-[12px] leading-[16px]'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </span>
                        </div>
                    </div>
                    <div className='w-[357px] h-[586px] border border-[#D3D3D3] shadow-md rounded-lg flex flex-col p-2 items-center'>
                        <img src={person1} className='w-[325px] h-[320px]'/>
                        <div className='w-[325px] h-[218px] flex flex-col gap-[16px]'>
                            <div className='w-[325px] h-[52px]'>
                                <span className='font-bold text-lg leading-[24px]'>Lorem Ipsum</span>
                                <span>Job Title</span>
                            </div>
                            <div className='w-[128px] h-[22px] flex gap-[2px]'>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                                <BsFillStarFill color='#EFA969'/>
                            </div>
                            <span className='font-normal italic text-[12px] leading-[16px]'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                            </span>
                        </div>
                    </div>
                    
                </div>
                <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center text-white bg-[#3B7ACC]'>
                     <SlArrowRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisaHome