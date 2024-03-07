import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div>
      <img
        className="w-44 h-20 bg-gradient-to-r from-black  absolute"
        src={NETFLIX_LOGO}
        alt="logo"
      />
    </div>
  );
};

export default Header;
