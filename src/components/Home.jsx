import React from 'react';
import HeroImage from '../assets/passport_size_photo.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-scroll';
const Home = () => {

    return (

        <div name="home" className=' h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            
            <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-row'>

                <div className='flex flex-col justify-center h-full'>

                    <h2 className='text-4xl md:text-7xl font-bold text-white'>
                        I am a Full Stack Developer
                    </h2>

                    <p className=' text-gray-400 py-4 max-w-md'>
                        Hi, I am Faisal Patel.
                        <br/>
                        Passionate Computer Engineer and Web Full-Stack Developer with ability to learn and work on any tech stack
                    </p>

                    <div>

                        <Link to='portfolio' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex gap-2 duration-200
                        items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105'>

                            Portfolio 

                            <span>
                                <FaArrowRightLong />
                            </span>

                        </Link>

                    </div>

                </div>

                <div>

                    <img src={HeroImage} alt='' className=' rounded-2xl mx-auto w-2/3 md:w-full' />

                </div>

            </div>

        </div>
    )
}

export default Home