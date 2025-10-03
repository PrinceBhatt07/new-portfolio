import image from "../assets/images/my.jpeg";

export const AboutBanner = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto py-28 px-4">
        <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-12 lg:mt-16">
          {/* Image */}
          <div className="md:w-[35%] flex justify-center md:justify-start">
            <img
              src={image}
              alt="Professional"
              className="w-full max-w-[100%] rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-[60%] text-lg md:text-xl space-y-4 max-md:pt-5">
            <p className="max-sm:text-[16px]">
              I am a dedicated software developer with experience in full-stack
              development, specializing in Laravel, ReactJS, and modern web
              technologies. I have a strong background in building scalable and
              efficient applications while ensuring clean code and maintainable
              architecture.
            </p>
            <p className="max-sm:text-[16px]">
              My work emphasizes problem-solving, team collaboration, and
              delivering high-quality solutions that meet business objectives. I
              thrive in dynamic environments and continuously seek opportunities
              to learn and grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
