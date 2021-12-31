import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RiderSignUp from './Pages/Login/RiderSignUp/RiderSignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rider-signUp" element={<RiderSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
