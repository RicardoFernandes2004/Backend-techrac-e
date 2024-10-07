# TechRac-E

Bem-vindo ao **TechRac-E**! Este projeto integra Node.js e Python para fornecer previsões baseadas em dados de corridas da Fórmula E. A aplicação utiliza um modelo de aprendizado de máquina para prever as chances de vitória de um piloto com base em sua posição média e média de pontos.

## Grupo
Ricardo Fernandes de Aquino (RM 554597)
Kauã Soares Guimarães (RM 559044)
Dayana Ticona Quispe (RM 558023)
Fabrini Soares (RM 557813)
Rickelmyn de souza Ruescas (RM 556055)

## Descrição do Projeto

O TechRac-E é uma aplicação web que permite prever as chances de vitória de um piloto na Fórmula E. Utiliza um servidor Node.js para gerenciar as requisições e comunicações em tempo real via WebSockets, e integra scripts Python que executam modelos de aprendizado de máquina para fornecer previsões baseadas em dados históricos.

## Pré-requisitos

- **Node.js** instalado em sua máquina.
- **Python 3** instalado.
- Pacotes Python necessários: `pandas`, `scikit-learn`, `joblib`, `numpy`, `matplotlib`.
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
   pip install pandas scikit-learn joblib numpy matplotlib
   ```

   *Nota: Certifique-se de que os pacotes sejam instalados no ambiente Python correto.*

## Estrutura do Projeto, partes relevantes

```
techrac-e/
├── backend/
│   ├── app.js
│   ├── IA/
│   │   ├── train_model.py
│   │   ├── predict.py
│   │   ├── formula_e_race_results.csv
│   │   ├── race_predictor_model.pkl
│   │   ├── data analysis/
│   │   │   └── race_performance_analysis.ipynb
│   ├── mailing/
│   │   └── send_email.py
│   └── package.json
├── frontend/
│   ├── index.html
│   └── js/
│       └── client.js
└── README.md
```

- **backend/**: Contém o servidor Node.js e a integração com os scripts Python.
- **IA/**: Contém os scripts Python para treinamento e previsão do modelo de IA, além de análise de dados.
- **mailing/**: Contém o script Python para envio de e-mails de boas-vindas.
- **frontend/**: Contém os arquivos em React para o front-end

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

1. **Abra o arquivo `frontend`:**

   Navegue até a pasta `frontend/` e abra o `index.js` usando o comando bash.
   
   ```bash
   npm start
   ```

   *Nota: Para evitar problemas de CORS, recomendamos usar uma extensão como "Live Server" no VSCode ou configurar um servidor local.*

### Envio de E-mails com `send_email.py`

Foi adicionada uma funcionalidade de envio de e-mails para confirmar a criação de uma conta. O script `send_email.py` está localizado na pasta `mailing/` e usa o protocolo SMTP para enviar e-mails.

#### Dependências

1. Certifique-se de que você tenha a biblioteca `smtplib` disponível em seu ambiente Python.

#### Como Usar o Envio de E-mails

1. Execute o script com os dados de nome e e-mail:

   ```bash
   python send_email.py '{"name": "Nome do Usuário", "email": "email@example.com"}'
   ```

   Isso enviará um e-mail de boas-vindas para o novo usuário. 

*Nota: O script está configurado para funcionar com Gmail, e a senha fornecida deve ser uma senha de aplicativo.*

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

### Análise de Dados com Jupyter Notebook

Foi adicionada uma pasta chamada `data analysis`, que contém um Jupyter Notebook para a análise de dados de desempenho dos pilotos na Fórmula E.

#### Dependências

1. Certifique-se de que você tenha as bibliotecas `pandas`, `matplotlib` e `jupyter` instaladas.

   ```bash
   pip install pandas matplotlib jupyter
   ```

#### Como Usar o Jupyter Notebook

1. No Jupyter, abra o arquivo de análise de dados (`driver_performance.ipynb`) e execute o notebook. Ele inclui o código para:

- Carregar os dados históricos de corridas (`formula_e_race_results.csv`).
- Verificar a presença de dados duplicados e valores ausentes.
- Analisar o desempenho dos pilotos em blocos de corridas e calcular a posição média.
- Plotar gráficos de desempenho, como no exemplo do piloto **Lucas di Grassi**.

### Código de Exemplo para a Análise de Dados:

```python
import pandas as pd
import matplotlib.pyplot as plt

# Carregar os dados históricos de corridas
data = pd.read_csv('C:/Users/a1197/Documents/GitHub/Backend-techrac-e/techrace-backend/IA/formula_e_race_results.csv')

# Mostrar as primeiras linhas do CSV
data.head()

# Verificar se há dados duplicados
print("Dados duplicados: ", data.duplicated().sum())

# Verificar valores ausentes
print("Valores ausentes: ", data.isnull().sum())

# Ordenar os dados pela ordem das corridas
data = data.sort_values(by=['driver', 'race_num'])

# Lista para armazenar os resultados
season_performance = []

# Definir o número de corridas por intervalo que queremos analisar
intervalo_corridas = 5

# Verificar a ordem das corridas para um piloto específico
print("Verificar ordem das corridas para um piloto:")
print(data[data['driver'] == 'Lucas di Grassi'][['race_num', 'rank_num']])

# Loop para calcular o desempenho em intervalos de X corridas para cada piloto
for driver in data['driver'].unique():
    driver_data = data[data['driver'] == driver]
    
    # Dividir as corridas em blocos de 5 e calcular a média de posição
    for i in range(0, len(driver_data), intervalo_corridas):
        bloco_corridas = driver_data.iloc[i:i+intervalo_corridas]
        
        # Calcular a média de posição do bloco de corridas
        avg_position = bloco_corridas['rank_num'].mean()
        top_3_finishes = sum(bloco_corridas['rank_num'] <= 3)
        
        # Adicionar os resultados à lista
        season_performance.append({
            'driver': driver,
            'interval_start': bloco_corridas['race_num'].min(),
            'interval_end': bloco_corridas['race_num'].max(),
            'avg_position': avg_position,
            'top_3_finishes': top_3_finishes
        })

# Converter os resultados para um DataFrame
season_performance_df = pd.DataFrame(season_performance)

# Visualizar as primeiras linhas do DataFrame final
print(season_performance_df.head())

# Plotando o gráfico para o desempenho de Lucas di Grassi
pilot_data = season_performance_df[season_performance_df['driver'] == 'Lucas di Grassi']
plt.plot(pilot_data['interval_start'], pilot_data['avg_position'], marker='o')
plt.title(f'Desempenho de Lucas di Grassi ao longo das corridas')
plt.xlabel('Corridas (race_num)')
plt.ylabel('Posição Média')
plt.show()
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
  - matplotlib
- **Outros:**
  - Visual Studio Code
  - npm

