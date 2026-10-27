import image from "../assets/images/my.jpeg";

export const AboutBanner = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto py-28 px-4">
        <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-12 lg:mt-16">
          <div className="bg-gray-100 text-gray-900 p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl shadow-gray-300/50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
              {/* Image */}
              <div className="md:w-full max-w-sm flex justify-center p-4 bg-white rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-indigo-500/50 hover:scale-[1.02] cursor-pointer">
                <img
                  src={image}
                  alt="Professional"
                  className="w-full max-w-[100%] rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-[60%] text-lg md:text-xl space-y-4 max-md:pt-5">
                <p className="max-sm:text-[16px]">
                  I am a Full Stack Developer with 4 years of experience designing, developing, and deploying scalable, secure, and high-performance web applications. My expertise spans React.js, Next.js, Node.js, Express.js, Laravel, and FastAPI, with a strong focus on backend architecture, REST APIs, microservices, and database optimization using MongoDB, PostgreSQL, MySQL, and Redis.

                  Beyond application development, I work with AWS, Docker, CI/CD pipelines, Nginx, and Linux-based server environments to automate deployments, improve reliability, and maintain production systems. I am passionate about clean code, system integration, performance optimization, and solving complex engineering challenges, with a growing focus on cloud architecture, DevOps, and cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
