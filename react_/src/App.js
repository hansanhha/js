import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./tic-tac-toe/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
        <a href={"/tic-tac-toe"}>game</a>
        <Router>
          <Routes>
            <Route path={"/tic-tac-toe"} element={<Game />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
