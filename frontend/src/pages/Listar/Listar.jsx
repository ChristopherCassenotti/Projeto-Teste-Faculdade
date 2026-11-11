import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Botao from '../../components/Botao/Botao';
import './Listar.css';

function Listar() {
  const [jogos, setJogos] = useState([]);
  const navigate = useNavigate();

  async function carregar() {
    const { data } = await api.get('/jogos');
    setJogos(data);
  }

  async function excluir(id) {
    if (!confirm('Deseja excluir este jogo?')) return;
    await api.delete(`/jogos/${id}`);
    carregar();
  }

  useEffect(() => { carregar(); }, []);

  return (
    <div>
      <h2>Jogos cadastrados</h2>
      <table className="tabela">
        <thead>
          <tr><th>Título</th><th>Plataforma</th><th>Ano</th><th>Gênero</th><th>Ações</th></tr>
        </thead>
        <tbody>
          {jogos.map((j) => (
            <tr key={j.id}>
              <td>{j.titulo}</td>
              <td>{j.plataforma}</td>
              <td>{j.ano}</td>
              <td>{j.Genero ? j.Genero.nome : '-'}</td>
              <td>
                <Botao texto="Editar" onClick={() => navigate(`/jogos/editar/${j.id}`)} />{' '}
                <Botao texto="Excluir" cor="perigo" onClick={() => excluir(j.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listar;
