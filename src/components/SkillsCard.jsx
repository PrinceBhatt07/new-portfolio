export const SkillsCard = ({ data }) => {
  return (
    <div className="icon-text-wrapper flex flex-col items-center justify-center px-5 max-md:px-5">
      <div className="image--wrapper w-[80px] max-md:w-[55px]">
        <img
          className="fit-contain w-[100%]"
          src={data.image}
          alt={data.text}
        />
      </div>
      <h3 className="font-bold text-xl pt-5 text-center max-md:text-[16px]">
        {data.text}
      </h3>
    </div>
  );
};
