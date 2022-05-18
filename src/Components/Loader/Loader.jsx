import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../Loader/Loader.css";
import "./../../Utilities/utilities.css";

const Loader = (props) => {
  const { path } = props || {};
  const { usersData } = props || {};

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(path, { state: usersData });
    }, 1000);
  });
  return (
    <>
      <div className="loader-container flex vertical-display standard-padding standard-margin">
        <div className="loader-text-container standar-padding standard-margin">
          <p className="loader-text standard-padding standard-margin">
            Working On It....Wait For A While !
          </p>
        </div>
        <div className="loader"></div>
      </div>
    </>
  );
};

export default Loader;
