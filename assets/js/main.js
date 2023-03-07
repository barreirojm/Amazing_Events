const eventos = data.events;

let eventCartas = [];

function createEvents(env, htmltag) {
  let cartaEv = document.getElementById(htmltag);
  cartaEv.innerHTML = "";
  for (let event of env) {
    let arraytags = `<div class="card mt-4" style="width: 30rem;" >
        <img src="${event.image}" class="card-img-top img-fit">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p>Price: $ ${event.price}</p>
            <a href="./details.html?id=${event._id}" class="btn btn-primary">More info</a>
        </div>
    </div>`;
    eventCartas.push(arraytags);
  }
  cartaEv.innerHTML = eventCartas.join("");
}

createEvents(eventos, "cardEvents");

function captureData() {
  let texto = document.getElementById("id_search").value.toLowerCase();

  console.log(texto);
  let checks = Array.from(
    document.querySelectorAll(".class_checks:checked")
  ).map((each) => each.value);
  let filtro = data.events.filter((each) => {
    let nameEventstoLower = each.name.toLowerCase();
    return (
      nameEventstoLower.includes(texto) &&
      (checks.length === 0 || checks.includes(each.category))
    );
  });
  console.log(filtro);
  if (filtro.length > 0) {
    createEvents(filtro, "cardEvents");
  }
}
