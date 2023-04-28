import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Customize from "./pages/CustomizePizza";
import OrderItem from "./pages/OrderItem";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = 0;
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/Login" replace /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/Login" replace />}
        />
        <Route path="/customize" element={<Customize />} />
        <Route path="/order" element={<OrderItem />} />
      </Routes>
    </Router>
  );
}

export default App;
