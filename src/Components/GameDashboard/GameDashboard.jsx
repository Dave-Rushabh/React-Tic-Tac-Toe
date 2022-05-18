import { useLocation } from "react-router-dom";
import "./../../Utilities/utilities.css";
import "./../GameDashboard/GameDashboard.css";
import BoardMain from "./BoardMain";

const GameDashboard = (props) => {
  const { state } = useLocation();
  const usersData = state;

  return (
    <>
      <BoardMain usersData={usersData} />
    </>
  );
};

export default GameDashboard;
