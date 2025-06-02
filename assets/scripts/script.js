let form = document.querySelector("#formulaire");
let card = document.querySelector("#recapCard");
let myName = document.querySelector("#nom");
let myFirstname = document.querySelector("#prenom");
let myAge = document.querySelector("#age");
let myGender = document.querySelectorAll(".gender");

form.addEventListener('submit', (e) => {
    //permet d'arreter la soumission du formulaire
    e.preventDefault();
    //le reste vient ici
    // fonction qui récupère mon nom et mon prénom
    myFullNameIs();
    // fonction qui récupère l'age
    myAgeIs();
    // fonction qui récupère le genre
    myGenderIs();

})

function myFullNameIs (){
    let paraFullName = document.createElement("p");
    paraFullName.innerHTML = `${myFirstname.value} ${myName.value}`;
    card.insertAdjacentElement("beforeend", paraFullName);
}
function myAgeIs (){
    
    let paraAge = document.createElement("p");
    paraAge.innerHTML = `Age : ${myAge.value}`;
    card.insertAdjacentElement("beforeend", paraAge);
}

function myGenderIs(){
    for (let i = 0; i < myGender.length ; i++){
        if (myGender[i].checked){
            let paraGender = document.createElement("p");
            paraGender.innerHTML = `Sexe : ${myGender[i].id}`;
            card.insertAdjacentElement("beforeend", paraGender);
        }
    }
}