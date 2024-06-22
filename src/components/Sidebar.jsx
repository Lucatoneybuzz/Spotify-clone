import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] flex flex-col gap-2 p-2 rounded">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-4 pr-2 py-2 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-4 pr-2 py-2 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] flex-1 flex flex-col gap-2 p-2 rounded">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Library icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus icon" />
          </div>
        </div>
        <div className="bg-[#242424] p-3 m-2 rounded flex flex-col items-start gap-2">
          <h1 className="font-semibold">Create your first playlist</h1>
          <p className="font-light">It's easy, we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-2">
            Create Playlist
          </button>
        </div>
        <div className="bg-[#242424] p-3 m-2 rounded flex flex-col items-start gap-2">
          <h1 className="font-semibold">Let's find some podcasts to follow</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-2">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
