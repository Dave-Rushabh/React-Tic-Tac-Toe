import "./../GameDashboard/GameDashboard.css";
import "./../../Utilities/utilities.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BoardMain = (props) => {
  const { usersData } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (usersData === null) {
      navigate("/user-preferences");
    }
  }, [usersData, navigate]);

  //Game Logic starts Here //

  let turn;
  let userName;
  const [values, setValues] = useState(["", "", "", "", "", "", "", "", ""]);
  const newArr = values;
  const [finished, setFinished] = useState(false);
  const [winner, setWinner] = useState("");
  const [noWinner, setNoWinner] = useState(false);

  if (usersData?.firstMove === "user1") {
    turn = usersData?.user1Sign;
  } else {
    turn = usersData?.user2Sign;
  }
  const [myTurn, setMyTurn] = useState(turn);

  if (usersData?.firstMove === "user1") {
    userName = usersData?.user1Name;
  } else {
    userName = usersData?.user2Name;
  }
  const [name, setName] = useState(userName);

  const handleClickBox = (params) => {
    setName((prev) => {
      if (prev === usersData?.user1Name) {
        return usersData?.user2Name;
      } else {
        return usersData?.user1Name;
      }
    });
    setMyTurn((prev) => {
      if (prev === usersData?.user1Sign) {
        return usersData?.user2Sign;
      } else {
        return usersData?.user1Sign;
      }
    });
    newArr[params] = myTurn;
    setValues([...newArr]);

    let descri;
    switch (params) {
      case 0:
        descri = document.querySelector(".description-0");
        break;
      case 1:
        descri = document.querySelector(".description-1");
        break;
      case 2:
        descri = document.querySelector(".description-2");
        break;
      case 3:
        descri = document.querySelector(".description-3");
        break;
      case 4:
        descri = document.querySelector(".description-4");
        break;
      case 5:
        descri = document.querySelector(".description-5");
        break;
      case 6:
        descri = document.querySelector(".description-6");
        break;
      case 7:
        descri = document.querySelector(".description-7");
        break;
      case 8:
        descri = document.querySelector(".description-8");
        break;
      default:
    }

    if (descri.innerHTML === "") {
      descri.innerHTML = myTurn;
      if (myTurn === usersData?.user1Sign) {
        descri.style.color = "red";
      } else {
        descri.style.color = "#34B7FD";
      }
    } else {
      alert(`Hello ! ${name} Place your ${myTurn} on empty box only`);
      setName((prev) => {
        if (prev === usersData?.user1Name) {
          return usersData?.user2Name;
        } else {
          return usersData?.user1Name;
        }
      });
      setMyTurn((prev) => {
        if (prev === usersData?.user1Sign) {
          return usersData?.user2Sign;
        } else {
          return usersData?.user1Sign;
        }
      });
    }
    checkWinner(values);
    handleNoWinnerCondition();
  };

  const checkWinner = (values) => {
    const wins = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6]
    ];

    wins.forEach((e) => {
      if (
        values[e[0]] === values[e[1]] &&
        values[e[1]] === values[e[2]] &&
        values[e[0]] !== ""
      ) {
        document.querySelector(
          `.box:nth-child(${e[0] + 1})`
        ).style.backgroundColor = "#d7e3fc";
        document.querySelector(
          `.box:nth-child(${e[1] + 1})`
        ).style.backgroundColor = "#d7e3fc";
        document.querySelector(
          `.box:nth-child(${e[2] + 1})`
        ).style.backgroundColor = "#d7e3fc";
        setFinished(true);
        if (values[e[0]] === usersData?.user1Sign) {
          console.log(`${usersData.user1Name} has won the game`);
          setWinner(usersData?.user1Name);
        } else {
          console.log(`${usersData.user2Name} has won the game`);
          setWinner(usersData?.user2Name);
        }
      }
    });
  };
  const eraseGameBoardData = () => {
    document.querySelector(".description-0").innerHTML = "";
    document.querySelector(".description-1").innerHTML = "";
    document.querySelector(".description-2").innerHTML = "";
    document.querySelector(".description-3").innerHTML = "";
    document.querySelector(".description-4").innerHTML = "";
    document.querySelector(".description-5").innerHTML = "";
    document.querySelector(".description-6").innerHTML = "";
    document.querySelector(".description-7").innerHTML = "";
    document.querySelector(".description-8").innerHTML = "";
    const boxArray = document.querySelectorAll(".box");

    console.log(boxArray, "boxArray");

    for (let i = 0; i < boxArray.length; i++) {
      boxArray[i].style.backgroundColor = "unset";
    }
  };

  const handleNoWinnerCondition = () => {
    const arr = values.filter((element) => {
      return element === "";
    });

    if (arr.length === 0 && finished === false) {
      console.log("No one is winner");
      setNoWinner(true);
    }
  };
  // Game Logic Ends Here

  return (
    <>
      <div className=" flex standard-padding standard-margin dashboard-container">
        <div
          className={`dashboard-left flex standard-padding standard-margin ${
            finished && "winning-time"
          } ${noWinner && "tie-time"}`}
        >
          <div class="content-left">
            <div
              onClick={() => {
                handleClickBox(0);
              }}
              class="box left-border top-border"
            >
              <span class="description-0"></span>
            </div>
            <div
              onClick={() => {
                handleClickBox(1);
              }}
              class="box top-border"
            >
              <span class="description-1"></span>
            </div>
            <div
              onClick={() => {
                handleClickBox(2);
              }}
              class="box top-border right-border"
            >
              <span class="description-2"></span>
            </div>
            <div
              onClick={() => {
                handleClickBox(3);
              }}
              class="box left-border"
            >
              <span class="description-3"></span>
            </div>
            <div
              onClick={() => {
                handleClickBox(4);
              }}
              class="box"
            >
              <span class="description-4"></span>
            </div>
            <div
              onClick={() => {
                handleClickBox(5);
              }}
              class="box right-border"
            >
              <span class="description-5"></span>
            </div>
            <div
              onClick={() => {
                handleClickBox(6);
              }}
              class="box bottom-border left-border"
            >
              <span class="description-6"></span>
            </div>
            <div
              onClick={() => {
                handleClickBox(7);
              }}
              class="box bottom-border"
            >
              <span class="description-7"></span>
            </div>
            <div
              onClick={() => {
                handleClickBox(8);
              }}
              class="box bottom-border right-border"
            >
              <span class="description-8"></span>
            </div>
          </div>
        </div>

        <div className="dashboard-right flex standard-padding standard-margin">
          {!finished ? (
            <>
              {!noWinner ? (
                <>
                  <span>
                    <div className="game-status-description flex vertical-display">
                      <h1>
                        Hello {name} ! place your {myTurn} smartly...
                      </h1>
                      <button
                        className="btn-primary"
                        onClick={() => {
                          setValues(["", "", "", "", "", "", "", "", ""]);
                          setName(userName);
                          setMyTurn(turn);
                          eraseGameBoardData();
                        }}
                      >
                        Reset
                      </button>
                      <br />
                      <br />
                      <br />
                      <Link to="/user-preferences">
                        <button className="btn-primary">
                          Go To User Preference
                        </button>
                      </Link>
                    </div>
                  </span>
                </>
              ) : (
                <>
                  <div className="flex vertical-display">
                    <h1> OOPS ! its a tie :(</h1>
                    <br />
                    <br />
                    <button
                      className="btn-primary"
                      onClick={() => {
                        setNoWinner(false);
                        setValues(["", "", "", "", "", "", "", "", ""]);
                        setName(userName);
                        setMyTurn(turn);
                        eraseGameBoardData();
                      }}
                    >
                      Play Again
                    </button>
                    <br />
                    <br />
                    <br />
                    <Link to="/user-preferences">
                      <button className="btn-primary">
                        Go To User Preference
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="flex vertical-display">
                <h1> {`${winner} has won the game...`}</h1>
                <br />
                <br />
                <button
                  className="btn-primary"
                  onClick={() => {
                    setFinished(false);
                    setValues(["", "", "", "", "", "", "", "", ""]);
                    setName(userName);
                    setMyTurn(turn);
                    eraseGameBoardData();
                    setNoWinner(false);
                  }}
                >
                  Play Again
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BoardMain;
