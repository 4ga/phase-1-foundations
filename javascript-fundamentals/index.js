function getLargestNumber(numbers){
let largest = numbers[0];
for(let i = 1; i < numbers.length; i++){
if(largest < numbers[i]) {
largest = numbers[i];
}
}
return largest;
}


console.log(getLargestNumber([3, 8, 2, 5]));
console.log(getLargestNumber([10, -1, 7]));
