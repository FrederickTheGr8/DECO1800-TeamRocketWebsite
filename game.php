<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
   	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
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
        <script>getAnimalByID(1767);</script>
</body>