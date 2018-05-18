function isEven (number) {
    return number % 2 === 0;
}

function factorial(number) {
    var answer = 1;
    for (var i = 1; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}

function kebabeToSnake(str) {
    return str.replace(/-/g , "_");
}
