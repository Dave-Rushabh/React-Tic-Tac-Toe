import "./../../Utilities/utilities.css";
import "./../WelcomePage/WelcomePage.css";
import { useState } from "react";
import Loader from "./../Loader/Loader";

const WelcomePage = () => {
  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    setLoader(true);
  };
  return (
    <>
      {!loader ? (
        <>
          <div className="welcome-page-container flex standard-padding standard-margin">
            <div className="standard-padding standard-margin w-80">
              <div>
                <p className="welcome-page-text">
                  Welcome to the React Tic Tac Toe Game
                </p>
              </div>
              <div className="flex standard-padding standard-margin">
                <button className="btn-primary" onClick={handleClick}>
                  Click Here To Play
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Loader path="/user-preferences" />
        </>
      )}
    </>
  );
};

export default WelcomePage;
