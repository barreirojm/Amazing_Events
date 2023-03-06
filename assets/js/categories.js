let array_categorias = [];
let html = "";
let categorias = new Set();

function printChecks(_id, array_categorias) {
  let container = document.querySelector(_id);

  data.events.forEach((each) => {
    categorias.add(each.category);
  });
  categorias.forEach((cat) => {
    html += `
        <fieldset class="checkboxes">
            <input onclick="captureData()" class="class_checks contact-input" type="checkbox" value="${cat}" name="tipo" id="${cat}">
            <label class="contact-label" for="${cat}">${cat}</label>            
        </fieldset>
        `;
  });
  array_categorias.push(html);
  array_categorias.push(
    `<div class=searchbar><input onkeyup="captureData()" id="id_search" class="contact-input" type="text" name="texto" placeholder="search"></div>`
  );
  console.log(array_categorias);
  container.innerHTML = array_categorias.join("");
}

printChecks("#checkboxes", array_categorias);
