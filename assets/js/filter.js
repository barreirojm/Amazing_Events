/* function captureData() {
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
  createEvents(filtro, "cardEvents");
} */
