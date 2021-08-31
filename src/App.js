import logo from './logo.svg';
import './App.css';
import CenteredCard from './Components/CenteredCard/CenteredCard';
function App() {
  const child = "Título de teste"
  return (
    <div className="App">
      <header className="App-header">
       <CenteredCard > 
         
        {child}
        <p>18</p>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
