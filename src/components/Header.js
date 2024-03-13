import React, { useEffect, useState, useCallback } from "react";
import { NETFLIX_LOGO, supportedLanguages } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { toggleGptSearchView } from "../utils/gptSlice";
import language from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const signOutFunc = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="w-full bg-gradient-to-r from-black/100 bg-opacity-50   flex justify-between items-center z-20 fixed px-8">
      <div className="flex items-center gap-10 font-semibold">
        <img className="w-32 " src={NETFLIX_LOGO} alt="logo" />
        <ul className="flex text-white gap-6">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>

      {user && (
        <div>
          {showGptSearch && (
            <select
              className="p-2 bg-gray-600 text-white"
              onChange={handleLanguageChange}
            >
              {supportedLanguages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <div className=" w-96 flex justify-between items-center">
            {showGptSearch ? (
              <FontAwesomeIcon
                className="text-white text-xl"
                icon={faHome}
                onClick={handleGptSearchClick}
              />
            ) : (
              <FontAwesomeIcon
                className="text-white text-xl"
                icon={faMagnifyingGlass}
                onClick={handleGptSearchClick}
              />
            )}

            <p className="font-semibold text-lg text-white">
              {user.displayName}
            </p>
            <FontAwesomeIcon className="text-white text-xl" icon={faBell} />

            <img
              className="w-10 h-10 rounded-xl"
              src={user.photoURL}
              alt="user-img"
              style={{ position: "relative" }} // Ensure the image remains fixed in its position
            />

            <button
              className="bg-red-700 p-1 rounded-lg text-white font-semibold"
              onClick={signOutFunc}
              // style={{ visibility: signOutBtn ? 'visible' : 'hidden' }}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
