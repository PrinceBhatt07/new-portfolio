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
                  I am a dedicated Full Stack PHP Developer with over 2.5+ years of experience designing and deploying scalable web applications for startups and enterprise clients. My core expertise spans Core PHP, Laravel, React.js, Node.js, and Express.js, coupled with proficiency in databases like MySQL and MongoDB. I have a strong track record of delivering high-impact features, including building custom Shopify apps, integrating payment gateways (Stripe, Razorpay), and implementing real-time features (using Reverb, Pusher, Firebase) that boosted user engagement by over 25% .
                </p>
                <p className="max-sm:text-[16px]">
                  I have successfully created and optimized RESTful APIs capable of handling 1,000 requests per minute. Furthermore, my expertise extends to DevOps, where I've deployed and optimized applications on AWS (EC2, S3, IAM), Hostinger, and DigitalOcean using Docker and Nginx, resulting in a 15% reduction in server-side latency. Holding the AWS Cloud Practitioner and AWS Developer Associate certifications, I am committed to leveraging my full-stack skills and cloud expertise to deliver efficient, innovative, and high-performance web solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
