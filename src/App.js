import "./App.css";
import CenteredCard from "./Components/CenteredCard/CenteredCard";
function App() {
  const children = "Children";
  const age = [1, 2, 3];
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard children={children} age={age} />
      </header>
    </div>
  );
}

export default App;
