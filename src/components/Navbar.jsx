
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {

    const navbarLinks = [
        {
            id: 1,
            link: "home",
            text: "Home"
        },

        {
            id: 2,
            link: "about",
            text: "About"
        },

        {
            id: 3,
            link: "portfolio",
            text: "Portfolio"
        },

        {
            id: 4,
            link: "tech",
            text: "Tech Stack"
        },

        {
            id: 5,
            link: "contact",
            text: "Contact"
        },
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>

            <div>

                <h1 className=' text-5xl font-signature ml-2'>
                    Faisal
                </h1>

            </div>

            <ul className='hidden md:flex'>

                {
                    navbarLinks.map(({id, link, text}) => (

                        <li key={id} className='px-4 cursor-pointer text-gray-500 font-medium hover:scale-105 duration-200'>

                            <Link to={link} smooth duration={500}>
                                {text}
                            </Link>

                        </li>
                    ))
                }

            </ul>

            <div className='md:hidden cursor-pointer pr-4 z-10' onClick={() => setMenuOpen(!menuOpen)}>

                {
                    menuOpen ? <FaTimes size={30}/> : <FaBars size={30}/>
                }

            </div>

            {
                menuOpen && (

                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b
                    from-black to-gray-800 text-gray-500'>
                        {
                            navbarLinks.map(({id, link, text}) => (

                                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-2xl">

                                    <Link onClick={() => setMenuOpen(!menuOpen)} to={link} smooth duration={500}>
                                        {text}
                                    </Link>

                                </li>
                            ))
                        }
                    </ul>
                )
            }

        </div>
    )
}

export default Navbar