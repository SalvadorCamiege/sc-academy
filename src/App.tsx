import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Conteiner from './components/Layouts/Container';
import NavBar from './components/Layouts/NavBar';
import Home from './components/pages/Home';
import Cursos from './components/pages/Cursos';
import Contactos from './components/pages/Contactos';
import Rodape from './components/Layouts/Rodape';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Conteiner customclass="minHeight">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </Conteiner>
        <Rodape />
      </Router>
    </div>
  );
}

export default App;