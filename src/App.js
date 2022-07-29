import "./App.css";

function App() {
  // function to check if today is friday
  const isFriday = () => {
    const today = new Date();
    const day = today.getDay();
    return day === 5;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Is It Friday?</h4>
        <h4>{isFriday ? "Yes" : "No"}</h4>
      </header>
    </div>
  );
}

export default App;
