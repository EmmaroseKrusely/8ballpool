

function MagicResponse(){
let randomNumber = Math.floor(Math.random() * 11);
var input = document.getElementById('userQuestion').value;
document.getElementById('question').innerHTML = ('You Asked: ' + input);
console.log(randomNumber);

switch(randomNumber){
    case 0:
        console.log("As I See It, Yes")
        document.getElementById('response').innerHTML = ("As I See It, Yes");
        break;
        case 1:
        console.log("Ask Again Later")
        document.getElementById('response').innerHTML = ("Ask Again Later");
        break;
        case 2:
        console.log("Better Not Tell You Now")
        document.getElementById('response').innerHTML = ("Better Not Tell You Now");
        break;
        case 3:
        console.log("It Is Certain")
        document.getElementById('response').innerHTML = ("It Is Certain");
        break;
        case 4:
        console.log("My Reply Is No")
        document.getElementById('response').innerHTML = ("My Reply Is No");
        break;
        case 5:
        console.log("Reply Is Hazy")
        document.getElementById('response').innerHTML = ("Reply Is Hazy");
        break;
        case 6:
        console.log("Outlook Good")
        document.getElementById('response').innerHTML = ("Outlook Good");
        break;
        case 7:
        console.log("Outlook Not So Good")
        document.getElementById('response').innerHTML = ("Outlook Not So Good");
        break;
        case 8:
        console.log("Yes - Definitely")
        document.getElementById('response').innerHTML = ("Yes - Definitely");
        break;
        case 9:
        console.log("Most Likely")
        document.getElementById('response').innerHTML = ("Most Likely");
        break;
        case 10:
        console.log("My Sources Say No")
        document.getElementById('response').innerHTML = ("My Sources Say No");
        break;
}


}