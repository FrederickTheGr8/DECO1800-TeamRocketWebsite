const animals = [1068, 716, 838, 1089, 78, 469, 901, 860, 877, 552, 800, 885,
                831, 1125, 1767, 1087, 29185, 584, 37, 104, 1032, 1055, 1732,
                1193, 1955, 1284, 1812, 19177, 714, 814];

//  Returns an array of three random animal IDs, no duplicates.
function getRandomAnimalIDs(){
    questions = [];
    var cloneAnimals = [...animals];

    randnum = randomNumber(cloneAnimals.length - 1);
    var question1 = cloneAnimals[randnum];
    cloneAnimals.splice(randnum, 1);
    randnum = randomNumber(cloneAnimals.length - 1);
    var question2 = cloneAnimals[randnum];
    cloneAnimals.splice(randnum, 1);
    randnum = randomNumber(cloneAnimals.length - 1);
    var question3 = cloneAnimals[randnum];

    questions.push(question1);
    questions.push(question2);
    questions.push(question3);
    shuffle(questions);
    console.log(questions);
    return questions;
}

// does not work
function getAnimalByID(id){
    $( document ).ready(function() {
        $.ajax({
        //Retrieves and logs into local storage all different species of Mammals
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + "814",
        success: function(result){
            localStorage.setItem("AnimalData", JSON.stringify(result));
            console.log(result);
        }})});
        return localStorage;
}

function randomNumber(num) {
    var randnum = Math.floor(Math.random() * num);
    return randnum;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

/* need to add the functionality here so that it actually gives a random question to a random button 

document.getElementById("animalImage").src = "hackanm.gif";
ocument.getElementById("button1").innerText = "blah";


function iterateRecords (data) {
    $.each(data["Class"],function(){
        console.log(this)
    });
}

const numbers = (626, 628, 454) 

var number 

$( document ).ready(function() {
    $.ajax({
    //Retrieves and logs into local storage all different species of Mammals
    url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + "814",
    success: function(result){
        localStorage.setItem("AnimalData", JSON.stringify(result));
        console.log(result);
    }})});

    */