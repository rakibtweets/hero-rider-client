import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RiderSignUp from './Pages/Login/RiderSignUp/RiderSignUp';
import AuthProvider from './Context/AuthProvider';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Packages from './Pages/Packages/Packages/Packages';
import LearnerSignUp from './Pages/Login/LearnerSignUp/LearnerSignUp';
import MakeAdmin from './Pages/Login/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/packages"
              element={
                <>
                  <Navigation />
                  <PrivateRoute>
                    <Packages />
                  </PrivateRoute>
                </>
              }
            />
            <Route
              path="/makeAdmin"
              element={
                <>
                  <Navigation />
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                </>
              }
            />
            <Route path="/rider-signUp" element={<RiderSignUp />} />
            <Route path="/learner-signUp" element={<LearnerSignUp />} />
            <Route
              path="/profilePage"
              element={
                <>
                  <Navigation />
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                </>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
