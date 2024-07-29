import { Profile } from "./Profile";
import { Section } from "./Section";

export const DetailData = ({
  title,
  proImage,
  userName,
  date,
  image,
  text1,
  text2,
  text3,
  title1,
  title2,
}) => {
  return (
    <Section>
      <div className="flex flex-col gap-[32px] w-[800px] mx-auto">
        <div className="flex flex-col  gap-[20px]">
          <h1 className="text-[#181A2A] text-[36px]">{title}</h1>
          <div className="flex gap-[12px]">
            <Profile proimage={proImage} userName={userName} />
            <p className="flex items-center text-[#696A75]">{date}</p>
          </div>
        </div>
        <img src={image} />
        <div>
          <p>{text1}</p>
          <div className="flex flex-col gap-4">
            <h2 className="text-[24px] text-[#181A2A]">{title1}</h2>
            <p>{text2}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[24px] text-[#181A2A]">{title2}</h2>
            <p>{text3}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
