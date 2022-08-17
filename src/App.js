import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import OpenNewPostContext from "./contexts/OpenNewPostContext";
import Auth from "./pages/Auth";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
function App() {
  return (
    <OpenNewPostContext>
      <OpenNewPostContext>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/edit/profile"
            element={<EditProfile />}
          />
        </Routes>
      </Router>
      </OpenNewPostContext>
    </OpenNewPostContext>
  );
}

export default App;
