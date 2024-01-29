import React from 'react'
import { useState } from 'react';
import SubmittedThanks from '../SubmittedThanks';

function FormCard  ({register,onSubmit, handleSubmit,errors, watch})  {
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario se ha enviado

  const isNumeric = (value) =>/^[0-9]+$/.test(value);
  const hasOnlyLetters = (value) => /^[a-zA-Z\s]*$/.test(value);
  
  const handleFormSubmit = (data) => {
    onSubmit(data); // Lógica para enviar el formulario
    setFormSubmitted(true); // Establece el estado como enviado
  };

  if (formSubmitted) {
    return <SubmittedThanks/>
  }

  return (
    <div className='pl-[50px] w-[70%] flex  justify-center items-center'>
    <form  onSubmit={handleSubmit(handleFormSubmit)} className='w-[380px] flex flex-col text-start'>
      <label  >CARDHOLDER NAME</label>
      <input type="text" placeholder="e.g. Jane Appleseed" {...register("name", {required: true,validate: {
              isAlpha: (value) => hasOnlyLetters(value),
            },})}
            className={errors.name ? 'border border-Red' : ''}

            />
      {errors.name?.type === 'required' && <span className='text-Red'>Can't be blank</span>}
      {errors.name?.type === 'isAlpha' && <span className='text-Red'>Wrong format, letters only</span>}



      <label className='mt-[18px]' >CARD NUMBER</label>
      <input type="text" placeholder="e.g. 1234 5678 9123 0000"  maxLength={16} {...register("number", {required: true, validate: {
              inNumeric: (value) => isNumeric(value),
            }, maxLength: 16,minLength:16})}
            
            className={errors.number ? 'border border-Red' : ''}

            />
                  {errors.number?.type === 'required' && <span className='text-Red'>Can't be blank</span>}

      {errors.number?.type === 'inNumeric' && <span className='text-Red'>Wrong format, numbers only</span>}



      <div className='flex mt-[18px]'>
        <div> 
             <label >EXP. DATE(MM/YY)</label>
              <div className='flex  mt-8px  mr-[20px]'>

                      <div>  
                            <input className= {errors.month ? 'border border-Red w-[75px]  mr-[10px]' : 'w-[75px]  mr-[10px]'} type="datetime" placeholder="MM"  maxLength={2} {...register("month", {required: true,validate: {
                            inNumeric: (value) => isNumeric(value),
                          },maxLength: 2,minLength:2})} 
                          
                          />
                            {errors.month?.type === 'required' && <span className='text-Red'>Can't be blank</span>}
                            {/* {errors.month?.type === 'maxLength' && <span>el campo debe tener 2 caracteres</span>}
                            {errors.month?.type === 'minLength' && <span>el campo debe tener 2 caracteres</span>} */}
                            {errors.month?.type === 'inNumeric' && <span className='text-Red'>Wrong format, numbers only</span>}
                        </div>
                      <div> 
                          <input className= {errors.year ? 'border border-Red w-[75px]  mr-[10px]' : 'w-[75px]  mr-[10px]'} type="datetime" placeholder="YY"  maxLength={2} {...register("year", {required: true,validate: {
                          inNumeric: (value) => isNumeric(value),
                        },maxLength: 2, minLength:2})} />
                          {errors.year?.type === 'required' && <span className='text-Red'>Can't be blank</span>}
                          {/* {errors.year?.type === 'maxLength' && <span>el campo debe tener 2 caracteres</span>}
                          {errors.year?.type === 'minLength' && <span>el campo debe tener 2 caracteres</span>} */}
                          {errors.year?.type === 'inNumeric' && <span className='text-Red'>Wrong format, numbers only</span>}
                      </div>
              </div>
       </div>
       <div>
            <label htmlFor="">CVC</label>
            <input className= {errors.cvc ? 'border border-Red w-full' : ' w-full'} type="text" placeholder="e.g.123"  maxLength={3} {...register("cvc", {required: true,validate: {
              inNumeric: (value) => isNumeric(value),
            },maxLength: 3, minLength:3})} />
               {errors.cvc?.type === 'required' && <span  className='text-Red'>Can't be blank</span>}
               {/* {errors.cvc?.type === 'maxLength' && <span>el campo debe tener 3 caracteres</span>}
               {errors.cvc?.type === 'minLength' && <span>el campo debe tener 3 caracteres</span>} */}
               {errors.cvc?.type === 'inNumeric' && <span className='text-Red'>Wrong format, numbers only</span>}

     </div>
    
      </div>
      <input className='input-confirm bg-Very-dark-violet text-White font-700' type="submit" value="Confirm" />
    </form>
  
          </div>
  )
}

export default FormCard