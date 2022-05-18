import "./../UserPreferences/UserPreferences.css";
import "./../../Utilities/utilities.css";
import { useState } from "react";
import Loader from "./../Loader/Loader";

const UserPreferences = () => {
  const [usersData, setUsersData] = useState({
    user1Name: "",
    user1Sign: "",
    user2Name: "",
    user2Sign: "",
    firstMove: ""
  });

  const [loader, setLoader] = useState(false);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUsersData({ ...usersData, [name]: value });
    console.log("function is working");
  };

  const handleClick = () => {
    const arr = Object.values(usersData);

    const Validator = arr.filter((element) => {
      return element === "";
    });

    if (Validator.length === 0) {
      setLoader(true);
    } else {
      alert("Hello Players ! Please Fill Up All The Details");
    }
  };

  // useEffect(() => {
  //   console.log(usersData);
  // }, [usersData]);

  return (
    <>
      {!loader ? (
        <>
          <div className="flex vertical-display standard-padding standard-margin user-preferences-container">
            <form>
              <div className="flex vertical-display standard-margin">
                <input
                  placeholder="Hello ! User-1 Type Your Name Here"
                  name="user1Name"
                  onChange={handleChange}
                  className="input-field-primary pointer"
                />
              </div>
              <div className="flex vertical-display standard-margin">
                <select
                  name="user1Sign"
                  onChange={handleChange}
                  className="select-field-primary pointer"
                  style={{ color: "gray" }}
                >
                  <option disabled selected>
                    Hello ! User-1 Select Your Sign
                  </option>
                  {usersData?.user2Sign === "X" ? (
                    <option value="O">O</option>
                  ) : (
                    <></>
                  )}
                  {usersData?.user2Sign === "O" ? (
                    <option value="X">X</option>
                  ) : (
                    <></>
                  )}
                  {usersData?.user2Sign === "" && (
                    <>
                      <option value="X">X</option>
                      <option value="O">O</option>
                    </>
                  )}
                </select>
              </div>
              <div className="flex vertical-display standard-margin">
                <input
                  placeholder="Hello ! User-2 Type Your Name Here"
                  name="user2Name"
                  onChange={handleChange}
                  className="input-field-primary pointer"
                />
              </div>
              <div className="flex vertical-display standard-margin">
                <select
                  name="user2Sign"
                  onChange={handleChange}
                  className="select-field-primary pointer"
                  style={{ color: "gray" }}
                >
                  <option disabled selected>
                    Hello ! User-2 Select Your Sign
                  </option>
                  {usersData?.user1Sign === "X" ? (
                    <option value="O">O</option>
                  ) : (
                    <></>
                  )}
                  {usersData?.user1Sign === "O" ? (
                    <option value="X">X</option>
                  ) : (
                    <></>
                  )}
                  {usersData?.user1Sign === "" && (
                    <>
                      <option value="X">X</option>
                      <option value="O">O</option>
                    </>
                  )}
                </select>
              </div>
              <div className="flex vertical-display standard-margin">
                <select
                  className="select-field-primary pointer"
                  name="firstMove"
                  onChange={handleChange}
                  style={{ color: "gray" }}
                >
                  <option disabled selected>
                    Who Will Go First ?
                  </option>
                  <option value="user1">{usersData?.user1Name}</option>
                  <option value="user2">{usersData?.user2Name}</option>
                </select>
              </div>
              <div className="flex vertical-display standard-margin">
                <button className="btn-primary" onClick={handleClick}>
                  Go Ahead !!
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <Loader path="/game-dashboard" usersData={usersData} />
        </>
      )}
    </>
  );
};

export default UserPreferences;
