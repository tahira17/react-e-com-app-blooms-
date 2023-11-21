// Assuming you are using react-router-dom v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/home/Header/Header'; // Adjust the import path
import Shop from './components/pages/Shop/Shop'
import About from './components/pages/About/About'
import Journal from './components/pages/Journal/Journal';
const App = () => {
  return (
  
  
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/journal" element={<Journal />}></Route>

        {/* Other routes go here */}
      </Routes>
    </Router>
  );
};

export default App;

