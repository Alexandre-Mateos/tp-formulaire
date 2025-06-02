let form = document.querySelector("#formulaire");
let card = document.querySelector("#recapCard");
let myName = document.querySelector("#nom");
let myFirstname = document.querySelector("#prenom");
let myAge = document.querySelector("#age");
let myGender = document.querySelectorAll(".gender");
let myProfession = document.querySelector("#profession");
let myRegion = document.querySelector("#region");

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
    // fonction qui récupère la profession
    myProfessionIs();
    // fonction qui récupère le hobbie
    myHobbieIs();

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
function myProfessionIs(){
    let paraProfession = document.createElement("p");
    paraProfession.innerHTML = `Profession : ${myProfession.value}`;
    card.insertAdjacentElement("beforeend", paraProfession);
}
function myHobbieIs(){
    let paraRegion = document.createElement("p");
    paraRegion.innerHTML = `Region : ${myRegion.value}`;
    card.insertAdjacentElement("beforeend", paraRegion);
}