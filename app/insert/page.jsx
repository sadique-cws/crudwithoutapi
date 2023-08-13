import React from 'react'
import Form from '../components/Form'

const page = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-1/2 mt-4'>
            <div className='flex-1'>
                <h1 className='text-2xl font-bold capitalize mb-3'>Insert Student Record's</h1>
            </div>
            <div className='border shadow-xl p-5 rounded-lg'>
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default page