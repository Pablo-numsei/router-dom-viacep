import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import BuscaCep from '../components/BuscaCep'
import '../App.css'

function Busca() {
  const buscaCepRef = useRef()
  const navigate = useNavigate()

  function handleEnderecoEncontrado(endereco) {
    navigate('/resultado', { state: endereco })
  }

  return (
    <div className="glass-card">
      <p className="glass-title">Busca de CEP</p>
      <p className="glass-subtitle">Digite o CEP para encontrar o endereço</p>
      <BuscaCep
        ref={buscaCepRef}
        onEnderecoEncontrado={handleEnderecoEncontrado}
      />
      <button className="glass-btn" onClick={() => buscaCepRef.current.buscarEndereco()}>
        Buscar endereço
      </button>
    </div>
  )
}

export default Busca