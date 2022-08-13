import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import OpenNewPostContext from "./contexts/OpenNewPostContext";
import Home from "./pages/Home";
function App() {
  return (
    <OpenNewPostContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </OpenNewPostContext>
  );
}

export default App;
