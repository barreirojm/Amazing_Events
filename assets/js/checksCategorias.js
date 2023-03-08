
let categorias = []
data.events.forEach(each => {
    if ( ! categorias.includes(each.category)) {
        categorias.push(each.category)
    }
})

function printChecks(id_etiqueta,array_categorias) {
    let container = document.querySelector(id_etiqueta)
    array_categorias = array_categorias.map(each=> {
        return `
        <fieldset class="checkboxes">
            <input onclick="captureData()" class="class_checks contact-input" type="checkbox" value="${each}" name="tipo" id="${each}">
            <label class="contact-label" for="${each}">${each}</label> 
        </fieldset>
        `
    })
    array_categorias.push(`
    <div class=searchbar>
        <input onkeyup="captureData()" id="id_search" class="contact-input" type="text" name="texto" placeholder="search">
    </div>
    `)
    container.innerHTML = array_categorias.join('')
}
printChecks('#checkboxes',categorias)