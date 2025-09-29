import React from 'react'

const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-white text-black">
        <div className='main-container pb-8 lg:pb-12'>
          <h3>Services in Detail</h3>
        </div>
      </div>

      {/* Services List */}
      <div className='relative'>
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">01</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Full Stack  <br /> Web Development
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Building robust, scalable web applications with PHP, Laravel, and MySQL. From creating dynamic backends to designing responsive frontends with ReactJS, I deliver seamless user experiences and maintainable codebases.
              </p>
            </div>

          </div>
        </div>
        <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">02</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                API & Shopify<br />  Development
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Developing secure RESTful APIs and integrating third-party services for smooth data flow. Experienced in building and customizing Shopify apps and features that optimize store performance and boost conversions.
              </p>
            </div>

          </div>
        </div>
        <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">03</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Deployment <br /> Optimization
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Deploying and managing applications on AWS and DigitalOcean with a focus on performance, security, and scalability. I ensure every project is production-ready, efficient, and easy to maintain.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Services