// import logo from './logo.svg';
import './App.css';
import Header from './components/header';

// importing components from react-router-dom package
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './components/pages/Home';
import Listen from './components/pages/Listen';
import Speak from './components/pages/Speak';
import UserDetails from './components/pages/UserDetails';
import Userinfo from './components/pages/Userinfo';
import BackendText from './components/pages/BackendText';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/listen' element={<Listen />} />
        <Route path='/speak' element={<Speak />} />
        <Route path='/userdetails' element={<UserDetails />} />
        <Route path='/userinfo' element={<Userinfo />} />
        <Route path='/backend' element={<BackendText />} />



      </Routes>
    </Router>
  );
}

export default App;
