import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './components/HomePage';
import About from './components/About';
import Menu from './Menu';
import BookingPage from './components/BookingPage';
import OrderOnline from './components/OrderOnline';
import Login from './Login';
import ConfirmedBooking from './components/ConfirmedBooking';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
