import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com/in/faisal-patel07',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/FaisalPatel-456',
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:patelfaisal2000@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>

            <ul>
                {
                    links.map(({id, child, href, style, download}) => (

                        <li className={"flex justify-between items-center w-40 h-14 px-4 bg-slate-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" 
                        + " " + style} key={id}> 

                            <a href={href} className='flex justify-between items-center w-full text-white' download={download}
                            target='_blank' rel="noreferrer">

                                {child}

                            </a>

                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default SocialLinks