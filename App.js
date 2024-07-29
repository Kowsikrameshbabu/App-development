import "./App.css";
import Browse from "./BROWSE/Browse";
import Post from "./POST/Post";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Postjob from "./POSTJOB/Postjob"; // Uncomment and adjust if needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/post" element={<Post />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
