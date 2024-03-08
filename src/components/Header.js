import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

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
  return (
    <div className="w-full h-20 bg-gradient-to-r from-black/50  absolute flex justify-between items-center px-20">
      <img className="w-44 h-20 " src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className=" w-40 flex justify-between items-center">
          <div className="flex flex-col  items-center mt-4">
            <img
              className="w-12 h-12 rounded-lg"
              src={user.photoURL}
              alt="user-img"
            />
            <p className="font-semibold">{user.displayName}</p>
          </div>

          <button
            className="bg-red-700 p-1 rounded-lg text-white font-semibold"
            onClick={signOutFunc}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
