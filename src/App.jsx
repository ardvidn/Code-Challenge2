import Homepage from "./pages/Homepage";
import Servicepage from "./pages/Srervicepage";
import Teampage from "./pages/Teampage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Testimonypage from "./pages/Testimonypage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Aboutpage" element={<Aboutpage />} />
          <Route path="/Srevicepage" element={<Servicepage />} />
          <Route path="/Teampage" element={<Teampage />} />
          <Route path="/Testimonypage" element={<Testimonypage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
