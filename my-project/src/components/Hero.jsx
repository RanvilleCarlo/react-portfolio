import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/kevinRushProfile.png";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:item-start">
            <h1 className="text-4xl lg:text-6xl font-medium text-neutral-100">
              Ranville Christopher Carlo
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 bg-clip-text text-4xl tracking-tight text-transparent my-6">Full Stack Developer</span>
            <p className="max-w-xl font-medium tracking-tighter">{HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-0">
        <div className="flex justify-center">
            <img src={ProfilePic} alt="Ranville Christopher Carlo"/>    
        </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
