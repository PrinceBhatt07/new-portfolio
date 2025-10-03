import awsDev from "../../public/aws-dev.png";
import awsCloud from "../../public/aws-cloud.png";

export const Certificate = () => {
  return (
    <section id="certificate" className="section bg-white pt-10 pb-20">
      <h2 className="section__title text-black text-center mx-0 font-black text-[4vw] max-md:text-5xl max-md:mb-10">
        Certificate
      </h2>
      <div className="certificate__container bd-grid flex flex-row justify-between items-center gap-10 max-md:gap-10 max-md:flex-col">
        <div className="certificate__item text-center flex flex-col justify-center items-center w-[48%] max-md:w-[100%]">
          <img
            src={awsDev}
            alt="AWS Developer Certificate"
            className="w-[170px] fit-contain"
          />
          <h3 className="certificate__title text-black font-black pt-5 max-md:text-xl">
            AWS Developer
          </h3>
        </div>
        <div className="certificate__item text-centern flex flex-col justify-center items-center w-[48%] max-md:w-[100%]">
          <img
            src={awsCloud}
            alt="AWS Cloud Practitioner Certificate"
            className="w-[170px] fit-contain"
          />
          <h3 className="certificate__title text-black font-black pt-5 max-md:text-xl">
            AWS Cloud Practitioner
          </h3>
        </div>
      </div>
    </section>
  );
};
