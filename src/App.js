// import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './Portfolio';
import Contact from './Contact';
import Blog from './Blog';
import Home from './Home';

function App() {
  return (
    <>
     
      <Router>
        <MainPage />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>

    </>
  );
}
export default App;
