// App.js
import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { useAuth } from './AuthContext';
import Login from './Login';
import Room from './Room';

function App() {
  const { authenticated } = useAuth();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* {!authenticated ? ( */}
           
           {/* ) : ( */}
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              {console.log("app " + Login.rooms)}
              {Login.rooms.map((item) => (<Route path={"/" + item} element={<Room />} /> ))}
            </>
          {/* )} */}
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;