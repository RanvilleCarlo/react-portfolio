import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/pic.png";
import useTypewriter from "./useTypewriter";
 // Make sure to import the custom hook

const Hero = () => {
  const titles = ["Full Stack Developer", "Data Analyst", "DevOps"];
  const displayedText = useTypewriter(titles, 100, 2000);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-100">
              Ranville Christopher Carlo
            </h1>
            <div className="flex text-4xl tracking-tight text-neutral-100 my-6">
              <span className="pr-4 pt-4">I&apos;m</span>

              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold tracking-tight pt-4">
                {displayedText}
              </span>
            </div>
            <p className="my-2 max-w-xl py-8 font-semibold text-xl">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-0">
          <div className="flex justify-center">
            <img src={ProfilePic} alt="Ranville Christopher Carlo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
