import { Route, Routes } from "react-router-dom";
import "./App.css";
import Avatar from "./components/Avatar";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/avatar/:id" element={<Avatar />} />
      </Routes>
    </div>
  );
}

export default App;
