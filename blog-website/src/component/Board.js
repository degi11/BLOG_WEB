import { useState } from "react";
import { Tag } from "./Tag";
import TrendPhoto1 from "../assets/TrendPhoto1.jpg";
import TrendPhoto2 from "../assets/TrendPhoto2.png";
import TrendPhoto3 from "../assets/TrendPicture4.jpg";
import TrendPhoto4 from "../assets/TreandPicture5.jpg";
import { Overlay } from "./Overlay";

export const Board = () => {
  const [card, setCard] = useState([
    {
      picture: TrendPhoto1,
      tag: <Tag child={"technalogy"} />,
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      picture: TrendPhoto2,
      tag: <Tag child={"design"} />,
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      picture: TrendPhoto3,
      tag: <Tag child={"technalogy"} />,
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      picture: TrendPhoto4,
      tag: <Tag child={"technalogy"} />,
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ]);

  return card.map((e, i) => {
    return (
      <div className="relative w-[289px] ">
        <img className="absolute top-0 left-0 -z-20" src={card[i].picture} />
        <Overlay />
        <div className="flex flex-col justify-end h-[320px] border-3 px-[29px] pb-7 gap-4">
          <p>{card[i].tag}</p>
          <p className="text-white">{card[i].text}</p>
        </div>
      </div>
    );
  });
};
