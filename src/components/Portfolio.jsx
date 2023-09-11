import React from 'react'
import StudyNotion from '../assets/portfolio/studyNotion.png'
import GifsFinder from '../assets/portfolio/gifsFinder.png'
import RazorpayClone from '../assets/portfolio/razorpayClone.png'
import PasswordGenerator from '../assets/portfolio/passwordGenerator.png'

const Portfolio = () => {

    const projectCards = [
        {
            id: 1,
            src: StudyNotion,
            demoLink : "https://incandescent-lily-79ba0d.netlify.app/",
            codeLink: "https://github.com/FaisalPatel-456"
        },
        {
            id: 2,
            src: GifsFinder,
            demoLink: "https://faisalpatel-456.github.io/gifs-finder/",
            codeLink: "https://github.com/FaisalPatel-456/gifs-finder"
        },
        {
            id: 3,
            src: RazorpayClone,
            demoLink: "https://faisalpatel-456.github.io/razorpay-clone/",
            codeLink: "https://github.com/FaisalPatel-456/razorpay-clone"
        },
        {
            id: 4,
            src: PasswordGenerator,
            demoLink: "https://faisalpatel-456.github.io/password_generator/",
            codeLink: "https://github.com/FaisalPatel-456/password_generator"
        },
    ]

    return (

        <div name="portfolio" className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white'>

            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-full'>

                <div className='pb-8'>

                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>

                    <p className='py-6'>
                        Check out some of my work here
                    </p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-12 px-12 md:px-0'>

                    {
                        projectCards.map(({id, src, demoLink, codeLink}) => (

                            <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>

                                <img src={src} alt='' className=' rounded-md duration-200 hover:scale-105'/>

                                <div className='flex justify-around p-5'>

                                    <a href={demoLink} target='_blank' rel="noreferrer" className='duration-200 hover:scale-105'>

                                        Demo

                                    </a>

                                    <a href={codeLink} target='_blank' rel="noreferrer" className='duration-200 hover:scale-105'>

                                        Code

                                    </a>

                                </div>

                            </div>
                        ))
                    }

                    

                </div>

            </div>

        </div>
        
    )
}

export default Portfolio