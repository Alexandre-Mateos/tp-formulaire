// Mes élements
let form = document.querySelector("#formulaire");
let card = document.querySelector("#recapCard");
let myName = document.querySelector("#nom");
let myFirstname = document.querySelector("#prenom");
let myAge = document.querySelector("#age");
let myGender = document.querySelectorAll(".gender");
let myProfession = document.querySelector("#profession");
let myRegion = document.querySelector("#region");
let myHobbies = document.querySelectorAll(".hobbies");
let myLinkedin = document.querySelector("#linkedin");

form.addEventListener('submit', (e) => {
    //permet d'arreter la soumission du formulaire
    e.preventDefault();

    //le reste vient ici
    myFullNameIs();
    myAgeIs();
    myGenderIs();
    myProfessionIs();
    myRegionIs();
    myHobbiesAre();
    mySocialProfil();
    card.classList.add(styleCard);
})

// fonction qui récupère mon nom et mon prénom
function myFullNameIs (){
    let paraFullName = document.createElement("p");
    paraFullName.innerHTML = `${myFirstname.value} ${myName.value}`;
    card.insertAdjacentElement("beforeend", paraFullName);
}
// fonction qui récupère l'age
function myAgeIs (){
    
    let paraAge = document.createElement("p");
    paraAge.innerHTML = `Age : ${myAge.value}`;
    card.insertAdjacentElement("beforeend", paraAge);
}
// fonction qui récupère le genre
function myGenderIs(){
    for (let i = 0; i < myGender.length ; i++){
        if (myGender[i].checked){
            let paraGender = document.createElement("p");
            paraGender.innerHTML = `Sexe : ${myGender[i].id}`;
            card.insertAdjacentElement("beforeend", paraGender);
        }
    }
}
// fonction qui récupère la profession
function myProfessionIs(){
    let paraProfession = document.createElement("p");
    paraProfession.innerHTML = `Profession : ${myProfession.value}`;
    card.insertAdjacentElement("beforeend", paraProfession);
}
// fonction qui récupère la région
function myRegionIs(){
    let paraRegion = document.createElement("p");
    paraRegion.innerHTML = `Region : ${myRegion.value}`;
    card.insertAdjacentElement("beforeend", paraRegion);
}
// fonction qui récupère les hobbies sélectionnés
function myHobbiesAre (){
    const hobbiesSeleted = [];
    for (let i = 0 ; i < myHobbies.length ; i++){
        if(myHobbies[i].checked){
            hobbiesSeleted.push(myHobbies[i].value);
        }
    }
    let paraHobbies = document.createElement("p");
    paraHobbies.innerHTML = `Hobbies : ${hobbiesSeleted.toString()}`;
    card.insertAdjacentElement("beforeend", paraHobbies);
}
// fonction qui récupère le lien vers le profil LinkedIn
function mySocialProfil (){
    let paraLinkedin = document.createElement("p");
    paraLinkedin.innerHTML = `LinkedIn : ${myLinkedin.value}`;
    card.insertAdjacentElement("beforeend", paraLinkedin);
}