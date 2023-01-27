//your code here
let input = document.getElementById("evaluatedText");
let counter = document.getElementById("wordCount");

input.addEventListener("input",countwords)

function countwords()
{
	
	let words = input.value.trim().split(/\s+/);
	let wordcount = words.length
	 if(wordcount==1 && words[0]=="") {wordcount=0;}
	 counter.innerHTML= wordcount
}