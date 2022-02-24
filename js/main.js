function myFunction() {
    const wrapper = document.getElementById("ms-wrapper");

    for (let i = 1; i <= 100; i++) {
        /* creo il div di riferimento */
        let newDiv = document.createElement("div");
        /* aggiungo al div appena creato le classi necessarie */
        newDiv.classList.add("col-12", "col-sm-8", "col-md-4", "col-lg-1", "ms-box", "bg-primary", );
        /* cambio il contenuto del div appena creato inserendo un valore */
        /* aggiungo il div al parent */
        wrapper.append(newDiv);
        if ((i % 3 == 0) && (i % 5 == 0)) {
            newDiv.classList.add("ms-bg-fizzbuzz");
            console.log("frizzbuzz");
        } else if (i % 3 == 0) {
            newDiv.classList.add("ms-bg-fizz", "text-white");
            newDiv.innerHTML = "Fizz";
            console.log("frizz");
        } else if (i % 5 == 0) {
            newDiv.classList.add("ms-bg-buzz", "text-white");
            newDiv.innerHTML = "Buzz";
            console.log("buzz");
        } else {
            newDiv.innerHTML = "Nope";
            console.log(i);
        }
    }
}