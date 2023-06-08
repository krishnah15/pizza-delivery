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
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/customize/:id"
          element={user ? <Customize /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/order"
          element={user ? <OrderItem /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
