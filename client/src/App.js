import "./App.css";
import io from "socket.io-client";
import Main from "./components/Main";
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className='App'>
      <Main socket={socket} />
    </div>
  );
}

export default App;
