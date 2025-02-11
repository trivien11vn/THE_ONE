import React from 'react'
import building from '../../assets/building.jpg'
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri'
import moutain from '../../assets/moutain.jpg'
import { RecentBlog } from '../../components'
import image1 from '../../assets/image_1.jpg'
import image2 from '../../assets/image_2.jpg'
import image3 from '../../assets/image_3.jpg'

const VisaCountry = () => {
  return (
    <div className='my-[24px]  full relative w-full flex flex-col gap-[40px]'>
        <div className='w-[728px] h-[40px] flex justify-between items-start'>
            <div className='w-[80px] h-[20px] bg-[#F08921]'></div>
            <div className='w-[592px] h-[40px] flex items-center gap-[16px]'>
                <div className='w-[88px] h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center'>Home</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" stroke-linejoin="round" />
                </svg>
                <div className='w-[218px] h-[40px] rounded-2xl border border-[#3B7ACC] bg-[#3B7ACC] text-white flex items-center justify-center gap-2'>
                    <span>Country</span>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6277_33906)">
                        <path d="M1.55259 8.3125V8.625H1.74996V8.9375H1.94733V8.625H2.1447V8.3125H2.34207V8H2.53944V7.6875H2.7368V7.375H2.93417V7.0625H2.67101V6.75H2.50654V6.4375H1.91444V6.75H2.30917V7.0625H2.1118V7.375H1.91444V7.6875H1.71707V7.375H1.55259C1.4868 7.625 1.42101 7.90625 1.35522 8.15625V8.28125H1.55259V8.3125ZM3.82233 3.59375L3.72365 3.6875H3.82233V3.59375Z" fill="white"/>
                        <path d="M5.36836 2.46875H5.17099V2.78125H4.97363V3.09375H4.77626V3.40625H4.57889V3.71875H4.38152V3.40625H4.18415V3.25L3.98678 3.4375V3.71875H4.18415V4.03125H4.38152V4.34375H4.18415V4.65625H3.98678V4.96875H3.78942V4.65625H3.62494V4.34375H3.46047V4.03125C3.39468 4.09375 3.32889 4.1875 3.2631 4.25V4.34375H3.19731C3.13152 4.375 3.09863 4.40625 3.06573 4.46875V4.625H2.93415C2.90126 4.65625 2.90126 4.6875 2.86836 4.71875V4.90625H2.73678C2.67099 5 2.60521 5.125 2.53942 5.21875H2.70389V5.53125H2.90126V5.84375H3.09863V6.15625H3.29599V6.46875H3.46047V6.15625H3.65784V5.84375H3.85521V5.53125H4.05257V5.21875H4.24994V4.90625H4.44731V4.59375H4.64468V4.90625H4.77626V5.21875H4.97363V5.53125H5.17099V5.84375H5.36836V6.15625H5.56573V5.53125H5.36836V5.21875H5.56573V4.3125H5.36836V4.625H5.17099V4.9375H4.97363V4.625H4.77626V4.3125H4.57889V4H4.77626V3.6875H4.97363V3.375H5.17099V3.6875H5.36836V4H5.56573V3.0625H5.36836V2.75H5.56573V2.21875C5.49994 2.25 5.43415 2.3125 5.36836 2.34375V2.46875ZM3.46047 5.53125H3.2631V4.90625H3.46047V5.53125ZM1.35521 11.0625V10.75H1.55257V10.4375H1.74994V10.125H1.94731V9.8125H1.71705V9.5H1.55257V9.1875H1.35521V8.875H1.22363C1.19073 9.28125 1.15784 9.625 1.15784 10C1.15784 10.375 1.19073 10.7188 1.22363 11.0625H1.35521ZM5.36836 9.21875H5.17099V9.53125H4.97363V9.84375H4.77626V10.1562H4.97363V10.4688H5.17099V10.7812H5.36836V11.0625H5.53284V8.9375H5.36836V9.21875Z" fill="white"/>
                        <path d="M3.62498 3.78125C3.55919 3.84375 3.4934 3.9375 3.42761 4H3.62498V3.78125ZM3.72367 16.3125L3.82235 16.4062V16.3125H3.72367ZM3.46051 16C3.5263 16.0625 3.59209 16.1563 3.65788 16.2188V16H3.46051Z" fill="white"/>
                        <path d="M5.36838 17.2187V16.9062H5.56575V15.9687H5.36838V16.2812H5.17101V16.5937H4.97365V16.2812H4.77628V15.9687H4.57891V15.6562H4.77628V15.3437H4.97365V15.0312H5.17101V15.3437H5.36838V15.6562H5.56575V14.7187H5.36838V14.4062H5.56575V13.7812H5.36838V14.0937H5.17101V14.4062H4.97365V14.7187H4.77628V15.0312H4.57891V15.3437H4.38154V15.0312H4.18417V14.7187H3.9868V14.4062H3.78944V14.0937H3.62496V13.7812H3.46049V13.4687H3.26312V13.7812H3.06575V14.0937H2.86838V14.4062H2.67101V14.7187H2.53944C2.60522 14.8125 2.67101 14.9375 2.7368 15.0312H2.86838V15.2188C2.90128 15.25 2.90128 15.2812 2.93417 15.3125H3.06575V15.4688C3.09865 15.5938 3.13154 15.625 3.19733 15.6875H3.26312V15.7812C3.32891 15.8438 3.3947 15.9375 3.46049 16V15.6875H3.65786V15.375H3.85522V15.0625H4.05259V15.375H4.24996V15.6875H4.44733V16H4.24996V16.3125H4.05259V16.5937L4.24996 16.7812V16.625H4.44733V16.3125H4.6447V16.625H4.77628V16.9375H4.97365V17.25H5.17101V17.5625H5.36838V17.6875C5.43417 17.7187 5.49996 17.7812 5.56575 17.8125V17.25L5.36838 17.2187ZM3.46049 15.0625H3.26312V14.4375H3.46049V15.0625ZM5.36838 11.6875H5.17101V11.375H4.97365V11.0625H4.77628V11.375H4.57891V11.6875H4.41443V12H4.21707V12.3125H4.0197V12.625H3.82233V12.9062H4.0197V13.2187H4.21707V13.5312H4.77628V13.2187H4.41443V12.9062H4.57891V12.625H4.77628V12.3125H4.97365V12.625H5.17101V12.9062H5.36838V13.2187H5.53286V12.625H5.36838V12.3125H5.53286V12H5.36838V11.6875ZM5.36838 7.09375H5.17101V7.375H4.97365V7.6875H4.77628V7.375H4.57891V7.09375H4.41443V6.78125H4.77628V6.46875H4.21707V6.78125H4.0197V7.09375H3.82233V7.375H4.0197V7.6875H4.21707V8H4.41443V8.3125H4.57891V8.625H4.77628V8.9375H4.97365V8.625H5.17101V8.3125H5.36838V8H5.53286V7.6875H5.36838V7.375H5.53286V6.78125H5.36838V7.09375ZM1.71707 12.3125H1.91444V12.625H2.1118V12.9375H2.30917V13.25H1.91444V13.5625H2.47365V13.25H2.67101V12.9375H2.86838V12.625H2.67101V12.3125H2.50654V12H2.30917V11.6875H2.1118V11.375H1.91444V11.0625H1.71707V11.375H1.55259V11.6875H1.35522V11.8125C1.42101 12.0937 1.4868 12.3437 1.55259 12.5937H1.71707V12.3125ZM3.82233 8.3125H3.62496V8H3.46049V7.6875H3.26312V8H3.06575V8.3125H2.86838V8.625H2.67101V8.9375H2.50654V9.25H2.30917V10.8125H2.50654V11.125H2.70391V11.4375H2.90128V11.75H3.09865V12.0625H3.29601V12.375H3.46049V12.0625H3.65786V11.75H3.85522V11.4375H4.05259V11.125H4.24996V10.8125H4.44733V9.25H4.24996V8.9375H4.05259V8.625H3.85522L3.82233 8.3125ZM2.67101 9.96875V10.1562H2.50654V9.84375H2.70391V9.96875H2.67101ZM4.0197 10.0312V9.84375H4.21707V10.1562H4.0197V10.0312ZM3.26312 8.3125H3.46049V8.625H3.26312V8.3125ZM3.46049 11.6875H3.26312V11.375H3.46049V11.6875ZM3.82233 9.53125H3.62496V9.84375H3.46049V10.1562H3.65786V10.4687H3.85522V11.0938H3.62496V10.7812H3.46049V10.4687H3.26312V10.7812H3.06575V11.0938H2.86838V10.4687H3.06575V10.1562H3.26312V9.84375H3.06575V9.53125H2.86838V8.90625H3.06575V9.21875H3.26312V9.53125H3.46049V9.21875H3.65786V8.90625H3.85522L3.82233 9.53125Z" fill="white"/>
                        <path d="M2.86831 4.71875C2.83542 4.78125 2.76963 4.84375 2.73673 4.90625H2.86831V4.71875ZM3.06568 4.625V4.46875C3.03279 4.53125 2.99989 4.5625 2.9341 4.625H3.06568ZM3.26305 4.3125V4.21875C3.23015 4.25 3.23015 4.28125 3.19726 4.3125H3.26305ZM2.50647 9.96875V10.1562H2.67094V9.84375H2.50647V9.96875ZM5.36831 5.25H5.56568V5.5625H5.36831V5.25ZM3.62489 4.3125V4.625H3.82226V4.9375H4.01963V4.625H4.217V4.3125H4.41436V4H4.217V3.6875H4.01963V3.40625L3.82226 3.59375V3.6875H3.72358L3.62489 3.78125V4H3.46042V4.3125H3.62489ZM5.36831 2.78125H5.56568V3.09375H5.36831V2.78125ZM5.36831 3.6875H5.17094V3.40625H4.97358V3.6875H4.77621V4H4.57884V4.3125H4.77621V4.625H4.97358V4.9375H5.17094V4.625H5.36831V4.3125H5.53279V4H5.36831V3.6875ZM4.41436 3.40625V3.71875H4.61173V3.40625H4.77621V3.09375H4.97358V2.78125H5.17094V2.46875H5.36831V2.34375C5.00647 2.59375 4.64463 2.84375 4.34857 3.125C4.31568 3.15625 4.28279 3.1875 4.217 3.21875V3.375H4.41436V3.40625ZM3.32884 4.9375H3.26305V5.53125H3.46042V4.9375H3.36173H3.32884ZM3.62489 9.21875H3.46042V9.53125H3.26305V9.21875H3.06568V8.9375H2.86831V9.53125H3.06568V9.84375H3.26305V10.1562H3.06568V10.4687H2.86831V11.0625H3.06568V10.7812H3.26305V10.4687H3.46042V10.7812H3.62489V11.0625H3.82226V10.4687H3.62489V10.1562H3.46042V9.84375H3.62489V9.53125H3.82226V8.9375H3.62489V9.21875ZM5.36831 7.375H5.56568V7.6875H5.36831V7.375Z" fill="#C8313E"/>
                        <path d="M5.36837 5.84375H5.171V5.53125H4.97363V5.21875H4.77626V4.90625H4.5789V4.59375H4.38153V4.90625H4.18416V5.21875H3.98679V5.53125H3.78942V5.84375H3.62495V6.15625H3.46048V6.46875H3.26311V6.15625H3.06574V5.84375H2.86837V5.53125H2.671V5.21875H2.53942C2.34205 5.53125 2.14469 5.875 1.98021 6.21875C1.81574 6.59375 1.68416 6.96875 1.55258 7.34375H1.71705V7.65625H1.91442V7.34375H2.11179V7.03125H2.30916V6.71875H1.91442V6.40625H2.47363V6.71875H2.671V7.03125H2.86837V7.34375H2.671V7.65625H2.50653V7.96875H2.30916V8.28125H2.11179V8.59375H1.91442V8.90625H1.71705V8.59375H1.55258V8.28125H1.35521V8.15625C1.28942 8.40625 1.25653 8.65625 1.22363 8.90625H1.35521V9.21875H1.55258V9.53125H1.74995V9.84375H1.94732V10.1562H1.71705V10.4688H1.55258V10.7812H1.35521V11.0938H1.22363C1.25653 11.3438 1.28942 11.5938 1.35521 11.8438V11.7188H1.55258V11.4062H1.74995V11.0938H1.94732V11.4062H2.14469V11.7188H2.34205V12.0312H2.53942V12.3438H2.73679V12.6562H2.93416V12.9688H2.671V13.2812H2.50653V13.5938H1.91442V13.2812H2.30916V12.9688H2.11179V12.6562H1.91442V12.3438H1.71705V12.6562H1.55258C1.68416 13 1.81574 13.375 1.98021 13.75C2.14469 14.0938 2.34205 14.4375 2.53942 14.75H2.7039V14.4375H2.90126V14.125H3.09863V13.8125H3.296V13.5H3.46048V13.8125H3.65784V14.125H3.85521V14.4375H4.05258V14.75H4.24995V15.0625H4.44732V15.375H4.64469V15.0625H4.77626V14.75H4.97363V14.4375H5.171V14.125H5.36837V13.8125H5.56574V13.1875H5.36837V12.875H5.171V12.5625H4.97363V12.25H4.77626V12.5625H4.5789V12.875H4.38153V13.1875H4.77626V13.5H4.21705V13.1875H4.01969V12.875H3.82232V12.5625H4.01969V12.25H4.21705V11.9375H4.41442V11.625H4.61179V11.3125H4.77626V11H4.97363V11.3125H5.171V11.625H5.36837V11.9375H5.56574V11H5.36837V10.6875H5.171V10.375H4.97363V10.0625H4.77626V9.75H4.97363V9.4375H5.171V9.125H5.36837V8.8125H5.56574V7.875H5.36837V8.1875H5.171V8.5H4.97363V8.8125H4.77626V8.5H4.5789V8.1875H4.38153V7.875H4.18416V7.5625H3.98679V7.25H3.78942V6.9375H3.98679V6.625H4.18416V6.3125H4.77626V6.625H4.38153V6.9375H4.5789V7.25H4.77626V7.5625H4.97363V7.25H5.171V6.9375H5.36837V6.625H5.56574V6H5.36837V5.84375ZM4.01969 8.625V8.9375H4.21705V9.25H4.41442V10.8125H4.21705V11.125H4.01969V11.4375H3.82232V11.75H3.62495V12.0625H3.46048V12.375H3.26311V12.0625H3.06574V11.75H2.86837V11.4375H2.671V11.125H2.50653V10.8125H2.30916V9.25H2.50653V8.9375H2.7039V8.625H2.90126V8.3125H3.09863V8H3.296V7.6875H3.46048V8H3.65784V8.3125H3.85521V8.625H4.01969Z" fill="#C8313E"/>
                        <path d="M3.36182 8.625H3.4605V8.3125H3.26313V8.625H3.32892H3.36182ZM2.8684 15.0625H2.73682C2.76971 15.125 2.8355 15.1875 2.8684 15.25V15.0625ZM3.06576 15.375H2.93418C2.96708 15.4375 2.99997 15.4688 3.06576 15.5312V15.375ZM3.26313 15.6875H3.19734C3.23024 15.7188 3.23024 15.75 3.26313 15.7812V15.6875ZM5.3684 14.4687H5.56576V14.7812H5.3684V14.4687ZM5.3684 15.375H5.17103V15.0625H4.97366V15.375H4.77629V15.6875H4.57892V16H4.77629V16.3125H4.97366V16.5937H5.17103V16.3125H5.3684V16H5.53287V15.6875H5.3684V15.375ZM3.62497 16V16.2188L3.72366 16.3125H3.82234V16.4062L4.01971 16.5937V16.3125H4.21708V16H4.41445V15.6875H4.21708V15.375H4.01971V15.0625H3.82234V15.375H3.62497V15.6875H3.4605V16H3.62497ZM5.3684 16.9062H5.56576V17.2187H5.3684V16.9062ZM4.31576 16.875C4.64471 17.1562 4.97366 17.4375 5.3355 17.6562V17.5312H5.13813V17.2187H4.94076V16.9062H4.77629V16.5937H4.57892V16.2812H4.38155V16.5937H4.18418V16.75L4.31576 16.875ZM3.32892 14.4687H3.26313V15.0625H3.4605V14.4687H3.36182H3.32892ZM5.3684 12.3125H5.56576V12.625H5.3684V12.3125ZM4.21708 10.0312V9.84375H4.01971V10.1562H4.21708V10.0312ZM3.32892 11.375H3.26313V11.6875H3.4605V11.375H3.36182H3.32892Z" fill="#C8313E"/>
                        <path d="M5.53284 13.75V17.7813C7.11178 18.7813 8.98678 19.375 11.0263 19.375C13.6249 19.375 15.9605 18.4375 17.7368 16.875C18.7236 16 19.546 14.9375 20.0723 13.75H5.53284Z" fill="#83BF4F"/>
                        <path d="M20.0723 13.75C20.5986 12.5938 20.8947 11.3438 20.8947 10C20.8947 8.65625 20.5986 7.40625 20.0723 6.25C19.5131 5.0625 18.7236 4 17.7368 3.125C15.9605 1.5625 13.6249 0.625 11.0263 0.625C8.98678 0.625 7.11178 1.21875 5.53284 2.21875V13.75H20.0723Z" fill="#C94747"/>
                        </g>
                        <rect x="1" y="0.5" width="19" height="19" rx="9.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_6277_33906">
                        <rect x="0.5" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83331 12.3513V7.64882C5.83331 6.10524 7.50774 5.1435 8.84106 5.92127L12.8718 8.27252C14.1948 9.04428 14.1948 10.9559 12.8718 11.7276L8.84106 14.0789C7.50774 14.8567 5.83331 13.8949 5.83331 12.3513Z" stroke="#3B7ACC" stroke-linejoin="round" />
                </svg>
                <div className='w-[300px] h-[40px] rounded-2xl border border-[#3B7ACC] text-[#3B7ACC] flex items-center justify-center'>
                      <span className='text-[16px] leading-[28px]'>Get Your Global Evisa Now !</span>
                </div>
            </div>
        </div>
        <div className='w-main h-[781px] mx-auto relative'>
            <img className='w-main h-[781px] opacity-95' src={building}/>
            <div className='absolute top-[52px] left-[55px] flex flex-col'>
                <span className='uppercase font-extrabold text-[48px] leading-[56px] left-[55px] text-white underline'>Travel to Lorem</span>
                <span className='uppercase font-extrabold text-[48px] leading-[56px] left-[55px] text-white underline'>IPSUM</span>
            </div>
            <div className='absolute w-[324px] h-[180px] top-[52px] left-[794px] border border-white bg-gray-400 z-[50] flex flex-col items-center justify-center'>
                <span className='text-black font-bold'>NATIONAL FLAG</span>
                <span className='text-black font-bold'>UPLOAD HERE</span>
            </div>
            <div className='absolute top-[351px] left-[10px] w-[80px] h-[80px] rounded-full border-2 border-white flex items-center justify-center text-white'>
                <RiArrowLeftWideFill size={36} />
            </div>
            <div className='absolute top-[351px] right-[10px] w-[80px] h-[80px] rounded-full border-2 border-white flex items-center justify-center text-white'>
                <RiArrowRightWideFill size={36} />
            </div>
            <div className='absolute top-[473px] left-[38px] w-[1095px] h-[234px] flex flex-col justify-between'>
                <div className='flex flex-col gap-1'>
                    <span className='font-extrabold text-[56px] leading-[64px] text-white'>LOREM IPSUM</span>
                    <span className='font-extrabold text-[56px] leading-[64px] text-white'>TRAVEL TIPS</span>
                </div>
                <span className='text-[#FFFCF7]'>Welcome to Belarus, aWestern European whose owns more than 10 thousand lakes and has about 40% of its land covered by forests. We will provide some of the useful tips for you to enjoy your time spent here! </span>
            </div>
        </div>

        <div className='w-main mx-auto flex gap-[54px] items-end'>
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

        <div className='w-main mx-auto h-[1100px] rounded-md gap-[40px] flex flex-col'>
            <div className='w-full h-[640px] rounded-md border border-[#7F7F7F]'>
                <div className='w-full h-[91px] bg-[#3B7ACC] flex flex-col items-center justify-center text-white'>
                    <span className='font-extrabold text-[24px] leading-[32px]'>REQUIRED DOCUMENTS</span>
                    <span className='font-normal text-[16px] leading-[24px]'>You need to submit these following paper forms in ottder to enter</span>
                </div>
                <div className='w-[1068px] mx-auto my-[12px] px-[20px] py-[12px] h-[81px] rounded-2xl border border-[#3B7ACC] flex gap-[25px] items-center'>
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
                <div className='w-[1129px] h-[370px] flex gap-[45px] mx-auto justify-center'>
                    <div className='w-[326px] h-[370px] border border-[#545454] rounded-2xl flex flex-col items-center gap-4 justify-center'>
                        <div className='w-[247px] h-[74px] rounded-2xl border border-[#3B7ACC] flex flex-col gap-1 items-center justify-center'>
                            <span className='font-bold text-[20px] leading-[26px] text-[#2F62A3]'>VISA FOR</span>
                            <span className='font-bold text-[20px] leading-[26px] text-[#2F62A3]'>LOREM IPSUM</span>
                        </div>
                        <div className='w-[246px] h-[64px] flex flex-col gap-1 items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                            <span className='font-normal text-[16px] leading-[24px]'>Consectetur adipiscing elit</span>
                        </div>
                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.1666 20.0002C37.1666 29.2049 29.7047 36.6668 20.5 36.6668C11.2952 36.6668 3.83331 29.2049 3.83331 20.0002C3.83331 10.7954 11.2952 3.3335 20.5 3.3335C29.7047 3.3335 37.1666 10.7954 37.1666 20.0002Z" fill="#3B7ACC"/>
                            <path d="M13.8332 20.0002L18.0577 23.8022C18.7768 24.4494 19.8942 24.3503 20.4882 23.5866L27.1665 15.0002M20.4999 36.6668C29.7046 36.6668 37.1665 29.2049 37.1665 20.0002C37.1665 10.7954 29.7046 3.3335 20.4999 3.3335C11.2951 3.3335 3.83319 10.7954 3.83319 20.0002C3.83319 29.2049 11.2951 36.6668 20.4999 36.6668Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='w-[246px] h-[64px] flex flex-col items-center'>
                            <span className='font-light text-[12px] leading-[22px]'>Lorem Ipsum Dolor Sit</span>
                            <span className='font-light text-[12px] leading-[22px]'>Consectetur adipiscing elit</span>
                        </div>

                    </div>
                    <div className='w-[326px] h-[370px] border border-[#545454] rounded-2xl flex flex-col items-center gap-4 justify-center'>
                        <div className='w-[247px] h-[74px] rounded-2xl border border-[#545454] flex flex-col gap-1 items-center justify-center'>
                            <span className='font-bold text-[20px] leading-[26px]'>HEALTH</span>
                            <span className='font-bold text-[20px] leading-[26px]'>DECLARATION</span>
                        </div>
                        <div className='w-[246px] h-[64px] flex flex-col gap-1 items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                            <span className='font-normal text-[16px] leading-[24px]'>Consectetur adipiscing elit</span>
                        </div>
                        <span className='font-semibold text-[20px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                        <div className='w-[246px] h-[64px] flex flex-col items-center'>
                            <span className='font-light text-[12px] leading-[22px]'>Lorem Ipsum Dolor Sit</span>
                            <span className='font-light text-[12px] leading-[22px]'>Consectetur adipiscing elit</span>
                        </div>

                    </div>
                    <div className='w-[326px] h-[370px] border border-[#545454] rounded-2xl flex flex-col items-center gap-4 justify-center'>
                        <div className='w-[247px] h-[74px] rounded-2xl border border-[#545454] flex flex-col gap-1 items-center justify-center'>
                            <span className='font-bold text-[20px] leading-[26px]'>PASSPORT FOR </span>
                            <span className='font-bold text-[20px] leading-[26px]'>LOREM IPUSM</span>
                        </div>
                        <div className='w-[246px] h-[64px] flex flex-col gap-1 items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                            <span className='font-normal text-[16px] leading-[24px]'>Consectetur adipiscing elit</span>
                        </div>
                        <span className='font-semibold text-[20px] leading-[24px]'>Lorem Ipsum Dolor Sit</span>
                        <div className='w-[246px] h-[64px] flex flex-col items-center'>
                            <span className='font-light text-[12px] leading-[22px]'>Lorem Ipsum Dolor Sit</span>
                            <span className='font-light text-[12px] leading-[22px]'>Consectetur adipiscing elit</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='h-[420px] rounded-md flex flex-col border border-[#7F7F7F]'>
                <div className='h-[91px] rounded-t-md border border-[#3B7ACC] flex flex-col gap-1 items-center justify-center'>
                    <span className='text-[#2F62A3] font-extrabold text-[24px] leading-[32px]'>NOTES</span>
                    <span>Other Notices To Know</span>
                </div>
                <div className='flex-1 flex flex-col gap-2'>
                    <div className='w-[1046px] mx-auto my-[12px] px-[20px] py-[12px] h-[81px] rounded-2xl border border-[#EFA969] flex gap-[25px] items-center'>
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
                    <div className='w-[1046px] mx-auto font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className='w-[1046px] mx-auto font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    <div className='w-[1046px] mx-auto font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                
                </div>
            </div>
        </div>

        <div className='w-main flex flex-col gap-[40px] mx-auto'>
            <div className='flex gap-[96px]'>
                <div className='w-[595px] flex flex-col gap-[28px]'>
                    <img className='w-full h-[398px]' src={moutain}/>
                    <span className='font-extrabold text-[40px] leading-[52px] text-[#545454] underline'>WELCOME TO LOREM IPSUM DOLOR SIT</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /> <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <div className='w-[595px] h-[104px] rounded-2xl border border-[#3B7ACC] bg-[#FFFCF7] flex items-center justify-center'>
                        <span className='font-bold text-[20px] leading-[26px] text-[#3B7ACC] uppercase'>Check Country's  Required Documents</span>
                    </div>
                </div>
                <div className='w-[480px] h-[916px] border border-[#5F5348] bg-[#FFFCF7] rounded-2xl relative'>
                    <div className='w-[64px] h-[8px] bg-[#3B7ACC] absolute top-[82px] left-[0.5px]'></div>
                    <div className='w-[302px] h-[52px] flex items-center justify-center absolute top-[43px] left-[89px] font-extrabold text-[40px] leading-[52px] underline'>
                        SCROLL TO
                    </div>
                    <div className='w-[352px] h-[744px] absolute top-[137px] left-[64.5px] flex flex-col gap-[20px]'>
                        <span className='text-[#292941] h-[56px]'>1. Document checklist for Lorem Ipsum Dolor:</span>
                        <span className='text-[#292941] h-[56px]'>2. Essential Lorem Ipsum Dolor travel information:</span>
                        <span className='text-[#292941] h-[56px]'>3. Visa information for Lorem Ipsum Dolor:</span>
                        <span className='text-[#292941] h-[56px]'>4. Costs and budgets:</span>
                        <span className='text-[#292941] h-[56px]'>5. Transports and ways to travel around Lorem Ipsum Dolor:</span>
                        <span className='text-[#292941] h-[56px]'>6. Safety in Lorem Ipsum Dolor:</span>
                        <span className='text-[#292941] h-[56px]'>7. Weather in Lorem Ipsum Dolor:</span>
                        <span className='text-[#292941] h-[56px]'>8. Top visiting sites and must-try things:</span>
                        <span className='text-[#292941] h-[56px]'>9. Local cuisine to try:</span>
                        <span className='text-[#292941] h-[56px]'>10. Vaccine information for Lorem Ipsum Dolor: </span>
                        <span className='text-[#292941] h-[56px]'>11. Lorem Ipsum Dolor's fun facts: </span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>DOCUMENT CHECKLIST FOR LOREM IPSUM DOLOR </span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>ESSENTIAL LOREM IPSUM TRAVEL INFORMATION</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>VISA INFORMATION FOR LOREM IPSUM</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>COSTS AND BUDGETS</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>TRANSPORTS AND WAYS TO TRAVEL AROUND LOREM IPSUM</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>SAFETY IN LOREM IPSUM</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>WEATHER IN LOREM IPSUM</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>TOP VISITING SITES AND MUST-TRY THINGS IN LOREM IPSUM</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>LOCAL LOREM IPSUM CUISINE TO TRY</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>VACCINE INFORMATION FOR LOREM IPSUM</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <span className='font-extrabold text-[40px] leading-[52px] underline'>FUN FACTS ABOUT THE LOREM IPSUM</span>
                <div>
                    Lum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. :<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                    + Lorem Ipsum Dolor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                    + Lorem Ipsum Dolor: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
                </div>
            </div>
            <div className='flex flex-col gap-[40px]'>
                <span className='font-extrabold text-[40px] leading-[52px]'>RECENT BLOGS</span>
                <div className='w-full h-[480px] px-8 relative'>
                    <div className='h-[480px] flex justify-between'>
                        <div className='w-[30%] h-full'>
                            <RecentBlog image={image1} title='Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
                        </div>
                        <div className='w-[30%] h-full'>
                            <RecentBlog image={image2} title='Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
                        </div>
                        <div className='w-[30%] h-full'>
                            <RecentBlog image={image3} title='Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
                        </div>
                    </div>
                    <div className='absolute top-1/2 left-[-30px]'>
                        <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="28" cy="28" rx="28" ry="28" transform="matrix(-1 8.74228e-08 8.74228e-08 1 56.5 0)" fill="#3B7ACC"/>
                            <path d="M30.5 21.4375L26.5 28L30.5 34.5625" stroke="#FFFCF7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='absolute top-1/2 right-[-30px]'>
                        <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="28" cy="28" rx="28" ry="28" transform="matrix(-1 8.74228e-08 8.74228e-08 1 56.5 0)" fill="#3B7ACC"/>
                            <path d="M26.5 34.5625L30.5 28L26.5 21.4375" stroke="#FFFCF7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className='w-[342px] mx-auto h-[56px] rounded-lg bg-[#3B7ACC] text-white font-bold text-[16px] leading-6 flex items-center justify-center'>SEE MORE ARTICLES</div>
            </div>
        </div>
    </div>
  )
}

export default VisaCountry