import './Botao.css';

function Botao({ texto, onClick, tipo = 'button', cor }) {
  return (
    <button type={tipo} className={`botao ${cor || ''}`} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Botao;
