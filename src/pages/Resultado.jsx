import { useLocation, useNavigate } from 'react-router-dom'
import '../App.css'

function Resultado() {
  const { state } = useLocation()
  const navigate = useNavigate()

  return (
    <div className="glass-card">
      <div className="result-header">
        <div className="result-icon-box">📍</div>
        <div>
          <div className="result-header-title">Endereço encontrado</div>
          <div className="result-header-cep">CEP {state.cep}</div>
        </div>
      </div>

      <div className="result-row">
        <div className="result-row-icon">🛣️</div>
        <div>
          <div className="result-row-label">Rua</div>
          <div className="result-row-value">{state.logradouro || '—'}</div>
        </div>
      </div>

      <div className="result-row">
        <div className="result-row-icon">🏘️</div>
        <div>
          <div className="result-row-label">Bairro</div>
          <div className="result-row-value">{state.bairro || '—'}</div>
        </div>
      </div>

      <div className="result-row">
        <div className="result-row-icon">🗺️</div>
        <div>
          <div className="result-row-label">Cidade / Estado</div>
          <div className="result-row-value">{state.localidade} / {state.uf}</div>
        </div>
      </div>

      <button className="glass-btn-back" onClick={() => navigate('/')}>
        ← Voltar
      </button>
    </div>
  )
}

export default Resultado