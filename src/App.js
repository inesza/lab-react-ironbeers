import { Routes, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import BeersList from "./pages/BeersList"
import Navbar from "./components/Navbar";
import SingleBeer from "./pages/SingleBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Navbar />}>
          <Route index element={<BeersList />} />
          <Route path=":id" element={<SingleBeer />} />
          <Route path="new-beer" element={<NewBeer />} />
        </Route>
        <Route path="/random-beer" element={<Navbar />}>
          <Route index element={<SingleBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
