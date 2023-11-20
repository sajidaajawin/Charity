import './App.css';
import Login from './Component/Register';
import DonationForm from './pages/DonationForm';
import Home from './pages/Home';
import Signup from './Component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donationform" element={<DonationForm />} />
        <Route path="/Register" element={<Login />} />
        <Route path="/Login" element={<Signup />} />
        {/* Update the import statement and component name */}
        {/* <Route path="/log" element={<Log />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
