import React from 'react'

function FormField({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) {
  return (
    <div className='text-black'>
      <div className='flex items-center gap-2 mb-2'>
        <label 
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'  
        >
            {labelName}
        </label>
        {isSurpriseMe && (
          <button 
            type='button'
            onClick={handleSurpriseMe}
            className='text-black bg-[#ECECF1] font-semibold text-xs py-1 px-2 rounded-[5px]'
          >
            Surprise Me
          </button>
        )}
      </div>
      <input 
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]
        focus:border-[#4649ff] outline-none w-full py-2 px-4 sm:text-sm'
        required
      />
    </div>
  )
}

export default FormField