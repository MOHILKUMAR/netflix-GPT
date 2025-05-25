import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
      <form className=" w-3/12 absolute p-12 bg-black opacity-80 text-white my-36 mx-auto right-0 left-0 rounded-lg ">
        <h1 className="font-bold text-3xl my-2 py-4 ">  {
            isSignInForm
            ? "Sign In"
            :"Sign Up"
          } </h1>
        
         { !isSignInForm &&
          ( <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-3 w-full  bg-gray-700 rounded-lg"
        />)
         }
        <input
          type="text"
          placeholder="EmailAddress"
          className="p-4 my-3 w-full  bg-gray-700 rounded-lg"
        />
       
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3  w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-3  bg-red-700  w-full rounded-lg">
          {
            isSignInForm
            ? "Sign In"
            :"Sign Up"
          }
        </button>
        <p className="my-6 cursor-pointer text-blue-600" onClick={toggleSignInForm} >
          {
            isSignInForm
            ? "New to Netflix? Sign Up Now "
            :"Already registered? Sign In Now"
          }
        </p>
      </form>
    </div>
  );
};

export default Login;
