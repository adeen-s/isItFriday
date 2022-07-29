import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // function to check if today is friday
  const [res, setRes] = useState("No");

  const isFriday = () => {
    const today = new Date();
    const day = today.getDay();
    return day === 5;
  };

  useEffect(() => {
    if (isFriday()) {
      setRes("Yes");
    }
  }
  , []);

  return (
    <div className="App">
      <header className="App-header">
        <h4>Is It Friday?</h4>
        <h4>{res}</h4>
      </header>
    </div>
  );
}

export default App;
