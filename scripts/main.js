const contenidoJs = document.querySelector('#users-container-div')
fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((data) => fetchUsers(data))

function fetchUsers(data) {
    contenidoJs.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let contenJs = `
        <div class="col">
                <div class="card border-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h3>Nombre: ${element.name}</h3>
                    </div>
                    <div class="card-body text-dark">
                        <h5 class="card-title">Usuario: ${element.username}</h5>
                        <h5 class="card-title">Email: ${element.email}</h5>
                        <h5 class="card-title">Empresa: ${element.company.name}</h5>
                    </div>
                </div>
            </div>
        `
        contenidoJs.innerHTML += contenJs
    }
}
