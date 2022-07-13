import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import GuestLogin from "./GuestLogin";
import Contact from "./Contact";
import AdminLogin from "./AdminLogin";
import Amenities from "./Amenities";
import Rooms from "./Rooms";
import BookingHistory from "./BookingHistory";
import BookingLog from "./BookingLog";
import RoomsLog from "./RoomsLog";
import UsersLog from "./UsersLog";

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/guestlogin" element={<GuestLogin />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/adminlogin" element={<AdminLogin />}></Route>
          <Route path="/amenities" element={<Amenities />}></Route>
          <Route path="/rooms" element={<Rooms />}></Route>
          <Route path="/bookinghistory" element={<BookingHistory />}></Route>
          <Route path="/bookinglog " element={<BookingLog />}></Route>
          <Route path="/roomslog" element={<RoomsLog />}></Route>
          <Route path="/userslog" element={<UsersLog />}></Route>
        </Routes>
  </Router>
    </>
  );
}

export default App;
