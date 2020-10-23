<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
   	<meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="js/questions.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="animal-image">
        <img src="images/kangaroo.jpeg" alt="kangaroo" width="400" height="300">
    </div>
	<header class="landingpage"></header>	
        <h1 class="title">What's that QLD Animal?</h1>
        <div>
            <h2 class="game-title">Make Your Guess!</h2>
            <div class="guess-options">
                <a href="example.html">Red Kangaroo</a>
                <a href="incorrect.html">Brown Snake</a>
                <a href="example.html">Wombat</a>
            </div>
            <div class="game-homebutton">				
                <a class="returnhome" href="index.html">Return Home</a>
            </div>


        </div>
        <script>getRandomAnimalIDs();</script>
        <script></script>
        <script>
        //test2= getAnimalByID(1767);
        test = getAnimalAcceptedCommonName(1767);
        console.log("AcceptedCommonName = " + test);

        test2 = getAnimalFamilyName(1767);
        console.log("familyname = " + test2);

        test3 = getAnimalClassName(1767);
        console.log("classname = " + test3);

        test4 = getAnimalPestStatus(1767);
        console.log("peststatus = " + test4);

        test5 = getAnimalEndemicity(1767);
        console.log("native to aus? = " + test5);

        test6 = getAnimalConservationStatus(1767);
        console.log("Conservation status  " + test6);

        test7 = getAnimalScientificName(1767);
        console.log("ScientificName = " + test7);

        test8 = getAnimalImageURL(1767);
        console.log("ImageURL = " + test8);
        </script>
</body>