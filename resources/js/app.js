import './bootstrap';

Echo.private('notifications') // chama o nome do canal
    .listen('UserSessionChanged', (e) => { // escuta a classe do canal

        let elemento = document.getElementById('notification') // elemento do app.blade que mostra a mensagem

        // message e type são as propriedades da classe UserSessionChanged
        elemento.innerText = e.message
        elemento.classList.remove('invisible')
        elemento.classList.remove('alert-success')
        elemento.classList.remove('alert-danger')
        elemento.classList.add(`alert-${e.type}`)
    })
