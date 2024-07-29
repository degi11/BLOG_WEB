import { ContactText } from "./ContactTexts";
import Logo from "../Logos/ContactBetablog.svg";
import Facebook from "../Logos/facebook.svg";
import Twitter from "../Logos/twitter.svg";
import Instagram from "../Logos/instagram.svg";
import Linkedin from "../Logos/linkedin.svg";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="bg-[#F6F6F7] w-full mt-[64px]">
      <div className="flex flex-col w-1216px items-center justify-center gap-[25px] mr-t-[64px] pt-[64px]">
        <div className="flex gap-[20px]  justify-between w-[1216px]">
          <div className="flex flex-col w-[289px] gap-[24px]">
            <p>About</p>
            <p className="text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div>
              <p className="text-[#3B3C4A]">Email : info@jstemplate.net</p>
              <p className="text-[#3B3C4A]">Phone : 880 123 456 789</p>
            </div>
          </div>
          <div className="flex flex-col  items-center w-[521px]">
            <div className="text-[#3B3C4A] flex flex-col">
              <Link to={"/"}>Home</Link>
              <Link to={"/blogs"}>Blogs</Link>
              <Link to={"/contactus"}>Contact</Link>
            </div>
          </div>
          <div className="flex gap-[25px] w-[320px] justify-start">
            <img className="w-4 h-4" src={Facebook} />
            <img className="w-4 h-4" src={Twitter} />
            <img className="w-4 h-4" src={Instagram} />
            <img className="w-4 h-4" src={Linkedin} />
          </div>
        </div>
        <div className="flex w-[1216px] justify-between border-t-[1px] border-[#DCDDDF] py-6">
          <img src={Logo} />
          <div className="flex gap-4">
            <ContactText text={"Tems of use"} />
            <ContactText text={"Privacy Policy"} />
            <ContactText text={"Cookie Policy"} />
          </div>
        </div>
      </div>
    </div>
  );
};
