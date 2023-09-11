import React from 'react'
import HTMLImage from '../assets/html.png';
import CSSImage from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Github from '../assets/github.png';
import NodeJS from '../assets/node.png';
import ReactJS from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import CPPImage from '../assets/c.png';
import JavaImage from '../assets/java.png';

const TechStack = () => {

    const tech = [
        {
            id: 1,
            title: "HTML",
            src: HTMLImage,
            style: "shadow-orange-500"
        },
        {
            id: 2,
            title: "CSS",
            src: CSSImage,
            style: "shadow-blue-500"
        },
        {
            id: 3,
            title: "Javascript",
            src: JavaScript,
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            title: "Github",
            src: Github,
            style: "shadow-gray-400"
        },
        {
            id: 5,
            title: "C++",
            src: CPPImage,
            style: "shadow-[#082789]"
        },
        {
            id: 6,
            title: "Java",
            src: JavaImage,
            style: "shadow-[#3573ca]"
        },
        {
            id: 7,
            title: "Node",
            src: NodeJS,
            style: "shadow-[#78d32c]"
        },
        {
            id: 8,
            title: "React",
            src: ReactJS,
            style: "shadow-[#06bff9]"
        },
        {
            id: 9,
            title: "Tailwind",
            src: Tailwind,
            style: "shadow-sky-400"
        },
    ]

    return (
        <div name="tech" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black'>

            <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full md:h-full text-white'>

                <div>

                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        My Tech Stack
                    </p>

                    <p className=' py-6'>
                        These are the technologies I have worked with
                    </p>

                </div>

                <div className=' w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 md:px-0'>

                    {
                        tech.map(({id, title, src, style}) => (

                            <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>

                                <img src={src} alt='' className='w-20 mx-auto' />

                                <p className="mt-4">
                                    {title}
                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default TechStack