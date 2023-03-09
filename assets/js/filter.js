/* function captureData() {
  
  let texto = document.getElementById("id_search").value;
  let checks = Array.from(
    document.querySelectorAll(".class_checks:checked")
  ).map((each) => each.value);
  
  let filtro = data.events.filter((each) => {
    let nameEventstoLower = each.name.toLowerCase()
    return (
      nameEventstoLower.includes(texto) &&
      (checks.length === 0 || checks.includes(each.category))
    );
  });

  console.log(filtro);

  if (filtro.length > 0) {
    printTemplates("#cardEvents", filtro);
  } else {
    notFound("#cardEvents");
  }
} */

async function fetchApiFilter() {

  try {

    let urlApi = 'https://mh-h0bh.onrender.com/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        /* console.log(fetchResponse); */
        let response = await fetchResponse.json()
        
        let texto = document.getElementById("id_search").value;
        let checks = Array.from(
            document.querySelectorAll(".class_checks:checked")
            ).map((each) => each.value);
  
        let filtro = response.events.filter((each) => {
        let nameEventstoLower = each.name.toLowerCase()
          return (
              nameEventstoLower.includes(texto) &&
              (checks.length === 0 || checks.includes(each.category))
          );
        });

        console.log(filtro);

        function defineTemplateFilter(event) {
          return `<div class="card mt-4" style="width: 30rem;" >
          <img src="${event.image}" class="card-img-top img-fit">
          <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text">${event.description}</p>
              <p>Price: $ ${event.price}</p>
              <a href="./details.html?id=${event._id}" class="btn btn-primary">More info</a>
          </div>
      </div>`
      }
      
      /* console.log(defineTemplate); */
      
      function printTemplatesFilter(id_etiqueta,array_eventos) {
          let container = document.querySelector(id_etiqueta)
          array_eventos = array_eventos.map(defineTemplateFilter)
          container.innerHTML = array_eventos.join('')
      }
      

        if (filtro.length > 0) {
          printTemplatesFilter("#cardEvents", filtro);
        } else {
          notFound("#cardEvents");
        }
        }
  
  catch(error) {
    console.log('ocurrió un error');
    console.log(error);
}
}


