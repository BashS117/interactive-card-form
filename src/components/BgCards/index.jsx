import React from 'react';
import bgCardFront from '../../assets/bg-card-front.png'
import bgCardBack from '../../assets/bg-card-back.png'

function BgCards()  {
  return (
        <div className='absolute top-[13%] left-[130px] flex flex-col gap-9 tracking-[3px] text-white'>
            <figure className='relative shadow-2xl rounded-lg'>
            <svg className='absolute top-6 left-6' width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
                <img className='' src={bgCardFront} alt="" />
                <div className=' absolute bottom-0  w-[100%] text-left p-7'>
                    <p className='text-[1.8rem] mb-5'>0000 0000 0000 0000</p>
                    <div className='flex justify-between text-[0.9rem]'>
                        <p> JANE APLESSED</p>
                        <div className='flex'>
                            <p>00</p>/
                            <p>00</p>
                        </div>
                    </div>
                </div>
            </figure>

            
            <figure className=' relative left-[95px] shadow-2xl rounded-lg'>
                <img className='' src={bgCardBack} alt="" />
                <p className='absolute top-[110px] right-14'>000</p>
            </figure>
        </div>

  )
}

export default BgCards