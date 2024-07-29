export const Profile = ({ userName, proimage }) => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <img className="w-[36px] h-[36px] rounded-full" src={proimage} />
      <p className="text-[#97989F]">{userName}</p>
    </div>
  );
};
