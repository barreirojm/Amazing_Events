async function tablaUno() {

    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let eventos = response.events
        /* console.log(eventos); */

        //
        eventos = eventos.sort((evento1, evento2) => evento2.assistance - evento1.assistance)
        console.log(eventos);
        console.log(eventos[0].name); 
        console.log(eventos[0].assistance);
        console.log(eventos[eventos.length-1].name); 
        console.log(eventos[eventos.length-1].assistance);
        //
        eventos = eventos.sort((evento1, evento2) => evento2.capacity - evento1.capacity)
        console.log(eventos[0].name);
        console.log(eventos[0].capacity);


    }

    catch (error) {
        console.log('ocurrió un error');
        console.log(error);
    }
}

tablaUno();

async function tablaDos() {

    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=upcoming'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let eventos = response.events

        for (let evento of eventos) {
            evento.revenue = evento.price * evento.estimate
        }

        console.log(eventos);

        let categorias = []
        eventos.forEach(each => {
            if (!categorias.includes(each.category)) {
                categorias.push(each.category)
            }
        })

        categorias.sort()

        console.log(categorias);

        let arrayTabla = []

        for (let category of categorias) {
            let capacityTotal = 0;
            let assistanceTotal = 0;
            let revenue = 0;

            categoriasporEventos = eventos.filter (evento => evento.category === category)

            /* console.log(categoriasporEventos); */

            categoriasporEventos.forEach (evento => {
                capacityTotal += evento.capacity;
                assistanceTotal += evento.estimate;
                revenue += evento.revenue;
            })

            console.log(category + " => Revenue:" + revenue + ", Estimate assistance:" + assistanceTotal + ", Capacity:" + capacityTotal);

            let assistancePercentage = (assistanceTotal / capacityTotal) * 100;
            assistancePercentage = Math.trunc(assistancePercentage) + '%';
                
            console.log(assistancePercentage);
        }

    }
        
    

    catch (error) {
        console.log('ocurrió un error');
        console.log(error);
    }
}

tablaDos();

async function tablaTres() {

    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let eventos = response.events

        for (let evento of eventos) {
            evento.revenue = evento.price * evento.assistance
        }

        console.log(eventos);

        let categorias = []
        eventos.forEach(each => {
            if (!categorias.includes(each.category)) {
                categorias.push(each.category)
            }
        })

        categorias.sort()

        console.log(categorias);

        let arrayTabla = []

        for (let category of categorias) {
            let capacityTotal = 0;
            let assistanceTotal = 0;
            let revenue = 0;

            categoriasporEventos = eventos.filter (evento => evento.category === category)

            /* console.log(categoriasporEventos); */

            categoriasporEventos.forEach (evento => {
                capacityTotal += evento.capacity;
                assistanceTotal += evento.assistance;
                revenue += evento.revenue;
            })

            console.log(category + " => Revenue:" + revenue + ", Estimate assistance:" + assistanceTotal + ", Capacity:" + capacityTotal);

            let assistancePercentage = (assistanceTotal / capacityTotal) * 100;
            assistancePercentage = Math.trunc(assistancePercentage) + '%';
                
            console.log(assistancePercentage);
        }
        
        
    }

    catch (error) {
        console.log('ocurrió un error');
        console.log(error);
    }
}

tablaTres();