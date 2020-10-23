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

function getAnimalByID(id){

        $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        async: false,
        dataType: "json",
        success: function(result){
            //localStorage.setItem("AnimalData", JSON.stringify(result));
            localStorage = result;
            console.log(result); 
        }});
        return localStorage;
}

function getAnimalClassName(id){
    $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        //might want async false if it is not getting info quick enough?
        async: false,
        dataType: "json",
        success: function(result){
            className = result.Species.ClassName;
        }});
        return className;
    }

function getAnimalFamilyName(id){
    $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        //might want async false if it is not getting info quick enough?
        async: false,
        dataType: "json",
        success: function(result){;
            familyName = result.Species.FamilyName;
        }});
        return familyName;
    }

function getAnimalFamilyCommonName(id){
    $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        //might want async false if it is not getting info quick enough?
        async: false,
        dataType: "json",
        success: function(result){;
            familyCommonName = result.Species.FamilyCommonName;
        }});
        return familyCommonName;
    }

function getAnimalAcceptedCommonName(id){
    $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        //might want async false if it is not getting info quick enough?
        async: false,
        dataType: "json",
        success: function(result){
            acceptedCommonName = result.Species.AcceptedCommonName;
        }});
        return acceptedCommonName;
    }

function getAnimalPestStatus(id){
    $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        //might want async false if it is not getting info quick enough?
        async: false,
        dataType: "json",
        success: function(result){
            pestStatus = result.Species.PestStatus;
        }});
        return pestStatus;
    }    

function getAnimalEndemicity(id){
    $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        //might want async false if it is not getting info quick enough?
        async: false,
        dataType: "json",
        success: function(result){
            endemicity = result.Species.Endemicity;
        }});
        return endemicity;
    }

function getAnimalConservationStatus(id){
    $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        //might want async false if it is not getting info quick enough?
        async: false,
        dataType: "json",
        success: function(result){
            conservationStatus = result.Species.ConservationStatus.NCAStatus;
        }});
        return conservationStatus;
    }

function getAnimalScientificName(id){
    $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        //might want async false if it is not getting info quick enough?
        async: false,
        dataType: "json",
        success: function(result){
            scientificName = result.Species.ScientificName;
        }});
        return scientificName;
    }

function getAnimalImageURL(id){
    $.ajax({
        type: "POST",
        url:"https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + id,
        //might want async false if it is not getting info quick enough?
        async: false,
        dataType: "json",
        success: function(result){
            animalImageURL = result.Species.Image.URL;
        }});
        return animalImageURL;
    }

function randomNumber(num) {
    var randnum = Math.floor(Math.random() * num);
    return randnum;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }