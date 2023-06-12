import React from 'react'

function Users() {
  return (
    <div className='py-20 px-2  container mx-auto min-h-screen '>
        <div className='flex flex-wrap justify-center gap-4'>

                <div className='bg-slate-200 rounded-lg shadow-lg py-2 px-8  w-full md:w-auto'>
                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center'>
                            <img src="https://lh3.googleusercontent.com/a/AAcHTtdcEHd3-IeYgJcbLngvrKwxUHMqQKEKIBn2nkBG=s96-c" className='w-16 h-16 rounded-full object-cover' />
                        </div>
                        <div className='flex place-content-center place-items-center  mx-6'>
                            <h1 className='text-xl font-bold'>Othmane elkhiari </h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

              

         </div>
    </div>
  )
}

export default Users