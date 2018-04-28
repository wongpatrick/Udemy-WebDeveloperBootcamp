function average(scores){
    var sum = 0;
    scores.forEach(function(value){
        sum += value;
    });
    return Math.round(sum / scores.length);
}

console.log("Average score for environment science");
var scores = [90,98,89,100,100,86,94];

console.log(average(scores));

console.log("Average score for organic chemistry")
var scores2 = [40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));