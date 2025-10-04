import awsDev from "../../public/aws-dev.png";
import awsCloud from "../../public/aws-cloud.png";

export const Certificate = () => {
  const cardClasses = "certificate__item text-center flex flex-col justify-center items-center w-full max-w-sm md:max-w-xs p-8 rounded-xl bg-white shadow-2xl transition-all duration-500 ease-in-out border-2 border-transparent hover:border-indigo-500 hover:shadow-indigo-500/50 hover:scale-[1.05] cursor-pointer";

  return (
    <section id="certificate" className="section bg-gray-50 pt-16 pb-28">
      <h2 className="section__title text-black text-center mx-0 font-black text-6xl max-md:text-5xl mb-16">
        Certifications
      </h2>
      
      {/* Centered container for the cards. Adjusted gap to be smaller on md screens. */}
      <div className="certificate__container bd-grid flex flex-col md:flex-row justify-center items-center gap-10 md:gap-10 mx-auto max-w-5xl px-4">
        
        {/* AWS Developer Card */}
        <div className={cardClasses}>
          <div className="w-full flex justify-center items-center h-[170px] mb-4">
             <img
              src={awsDev}
              alt="AWS Developer Associate Certificate"
              className="w-full max-w-[200px] object-contain transition-transform duration-500 ease-in-out hover:rotate-2"
            />
          </div>
          <h3 className="certificate__title text-black font-extrabold text-2xl pt-5">
            AWS Developer Associate
          </h3>
          <p className="text-gray-600 mt-2 text-sm">Proficiency in developing, deploying, and debugging cloud-based applications using AWS.</p> 
        </div>

        {/* AWS Cloud Practitioner Card */}
        <div className={cardClasses}>
          <div className="w-full flex justify-center items-center h-[170px] mb-4">
            <img
              src={awsCloud}
              alt="AWS Cloud Practitioner Certificate"
              className="w-full max-w-[200px] object-contain transition-transform duration-500 ease-in-out hover:-rotate-2"
            />
          </div>
          <h3 className="certificate__title text-black font-extrabold text-2xl pt-5">
            AWS Cloud Practitioner
          </h3>
          <p className="text-gray-600 mt-2 text-sm">Demonstrates overall knowledge of the AWS Cloud platform.</p>
        </div>
      </div>
    </section>
  );
};