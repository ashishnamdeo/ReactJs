import logo from './logo.svg';
import './App.css';
import TicTacToeGame from './TicTacToeGame/TicTacToeGame';
import Tutorials from './Tutorials/Tutorials'

function App() {
  return (
    <div className="App">
      <TicTacToeGame />
      <hr/>
      <Tutorials />
    </div>
  );
}

export default App;
