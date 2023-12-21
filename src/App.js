import "./Normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Tournaments from "./components/pages/Tournaments";
import Admins from "./components/pages/Admins";
import { UserProvider } from "./components/UserContext";
import DuelistZone from "./components/pages/DuelistZone";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/duelist-zone" element={<DuelistZone />} />
          <Route path="/leaderboard" element={<Admins />} />
          <Route path="/admins" element={<Admins />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
