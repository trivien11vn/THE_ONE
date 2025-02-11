import React from 'react'

const ContentCheck = () => {
    return (
        <div className='w-full my-[24px] flex flex-col gap-[40px] relative'>
            <div className='w-[80px] h-[20px] bg-[#F08921] absolute left-0'></div>
            <div className='w-main mx-auto'>
                <div className='w-full font-extrabold text-[56px] leading-[64px]'>ELECTRONIC TRAVEL AUTHORIZATION: ABOUT THE PROCESS</div>
            </div>
            <div className='w-main mx-auto flex flex-col gap-[40px]'>
                <div className='flex flex-col gap-[20px] justify-between items-center'>
                    <div className='flex w-full gap-[135px]'>
                        <div className='flex-1 flex flex-col gap-4'>
                            <span className='font-semibold text-[18px] leading-[24px]'>Your Nationality</span>
                            <input className='w-full h-[48px] border rounded-md p-2 border-[#7F7F7F]' placeholder='Please Select'/>
                        </div>
                        <div className='flex-1 flex flex-col gap-4'>
                            <span className='font-semibold text-[18px] leading-[24px]'>Traveling to</span>
                            <input className='w-full h-[48px] border rounded-md p-2 border-[#7F7F7F]' placeholder='Please Select' />
                        </div>
                        <div className='flex-1 flex flex-col gap-4'>
                            <span className='font-semibold text-[18px] leading-[24px]'>Purpose</span>
                            <input className='w-full h-[48px] border rounded-md p-2 border-[#7F7F7F]' placeholder='Please Select' />
                        </div>
                    </div>
                    <div className='w-[300px] h-[52px] rounded-2xl bg-[#F08921] flex items-center justify-center'>
                        <span className='font-semibold text-[16px] leading-[72px] text-white'>CHECK</span>
                    </div>
                </div>
                <div className='border border-[#7F7F7F] rounded-md flex flex-col'>
                    <div className='h-[91px] bg-[#3B7ACC] text-white rounded-t-md flex flex-col items-center justify-center'>
                        <span className='font-extrabold text-[24px] leading-[32px]'>ILLEGAL</span>
                        <span>You are NOT allowed to visit this country</span>
                    </div>
                    <div className='px-8 py-4 flex flex-col gap-[24px]'>
                        <div className='w-[1068px] mx-auto my-[12px] px-[20px] py-[12px] h-[81px] rounded-2xl border border-[#EFA969] bg-[#FFFCF7] flex gap-[25px] items-center'>
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.6666 20.5002C36.6666 29.7049 29.2047 37.1668 20 37.1668C10.7952 37.1668 3.33331 29.7049 3.33331 20.5002C3.33331 11.2954 10.7952 3.8335 20 3.8335C29.2047 3.8335 36.6666 11.2954 36.6666 20.5002Z" fill="#EFA969" />
                                <path d="M20 13.8335V15.5002M20 19.6668V27.1668M20 37.1668C29.2047 37.1668 36.6666 29.7049 36.6666 20.5002C36.6666 11.2954 29.2047 3.8335 20 3.8335C10.7952 3.8335 3.33331 11.2954 3.33331 20.5002C3.33331 29.7049 10.7952 37.1668 20 37.1668Z" stroke="#EFA969" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.0002 13.8335V15.5002M20.0002 19.6668V27.1668M20.0002 37.1668C29.2049 37.1668 36.6668 29.7049 36.6668 20.5002C36.6668 11.2954 29.2049 3.8335 20.0002 3.8335C10.7954 3.8335 3.3335 11.2954 3.3335 20.5002C3.3335 29.7049 10.7954 37.1668 20.0002 37.1668Z" stroke="#FFFCF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                These below information and documents are the things that you need to bring in order to enter this country.<br />
                                Note*: There are also some other specific requirements for each individual and country.
                            </span>
                        </div>
                        <div className='w-[1068px] mx-auto flex flex-col gap-[12px] text-[#545454]'>
                            <div className='flex flex-col gap-2'>
                                <span className='font-normal text-[16px] leading-[24px]'>How do I get this Visa?</span>
                                <ul className='list-disc pl-5'>
                                    <li>In order to get this Visa, you will need to contact and visit your Local Embassy</li>
                                    <li>iVisa can help by getting you the additional documents below, which make your Embassy visit easier by preparing now.</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-normal text-[16px] leading-[24px]'>Other requirements:</span>
                                <ul className='list-disc pl-5'>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-normal text-[16px] leading-[24px]'>Other things to take note:</span>
                                <ul className='list-disc pl-5'>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full h-[68px] flex gap-[56px]'>
                    <div className='flex-1 flex items-center justify-center border-2 border-[#3B7ACC] rounded-2xl'>
                        <span className='font-bold text-[20px] leading-[72px] text-[#2F62A3]'>ABOUT THE PROCESS</span>
                    </div>
                    <div className='flex-1 flex items-center justify-center border-2 border-[#3B7ACC] rounded-2xl'>
                        <span className='font-bold text-[20px] leading-[72px] text-[#2F62A3]'>HOW IT WORKS?</span>
                    </div>
                    <div className='flex-1 flex items-center justify-center border-2 border-[#3B7ACC] rounded-2xl'>
                        <span className='font-bold text-[20px] leading-[72px] text-[#2F62A3]'>HOW TO APPLY</span>
                    </div>
                    <div className='flex-1 flex items-center justify-center border-2 border-[#3B7ACC] rounded-2xl'>
                        <span className='font-bold text-[20px] leading-[72px] text-[#2F62A3]'>AFTER APPLIED</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContentCheck