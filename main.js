console.log("Задание №1");
function getSevenCol(el)
{
	let counter = 0;
for(let i = 0; i < el.join("").length; i++){
    if(el.join("")[i] == 7){
	counter++;
		}
	}	
return counter;
}
console.log(getSevenCol([1, 7, 4, 77, 73])); //4
console.log("Задание №2");
function arrToStr(el){
	let cutAndGlue = "";
	let i = 0;
while(i < el.join("").length/2){
	cutAndGlue = cutAndGlue + el.shift() + el.pop();
}
	return cutAndGlue;
}
console.log(arrToStr(["a", "b", "c", "d", "e", "f"])); //"afbecd"