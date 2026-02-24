import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Conteiner from './components/Layouts/Container';
import NavBar from './components/Layouts/NavBar';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Conteiner customclass="minHeight">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Conteiner>
      </Router>
    </div>
  );
}

export default App;