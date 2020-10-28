    var rightAnswers = 0;
    var wrongAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 10;
    var indexQuestion = 0;
    const maxQuestions = 5;
    var answerAnimalID;
    var interval;
    var answered = false;
    var rightCommonNameNum;
    var right;
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    
    const animals = [1068, 716, 838, 1089, 78, 469, 901, 860, 877, 552, 800, 885,
                831, 1125, 1767, 1087, 584, 37, 104, 1032, 1055, 1732,
                1193, 1955, 1284, 1812, 19177, 814, 1191, 885, 1662, 811, 1973, 1165, 857, 466, 536, 541, 519, 520, 18153, 1916, 1694, 19185];

    var cloneAnimals = [...animals];

    //  Returns an array of three random animal IDs, no duplicates.
    function getRandomAnimalIDs(){
        questions = [];

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
                if (Array.isArray(result.Species.Image)){
                    animalImageURL = result.Species.Image[0].URL;
                }
                else {
                    animalImageURL = result.Species.Image.URL;
                }
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

    function startGame() {
        console.log("Game started");
        var cloneAnimals = [...animals];
        //$('.start-button').remove();
        rightAnswers = 0;
        wrongAnswers = 0;
        unansweredQuestions = 0;
        loadQuestion();
    }

    function loadQuestion() {
        answered = false; // will allow timeRemaining to be pushed back to <h5> after round reset....else statement in function timer()
        interval = setInterval(timer, 1000);
        console.log("loadQuestion");
        timeRemaining = 10;
        if (answered === false) {
            timer();
        }

        questions = getRandomAnimalIDs();
        right = questions[questions.length - 1];
        answerAnimalID = right;

        const index = cloneAnimals.indexOf(right);
        //Removes id out of cloned animal array
        if (index > -1) {
            cloneAnimals.splice(index, 1);
        }

        wrong1 = questions[questions.length - 2];
        wrong2 = questions[questions.length - 3];

        var imageURL = getAnimalImageURL(right);
        console.log(imageURL);
        document.getElementById("imageURL").src = imageURL;
        $('.imageURL').html(imageURL);

        var rightCommonName = getAnimalAcceptedCommonName(right);
        console.log(rightCommonName);
        var wrong1CommonName = getAnimalAcceptedCommonName(wrong1);
        var wrong2CommonName = getAnimalAcceptedCommonName(wrong2);
        var nameArray = [rightCommonName, wrong1CommonName, wrong2CommonName];

        shuffle(nameArray);

        for(var i = 0; i < nameArray.length; i++){
            console.log("i: " + i + ", " + nameArray[i])
            $('.guess' + (i+1)).html(nameArray[i]);
            document.getElementById('guess'+ (i+1)).innerHTML = nameArray[i];

            if (nameArray[i] == rightCommonName){
                rightCommonNameNum = i+1;
            }
        }
    }

    function checkAnswerButton(buttonId) {
        console.log('CheckAnswerButton: ' + buttonId + 'rightCommonNameNum: ' + rightCommonNameNum);
        if (buttonId === 'guess' + rightCommonNameNum) {
            answered = true; // stops the timer
            rightAnswer();
        }
        else {
            answered = true; //stops timer
            wrongAnswer();
        }
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(interval);
            unAnswered();
        } else if (answered === true) {
            clearInterval(interval);
            } else {
                timeRemaining--;
                $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE')
        }
    }

    function rightAnswer() {
        rightAnswers++;
        $('.timeRemaining').text("YOU HAVE ANSWERED CORRECTLY!").css({
            'color': '#3D414F'
        });
        modal.style.display = "block";
        var modalContent = document.getElementById("myModalContent");
        modalContent.style.color = 'green';
        modalContent.style.position = 'fixed';
        modalContent.style.display = 'block';
        modalContent.innerHTML = 'CORRECT! || Class Name: ' +  getAnimalClassName(answerAnimalID) + ' || ' + 'Family Name: ' + getAnimalFamilyName(answerAnimalID) +' || ' + 'Common Name: ' + getAnimalAcceptedCommonName(answerAnimalID) + ' || ' + 'Pest Status: ' + getAnimalPestStatus(answerAnimalID) + ' || ' + 'Animal Endemicity: ' + getAnimalEndemicity(answerAnimalID) + ' || ' + 'Conservation Status: ' + getAnimalConservationStatus(answerAnimalID) + ' || ' + 'Scientific Name: ' + getAnimalScientificName(answerAnimalID) + ' || Click anywhere on the page to continue';


        window.onclick = function(event) {
            console.log("windowonclick rightanswer");
            if (event.target == modal) {
              modal.style.display = "none";
              resetRound();
            }
        }
    }

    function wrongAnswer() {
        wrongAnswers++;
        $('.timeRemaining').text("YOU HAVE ANSWERED INCORRECTLY!").css({
            'color': '#3D414F'
        });
        
        modal.style.display = "block";
        var modalContent = document.getElementById("myModalContent");
        modalContent.style.color = 'red';
        modalContent.innerHTML = 'Try again! || Class Name: ' +  getAnimalClassName(answerAnimalID) + ' || ' + 'Family Name: ' + getAnimalFamilyName(answerAnimalID) +' || ' + 'Common Name: ' + getAnimalAcceptedCommonName(answerAnimalID) + ' || ' + 'Pest Status: ' + getAnimalPestStatus(answerAnimalID) + ' || ' + 'Animal Endemicity: ' + getAnimalEndemicity(answerAnimalID) + ' || ' + 'Conservation Status: ' + getAnimalConservationStatus(answerAnimalID) + ' || ' + 'Scientific Name: ' + getAnimalScientificName(answerAnimalID) + ' || Click anywhere on the page to continue';

        window.onclick = function(event) {

            if (event.target == modal) {
              modal.style.display = "none";
              resetRound();
            }
        }
    }
    function unAnswered() {
        unansweredQuestions++;
        $('.timeRemaining').text("YOU FAILED TO CHOOSE AN ANSWER").css({
            'color': '#3D414F'
        });

        modal.style.display = "block";
        var modalContent = document.getElementById("myModalContent");
        modalContent.style.color = 'black';
        modalContent.innerHTML = 'You did not answer in time! || Class Name: ' +  getAnimalClassName(answerAnimalID) + ' || ' + 'Family Name: ' + getAnimalFamilyName(answerAnimalID) +' || ' + 'Common Name: ' + getAnimalAcceptedCommonName(answerAnimalID) + ' || ' + 'Pest Status: ' + getAnimalPestStatus(answerAnimalID) + ' || ' + 'Animal Endemicity: ' + getAnimalEndemicity(answerAnimalID) + ' || ' + 'Conservation Status: ' + getAnimalConservationStatus(answerAnimalID) + ' || ' + 'Scientific Name: ' + getAnimalScientificName(answerAnimalID) + ' || Click anywhere on the page to continue';

        window.onclick = function(event) {

            if (event.target == modal) {
              modal.style.display = "none";
              resetRound();
            }
        }
    }

    function resetRound() {
        console.log('Resetting Round');
        indexQuestion++; // increments question
        if (indexQuestion < maxQuestions) {
            loadQuestion();
            /*
            setTimeout(function () {
                
            }, 5000); // removes answer image from previous round*/
        } else {
            modal.style.display = "block";
            var modalContent = document.getElementById("myModalContent");
            modalContent.innerHTML = 'Game Over || Right Answers: ' + rightAnswers + ' || Wrong Answers: ' + wrongAnswers + ' || Unanswered Questions: ' +  unansweredQuestions;

            window.onclick = function(event) {

                if (event.target == modal) {
                window.location.href = 'index.html';
                }
            }
        }
    };