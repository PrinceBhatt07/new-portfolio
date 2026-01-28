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
                Sagmetic Infotech
              </h3>
              <p className={dateClasses}>
                Nov 2025 - Current
              </p>
            </div>

            <div className="md:col-span-3 pt-4 md:pt-0">
              <h4 className={titleClasses}>
                Full Stack Developer
              </h4>
              <ul className={listClasses}>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Design, develop, and maintain integration-centric backend systems supporting logistics, payroll, and
                  billing-oriented business processes.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Implement financial and settlement workflows, including salary calculation rules, invoice drafting logic,
                  and reconciliation mechanisms.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Build and manage secure REST/OData-style APIs to enable structured data exchange between internal
                  platforms and external services.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Automate background processing and scheduled jobs using Python to support ERP-like operational
                  requirements.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Collaborate with business stakeholders to translate functional requirements into technical process
                  flows
                  , ensuring data integrity and traceability.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={cardClasses}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="md:col-span-1 border-r border-[#2c3340] md:pr-4">
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1">
                MY VIRTUAL TEAMS
              </h3>
              <p className={dateClasses}>
                July 2023 - Nov 2025
              </p>
            </div>

            <div className="md:col-span-3 pt-4 md:pt-0">
              <h4 className={titleClasses}>
                Associate Software Developer
              </h4>
              <ul className={listClasses}>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Delivered multiple enterprise-grade applications with emphasis on billing logic, inventory
                  synchronization, and transactional consistency
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Developed and maintained Shopify-based integrations, handling large product catalogs, pricing
                  workflows, and financial data exchange.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Designed and optimized REST APIs to ensure high availability and throughput under production
                  workloads.
                </li>
                <li className="flex items-start">
                  <span className={bulletClasses}>•</span>
                  Implemented real-time data integrations using WebSockets, Firebase, and third-party communication
                  platforms.
                </li>
                <li className="flex items-start"><span className={bulletClasses}>•</span>
                  Containerized backend services with Docker and configured Nginx-based deployments for scalable
                  production environments</li>
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