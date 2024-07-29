import { Link } from "react-router-dom";
import MetaBlogLogo from "../Logos/metaBlogLogo.svg";
import { Section } from "./Section";

export const Navbar = () => {
  return (
    <Section>
      <div className="flex gap-[320px] py-8">
        <img src={MetaBlogLogo} />
        <div className="flex gap-[40px]">
          <Link to={"/"}>Home</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/contactus"}>Contact</Link>
        </div>
        <input
          className="bg-[#F4F4F5] placeholder:Search rounded-[5px] "
          placeholder="Search"
        />
      </div>
    </Section>
  );
};
