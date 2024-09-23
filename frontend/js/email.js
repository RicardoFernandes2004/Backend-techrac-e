const form = document.getElementById('createAccountForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Armazenar no Local Storage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);

    // Enviar os dados para o script Python
    fetch('http://localhost:3000/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Conta criada com sucesso! Email enviado.');
    })
    .catch(error => {
        console.error('Erro ao criar a conta:', error);
    });
});
