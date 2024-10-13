import { AiOutlineCheckCircle } from "react-icons/ai";

import Image from "next/image";
import aboutImg from "../../assets/img/about-img-1.jpg";
import CommonBtn from "./CommonBtn";

const AboutEvent = () => {
  return (
    <>
      <div className="max-w-6xl px-5 md:px-10 lg:px-0 flex lg:flex-row flex-col justify-between  items-center  mx-auto  mt-10">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="left w-full lg:w-[50%] "
        >
          <p className="uppercase tracking-[5px] ">about event</p>
          <h2 className="text-[42px] mt-3 text-white font-semibold tracking-wide">Welcome to the World</h2>
          <h2 className="text-[42px] -mt-3 text-white font-semibold tracking-wide">Digital Conference 2023</h2>
          <p className="max-w-[560px] my-5 text-gray-200">
            Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim
            veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.
          </p>

          <ul className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-200">
              <button className="text-secondary">
                <AiOutlineCheckCircle></AiOutlineCheckCircle>
              </button>
              <li className="text-gray-100">Multiple Announcements during the event.</li>
            </div>
            <div className="flex items-center space-x-3 text-gray-800">
              <button className="text-secondary">
                <AiOutlineCheckCircle></AiOutlineCheckCircle>
              </button>
              <li className="text-gray-100">Logo & company details on the WordCamp.</li>
            </div>
            <div className="flex items-center space-x-3 text-gray-800">
              <button className="text-secondary">
                <AiOutlineCheckCircle></AiOutlineCheckCircle>
              </button>
              <li className="text-gray-100">Dedicated blog post thanking each Gold.</li>
            </div>
            <div className="flex items-center space-x-3 text-gray-800">
              <button className="text-secondary">
                <AiOutlineCheckCircle></AiOutlineCheckCircle>
              </button>
              <li className="text-gray-100">Acknowledgment and opening and closing.</li>
            </div>
          </ul>

          <div className="mt-8">
            <CommonBtn></CommonBtn>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="right w-full lg:w-[50%] pt-10 lg:pt-28"
        >
          <div className="about-bg w-full h-full bg-cover bg-center bg-no-repeat">
            <div className="mx-auto flex justify-center">
              <Image
                className="border-white shadow-xl w-[70%] h-[70%] border-[15px] rounded-full md:w-[480px] md:h-[480px]"
                src={aboutImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center">
      <img className='spin' src={circle} alt="" />
    </div> */}
    </>
  );
};

export default AboutEvent;
