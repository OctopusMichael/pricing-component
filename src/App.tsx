import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import "./style/App.css";

function App() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div className="app">
        <Header isActive={isActive} setIsActive={setIsActive} />
        <Cards isActive={isActive} />
      </div>
    </>
  );
}

export default App;
