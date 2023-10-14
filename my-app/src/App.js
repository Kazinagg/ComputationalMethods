import './App.css';
import "./scss/container.css";

import NavigationBar from './component/nav_bar';
import Page1 from './pages/L1';
import Page2 from './pages/L2';
import Page3 from './pages/L3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
      </Routes>
    </Router>
  );
}

export default App;
