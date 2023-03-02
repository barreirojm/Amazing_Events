console.log(data);

const eventos = data.events;

console.log(eventos);

let eventCartas = [];

function createEvents() {
  for (let event of eventos) {
    if (event.date > data.currentDate) {
      let cartaEv = `<div class="card mt-4" style="width: 30rem;" >
        <img src="${event.image}" class="card-img-top img-fit" alt="cinema">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p>Price: $ ${event.price}</p>
            <a href="./details.html?id=${event._id}" class="btn btn-primary">More info</a>
        </div>
    </div>`;
      eventCartas.push(cartaEv);
    }
  }
}

console.log(eventCartas);

function printEvents() {
  let cartaEv = document.getElementById("cardEvents");
  cartaEv.innerHTML = eventCartas.join("");
}

createEvents();
printEvents();
