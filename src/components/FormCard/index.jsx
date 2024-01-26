import React from 'react'


function FormCard  ({register,onSubmit, handleSubmit,errors, watch})  {
 
  const isNumeric = (value) =>/^[0-9]+$/.test(value);
  const hasOnlyLetters = (value) => /^[a-zA-Z\s]*$/.test(value);
  

  return (
    <div className='pl-[50px] w-[70%] flex  justify-center items-center'>
    <form  onSubmit={handleSubmit(onSubmit)} className='w-[380px] flex flex-col text-start'>
      <label  >CARDHOLDER NAME</label>
      <input type="text" placeholder="e.g. Jane Appleseed" {...register("name", {required: true,validate: {
              isAlpha: (value) => hasOnlyLetters(value),
            },})} />
      {errors.name?.type === 'required' && <p>can't be blanc</p>}
      {errors.name?.type === 'isAlpha' && <p className='text-Red'>Wrong format, letters only</p>}



      <label >CARD NUMBER</label>
      <input type="text" placeholder="e.g. 1234 5678 9123 0000"  maxLength={16} {...register("number", {required: true, validate: {
              inNumeric: (value) => isNumeric(value),
            }, maxLength: 16,minLength:16})} />
      {errors.number?.type === 'maxLength' && <p>el campo debe tener 16 caracteres</p>}
      {errors.number?.type === 'inNumeric' && <p className='text-Red'>Wrong format, numbers only</p>}



      <div className='flex'>
        <div> 
             <label >EXP. DATE(MM/YY)</label>
              <div className='flex mt-8px  mr-[20px]'>

               <input className='w-[75px]  mr-[10px] border border-gray-300' type="datetime" placeholder="MM"  maxLength={2} {...register("month", {required: true,validate: {
              inNumeric: (value) => isNumeric(value),
            },maxLength: 2,minLength:2})} />
               {errors.month?.type === 'required' && <p>Can't be blank</p>}
               {errors.month?.type === 'maxLength' && <p>el campo debe tener 2 caracteres</p>}
               {errors.month?.type === 'minLength' && <p>el campo debe tener 2 caracteres</p>}
               {errors.month?.type === 'inNumeric' && <p className='text-Red'>Wrong format, numbers only</p>}


               <input className='w-[75px] border border-gray-300' type="datetime" placeholder="YY"  maxLength={2} {...register("year", {required: true,validate: {
              inNumeric: (value) => isNumeric(value),
            },maxLength: 2, minLength:2})} />
               {errors.year?.type === 'required' && <p>Can't be blank</p>}
               {errors.year?.type === 'maxLength' && <p>el campo debe tener 2 caracteres</p>}
               {errors.year?.type === 'minLength' && <p>el campo debe tener 2 caracteres</p>}
               {errors.year?.type === 'inNumeric' && <p className='text-Red'>Wrong format, numbers only</p>}

              </div>
       </div>
     <div>
      <label htmlFor="">CVC</label>
     <input className='w-full' type="text" placeholder="e.g.123"  maxLength={3} {...register("cvc", {required: true,validate: {
              inNumeric: (value) => isNumeric(value),
            },maxLength: 3, minLength:3})} />
        {errors.cvc?.type === 'required' && <p>Can't be blank</p>}
               {errors.cvc?.type === 'maxLength' && <p>el campo debe tener 3 caracteres</p>}
               {errors.cvc?.type === 'minLength' && <p>el campo debe tener 3 caracteres</p>}
               {errors.cvc?.type === 'inNumeric' && <p className='text-Red'>Wrong format, numbers only</p>}

     </div>
    
      </div>
      <input className='bg-Very-dark-violet text-White font-700' type="submit" value="Confirm" />
    </form>
  
          </div>
  )
}

export default FormCard