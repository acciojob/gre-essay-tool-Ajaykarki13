//your code here
let input = document.getElementById("evaluatedText");
let counter = document.getElementById("wordCount");

input.addEventListener("input",countwords)

function countwords()
{

	let words = input.value;
	let array = words.split(' ')
	 counter.innerHTML=array.length
}