import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mx-auto flex flex-col items-center">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
