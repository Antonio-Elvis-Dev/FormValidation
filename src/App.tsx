import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <RoutesApp />
    </div>
    </BrowserRouter>
  );
}

export default App;
