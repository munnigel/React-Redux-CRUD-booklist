import './App.css';
import MainBookPage from './components/MainBookPage';
import EditBookPage from './components/EditBookPage';
import AddBookPage from './components/AddBookPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "add" element={<AddBookPage />} />
          <Route path = "/edit/:isbn" element={<EditBookPage />} />
          <Route path = "*" element={<MainBookPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
