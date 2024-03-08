import React, { useRef, useState } from "react";
import { MY_PROFILE, NETFLIX_BG_IMG } from "../utils/constants";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const userDetails = useSelector((state) => state.user);

  const signInFormFunc = () => {
    setIsSignInForm(!isSignInForm);
  };

  const submitBtnFunc = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: MY_PROFILE,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          setSuccessMsg("Sign Up Successfully");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage + "-" + errorCode);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userDetails.displayName,
            photoURL: MY_PROFILE,
          })
            .then(() => {
              const { uid, email, photoURL, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,

                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          setSuccessMsg("Sign In Successfully");

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMsg("User Not Available");
        });
    }
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  return (
    <div className="h-screen">
      <Header />
      <div className="">
        <img src={NETFLIX_BG_IMG} alt="bg-img" />
      </div>
      <form
        className="absolute w-4/12 mx-auto right-0 left-0  p-20 bg-black/80 top-0 my-[5vh] "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-semibold text-white my-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="w-full my-3 p-3 rounded-lg px-5"
            placeholder="Name"
          />
        )}
        <input
          type="email"
          ref={email}
          className="w-full my-3 p-3 rounded-lg px-5"
          placeholder="Email"
        />
        <input
          type="password"
          ref={password}
          className="w-full my-3 p-3 rounded-lg px-5"
          placeholder="Password"
        />
        {successMsg ? (
          <p className="text-lg text-green-600 font-semibold ml-4">
            {successMsg}
          </p>
        ) : (
          <p className="text-lg text-red-600 font-semibold ml-4">{errorMsg}</p>
        )}
        <button
          className="text-white w-full bg-red-700 p-3 my-5 rounded-lg font-semibold"
          onClick={submitBtnFunc}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p
            className="text-white font-semibold mt-5 cursor-pointer"
            onClick={signInFormFunc}
          >
            <span className="text-gray-500 font-normal">New To Netflix?</span>{" "}
            Sign Up Now.
          </p>
        ) : (
          <p
            className="text-white font-semibold mt-5 cursor-pointer"
            onClick={signInFormFunc}
          >
            <span className="text-gray-500 font-normal">
              Already Registered?
            </span>{" "}
            Sign In Now.
          </p>
        )}

        <p className="text-gray-500 mt-5 w-80">
          This Page Is Protected By Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-700"> Learn more.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
