import { Link } from "react-router-dom";
import { Section } from "./Section";

export const PageNotFound = () => {
  return (
    <Section>
      <div className="flex gap-10 w-[642px]">
        <div className="flex h-[156px] items-center">
          <h1 className="text-[72px] font-normal">404</h1>
        </div>

        <span className="w-[1px] h-[156px] bg-[#E8E8EA]" />
        <div className="flex flex-col gap-5 h-[156px] justify-center">
          <p>Page Not Found</p>
          <p>
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button className="w-fit px-[10px] py-1 bg-[#4b6bfb] rounded-[6px] text-white">
            <Link to={"/"}>Back to home</Link>
          </button>
        </div>
      </div>
    </Section>
  );
};
