import './App.css';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

function App() {
  const routing = useRoutes(Themeroutes);

  return (
    
    <div >
      <div className="dark">{routing}</div>
    </div>
  );
}

export default App;
