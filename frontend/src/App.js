import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import WardenDashboard from "./pages/WardenDashboard";
import StaffDashboard from "./pages/StaffDashboard";

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/warden" element={<WardenDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
