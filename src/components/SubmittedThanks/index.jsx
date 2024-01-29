import React from 'react'

const SubmittedThanks = () => {
    return (<div  className='pl-[50px] pb-[30px] w-[70%] flex flex-col gap-4 justify-center items-center'>
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
    <h1 className='mt-[25px] text-[30px] text-Very-dark-violet ' >THANK YOU!</h1>
    <p className='text-Dark-grayish-violet'>We've added your card details</p>
    <button className='bg-Very-dark-violet text-White font-700 w-[380px] mt-[25px]' >Continue</button>
  </div>
  )
}

export default SubmittedThanks