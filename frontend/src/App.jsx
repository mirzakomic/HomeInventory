import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import BigItems from './pages/BigItems'
import SmallItems from './pages/SmalItems';
import MediumItems from './pages/MediumItems';

function App() {
 
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/small-items" element={<SmallItems />} />
        <Route path="/medium-items" element={<MediumItems />} />
        <Route path="/big-items" element={<BigItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
