import React from 'react'

const VisaApply = () => {
  return (
    <div className='mt-[24px] h-[2600px] full relative w-full flex flex-col gap-[40px]'>
        <div className='w-[728px] h-[40px] flex justify-between items-start'>
            <div className='w-[80px] h-[20px] bg-[#F08921]'></div>
            <div className='w-[592px] h-[40px] flex items-center gap-[16px]'>
                <div className='w-[88px] h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center'>Home</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" stroke-linejoin="round" />
                </svg>
                <div className='w-[100px] h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center'>Country</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" stroke-linejoin="round" />
                </svg>
                <div className='w-[300px] h-[40px] rounded-2xl border border-[#3B7ACC] bg-[#3B7ACC] text-white flex items-center justify-center'>
                      <span className='font-bold text-[16px] leading-[28px]'>Get Your Global Evisa Now !</span>
                </div>
            </div>
        </div>
        <div className='w-main mx-auto flex flex-col gap-[40px]'>
            <div className='w-full flex flex-col gap-4'>
                <span className='font-extrabold text-[56px] leading-[64px]'>GET YOUR GLOBAL EVISA NOW!</span>
                <span className='font-normal text-[20px] text-[#272727] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className='flex gap-[54px] items-end'>
                <div className='w-[230px] h-[88px] flex flex-col gap-2'>
                    <span className='font-semibold text-[18px] leading-[24px]'>Your Nationality</span>
                    <div className='w-[230px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                </div>
                <div className='w-[230px] h-[88px] flex flex-col gap-2'>
                    <span className='font-semibold text-[18px] leading-[24px]'>Travelling to</span>
                    <div className='w-[230px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                </div>
                <div className='w-[230px] h-[88px] flex flex-col gap-2'>
                    <span className='font-semibold text-[18px] leading-[24px]'>Purpose</span>
                    <div className='w-[230px] h-[48px] border rounded-md p-2 border-[#7F7F7F] font-[400px]'>Please select</div>
                </div>
                <div className='w-full h-[56px] bg-[#F08921] text-white rounded-lg flex items-center justify-center'>
                    <span className='font-bold text-[16px] leading-[24px]'>APPLY NOW </span>
                </div>
            </div>
            <div className='h-[1100px] rounded-md gap-[40px] flex flex-col'>
                <div className='w-full h-[640px] rounded-md border border-[#7F7F7F]'>
                    <div className='w-full h-[91px] bg-[#3B7ACC] flex flex-col items-center justify-center text-white'>
                        <span className='font-extrabold text-[24px] leading-[32px]'>REQUIRED DOCUMENTS</span>
                        <span className='font-normal text-[16px] leading-[24px]'>You need to submit these following paper forms in ottder to enter</span>
                    </div>
                    <div className='w-[1068px] mx-auto my-[12px] px-[20px] py-[12px] h-[81px] rounded-2xl border border-gray-200 flex gap-[25px] items-center'>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.6666 20.5002C36.6666 29.7049 29.2047 37.1668 20 37.1668C10.7952 37.1668 3.33331 29.7049 3.33331 20.5002C3.33331 11.2954 10.7952 3.8335 20 3.8335C29.2047 3.8335 36.6666 11.2954 36.6666 20.5002Z" fill="#EFA969" />
                            <path d="M20 13.8335V15.5002M20 19.6668V27.1668M20 37.1668C29.2047 37.1668 36.6666 29.7049 36.6666 20.5002C36.6666 11.2954 29.2047 3.8335 20 3.8335C10.7952 3.8335 3.33331 11.2954 3.33331 20.5002C3.33331 29.7049 10.7952 37.1668 20 37.1668Z" stroke="#EFA969" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.0002 13.8335V15.5002M20.0002 19.6668V27.1668M20.0002 37.1668C29.2049 37.1668 36.6668 29.7049 36.6668 20.5002C36.6668 11.2954 29.2049 3.8335 20.0002 3.8335C10.7954 3.8335 3.3335 11.2954 3.3335 20.5002C3.3335 29.7049 10.7954 37.1668 20.0002 37.1668Z" stroke="#FFFCF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisaApply