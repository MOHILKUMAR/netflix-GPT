import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
   const [errorMessage, setErrorMessage ] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
 

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validated the form data
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidateData(email.current.value, password.current.value)
    // console.log(message);
    setErrorMessage(message);


    //Sign In /Sign Up
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="backgroundImage"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black opacity-80 text-white my-36 mx-auto right-0 left-0 rounded-lg "
      >
        <h1 className="font-bold text-3xl my-2 py-4 ">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full  bg-gray-700 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="EmailAddress"
          className="p-4 my-3 w-full  bg-gray-700 rounded-lg"
        />
         
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3  w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-700 font-bold text-lg p-1" > {errorMessage}</p>
        <button
          className="p-4 my-3  bg-red-700  w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-6 cursor-pointer text-blue-600"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now "
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
