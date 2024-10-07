import React, { useEffect, useState } from 'react';
import { sendCarData, socket } from '../back_end_connect/client'; // Caminho ajustado para a nova localização
import "../styles/guess.css";

function Guess() {
  const [avgPosition, setAvgPosition] = useState('');
  const [avgPoints, setAvgPoints] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Escuta para receber a previsão do servidor
    socket.on('prediction', (data) => {
      console.log('Previsão recebida:', data.prediction);
      setPrediction(data.prediction);
      setStatus('Previsão recebida');
    });

    // Evento de erro na conexão
    socket.on('connect_error', (error) => {
      console.error('Erro na conexão:', error);
      setStatus('Erro na conexão');
    });

    // Evento de desconexão
    socket.on('disconnect', () => {
      console.log('Desconectado do WebSocket');
      setStatus('Desconectado do servidor');
    });

    // Limpeza ao desmontar o componente
    return () => {
      socket.off('prediction'); // Remova a escuta para evitar vazamentos de memória
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples dos campos
    if (avgPosition === '' || avgPoints === '') {
      setStatus('Por favor, preencha todos os campos.');
      return;
    }

    const carData = {
      avg_position: parseInt(avgPosition, 10),
      avg_points: parseInt(avgPoints, 10),
    };

    // Use a função sendCarData do arquivo client.js
    sendCarData(carData);
    console.log('Dados enviados:', carData);
    setStatus('Dados enviados ao servidor');
  };

  return (
    <div className="guess-page-container">
      <div className="guess-container">
        <h1>Victory prediction</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Average position:
              <input
                type="number"
                value={avgPosition}
                onChange={(e) => setAvgPosition(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Average points:
              <input
                type="number"
                value={avgPoints}
                onChange={(e) => setAvgPoints(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
        
        {prediction !== null && (
          <div>
            <h2>Victory chances:</h2>
            <p>{(prediction[1]*100)}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Guess;
