import React from 'react'

const Contact = () => {
    return (

        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

            <div className=' flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full'>

                <div className='pb-8'>

                    <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>
                        Contact
                    </p>

                    <p className=' py-6'>
                        Get in contact with me by submitting form
                    </p>

                </div>

                <div className='flex justify-center items-center'>

                    <form action="https://getform.io/f/7ca790ea-fb7a-4c9c-8822-88f1f2431e1e" method="POST" 
                    className='flex flex-col w-full md:w-1/2'>

                        <input type='text' name='name' placeholder='Enter your name' className=' p-2 bg-transparent border-2 
                        rounded-md text-white focus:outline-none' />

                        <input type='text' name='name' placeholder='Enter your email' className=' p-2 bg-transparent border-2 
                        rounded-md text-white focus:outline-none my-4' />

                        <textarea name='message' rows={6} placeholder='Enter your message' className=' p-2 bg-transparent 
                        border-2 rounded-md text-white focus:outline-none' />

                        <button className='my-8 text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto 
                        flex items-center rounded-md hover:scale-105 duration-200'>
                            Submit
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact