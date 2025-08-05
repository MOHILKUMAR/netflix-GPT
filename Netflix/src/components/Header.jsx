
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.jsx";
import { LOGO } from "../utils/constant.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

    useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

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
        // ...
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        navigate("/");
      }
    });
    
    // Unsubscribe is help to unmount the components 
    return () => unsubscribe();
  }, []);


  return (
    <div className="absolute w-screen px-16 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        alt="logo"
        src={LOGO}
      />
      {user &&
       (<div className="flex p-2">
        <img
          className="w-12  h-12  rounded-lg  "
          src={user?.photoURL}
          alt="user-icon"
        />
        <p className="font-bold text-white m-2">{user?.displayName}</p>
        <button onClick={handleSignOut} className="font-bold text-white">
          SignOut
        </button>
      </div>)

      }
    </div>
  );
};

export default Header;
