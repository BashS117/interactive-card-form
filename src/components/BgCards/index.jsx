import React from 'react';
import bgCardFront from '../../assets/bg-card-front.png'
import bgCardBack from '../../assets/bg-card-back.png'

function BgCards()  {
  return (
        <div className='absolute top-[12%] left-[130px] flex flex-col gap-14'>
            <figure className='relative'>
                <img src={bgCardFront} alt="" />
                <div className='absolute bottom-0'>
                    <p>0000 0000 0000 0000</p>
                    <div className='flex'>
                        <p> JANE NOSEQUE</p>
                        <div className='flex'>
                            <p>00</p>/
                            <p>00</p>
                        </div>
                    </div>
                </div>
            </figure>
            <figure className='pl-[80px]'>
                <img src={bgCardBack} alt="" />
            </figure>
        </div>

  )
}

export default BgCards