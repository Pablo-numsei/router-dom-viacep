import { forwardRef, useImperativeHandle, useState } from 'react'

const BuscaCep = forwardRef(function BuscaCep({ onEnderecoEncontrado }, ref) {
  const [cep, setCep] = useState('')
  const [erro, setErro] = useState('')

  function handleChange(e) {
    let valor = e.target.value.replace(/\D/g, '')
    if (valor.length > 5) {
      valor = valor.slice(0, 5) + '-' + valor.slice(5, 8)
    }
    setCep(valor)
  }

  useImperativeHandle(ref, () => ({
    buscarEndereco() {
      setErro('')
      const cepLimpo = cep.replace('-', '')
      if (cepLimpo.length !== 8) {
        setErro('Digite um CEP com 8 dígitos.')
        return
      }
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(res => res.json())
        .then(data => {
          if (data.erro) {
            setErro('CEP não encontrado. Tente novamente.')
            return
          }
          onEnderecoEncontrado(data)
        })
        .catch(() => setErro('Erro de conexão. Tente novamente.'))
    }
  }))

  return (
    <div style={{ marginBottom: '12px' }}>
      <input
        type="text"
        className="glass-input"
        value={cep}
        maxLength={9}
        placeholder="Ex: 12345-678"
        onChange={handleChange}
      />
      {erro && (
        <div style={{
          background: 'rgba(220, 38, 38, 0.15)',
          border: '1px solid rgba(220, 38, 38, 0.35)',
          borderRadius: '10px',
          padding: '10px 14px',
          fontSize: '13px',
          color: '#fca5a5',
          marginTop: '8px'
        }}>
          ⚠️ {erro}
        </div>
      )}
    </div>
  )
})

export default BuscaCep