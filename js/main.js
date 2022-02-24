const wrapper = document.getElementById("ms-wrapper");

for (let i = 0; i < 30; i++) {
    /* creo il div di riferimento */
    let newDiv = document.createElement("div");
    /* aggiungo al div appena creato le classi necessarie */
    newDiv.classList.add("col-12", "col-sm-9", "col-md-6", "col-lg-3", "ms-box", "bg-warning", );
    /* cambio il contenuto del div appena creato inserendo un valore */

    /* aggiungo il div al parent */
    wrapper.append(newDiv);
    if ((i % 3 == 0) && (i % 5 == 0)) {
        newDiv.classList.add("ms-bg-fizzbuzz");
        console.log("frizzbuzz");
    } else if (i % 3 == 0) {
        newDiv.classList.add("ms-bg-fizz");
        console.log("frizz");
    } else if (i % 5 == 0) {
        newDiv.classList.add("ms-bg-buzz");
        console.log("buzz");
    } else {
        newDiv.innerHTML = "nope";
        console.log(i);
    }
}