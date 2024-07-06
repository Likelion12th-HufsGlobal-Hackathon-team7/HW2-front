import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/Register';
import MainPage from './pages/main/Main';
import InFolderPage from './pages/infolder/InFolder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/infolder" element={< InFolderPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
