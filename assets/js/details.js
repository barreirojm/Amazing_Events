let queryString = location.search;

let params = new URLSearchParams(queryString);

let id = params.get("id");

let cardEvento = data.events.find((event) => event._id == id);

console.log(cardEvento);

let card = document.getElementById("card-detail");

card.innerHTML = `
        <div class="container-card d-flex justify-content-center">
                        <div class="card mb-3 mt-5 " style="max-width: 1440px;">
                            <div class="row no-gutters">
                                <div class="col-md-6">
                                    <img src="${cardEvento.image}" class="card-img img-fit-detail" alt="...">
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <h5 class="card-title">${cardEvento.name}</h5>
                                        <p class="card-text">${cardEvento.description}</p>
                                        <p class="card-text">Place: ${cardEvento.place}</p>
                                        <p class="card-text">Date: ${cardEvento.date}</p>
                                        <p class="card-text">Price: $${cardEvento.price}</p>                                        
                                        <p class="card-text">Capacity: ${cardEvento.capacity}</p>
                                        <a href="./index.html" class="btn btn-primary">Go back</a> 
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
    `;
