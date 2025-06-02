let form = document.querySelector("#formulaire");
let card = document.querySelector("recapCard");

form.addEventListener('submit', (e) => {
    //permet d'arreter la soumission du formulaire
    e.preventDefault();
    //le reste vient ici
    let name = document.querySelector("#nom");
    console.log(name.value);

    
})