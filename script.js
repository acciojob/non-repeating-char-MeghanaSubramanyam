function firstNonRepeatedChar(str) {
 // Write your code here
	let count=0;
	for(let i=0;i<str.length;i++){
		if(str[i].includes(str)){
			count++
		}
	}
	if(count==1){
		return str[i]
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
