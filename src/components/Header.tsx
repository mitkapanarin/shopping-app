import React from "react";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search Field */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* Login/Register */}
        <div>
          {" "}
          <AiOutlineUser className="text-2xl" />
          <p className="text-sm font-semibold">Login</p>
        </div>
        <div>
          {" "}
          <FiLogOut className="text-2xl" />
          <p className="text-sm font-semibold">Logout</p>
        </div>
        <IoMdCart className="text-xl" />
      </Container>
    </div>
  );
};

export default Header;
