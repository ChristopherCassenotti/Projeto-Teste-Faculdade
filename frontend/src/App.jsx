import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Listar from './pages/Listar/Listar';
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jogos" element={<Listar />} />
          <Route path="/jogos/novo" element={<Cadastro />} />
          <Route path="/jogos/editar/:id" element={<Cadastro />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
