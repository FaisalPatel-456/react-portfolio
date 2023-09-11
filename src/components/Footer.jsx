
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {

    const links = [
        {
            id: 1,
            child: (
                <div className='flex flex-col justify-center items-center gap-1'>
                    <FaLinkedin size={30}/> 
                    Linkedin
                </div>
            ),
            href: 'https://linkedin.com/in/faisal-patel07',
        },
        {
            id: 2,
            child: (
                <div className='flex flex-col justify-center items-center gap-1'>
                    <FaGithub size={30}/>
                    Github 
                </div>
            ),
            href: 'https://github.com/FaisalPatel-456',
        },
        {
            id: 3,
            child: (
                <div className='flex flex-col justify-center items-center gap-1'>
                    <HiOutlineMail size={30}/>
                    Email 
                </div>
            ),
            href: 'mailto:patelfaisal2000@gmail.com',
        },
        {
            id: 4,
            child: (
                <div className='flex flex-col justify-center items-center gap-1'>
                    <BsFillPersonLinesFill size={30}/>
                    Resume 
                </div>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]

    return (
        <div className='w-full pt-10 bg-black text-white'>

            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full'>

                <p className='text-3xl font-bold p-2 inline'>
                    Connect With Me
                </p>

                <div className='flex gap-6 mt-3'>

                    {
                        links.map(({id, href, child}) =>(

                            <a href={href} key={id}>
                                {child}
                            </a>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Footer