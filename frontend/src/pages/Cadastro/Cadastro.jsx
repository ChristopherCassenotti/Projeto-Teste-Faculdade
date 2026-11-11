import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import Botao from '../../components/Botao/Botao';
import './Cadastro.css';

function Cadastro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: '', plataforma: '', ano: '', generoId: '' });
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    api.get('/generos').then(({ data }) => setGeneros(data));
  }, []);

  useEffect(() => {
    if (id) api.get(`/jogos/${id}`).then(({ data }) => setForm(data));
  }, [id]);

  function alterar(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function salvar(e) {
    e.preventDefault();
    if (id) await api.put(`/jogos/${id}`, form);
    else await api.post('/jogos', form);
    navigate('/jogos');
  }

  return (
    <form className="formulario" onSubmit={salvar}>
      <h2>{id ? 'Editar jogo' : 'Cadastrar jogo'}</h2>
      <input name="titulo" placeholder="Título" value={form.titulo} onChange={alterar} required />
      <input name="plataforma" placeholder="Plataforma (PC, PlayStation, Xbox...)" value={form.plataforma} onChange={alterar} required />
      <input name="ano" type="number" placeholder="Ano de lançamento" value={form.ano || ''} onChange={alterar} />
      <select name="generoId" value={form.generoId || ''} onChange={alterar}>
        <option value="">Selecione o gênero</option>
        {generos.map((g) => (
          <option key={g.id} value={g.id}>{g.nome}</option>
        ))}
      </select>
      <Botao tipo="submit" texto="Salvar" />
    </form>
  );
}

export default Cadastro;
