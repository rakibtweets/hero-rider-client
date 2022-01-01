import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RiderSignUp from './Pages/Login/RiderSignUp/RiderSignUp';
import AuthProvider from './Context/AuthProvider';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rider-signUp" element={<RiderSignUp />} />
            <Route path="/profilePage" element={<ProfilePage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
