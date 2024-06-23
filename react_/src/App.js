import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./tic-tac-toe/Game";
import "./App.css";
import ProductTable from "./product-table/ProductTable";
import {findAllByDisplayValue} from "@testing-library/react";

function App() {
  return (
    <div className="App">
        <div><a href={"/tic-tac-toe"}>game</a></div>
        <div><a href={"/product"}>product</a></div>
        <Router>
            <Routes>
                <Route path={"/tic-tac-toe"} element={<Game />} />
                <Route path={"/product"} element={<ProductTable />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
