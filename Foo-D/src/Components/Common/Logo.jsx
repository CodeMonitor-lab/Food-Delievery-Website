import React from "react";
import { RiNextjsFill } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <RiNextjsFill className="text-2xl text-indigo-600" />
      <h1 className="text-xl font-bold">Logo</h1>
    </div>
  );
};

export default Logo;
