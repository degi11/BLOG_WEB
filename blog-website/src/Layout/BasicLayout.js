import { Navbar, Contact } from "../component";

export const BasicLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-[100px] max-w-[1216px] mx-auto">
        <Navbar />
        {children}
      </div>
      <Contact />
    </div>
  );
};
