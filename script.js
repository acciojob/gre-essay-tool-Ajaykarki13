//your code here
let input = document.getElementById("evaluatedText");
let counter = document.getElementById("wordCount");

input.addEventListener("input",countwords)

function countwords()
{

	let words = input.value;
	let arr = words.split(' ')
	let count =0
	for(let i=0;i<arr.length;i++){
		if(i!=' ')
		{count++;}
	 counter.innerHTML=count;}
}