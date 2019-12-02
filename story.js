var adjective = prompt("enter an adjective");
var adjective2 = prompt("enter an adjective");
var noun = prompt("enter a noun");
var noun2 = prompt("enter a noun");

var verb = prompt("enter an verb");
alert(`ok, we're done`);
noun = first(noun);
noun2 = first(noun2);
var story = `The ${adjective} Mr. ${noun} was sitting by the river. <br> <br> He wanted to ${verb}, <br><br>MR. ${noun} soon noticed MR. ${noun2}.<br><br>
"Hello Mr. ${noun2}, I have been waiting for your arrival."<br><br><br>
Soon, the sun was coming down, and MR. ${noun2} was getting tired.<br><br><br>
"Good night", he said. "You are ${adjective}, but not ${adjective2}".<br><br>
I am about to ${verb} and have no time to waste.<br><br>
Mr. ${noun} just listened, and watched the leaves change...<br><br><br>
It was another ${adjective2} day at the ${noun}yard.



`;
document.write(`<h3>${story}</h3>`);

function first(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
document.getElementById('title').innerHTML = `The Untold Story of ${noun}yard county.`
