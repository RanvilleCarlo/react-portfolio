import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { SiFastapi } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="boader-b boader-neutral-800 pb-24">
      <h2 className="my-20 text-center text-5xl font-bold">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-neutral-white-400 mt-1">React.js</p>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl" />
          <p className="text-neutral-white-400 mt-1 pl-2">Node.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-blue-600" />
          <p className="text-neutral-white-400 mt-1">postgresql</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoHtml5 className="text-7xl text-orange-700" />
            <p className="text-neutral-white-400 mt-1 pl-4 pt-1">HTML</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-sky-700" />
            <p className="text-neutral-white-400 mt-1 pl-5 pt-2">CSS</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-black-700" />
        <p className="text-neutral-white-400 mt-1 pl-2 pt-2">GitHub</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-600" />
          <p className="text-neutral-white-400 mt-1 pl-2 pt-2">Python</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandMysql className="text-7xl text-cyan-800" />
            <p className="text-neutral-white-400 mt-1 pl-3 pt-2 ">MySQL</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFastapi className="text-7xl text-red-700" />
            <p className="text-neutral-white-400 mt-1 pl-2 pt-2">FastAPI</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
