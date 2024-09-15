# TechRac-E

Bem-vindo ao **TechRac-E**! Este projeto integra Node.js e Python para fornecer previsões baseadas em dados de corridas da Fórmula E. A aplicação utiliza um modelo de aprendizado de máquina para prever as chances de vitória de um piloto com base em sua posição média e média de pontos.

## Descrição do Projeto

O TechRac-E é uma aplicação web que permite prever as chances de vitória de um piloto na Fórmula E. Utiliza um servidor Node.js para gerenciar as requisições e comunicações em tempo real via WebSockets, e integra scripts Python que executam modelos de aprendizado de máquina para fornecer previsões baseadas em dados históricos.

## Pré-requisitos

- **Node.js** instalado em sua máquina.
- **Python 3** instalado.
- Pacotes Python necessários: `pandas`, `scikit-learn`, `joblib`, `numpy`.
- Editor de código como **Visual Studio Code** (recomendado).

## Instalação

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/RicardoFernandes2004/Backend-techrac-e
   ```

2. **Instale as dependências do Node.js:**

   Navegue até a pasta do backend e execute:

   ```bash
   cd techrac-e/backend
   npm install
   ```

3. **Instale as dependências Python:**

   Navegue até a pasta da IA e instale os pacotes necessários:

   ```bash
   cd IA
   pip install pandas scikit-learn joblib numpy
   ```

   *Nota: Certifique-se de que os pacotes sejam instalados no ambiente Python correto.*

## Estrutura do Projeto, Partes relevantes

```
techrac-e/
├── backend/
│   ├── app.js
│   ├── IA/
│   │   ├── train_model.py
│   │   ├── predict.py
│   │   ├── formula_e_race_results.csv
│   │   └── race_predictor_model.pkl
│   └── package.json
├── frontend/
│   ├── index.html
│   └── js/
│       └── client.js
└── README.md
```

- **backend/**: Contém o servidor Node.js e a integração com os scripts Python.
- **IA/**: Contém os scripts Python para treinamento e previsão do modelo de IA.
- **frontend/**: Contém os arquivos HTML e JavaScript para o front-end.
- **race_predictor_model.pkl**: Arquivo do modelo de IA treinado.

## Como Executar

### Backend (Servidor Node.js)

1. **Inicie o servidor:**

   Você pode iniciar o servidor através do Visual Studio Code:

   - Abra o arquivo `app.js` no VSCode.
   - Clique no botão "Play" ou pressione `F5` para iniciar o servidor.

   Ou via terminal:

   ```bash
   node app.js
   ```

2. **Confirme que o servidor está rodando:**

   O servidor estará escutando na porta `3000`. Você deverá ver a mensagem:

   ```
   Servidor rodando na porta 3000
   ```

### Frontend

1. **Abra o arquivo `index.html`:**

   Navegue até a pasta `frontend/` e abra o `index.html` em um navegador.

   *Nota: Para evitar problemas de CORS, recomendamos usar uma extensão como "Live Server" no VSCode ou configurar um servidor local.*

### Treinamento do Modelo de IA (Opcional)

Se desejar treinar o modelo novamente:

1. Navegue até a pasta `IA/`:

   ```bash
   cd backend/IA
   ```

2. Execute o script de treinamento:

   ```bash
   python train_model.py
   ```

   Isso irá gerar um novo arquivo `race_predictor_model.pkl`.
   *Nota: Lembre-se de mudar o caminho do arquivo de treinamento, está absoluto*

## Uso

### Endpoint de Previsão via HTTP POST

Você pode fazer requisições POST para obter previsões:

- **URL:** `http://localhost:3000/predict`
- **Corpo da Requisição (JSON):**

  ```json
  {
    "position": valor_da_posição_média,
    "points": valor_da_média_de_pontos
  }
  ```

- **Exemplo usando `curl`:**

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"position": 3, "points": 50}' http://localhost:3000/predict
  ```

### Comunicação em Tempo Real via WebSocket

- O front-end se comunica com o servidor usando WebSockets para previsões em tempo real.
- Os dados enviados e recebidos estão em formato JSON.

**Exemplo de evento no `client.js`:**

```javascript
socket.emit('car_data', {
  avg_position: 3,
  avg_points: 50
});

socket.on('prediction', (data) => {
  console.log('Chances de vitória recebidas do servidor: ', data.prediction);
});
```

## Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - Express.js
  - Socket.io
  - Python 3
  - Python Shell
- **Frontend:**
  - HTML5
  - JavaScript
- **Bibliotecas Python:**
  - pandas
  - scikit-learn
  - joblib
  - numpy
- **Outros:**
  - Visual Studio Code
  - npm

