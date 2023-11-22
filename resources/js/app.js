import './bootstrap';

Echo.channel('notifications')
    .listen('UserSessionChanged', (e) => {
        let elemento = document.getElementById('notification')

        elemento.innerText = e.message
        elemento.classList.remove('invisible')
        elemento.classList.remove('alert-success')
        elemento.classList.remove('alert-danger')
        elemento.classList.add(`alert-${e.type}`)
    })
