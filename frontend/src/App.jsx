import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import AllEntries from './pages/AllEntries'
import Home from './pages/Home'

function App() {
 
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allentries" element={<AllEntries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
