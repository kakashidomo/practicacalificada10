const contenidoJs = document.querySelector('#users-container-div')
fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((data) => fetchUsers(data))

function fetchUsers(data) {
    contenidoJs.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let contenJs = `
             <div class="col col-lg-4 py-5">
                <div class="card mb-3" style="width: 18rem;">
                    <div class="card-header">
                        Nombre: ${element.name}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Usuario: ${element.username}</li>
                        <li class="list-group-item">Email: ${element.email}</li>
                        <li class="list-group-item">Empresa: ${element.company.name}</li>
                    </ul>
                </div>
            </div>
        `
        contenidoJs.innerHTML += contenJs
    }
}
