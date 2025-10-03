import { skillsData } from "../data/data";
import { SkillsCard } from "../components/SkillsCard";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <section id="skills" className="my-skills overflow-x-hidden py-15 ">
      <div className="slider-container">
        <div className="inner-container">
          <div className="heading-wrapper text-center">
            <h2 className="text-6xl lg:text-[4vw]  font-heading font-bold leading-[1] tracking-tight max-md:pb-10">
              {skillsData.heading}
            </h2>
          </div>
          <Marquee
            direction="left"
            speed={100}
            loop={0}
            pauseOnHover={true}
            className="uppericons-slider py-10 flex flex-row justify-between items-center gap-10 max-md:py-5"
          >
            {skillsData.upperIcons.map((data, index) => {
              return <SkillsCard data={data} key={index} />;
            })}
          </Marquee>
          <Marquee
            direction="right"
            speed={100}
            loop={0}
            pauseOnHover={true}
            className="lowericons-slider py-10 flex flex-row justify-between items-center w-full max-md:py-5"
          >
            {skillsData.lowerIcons.map((data, index) => {
              return <SkillsCard data={data} key={index} />;
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Skills;
