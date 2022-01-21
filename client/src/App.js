import Seats from './Pages/Seats/Seats';
import Login from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from './context/Context';
import Payment from './components/Payment/Payment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import SetPriceAndRange from './components/SetPriceAndRange/SetPriceAndRange';

function App() {
  const context = useContext(Context);
  // console.log(context.user);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Seats />} />
          <Route exact path="/payment/:user" element={<Payment />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/admin" element={<SetPriceAndRange />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
