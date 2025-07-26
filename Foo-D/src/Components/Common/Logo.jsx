import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import {sandwich} from '../../assets/icons.js'


const Logo = () => {
  return (
    <div>
      <img className=" min-w-11 w-12 shadow-2xl" src={sandwich} alt="" />
      {/* <h1 className="text-2xl sm:text-lsm font-serif font-bold text-amber-600" >TeastyBite</h1> */}
    </div>
  );
};

export default Logo;
