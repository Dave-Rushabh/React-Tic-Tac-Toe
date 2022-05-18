import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Loader from "./Components/Loader/Loader";
import UserPreferences from "./Components/UserPreferences/UserPreferences";
import GameDashboard from "./Components/GameDashboard/GameDashboard";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Loader" element={<Loader />} />
        <Route path="/user-preferences" element={<UserPreferences />} />
        <Route path="/game-dashboard" element={<GameDashboard />} />
      </Routes>
    </>
  );
}
