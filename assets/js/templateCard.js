/* console.log(data) */

/* let eventos = data.events */

/* console.log(eventos) */

function defineTemplate(event) {
    return `<div class="card mt-4" style="width: 30rem;" >
    <img src="${event.image}" class="card-img-top img-fit">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p>Price: $ ${event.price}</p>
        <a href="./details.html?id=${event.id}" class="btn btn-primary">More info</a>
    </div>
</div>`
}

/* console.log(defineTemplate); */

function printTemplates(id_etiqueta,array_eventos) {
    let container = document.querySelector(id_etiqueta)
    array_eventos = array_eventos.map(defineTemplate)
    container.innerHTML = array_eventos.join('')
}

/* printTemplates('#cardEvents', eventos) */

async function fetchApiHome() {
    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        /* console.log(fetchResponse); */
        let response = await fetchResponse.json()
        console.log(response);  
        
        printTemplates('#cardEvents', response.events)
      
    }
    catch(error) {
        console.log('ocurrió un error');
        console.log(error);
    }
    
}

fetchApiHome()