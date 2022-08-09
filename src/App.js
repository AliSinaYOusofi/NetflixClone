import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Singup from "./pages/Singup";

function App() {
  // playing around with gsap
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/account' element={<ProtectedRoute> <Account /></ProtectedRoute>} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
