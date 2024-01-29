import React from 'react';
import bgCardFront from '../../assets/bg-card-front.png'
import bgCardBack from '../../assets/bg-card-back.png'




function BgCards({watch})  {

    const formatCardNumber = (number) => {
        // Utilizar una expresión regular para insertar un espacio después de cada grupo de 4 dígitos
        return number.replace(/(\d{4})/g, '$1 ');
      };


  return (
        <div className='absolute  sm:flex-col-reverse top-[13%] left-[130px] sm:left-[0px] sm:px-[15px] sm:top-[30px]  sm:z-[1] flex flex-col gap-9 tracking-[3px] text-white'>
            <figure className='relative sm:top-[-104px] sm:z-10 rounded-lg sm:pr-[70px]'>
            <svg className='absolute top-6 left-6 sm:hidden' width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
            <svg className='absolute top-6 left-6 sm:flex hidden' width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="15.478" cy="15.5" rx="15.478" ry="15.5" fill="#fff"/>
  {/* Mantén rx y ry iguales para hacer el círculo redondo */}
  <ellipse cx="45.5" cy="15.5" rx="6" ry="6" stroke="#fff"/>
</svg>
                <img className='shadow-2xl' src={bgCardFront} alt="" />
                <div className=' absolute sm:relative sm:bottom-[100px] sm:z-20 bottom-0  w-[100%] text-left p-7'>
                    <p className='text-[1.8rem] sm:text-[0.8rem] mb-5'>
                    {watch('number')?formatCardNumber(watch('number')):'0000 0000 0000 0000'}
                        </p>
                    <div className='flex justify-between text-[1rem]'>
                        <p className='sm:text-[9px]'>  {watch('name')?watch('name'):'JANE APPLESSEED'}</p>
                        <div className='flex sm:text-[8px]'>
                            <p>  {watch('month')?watch('month'):'00'}</p>/
                            <p>  {watch('year')?watch('year'):'00'}</p>
                        </div>
                    </div>
                </div>
            </figure>

            
            <figure className=' relative left-[95px] sm:left-0  rounded-lg sm:pl-[60px]'>
                <img className='shadow-2xl' src={bgCardBack} alt="" />
                <p className='absolute  top-[110px] sm:top-[68px]  sm:right-10 right-14 sm:text-[10px]'>
                {watch('cvc')?watch('cvc'):'000'}
                </p>
            </figure>
        </div>

  )
}

export default BgCards