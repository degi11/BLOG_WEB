import { Board } from "./Board";

export const Trending = () => {
  return (
    <div className="flex flex-col items- h-[390px] w-[1230px] items-start gap-[30px]">
      <p className="text-2xl items-start">Trending</p>
      <div className="flex gap-5">
        <Board />
      </div>
    </div>
  );
};
