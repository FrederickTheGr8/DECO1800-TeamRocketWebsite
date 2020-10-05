var animals = ['FlyingFox', 'Koala',  'EasternGreyKangaroo', 'RedKangaroo', 'GreaterBilby', 'RedFox'];

var randnum1 = Math.floor(math.random() * questions.length);
var randnum2 = Math.floor(math.random() * questions.length);
var randnum3 = Math.floor(math.random() * questions.length);

var answer = animals[randnum1];
animals.splice(randnum1, 1);
var falseanswer1 = animals[randnum2];
animals.splice(randnum2, 1);
var falseanswer2 = animals[randnum3];


/* need to add the functionality here so that it actually gives a random question to a random button */

document.getElementById("animalImage").src = "hackanm.gif";
document.getElementById("button1").innerText = "blah";

