<<<<<<< Current (Your changes)
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Practice from './pages/Practice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice/:deckId" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> Incoming (Background Agent changes)
