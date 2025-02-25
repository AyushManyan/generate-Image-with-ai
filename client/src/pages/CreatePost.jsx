import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets/index'
import { getRandomPrompt } from '../utils/index'
import { FormField, Loader } from '../components'

function CreatePost() {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    image: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {
  }

  const handleChange = (e) => {
    setForm({...form , [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };


  return (
    <section className='max-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
          Create imaginative and visually stunning images through DALL-E AI and share them with the community.
        </p>
      </div>

      <form onSubmit={handleSubmit} className='mt-16 max-w-3xl'>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName='Your Name'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName='Prompt'
            type='text'
            name='prompt'
            value={form.prompt}
            handleChange={handleChange}
            placeholder='A plush toy robot sitting against a yellow wall'
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {
              form.photo ? (
                <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain rounded-lg' />
              ) : (
                <img src={preview} alt='preview' className='w-full h-full object-cover rounded-lg opacity-40' />
              )
            }

            {
              generatingImg && (
                <div className='absolute inset-0 z-0 bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-lg'>
                  <Loader />
                </div>
              )
            }

          </div>
        </div>

        <div className='mt-5 flex gap-5'>
            <button type='button' onClick={generateImage} 
              className='text-white bg-green-700 font-medium py-3 px-6 rounded-lg w-full text-center hover:bg-green-600 transition duration-300'>
            
              {generateImage ? 'Generating Image...' : 'Generate Image'}
            </button>

        </div>

        <div className='mt-10'> 
          <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created the image you want, you can share it with others in the community.</p>

          <button type='submit' className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
            {
              loading?'Sharing...':'Share with the community'
            }
          </button>
        </div>

      </form>

    </section>
  )
}

export default CreatePost