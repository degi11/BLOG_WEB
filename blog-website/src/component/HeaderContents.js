import { useState } from "react";
import RightClickSVG from "../Logos/right.svg";
import LeftClickSVG from "../Logos/left.svg";
import HeaderPhoto1 from "../assets/Car.png";
import HeaderPhoto2 from "../assets/Castle.jpg";
import HeaderPhoto3 from "../assets/Beach.jpg";
import { Tag } from "./Tag";
import BusyWoman from "../assets/busyWoman.jpg";

export const HeaderContents = () => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([
    {
      text: <Tag child={"Technalogy"} />,
      title: "Grid system for better Design User Interface",
      date: "August 20, 2022",
      img: BusyWoman,
    },
    {
      text: <Tag child={"My genda"} />,
      title: "Grid better Design User Interface",
      date: "June 1, 2024",
      img: HeaderPhoto2,
    },
    {
      text: <Tag child={"Mechanik"} />,
      title: "Grid system for better Design User Interface",
      date: "September 20, 2023",
      img: HeaderPhoto3,
    },
    {
      text: <Tag child={"Mechanik"} />,
      title: "Grid system for better Design User Interface",
      date: "September 20, 2023",
      img: HeaderPhoto1,
    },
  ]);

  const leftClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const rightClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="flex flex-col  gap-[11px] ">
      <div className="flex flex-col relative h-[651px]">
        <img className="w-fit rounded-xl h-[600px]" src={images[current].img} />
        <div className="flex flex-col w-[598px] p-10 gap-6 absolute bg-white rounded-[12px] left-3 bottom-[63px]">
          <p>{images[current].text}</p>
          <p className="text-4xl">{images[current].title}</p>
          <p>{images[current].date}</p>
        </div>
      </div>
      <div className="flex gap-[9px] justify-end">
        <button onClick={leftClick}>
          <img src={LeftClickSVG} />
        </button>
        <button onClick={rightClick}>
          <img src={RightClickSVG} />
        </button>
      </div>
    </div>
  );
};
