import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

// Pages
import Home from "./components/pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
