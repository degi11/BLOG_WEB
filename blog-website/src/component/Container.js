import { Profile } from "./Profile";
import { Tag } from "./Tag";

export const Container = ({
  img,
  tagName,
  text,
  date,
  profile,
  userName,
  invisible,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col w-[392px] h-[476px] p-4 border-[1px] border-solid border-[#E8E8EA] rounded-[12px] justify-around"
    >
      <img src={img} />
      <Tag child={tagName} isgray={true} />
      <p>{text}</p>
      <div className="flex items-center gap-5">
        {!invisible ? (
          <Profile userName={userName} proimage={profile} />
        ) : (
          <></>
        )}
        <p className="text-[#97989F]">{date}</p>
      </div>
    </div>
  );
};
