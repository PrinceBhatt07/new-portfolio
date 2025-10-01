import React, { Component } from 'react'
import CTA from '../components/CTA'
import image from '../assets/images/my.jpeg'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="bg-white text-black">
                    <div className="container mx-auto py-28 px-4">
                        <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center">
                            About Me
                        </h2>

                        <div className="flex flex-col md:flex-row items-center gap-8 mt-12 lg:mt-16">
                            {/* Image */}
                            <div className="md:w-1/2 flex justify-center md:justify-start">
                                <img
                                    src={image}
                                    alt="Professional"
                                    className="w-full max-w-sm rounded-lg shadow-lg object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div className="md:w-1/2 text-lg md:text-xl space-y-4">
                                <p>
                                    I am a dedicated software developer with experience in full-stack
                                    development, specializing in Laravel, ReactJS, and modern web technologies. I
                                    have a strong background in building scalable and efficient applications
                                    while ensuring clean code and maintainable architecture.
                                </p>
                                <p>
                                    My work emphasizes problem-solving, team collaboration, and delivering
                                    high-quality solutions that meet business objectives. I thrive in dynamic
                                    environments and continuously seek opportunities to learn and grow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <CTA/> */}
            </>
        )
    }
}
