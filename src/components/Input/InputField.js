import React from 'react'

const InputField = ({title, isEmptyAllow=true}) => {
  return (
    <div className='flex flex-col gap-[8px]'>
        <div className='flex gap-1 items-center'>
          <span className='font-semibold text-[16px] leading-[24px]'>{title}</span>
          {
            !isEmptyAllow 
            &&
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" fill="#F08921"/>
            <path d="M14.1831 10.0808L14.6036 10.3514L14.1831 10.0808ZM10 9C10 9.27614 10.2239 9.5 10.5 9.5C10.7761 9.5 11 9.27614 11 9H10ZM12 13.5C12 13.7761 12.2239 14 12.5 14C12.7761 14 13 13.7761 13 13.5H12ZM13 16C13 15.7239 12.7761 15.5 12.5 15.5C12.2239 15.5 12 15.7239 12 16H13ZM12 17C12 17.2761 12.2239 17.5 12.5 17.5C12.7761 17.5 13 17.2761 13 17H12ZM22 12C22 17.2467 17.7467 21.5 12.5 21.5V22.5C18.299 22.5 23 17.799 23 12H22ZM12.5 21.5C7.25329 21.5 3 17.2467 3 12H2C2 17.799 6.70101 22.5 12.5 22.5V21.5ZM3 12C3 6.75329 7.25329 2.5 12.5 2.5V1.5C6.70101 1.5 2 6.20101 2 12H3ZM12.5 2.5C17.7467 2.5 22 6.75329 22 12H23C23 6.20101 18.299 1.5 12.5 1.5V2.5ZM14 9C14 9.29936 13.9128 9.57683 13.7626 9.81023L14.6036 10.3514C14.8545 9.96142 15 9.49694 15 9H14ZM11 9C11 8.17157 11.6716 7.5 12.5 7.5V6.5C11.1193 6.5 10 7.61929 10 9H11ZM12.5 7.5C13.3284 7.5 14 8.17157 14 9H15C15 7.61929 13.8807 6.5 12.5 6.5V7.5ZM12 13V13.5H13V13H12ZM13.7626 9.81023C13.6289 10.0181 13.4638 10.2296 13.2784 10.46C13.0983 10.6839 12.8954 10.9298 12.7131 11.1803C12.3521 11.6766 12 12.2831 12 13H13C13 12.6124 13.1906 12.2237 13.5217 11.7687C13.6855 11.5436 13.8661 11.3248 14.0575 11.0869C14.2437 10.8555 14.4385 10.6079 14.6036 10.3514L13.7626 9.81023ZM12 16V17H13V16H12Z" fill="white"/>
            </svg>
          }
        </div>
        <input className='outline-none w-full h-[40px] rounded-lg border border-[#7F7F7F] flex items-center px-4 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-[#A9A9A9]' placeholder='Enter Input'/>
    </div>
  )
}

export default InputField