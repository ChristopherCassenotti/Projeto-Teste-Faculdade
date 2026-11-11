import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Cadastro de Jogos</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/jogos">Jogos</Link>
        <Link to="/jogos/novo">Cadastrar</Link>
      </nav>
    </header>
  );
}

export default Header;
