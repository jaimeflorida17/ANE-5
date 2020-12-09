const axios = require('axios');
document.addEventListener(('DOMContentLoaded'), () => {

    const promesa = axios.get('https://jsonplaceholder.typicode.com/users');
    promesa.then((response) => {
     let i = 1;
     response.data.forEach(usuarios => {

        let caja = document.createElement('div');
        document.body.appendChild(caja);
        caja.id = i++;

        let id = document.createElement('p');
        id.textContent = usuarios.id;

        
        let nombre = document.createElement('p');
        nombre.textContent = usuarios.name;
        caja.appendChild(nombre);
        

        let usuario = document.createElement('p');
        usuario.textContent = usuarios.username;
        caja.appendChild(usuario);

        let email = document.createElement('p');
        email.textContent = usuarios.email;
        caja.appendChild(email);

        
        let telefono = document.createElement('p');
        telefono.textContent = usuarios.phone;
        caja.appendChild(telefono);

        let boton = document.createElement('button');
            boton.appendChild(document.createTextNode('Delete user'));
            boton.addEventListener('click', () => {
                document.body.removeChild(document.getElementById(caja.id));
            } );
            caja.appendChild(boton);


     });

});




























});