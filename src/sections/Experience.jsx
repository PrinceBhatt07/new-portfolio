export const Experience = () => {
  const cardClasses = "p-5 md:p-8 rounded-2xl bg-dark-space transition-all duration-300 ease-in-out border border-[#2c3340] hover:shadow-2xl hover:shadow-indigo-500/30";

  const dateClasses = "text-sm md:text-base text-indigo-400 font-semibold";
  const titleClasses = "text-lg font-semibold text-white mb-2";
  const listClasses = "list-none space-y-3 text-gray-300 text-base ml-4";
  const bulletClasses = "text-indigo-400 mr-3 mt-1";

  return (
    <section id="experience" className="bg-dark-space py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 tracking-wide">
          EXPERIENCE
        </h2>
        <p className="text-gray-400 text-center mb-16">
          A quick timeline of my professional journey and achievements.
        </p>

        <div className={cardClasses + " mb-10"}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <div className="md:col-span-1 border-r border-[#2c3340] md:pr-4">
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1">
                MY VIRTUAL TEAMS
              </h3>
              <p className={dateClasses}>
                July 2023 - Current
              </p>
            </div>

            <div className="md:col-span-3 pt-4 md:pt-0">
              <h4 className={titleClasses}>
                Associate Software Developer
              </h4>
              <ul className={listClasses}>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Designed and developed 10+ scalable web applications using Core PHP, Laravel, React.js, Node.js, and Express.js.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Built custom Shopify public and embedded apps and integrated payment gateways (Stripe, Razorpay) to streamline client operations.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Implemented real-time notifications (Reverb, Pusher, Firebase) which improved user engagement by over 25% , and created RESTful APIs handling 1,000 requests per minute.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Configured and deployed on AWS, Hostinger, and DigitalOcean , optimizing setups with Docker and Nginx leading to a 15% reduction in server-side latency.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={cardClasses}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <div className="md:col-span-1 border-r border-[#2c3340] md:pr-4">
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1">
                HOPING MINDS
              </h3>
              <p className={dateClasses}>
                Jan 2023 - Jun 2023
              </p>
            </div>

            <div className="md:col-span-3 pt-4 md:pt-0">
              <h4 className={titleClasses}>
                Jr. Software Developer
              </h4>
              <ul className={listClasses}>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Gained a strong Frontend Development Foundation using HTML, CSS, jQuery, Bootstrap, and React.js to build responsive interfaces.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Practiced backend development with Node.js and APIs, collaborating using Git & GitHub for version control.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Gained exposure to AWS services (S3, EC2, IAM, CloudWatch) and earned AWS Cloud Practitioner and AWS Developer - Associate certifications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};