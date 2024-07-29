import { Section } from "./Section";

export const ContactSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-[30px] max-w-[960px] px-[126px]">
        <div>
          <h1 className="text-[36px] font-semibold">Contact Us</h1>
        </div>
        <p className="text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex gap-[50px] w-full">
          <div className="flex flex-col w-6/12 p-4 border-[1px] border-solid border-[#E8E8EA] rounded-[12px] gap-[10px]">
            <p className="text-[24px] font-semibold">Address</p>
            <p className="text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="flex flex-col w-6/12 p-4 border-[1px] border-solid border-[#E8E8EA] rounded-[12px] gap-[10px]">
            <p className="text-[24px] font-semibold">Contact</p>
            <div>
              <p className="text-[#696A75]">313-332-8662</p>
              <p className="text-[#696A75]">info@email.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pl-[35px] justify-center w-full bg-[#F6F6F7] rounded-[10px] pr-[130px] py-[28px]">
          <p>Leave a Message</p>
          <div className="flex gap-7">
            <input
              placeholder="   Your Name"
              className="border-[1px] border-solid border-[#DCDDDF] rounded-[5px] w-6/12"
            />
            <input
              placeholder="   Your Email"
              className="border-[1px] border-solid border-[#DCDDDF] rounded-[5px] w-6/12"
            />
          </div>
          <input
            placeholder="   Subject"
            className="border-[1px] border-solid border-[#DCDDDF] rounded-[5px]"
          />
          <input
            placeholder="   Write a message"
            className="border-[1px] border-solid border-[#DCDDDF] rounded-[5px] h-[134px]"
          />
          <div>
            <button className="w-fit px-[10px] py-1 bg-[#4b6bfb] text-[#fffff] rounded-[6px] text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
