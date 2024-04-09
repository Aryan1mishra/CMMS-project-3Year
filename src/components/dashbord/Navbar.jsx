import React, { useState } from "react";
import PermissionStatus from "./PermissionStatus";
import { LogOut, CircleUser, BarChart4, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-red-500 flex justify-center items-center"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/664/664866.png" alt=""className="w-" />
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 flex justify-center items-center"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/664/664866.png" alt="" className="w-5 rounded-ful" />
      </div>
      <div className="flex items-center ">
        <img
          className=" rounded-full object-cover"
          src="https://images.adsttc.com/media/images/5bf3/8f5f/08a5/e509/1100/01ce/large_jpg/-_Featured_Image.jpg?1542688591"
          alt=""
        />
        {/* <span className={!isExpanded ? "hidden" : "block"}>Name</span> */}
      </div>
      <div className="flex flex-col space-y-8 mt-12 ">
        <div className="nav-links p-2 w-full cursor-pointer rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 duration-300 active:text-white">
          <div className="flex space-x-3 w-full rounded">
            <LayoutDashboard />
            <Link to="/" className={!isExpanded ? "hidden" : "block"}>
              Dashboard
            </Link>
          </div>
        </div>

        <div className="nav-links p-2 w-full cursor-pointer rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 duration-300 active:text-white">
          <div className="flex items-center w-full rounded">
            <BarChart4 />
            <Link
              
              className={!isExpanded ? "hidden" : "block"}
            >
              {<PermissionStatus />}
            </Link>
          </div>
        </div>

        <div className="nav-links p-2 w-full cursor-pointer rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 duration-300 active:text-white">
          <div className="flex space-x-3 w-full rounded ">
            <CircleUser />
            <Link to={"/user"} className={!isExpanded ? "hidden" : "block"}>
              My profile
            </Link>
          </div>
        </div>

        <div className="nav-links p-2 w-full cursor-pointer rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 duration-300 active:text-white">
          <div className="flex space-x-3 w-full rounded">
            <LogOut />
            <Link to={"/login"} className={!isExpanded ? "hidden" : "block"}>
              logout
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
