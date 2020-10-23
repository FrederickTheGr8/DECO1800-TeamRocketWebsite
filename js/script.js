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



    



/** /
    $.ajax({
    //Retrieves and logs into local storage all different species of Reptiles
    url:"https://apps.des.qld.gov.au/species/?op=getfamilynames&kingdom='animals'&class='Reptilia'",
    success: function(result){
        localStorage.setItem("AnimalData", JSON.stringify(result));            
        console.log(result);
        $.each(localStorage["Family"["SpeciesUrl"]],function(){
            iterateRecords(this)});
    }});

    $.ajax({
    //Retrieves and logs into local storage all different species of birds
    url:"https://apps.des.qld.gov.au/species/?op=getfamilynames&kingdom='animals'&class='Aves'",
    success: function(result){
        localStorage.setItem("AnimalData", JSON.stringify(result));            
        console.log(result);
        $.each(localStorage["Family"["SpeciesUrl"]],function(){
            iterateRecords(this)
        });
    }});

    /**/ 



// loop through animal data store 






//$("#records").append(
    //$('<section class-"record">').append(
        //$('<h2>').text(this.KingdomName),
        //$('<h3>').text(this.ClassName),
        //$('<h4>').text(this.ClassCommonName)
    //)
//);
