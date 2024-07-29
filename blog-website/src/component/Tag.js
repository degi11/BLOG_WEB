const styles = {
  blue: "w-fit px-[10px] py-1 bg-[#4b6bfb] rounded-[6px] text-white",
  gray: "w-fit px-[10px] py-1 bg-[#4b6bfb] bg-opacity-5 text-[#4b6bfb] rounded-[6px]",
};

export const Tag = ({ child, isgray }) => {
  return <p className={!isgray ? styles.blue : styles.gray}>{child}</p>;
};
